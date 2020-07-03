import { FixedObjectMw, FixedArrayMw, LocalRefMw, ExtraPropsMw, withName } from './core';

import DatePickerMw from './middlewares/DatePickerMw';
import TimePickerMw from './middlewares/TimePickerMw';
import FormItemTemplateMw from './middlewares/FormItemTemplateMw';
import NotSupportedMw from './middlewares/NotSupportedMw';
import InputMw, { TextAreaMw, PasswordMw } from './middlewares/InputMw';
import InputNumberMw from './middlewares/InputNumberMw';
import FieldsetTemplateMw from './middlewares/FieldsetTemplateMw';
import CheckboxGroupMw from './middlewares/CheckboxGroupMw';
import SelectMw from './middlewares/SelectMw';
import { SubmitButtonWithValidationMw } from './middlewares/SubmitButtonMw';
import RadioGroupMw from './middlewares/RadioGroupMw';
import CheckboxMw from './middlewares/CheckboxMw';
import SwitchMw from './middlewares/SwitchMw';
import RateMw from './middlewares/RateMw';
import SliderMw from './middlewares/SliderMw';
import { RowMw, ColMw } from './middlewares/GridMw';

export const formControlMws = [
  FormItemTemplateMw,
  withName(DatePickerMw, 'DatePicker'),
  withName(PasswordMw, 'Password'),
  withName(RadioGroupMw, 'RadioGroup'),
  withName(RateMw, 'Rate'),
  withName(SliderMw, 'Slider'),
  withName(SwitchMw, 'Switch'),
  withName(TextAreaMw, 'TextArea'),
  withName(TimePickerMw, 'TimePicker'),
  CheckboxGroupMw,
  CheckboxMw,
  SelectMw,
  InputMw,
  InputNumberMw,
  NotSupportedMw,
];

export const schemaMws = [FixedObjectMw, FixedArrayMw];

export const presetMws = [
  SubmitButtonWithValidationMw,
  ExtraPropsMw,
  LocalRefMw,
  ColMw,
  FieldsetTemplateMw,
  RowMw,
  ...schemaMws,
  ...formControlMws,
  NotSupportedMw,
];

export default presetMws;
