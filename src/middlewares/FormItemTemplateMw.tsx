import * as React from 'react';
import { toJSONSchemaPath, AntdFormMiddlewareProps, isRequired } from '../share';
import { Form } from 'antd';

export const FormItemTemplateBaseMw: React.ComponentType<AntdFormMiddlewareProps> = (props) => {
  const { schema, dataPath, next, errors } = props;

  if (typeof schema === 'boolean') return next(props);

  const id = toJSONSchemaPath(dataPath);
  const error = errors && errors.find(({ dataPath }) => dataPath === id);

  return (
    <Form.Item
      label={schema.title || dataPath[dataPath.length - 1]}
      extra={schema.description}
      {...(error && { help: error.message })}
      validateStatus={error ? 'error' : ''}
      hasFeedback
      required={isRequired(props)}
    >
      {next(props)}
    </Form.Item>
  );
};

export const FormItemTemplateMw: React.ComponentType<AntdFormMiddlewareProps> = (props) => {
  const { schema, parent, next } = props;
  if (
    typeof schema === 'boolean' ||
    schema.type === 'object' ||
    schema.type === 'array' ||
    (parent && typeof parent.schema !== 'boolean' && parent.schema.type === 'array')
  )
    return next(props);

  return <FormItemTemplateBaseMw {...props} />;
};

export default FormItemTemplateMw;
