import * as React from 'react';
import { MiddlewareProps } from '../core';
import { Typography } from 'antd';
const { Text } = Typography;

export const FieldsetTemplateMw: React.ComponentType<MiddlewareProps> = (props) => {
  const { schema, next } = props;

  if (typeof schema === 'boolean' || !(schema.type === 'object' || schema.type === 'array')) return next(props);

  const title = schema.title;
  return (
    <fieldset>
      {title && <legend>{title}</legend>}
      {schema.description && (
        <div>
          <Text type="secondary">{schema.description}</Text>
        </div>
      )}
      {next(props)}
    </fieldset>
  );
};

export default FieldsetTemplateMw;
