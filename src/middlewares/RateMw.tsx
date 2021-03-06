import * as React from 'react';
import { Rate } from 'antd';
import get from 'lodash/get';
import { MiddlewareProps } from '../share';

export const RateMw: React.FC<MiddlewareProps> = (props) => {
  const { schema, onChange, data, next, extraProps } = props;

  if (typeof schema === 'boolean' || (schema.type !== 'integer' && schema.type !== 'number')) return next(props);

  return <Rate value={data} onChange={onChange} {...get(extraProps, 'props')} />;
};

export default RateMw;
