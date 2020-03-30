import * as React from 'react';
import get from 'lodash/get';
import { InputNumber } from 'antd';
import { AntdFormMiddlewareProps } from './share';

export const InputNumberMw: React.ComponentType<AntdFormMiddlewareProps> = (props) => {
  const { next, schema, data, onChange, extraProps } = props;
  if (typeof schema === 'boolean' || !(schema.type === 'number' || schema.type === 'integer')) return next(props);
  return (
    <InputNumber
      style={{ width: '100%' }}
      type="number"
      value={data || ''}
      onChange={(value) => onChange(value)}
      {...get(extraProps, 'props')}
    />
  );
};

export default InputNumberMw;
