import * as React from 'react';
import { Row, Col } from 'antd';
import get from 'lodash/get';
import { MiddlewareProps } from '../share';

export const ColMw: React.ComponentType<MiddlewareProps> = (props) => {
  const { extraProps, parent, next } = props;
  if (!parent) return next(props);

  return (
    <Col span="24" {...get(extraProps, 'col')}>
      {next(props)}
    </Col>
  );
};

export const RowMw: React.ComponentType<MiddlewareProps> = (props) => {
  const { schema, extraProps, next } = props;
  if (typeof schema === 'object' && (schema.type === 'object' || schema.type === 'array'))
    return <Row {...get(extraProps, 'row')}>{next(props)}</Row>;
  return next(props);
};
