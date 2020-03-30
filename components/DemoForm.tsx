import * as React from 'react';
import { Card, Row, Col } from 'antd';

import Form, { withName } from '../Form';

import { FixedObjectMw, FixedArrayMw, schemaMws } from '../middlewares/share';

import DatePickerMw from '../middlewares/DatePickerMw';
import TimePickerMw from '../middlewares/TimePickerMw';
import ExtraPropsMw from '../middlewares/ExtraPropsMw';
import FormItemTemplateMw from '../middlewares/FormItemTemplateMw';
import ValidateMw from '../middlewares/ValidateMw';
import NotSupported from '../middlewares/NotSupportedMw';
import ErrorListMw from '../middlewares/ErrorListMw';
import InputMw, { TextAreaMw, PasswordMw } from '../middlewares/InputMw';
import InputNumberMw from '../middlewares/InputNumberMw';
import FieldsetTemplateMw from '../middlewares/FieldsetTemplateMw';
import CheckboxGroupMw from '../middlewares/CheckboxGroupMw';
import SelectMw from '../middlewares/SelectMw';
import { SubmitButtonMw, SubmitButtonWithValidationMw } from '../middlewares/SubmitButtonMw';
import RadioGroupMw from '../middlewares/RadioGroupMw';
import CheckboxMw from '../middlewares/CheckboxMw';
import SwitchMw from '../middlewares/SwitchMw';
import RateMw from '../middlewares/RateMw';
import SliderMw from '../middlewares/SliderMw';
import { RowMw, ColMw } from '../middlewares/GridMw';

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import FormDataViewerMw from '../components/FormDataViewerMw';

const map: any = {
  schemaMws,
  SubmitButtonMw,
  SubmitButtonWithValidationMw,
  ValidateMw,
  ExtraPropsMw,
  ErrorListMw,

  RowMw,
  ColMw,
  FieldsetTemplateMw,
  FormItemTemplateMw,
  FixedObjectMw,
  FixedArrayMw,

  // array, enum, unique
  CheckboxGroupMw,

  // boolean
  SwitchMw,
  CheckboxMw,

  // enum
  RadioGroupMw,
  SelectMw,

  // integer
  RateMw,
  // number, integer
  InputNumberMw,
  SliderMw,

  // string
  DatePickerMw,
  TimePickerMw,
  TextAreaMw,
  PasswordMw,
  InputMw,

  NotSupported,

  // dev
  FormDataViewerMw,
};

const DemoForm: React.FC<{ code: string; scope?: { [key: string]: any } | React.ReactElement }> = ({ code, scope }) => {
  if (typeof code === 'string') {
    return (
      <LiveProvider
        code={code}
        scope={{
          Form,
          withName,
          ...map,
          Ajv: require('ajv'),
          Antd: require('antd'),
          ReactAsyncHook: require('react-async-hook'),
          GravelFormCore: require('../core/src'),
          Bluebird: require('bluebird'),
          Lodash: require('lodash'),
          ...scope,
        }}
        noInline={true}
      >
        <Row>
          <Col span={12}>
            <Card style={{ height: '100vh', overflowY: 'auto' }}>
              <LiveEditor />
            </Card>
          </Col>
          <Col span={12}>
            <Card style={{ height: '100vh', overflowY: 'auto' }}>
              <LiveError />
              <LivePreview />
            </Card>
          </Col>
        </Row>
      </LiveProvider>
    );
  }
  return (
    <Row>
      <Col span={12}>
        <Card></Card>
      </Col>
      <Col span={12}>
        <Card>{code}</Card>
      </Col>
    </Row>
  );
};

export default DemoForm;
