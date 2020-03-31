import { FormProps as AntdFP } from 'antd/lib/form';
import Ajv from 'ajv';
import { JSONSchema7 } from 'json-schema';

import { FormMiddlewareProps, FormProps } from '../core/src';
// import { FormMiddlewareProps, FormProps } from '@gravel-form/core';

export * from '../core/src';
// export * from '@gravel-form/core';

export type ErrorObject = Ajv.ErrorObject;

const ajv = new Ajv({
  errorDataPath: 'property',
  allErrors: true,
  multipleOfPrecision: 8,
  schemaId: 'auto',
  unknownFormats: 'ignore',
});

export function validate(schema: JSONSchema7, data: any) {
  ajv.validate(schema, data);
  return ajv.errors;
}

export interface AntdFormProps
  extends FormProps,
    Pick<AntdFP, 'colon' | 'hideRequiredMark' | 'labelAlign' | 'labelCol' | 'layout' | 'name' | 'size'> {
  onSubmit?: (data: unknown) => void;
  extraProps?: unknown;
  defaultData?: unknown;
}

export interface AntdFormMiddlewareProps extends FormMiddlewareProps {
  formProps: AntdFormProps;
  errors?: ErrorObject[];
  extraProps?: unknown;
  onSubmit?: (data: unknown) => void;
}
