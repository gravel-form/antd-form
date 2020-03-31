import * as React from 'react';
import get from 'lodash/get';
import { Checkbox } from 'antd';
import { AntdFormMiddlewareProps } from '../share';

export const CheckboxGroupMw: React.ComponentType<AntdFormMiddlewareProps> = (props) => {
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
  const data = props.data || [];

  return (
    <Checkbox.Group
      options={checkboxValues.map((value) => ({ label: value as string, value: value as string }))}
      value={data}
      onChange={(value) => onChange(value)}
      {...get(extraProps, 'props')}
    />
  );
};

export default CheckboxGroupMw;
