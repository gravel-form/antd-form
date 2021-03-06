import * as React from 'react';
import get from 'lodash/get';
import { Checkbox } from 'antd';
import { MiddlewareProps } from '../share';

export const CheckboxGroupMw: React.ComponentType<MiddlewareProps> = (props) => {
  const { schema, onChange, extraProps, next } = props;

  if (
    typeof schema === 'boolean' ||
    Array.isArray(schema.items) ||
    typeof schema.items === 'boolean' ||
    !schema.items ||
    !schema.items.enum ||
    !schema.uniqueItems
  ) {
    return next(props);
  }
  const checkboxValues = schema.items.enum || [];
  const labels = get(extraProps, 'labels', schema.items.enum);

  const data = props.data || [];

  return (
    <Checkbox.Group
      options={checkboxValues.map((value, index) => ({ label: get(labels, index, null), value: value as string }))}
      value={data}
      onChange={(value) => onChange(value)}
      {...get(extraProps, 'props')}
    />
  );
};

export default CheckboxGroupMw;
