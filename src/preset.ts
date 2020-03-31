import { schemaMws } from './share';

import DatePickerMw from './middlewares/DatePickerMw';
import TimePickerMw from './middlewares/TimePickerMw';
import { ExtraPropsMw, withName } from './middlewares/ExtraPropsMw';
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

export const basicFormControlMws = [CheckboxGroupMw, CheckboxMw, SelectMw, InputMw, InputNumberMw, NotSupportedMw];

export const advancedFormControlMws = withName([
  ['DatePicker', DatePickerMw],
  ['TimePicker', TimePickerMw],
  ['Rate', RateMw],
  ['Switch', SwitchMw],
  ['TextArea', TextAreaMw],
  ['Password', PasswordMw],
  ['RadioGroup', RadioGroupMw],
  ['Slider', SliderMw],
]);

export const formControlMws = [...advancedFormControlMws, ...basicFormControlMws];

export const presetMws = [
  SubmitButtonWithValidationMw,

  ExtraPropsMw,
  ColMw,
  FieldsetTemplateMw,
  RowMw,
  ...schemaMws,
  FormItemTemplateMw,
  ...formControlMws,
  NotSupportedMw,
];

export default presetMws;
