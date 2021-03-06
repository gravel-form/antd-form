import * as React from 'react';
import get from 'lodash/get';
import { Switch } from 'antd';
import { MiddlewareProps } from '../share';

export const SwitchMw: React.FC<MiddlewareProps> = (props) => {
  const { schema, onChange, data, next, extraProps } = props;
  if (typeof schema === 'boolean' || schema.type !== 'boolean') return next(props);

  return (
    <Switch title={schema.title} checked={data} onChange={(value) => onChange(value)} {...get(extraProps, 'props')} />
  );
};

export default SwitchMw;
