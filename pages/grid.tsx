import * as React from 'react';
import Layout from '../layouts/main';
import { NextPage } from 'next';

import DemoForm from '../components/DemoForm';

const code = `const schema = {
  type: 'object',
  title: 'Grid Demo',
  properties: {
    input1: { type: 'string' },
    input2: { type: 'string' },
    input3: { type: 'string' },
    input4: { type: 'string' },
    input5: { type: 'string' },
    object1: {
      type: 'object',
      title: 'object-1',
      properties: {
        o1_i1: { type: 'string' },
        o1_i2: { type: 'string' },
      },
    },
    object2: {
      title: 'object-2',
      type: 'object',
      properties: {
        o2_i1: { type: 'string' },
        o2_i2: { type: 'string' },
      },
    },
  },
};

const extraProps = {
  row: { justify: 'space-between' },
  properties: {
    input1: { col: { span: 11 } },
    input2: { col: { span: 11 } },
    input3: { col: { span: 7 } },
    input4: { col: { span: 7 } },
    input5: { col: { span: 7 } },
    object1: { col: { span: 11 } },
    object2: {
      col: { span: 11 },
      row: { justify: 'space-between' },
      properties: {
        o2_i1: { col: { span: 11 } },
        o2_i2: { col: { span: 11 } },
      },
    },
  },
};

const middlewares = [
  ExtraPropsMw,
  ColMw,
  FieldsetTemplateMw,
  RowMw,
  FormItemTemplateMw,
  ...schemaMws,
  InputMw,
  NotSupportedMw,
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
