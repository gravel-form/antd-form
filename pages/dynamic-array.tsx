import * as React from 'react';
import _ from 'lodash';
import { JSONSchema7Definition } from 'json-schema';
import Layout from '../layouts/main';
import { NextPage } from 'next';
import DemoForm from '../components/DemoForm';
import { AntdFormMiddlewareProps } from '../middlewares/share';

const code = `
const { Button, Icon, Row, Col } = Antd;
const ExampleDynamicArrayMw = (props) => {
  const {
    schema,
    data,
    next,
    MiddlewareComponent,
    schemaPath,
    dataPath,
    formProps,
    onChange,
    extraProps,
    errors,
    onSubmit,
  } = props;

  if (typeof schema === 'boolean' || schema.type !== 'array' || !schema.items || Array.isArray(schema.items))
    return next(props);

  const schemaItems = schema.items;
  const dataItems = Array.isArray(data) ? data : [];

  return (
    <>
      {dataItems.map((item, index) => {
        return (
          <Row>
            <Col span="21">
              <MiddlewareComponent
                key={index}
                schema={schemaItems}
                data={item}
                onChange={(newItem) =>
                  onChange([...dataItems.slice(0, index), newItem, ...dataItems.slice(index + 1)])
                }
                parent={props}
                schemaPath={[...schemaPath, 'items']}
                dataPath={[...dataPath, index]}
                next={() => null}
                formProps={formProps}
                MiddlewareComponent={MiddlewareComponent}
                {...{ extraProps: _.get(extraProps, 'items'), errors, onSubmit }}
              />
            </Col>
            <Col span="3">
              <Button type="danger" icon="delete" onClick={() => onChange(dataItems.filter((_, i) => i !== index))} />
            </Col>
          </Row>
        );
      })}
      {
        <Row>
          <Button type="dashed" onClick={() => onChange([...dataItems, null])} style={{ width: '100%' }}>
            <Icon type="plus" /> Add field
          </Button>
        </Row>
      }
    </>
  );
};

const schema = {
  title: 'A registration form',
  description: 'A simple dynamic array form.',
  type: 'array',
  items: {
    type: 'object',
    properties: {
      firstName: {
        type: 'string',
        title: 'First name',
      },
      lastName: {
        type: 'string',
        title: 'Last name',
      },
    },
  },
};

const extraProps = {};

const middlewares = [
  ExtraPropsMw,
  FieldsetTemplateMw,
  ...schemaMws,

  FormItemTemplateMw,
  ExampleDynamicArrayMw,

  CheckboxGroupMw,
  TextAreaMw,
  PasswordMw,
  DatePickerMw,
  SelectMw,
  InputMw,
  InputNumberMw,
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
