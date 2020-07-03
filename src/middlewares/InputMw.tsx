import * as React from 'react';
import get from 'lodash/get';
import { Input } from 'antd';
import { MiddlewareProps } from '../share';
const { TextArea, Password } = Input;

export const InputMw: React.FC<MiddlewareProps> = (props) => {
  const { next, schema, data, onChange, extraProps } = props;
  if (typeof schema === 'boolean' || schema.type !== 'string') return next(props);
  return (
    <Input
      value={data || ''}
      onChange={(e: any) => {
        onChange(e.target.value || undefined);
      }}
      {...get(extraProps, 'props')}
    />
  );
};

export const TextAreaMw: React.FC<MiddlewareProps> = (props) => {
  const { next, schema, data, onChange, extraProps } = props;
  if (typeof schema === 'boolean' || schema.type !== 'string') return next(props);
  return (
    <TextArea
      value={data || ''}
      onChange={(e: any) => {
        onChange(e.target.value || undefined);
      }}
      {...get(extraProps, 'props')}
    />
  );
};

export const PasswordMw: React.FC<MiddlewareProps> = (props) => {
  const { next, schema, data, onChange, extraProps } = props;
  if (typeof schema === 'boolean' || schema.type !== 'string') return next(props);
  return (
    <Password
      value={data || ''}
      onChange={(e: any) => {
        onChange(e.target.value || undefined);
      }}
      {...get(extraProps, 'props')}
    />
  );
};

export default InputMw;
