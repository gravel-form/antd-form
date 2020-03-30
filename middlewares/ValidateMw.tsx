import React from 'react';
import Ajv from 'ajv';
import { JSONSchema7 } from 'json-schema';
import { Alert } from 'antd';
import { FormMiddlewareProps } from '../core/src';

const ajv = new Ajv({
  errorDataPath: 'property',
  allErrors: true,
  multipleOfPrecision: 8,
  schemaId: 'auto',
  unknownFormats: 'ignore',
});

export type ErrorObject = Ajv.ErrorObject;

interface ErrorsProps {
  errors?: ErrorObject[];
}

export function validate(schema: JSONSchema7, data: any) {
  ajv.validate(schema, data);
  return ajv.errors;
}

export const ValidateMw: React.FC<FormMiddlewareProps & ErrorsProps> = (props) => {
  const { schema, data, next, parent } = props;
  const [errors, ajvException] = React.useMemo(() => {
    try {
      return [parent || typeof schema === 'boolean' ? null : validate(schema, data), null];
    } catch (err) {
      return [null, err];
    }
  }, [schema, data]);
  const newProps = React.useMemo(() => ({ ...props, errors }), [errors, props]);
  return ajvException ? (
    <>
      <Alert message="Ajv exception" description={ajvException.message} type="error" showIcon />
      {next(props)}
    </>
  ) : (
    next(errors ? newProps : props)
  );
};

export default ValidateMw;
