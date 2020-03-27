import * as React from 'react';
import _ from 'lodash';
import { Rate } from 'antd';
import { AntdFormMiddlewareProps } from './share';

export const RateMw: React.ComponentType<AntdFormMiddlewareProps> = (props) => {
  const { schema, onChange, data, next, extraProps } = props;

  if (
    typeof schema === 'boolean' ||
    (schema.type !== 'integer' && schema.type !== 'number') ||
    _.get(extraProps, 'component') !== 'Rate'
  )
    return next(props);

  return <Rate value={data} onChange={onChange} {..._.get(extraProps, 'props')} />;
};

export default RateMw;
