import * as React from 'react';
import _ from 'lodash';
import { Switch } from 'antd';
import { AntdFormMiddlewareProps } from './share';

export const SwitchMw: React.ComponentType<AntdFormMiddlewareProps> = (props) => {
  const { schema, onChange, data, next, extraProps } = props;
  if (typeof schema === 'boolean' || schema.type !== 'boolean' || _.get(extraProps, 'component') !== 'Switch')
    return next(props);

  return (
    <Switch title={schema.title} checked={data} onChange={(value) => onChange(value)} {..._.get(extraProps, 'props')} />
  );
};

export default SwitchMw;
