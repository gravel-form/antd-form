import * as React from 'react';
import { Card, Row, Col } from 'antd';

import Form from '../Form';

import { FixedObjectMw, FixedArrayMw, schemaMws } from '../middlewares/share';

import DatePickerMw from '../middlewares/DatePicker';
import ExtraPropsMw from '../middlewares/ExtraPropsMw';
import FormItemTemplateMw from '../middlewares/FormItemTemplateMw';
import ValidateRmw from '../middlewares/ValidateRmw';
import NotSupported from '../middlewares/NotSupported';
import ErrorListRmw from '../middlewares/ErrorListRmw';
import InputMw, { TextAreaMw, PasswordMw } from '../middlewares/Input';
import InputNumberMw from '../middlewares/InputNumber';
import FieldsetTemplateMw from '../middlewares/FieldsetTemplateMw';
import CheckboxGroupMw from '../middlewares/CheckboxGroup';
import SelectMw from '../middlewares/Select';
import SubmitButtonRmw from '../middlewares/SubmitButtonRmw';
import RadioGroupMw from '../middlewares/RadioGroupMw';
import CheckboxMw from '../middlewares/CheckboxMw';
import SwitchMw from '../middlewares/SwitchMw';
import RateMw from '../middlewares/RateMw';
import { RowMw, ColMw } from '../middlewares/GridMw';

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const map: any = {
  schemaMws,
  SubmitButtonRmw,
  ValidateRmw,
  ExtraPropsMw,
  ErrorListRmw,

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

  // string
  DatePickerMw,
  TextAreaMw,
  PasswordMw,
  InputMw,

  NotSupported,
};

const DemoForm: React.FC<{ code: string; scope?: { [key: string]: any } | React.ReactElement }> = ({ code, scope }) => {
  if (typeof code === 'string') {
    return (
      <LiveProvider
        code={code}
        scope={{
          Form,
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

const formItemLayout = {} || {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

export default DemoForm;
