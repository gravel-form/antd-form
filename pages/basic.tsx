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
  row: { justify: 'space-between' },
  properties: {
    firstName: { col: { span:11 } },
    lastName: { col: { span:11 } },
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
    }
  },
};

const middlewares = [
  FormDataViewerMw,

  // SubmitButtonMw,
  // ValidateMw,
  SubmitButtonWithValidationMw,

  ExtraPropsMw,
  ColMw,
  FieldsetTemplateMw,
  RowMw,
  ...schemaMws,
  FormItemTemplateMw,

  ...withName([
    [ 'DatePicker', DatePickerMw ],
    [ 'Rate', RateMw ],
    [ 'Switch', SwitchMw ],
    [ 'TextArea', TextAreaMw ],
    [ 'Password', PasswordMw ],
    [ 'RadioGroup', RadioGroupMw ],
  ]),

  CheckboxGroupMw,
  CheckboxMw,
  SelectMw,
  InputMw,
  InputNumberMw,
  NotSupported,
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

const IndexPage: NextPage = () => {
  return (
    <Layout>
      <DemoForm code={code} />
    </Layout>
  );
};

export default IndexPage;
