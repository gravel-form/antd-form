import { FormProps as AntdFormProps } from 'antd/lib/form';
import Ajv from 'ajv';
import { JSONSchema7 } from 'json-schema';

import {
  MiddlewareProps as CoreMiddlewareProps,
  FormProps as CoreFormProps,
  ExtraPropsMiddlewareProps,
  ExtraPropsFormProps,
} from './core';

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

export interface FormProps
  extends CoreFormProps,
    ExtraPropsFormProps,
    Pick<AntdFormProps, 'colon' | 'hideRequiredMark' | 'labelAlign' | 'labelCol' | 'layout' | 'name' | 'size'> {
  onSubmit?: (data: unknown) => void;
  extraProps?: unknown;
  defaultData?: unknown;
}

export interface MiddlewareProps extends CoreMiddlewareProps<FormProps>, ExtraPropsMiddlewareProps<FormProps> {
  errors?: ErrorObject[];
  extraProps?: unknown;
  onSubmit?: (data: unknown) => void;
}
