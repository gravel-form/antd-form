import * as React from 'react';
import get from 'lodash/get';

import { AntdFormMiddlewareProps } from './share';
import { schemaMws } from '../core/src';

export * from '../middlewares/DatePickerMw';
export * from '../middlewares/TimePickerMw';
export * from '../middlewares/ExtraPropsMw';
export * from '../middlewares/FormItemTemplateMw';
export * from '../middlewares/ValidateMw';
export * from '../middlewares/NotSupportedMw';
export * from '../middlewares/ErrorListMw';
export * from '../middlewares/InputMw';
export * from '../middlewares/InputNumberMw';
export * from '../middlewares/FieldsetTemplateMw';
export * from '../middlewares/CheckboxGroupMw';
export * from '../middlewares/SelectMw';
export * from '../middlewares/SubmitButtonMw';
export * from '../middlewares/RadioGroupMw';
export * from '../middlewares/CheckboxMw';
export * from '../middlewares/SwitchMw';
export * from '../middlewares/RateMw';
export * from '../middlewares/SliderMw';
export * from '../middlewares/GridMw';

import DatePickerMw from '../middlewares/DatePickerMw';
import TimePickerMw from '../middlewares/TimePickerMw';
import { ExtraPropsMw, withName } from '../middlewares/ExtraPropsMw';
import FormItemTemplateMw from '../middlewares/FormItemTemplateMw';
import NotSupportedMw from '../middlewares/NotSupportedMw';
import InputMw, { TextAreaMw, PasswordMw } from '../middlewares/InputMw';
import InputNumberMw from '../middlewares/InputNumberMw';
import FieldsetTemplateMw from '../middlewares/FieldsetTemplateMw';
import CheckboxGroupMw from '../middlewares/CheckboxGroupMw';
import SelectMw from '../middlewares/SelectMw';
import { SubmitButtonWithValidationMw } from '../middlewares/SubmitButtonMw';
import RadioGroupMw from '../middlewares/RadioGroupMw';
import CheckboxMw from '../middlewares/CheckboxMw';
import SwitchMw from '../middlewares/SwitchMw';
import RateMw from '../middlewares/RateMw';
import SliderMw from '../middlewares/SliderMw';
import { RowMw, ColMw } from '../middlewares/GridMw';

export const basicFormControls = [CheckboxGroupMw, CheckboxMw, SelectMw, InputMw, InputNumberMw, NotSupportedMw];

export const advancedFormControls = withName([
  ['DatePicker', DatePickerMw],
  ['TimePicker', TimePickerMw],
  ['Rate', RateMw],
  ['Switch', SwitchMw],
  ['TextArea', TextAreaMw],
  ['Password', PasswordMw],
  ['RadioGroup', RadioGroupMw],
  ['Slider', SliderMw],
]);

export const preset = [
  SubmitButtonWithValidationMw,

  ExtraPropsMw,
  ColMw,
  FieldsetTemplateMw,
  RowMw,
  ...schemaMws,
  FormItemTemplateMw,
  ...advancedFormControls,
  ...basicFormControls,
];

export default preset;
