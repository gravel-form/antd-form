import * as React from 'react';
import Layout from '../layouts/main';
import { NextPage } from 'next';

import DemoForm from '../components/DemoForm';

const code = `const schema = {
  title: 'A registration form',
  description: 'A simple form example.',
  type: 'object',
  properties: {
    input: {
      type: 'string',
    },
    textarea: {
      type: 'string',
    },
    date: {
      type: 'string',
    },
    password: {
      type: 'string',
    },
    number: {
      type: 'number',
    },
    rate: {
      type: 'number',
    },
    select: {
      type: 'string',
      enum: ['foo', 'bar', 'baz'],
    },
    radioGroup: {
      type: 'string',
      enum: ['foo', 'bar', 'baz'],
    },
    checkbox: {
      type: 'boolean',
    },
    switch: {
      type: 'boolean',
    },
    checkboxGroup: {
      type: 'array',
      items: {
        type: 'string',
        enum: ['foo', 'bar', 'baz'],
      },
      uniqueItems: true,
    },
  },
};

const extraProps = {
  properties: {
    textarea: {
      component: 'TextArea',
    },
    password: {
      component: 'Password',
    },
    date: {
      component: 'DatePicker',
    },
    rate: { component: 'Rate' },
    radioGroup: {
      component: 'RadioGroup',
    },
    switch: {
      component: 'Switch',
    },
  },
};

const middlewares = [
  SubmitButtonRmw,
  ValidateRmw,
  ExtraPropsMw,
  FieldsetTemplateMw,
  ...schemaMws,
  FormItemTemplateMw,
  SwitchMw,
  CheckboxMw,
  RadioGroupMw,
  CheckboxGroupMw,
  TextAreaMw,
  PasswordMw,
  DatePickerMw,
  SelectMw,
  InputMw,
  RateMw,
  InputNumberMw,
  NotSupported,
];

render(
  <Form
    layout="vertical"
    schema={schema}
    extraProps={extraProps}
    middlewares={middlewares}
  />
);
`;

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <DemoForm code={code} />
    </Layout>
  );
};

export default IndexPage;
