import React from 'react';
import Ajv from 'ajv';
import { JSONSchema7 } from 'json-schema';
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

export const ValidateRmw: React.FC<FormMiddlewareProps & ErrorsProps> = (props) => {
  const { schema, data, next, parent } = props;
  const errors = React.useMemo(() => (parent || typeof schema === 'boolean' ? null : validate(schema, data)), [
    schema,
    data,
  ]);
  const newProps = React.useMemo(() => ({ ...props, errors }), [errors, props]);
  return next(errors ? newProps : props);
};

export default ValidateRmw;
