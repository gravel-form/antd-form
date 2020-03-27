import { ErrorObject as _ErrorObject } from './ValidateRmw';
import {
  // FormCore,
  // FixedObjectArrayMw,
  // useAdditional,
  // schemaMws,
  FormMiddlewareProps,
  // AdditionalItemTemplateProps,
  // isRequired,
  // toJSONSchemaPath,
  FormProps,
} from '../core/src';
import { FormProps as AntdFP } from 'antd/lib/form';

export type ErrorObject = _ErrorObject;

export * from '../core/src';

export interface AntdFormProps
  extends FormProps,
    Pick<AntdFP, 'colon' | 'hideRequiredMark' | 'labelAlign' | 'labelCol' | 'layout' | 'name'> {
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
