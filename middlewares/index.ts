import * as React from 'react';

import { Form } from 'antd';
import { JSONSchema7Definition } from 'json-schema';
import { FixedObjectArrayMw } from '../core/src';

import DatePickerMw from './DatePicker';
import ExtraPropsMw from './ExtraPropsMw';
import FormItemTemplateMw from './FormItemTemplateMw';
import ValidateRMw from './ValidateRmw';
import NotSupported from './NotSupported';
import ErrorListMw from './ErrorListRmw';
import InputMw, { TextAreaMw } from './Input';
import InputNumberMw from './InputNumber';
import FieldsetTemplateMw from './FieldsetTemplateMw';
import CheckboxGroupMw from './CheckboxGroup';
import SelectMw from './Select';
import SubmitButtonMw from './SubmitButtonRmw';

export const preset = [
  SubmitButtonMw,
  ValidateRMw,
  // RootErrorListMw,
  ExtraPropsMw,
  FieldsetTemplateMw,
  FixedObjectArrayMw,
  FormItemTemplateMw,
  CheckboxGroupMw,
  TextAreaMw,
  DatePickerMw,
  SelectMw,
  InputMw,
  InputNumberMw,

  NotSupported,
];

export default preset;
