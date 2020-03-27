import * as React from 'react';
import _ from 'lodash';
import { Checkbox } from 'antd';
import { AntdFormMiddlewareProps } from './share';

export const RadioGroupMw: React.ComponentType<AntdFormMiddlewareProps> = (props) => {
  const { schema, onChange, data, next, extraProps } = props;
  if (typeof schema === 'boolean' || schema.type !== 'boolean') return next(props);

  return (
    <Checkbox checked={data} onChange={(e) => onChange(e.target.checked || undefined)} {..._.get(extraProps, 'props')}>
      {schema.title}
    </Checkbox>
  );
};

export default RadioGroupMw;
