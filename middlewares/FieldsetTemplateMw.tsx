import * as React from 'react';
import { FormMiddlewareProps } from './share';
import { Typography } from 'antd';
const { Text } = Typography;

export const FieldsetTemplateMw: React.ComponentType<FormMiddlewareProps> = (props) => {
  const { schema, next } = props;

  if (typeof schema === 'boolean' || !(schema.type === 'object' || schema.type === 'array')) return next(props);

  const title = schema.title;
  return (
    <fieldset>
      {title && <legend>{title}</legend>}
      <div>
        <Text type="secondary">{schema.description && schema.description}</Text>
      </div>
      {next(props)}
    </fieldset>
  );
};

export default FieldsetTemplateMw;
