import * as React from 'react';
import Layout from '../layouts/main';
import { NextPage } from 'next';

import DemoForm from '../components/DemoForm';

const code = `const schema = {
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
      title: 'Accept',
    },
  },
};

const extraProps = {
  properties: {
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
    age: { component: 'Rate' },
  },
};

const middlewares = [
  SubmitButtonRmw,
  ValidateRmw,
  ExtraPropsMw,
  FieldsetTemplateMw,
  ...schemaMws,
  FormItemTemplateMw,
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
