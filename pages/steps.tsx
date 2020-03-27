import * as React from 'react';
import _ from 'lodash';
import Layout from '../layouts/main';
import { NextPage } from 'next';

import DemoForm from '../components/DemoForm';

const code = `const _ = Lodash;
const { Steps, Button } = Antd;
const { Step } = Steps;

const ExampleStepsRmw = (props) => {
  const {
    schema,
    next,
    MiddlewareComponent,
    parent,
    onChange,
    schemaPath,
    dataPath,
    formProps,
    extraProps,
    errors,
    onSubmit,
  } = props;
  const [current, setCurrent] = React.useState(0);

  if (parent || typeof schema === 'boolean' || schema.type !== 'object' || !schema.properties) return next(props);

  const data = typeof props.data === 'object' && props.data ? props.data : {};
  const properties = schema.properties;

  const childKeys = Object.keys(schema.properties);
  const currentProp = childKeys[current];
  return (
    <>
      {
        <Steps current={current}>
          {childKeys.map((key) => {
            const childSchema = properties[key];
            if (typeof childSchema === 'boolean') return <Step key={key} title={key} />;
            return <Step key={key} title={childSchema.title || key} description={childSchema.description} />;
          })}
        </Steps>
      }

      <MiddlewareComponent
        schema={properties[currentProp]}
        data={_.get(data, currentProp)}
        onChange={(item) => onChange({ ...data, [currentProp]: item })}
        parent={props}
        schemaPath={[...schemaPath, 'properties', currentProp]}
        dataPath={[...dataPath, currentProp]}
        next={() => null}
        formProps={formProps}
        MiddlewareComponent={MiddlewareComponent}
        {...{ extraProps: _.get(extraProps, currentProp), errors, onSubmit }}
      />

      <div className="steps-action">
        {current < childKeys.length - 1 && (
          <Button type="primary" onClick={() => setCurrent(current + 1)}>
            Next
          </Button>
        )}
        {current === childKeys.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ marginLeft: 8 }} onClick={() => setCurrent(current - 1)}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

const schema = {
  type: 'object',
  properties: {
    basic: {
      type: 'object',
      title: 'Basic Info',
      description: 'A simple example for step 1',
      properties: {
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        dob: { type: 'string' },
      },
    },
    contactDetails: {
      type: 'object',
      title: 'Contact Details',
      description: 'The second example',
      properties: {
        country: { type: 'string' },
        city: { type: 'string' },
        address: { type: 'string' },
        phoneNumber: { type: 'string' },
      },
    },
    billingDetails: {
      type: 'object',
      title: 'Billing Details',
      properties: {
        creditCard: { type: 'string' },
      },
    },
  },
};

const extraProps = {
  properties: {
    basic: {
      properties: { dob: { component: 'DatePicker' } },
    },
  },
};

const middlewares = [
  ExampleStepsRmw,
  ExtraPropsMw,
  ...schemaMws,
  FormItemTemplateMw,
  DatePickerMw,
  InputMw,
  NotSupported,
];

render(
  <Form
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
