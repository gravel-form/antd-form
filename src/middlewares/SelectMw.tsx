import * as React from 'react';
import get from 'lodash/get';
import { Select } from 'antd';
import { AntdFormMiddlewareProps } from '../share';

export const SelectMw: React.ComponentType<AntdFormMiddlewareProps> = (props) => {
  const { schema, data: value, onChange, next, extraProps } = props;
  if (
    typeof schema === 'boolean' ||
    !schema.enum ||
    !(schema.type === 'string' || schema.type === 'number' || schema.type === 'integer') ||
    schema.enum.find((option) => !['string', 'number'].includes(typeof option))
  )
    return next(props);

  const _labels = get(extraProps, 'labels');
  const labels = Array.isArray(_labels) ? _labels : schema.enum;

  return (
    <Select
      value={value}
      style={{ width: '100%' }}
      onChange={(value: any) => onChange(value)}
      {...get(extraProps, 'props')}
    >
      {schema.enum.map((option, index) => (
        <Select.Option key={option as string | number} value={option as string | number}>
          {labels[index]}
        </Select.Option>
      ))}
    </Select>
  );
};

export default SelectMw;
