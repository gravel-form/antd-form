import * as React from 'react';
import _ from 'lodash';
import { Select } from 'antd';
import { AntdFormMiddlewareProps } from './share';

export const SelectMw: React.ComponentType<AntdFormMiddlewareProps> = (props) => {
  const { schema, data: value, onChange, next, extraProps } = props;
  if (
    typeof schema === 'boolean' ||
    !schema.enum ||
    !(schema.type === 'string' || schema.type === 'number' || schema.type === 'integer')
  )
    return next(props);

  return (
    <Select
      value={value}
      style={{ width: '100%' }}
      onChange={(value: any) => onChange(value)}
      {..._.get(extraProps, 'props')}
    >
      {schema.enum.map((option) => (
        <Select.Option key={option as string | number} value={option as string | number}>
          {option}
        </Select.Option>
      ))}
    </Select>
  );
};

export default SelectMw;
