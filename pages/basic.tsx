import * as React from 'react';
import Layout from '../layouts/main';
import { NextPage } from 'next';

import DemoForm from '../components/DemoForm';

const code = `const {
  ExtraPropsMw,
  LocalRefMw,
  FixedObjectMw,
  FixedArrayMw,
  withName,
} = GravelRc;

const schema = {
  title: 'A registration form',
  description: 'A simple form example.',
  type: 'object',
  required: ['firstName', 'lastName'],
  definitions: {
    firstName: {
      type: 'string',
      title: 'First name',
    },
    lastName: {
      $id: '#last-name',
      type: 'string',
      title: 'Last name',
    },
  },
  properties: {
    firstName: {
      $ref: "#/definitions/firstName",
    },
    lastName: {
      $ref: '#last-name',
    },
    gender: {
      type: 'string',
      enum: [ 'male', 'female' ],
    },
    age: {
      type: 'integer',
      title: 'Age of person',
      description: '(earthian year)',
    },
    dof: {
      type: 'string',
      title: 'Date of Birth',
    },
    bio: {
      type: 'string',
      title: 'Bio',
    },
    password: {
      type: 'string',
      title: 'Password',
      description: 'Hint: Make it strong!',
      minLength: 3,
    },
    telephone: {
      type: 'string',
      title: 'Telephone',
      minLength: 10,
    },
    term: {
      type: 'boolean',
      title: 'Accept terms and conditions',
    },
  },
};

const extraProps = {
  row: { justify: 'space-between' },
  definitions: {
    firstName: { col: { span:11 } },
    lastName: { col: { span:11 } }
  },
  properties: {
    gender: {
      component: 'RadioGroup',
      labels: [ "%E2%99%82", "%E2%99%80" ].map(decodeURIComponent)
    },
    bio: {
      component: 'TextArea',
      props: {
        placeholder: 'Roundhouse kicking asses since 1940',
      },
    },
    password: {
      component: 'Password',
    },
    dof: {
      component: 'DatePicker',
    },
    term: {
      formItem: {label: null},
    },
  },
};

const middlewares = [
  FormDataViewerMw,

  // SubmitButtonMw,
  // LiveValidateMw,
  SubmitButtonWithValidationMw,

  ExtraPropsMw,
  LocalRefMw,
  ColMw,
  FieldsetTemplateMw,
  RowMw,
  ...schemaMws,
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

render(
  <Form
    defaultData={{}}
    layout="vertical"
    schema={schema}
    extraProps={extraProps}
    middlewares={middlewares}
  />
);
`;

const BasicPage: NextPage = () => {
  return (
    <Layout>
      <DemoForm code={code} />
    </Layout>
  );
};

export default BasicPage;
