import * as React from 'react';
import get from 'lodash/get';
import { InputNumber } from 'antd';
import { MiddlewareProps } from '../share';

export const InputNumberMw: React.ComponentType<MiddlewareProps> = (props) => {
  const { next, schema, data, onChange, extraProps } = props;
  if (typeof schema === 'boolean' || !(schema.type === 'number' || schema.type === 'integer')) return next(props);
  const { maximum, minimum } = schema;
  return (
    <InputNumber
      type="number"
      style={{ width: '100%' }}
      max={maximum}
      min={minimum}
      value={typeof data === 'number' ? data : undefined}
      onChange={onChange}
      {...get(extraProps, 'props')}
    />
  );
};

export default InputNumberMw;
