import * as React from 'react';
import get from 'lodash/get';
import { toJSONSchemaPath, isRequired } from '../core';
import { MiddlewareProps } from '../share';
import { Form } from 'antd';

export const FormItemTemplateMw: React.ComponentType<MiddlewareProps> = (props) => {
  const { schema, dataPath, next, errors, extraProps } = props;

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
      {...get(extraProps, 'formItem')}
    >
      {next(props)}
    </Form.Item>
  );
};

export default FormItemTemplateMw;
