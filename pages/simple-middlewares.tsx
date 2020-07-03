import * as React from 'react';
import Layout from '../layouts/main';
import { NextPage } from 'next';
import DemoForm from '../components/DemoForm';

const code = `const { isRequired } = GravelRc;
const { Button, message, Form: AntdForm, Tooltip } = Antd;
const { InfoCircleOutlined } = AntdIcons;
const Promise = Bluebird;

const MyButtonsMw = (props) => {
  const {
    parent,
    next,
    onChange,
    formProps: { defaultData },
  } = props;
  const [submitting, setSubmitting] = React.useState(false);

  // if not on the root node, pass the control to the next middleware
  if (parent) return next(props);

  const handleSubmit = async function() {
    setSubmitting(true);
    await Promise.delay(1000);
    // pactically, should check unmounted here
    setSubmitting(false);
    message.success('Submitted!');
  };
  const handleClear = () => onChange({});
  const handleReset = () => onChange(defaultData);

  return (
    <>
      {next(props) /* render the body of the form */}
      <Button type="primary" onClick={handleSubmit} loading={submitting}>
        Submit
      </Button>{' '}
      <Button onClick={handleClear}>Clear</Button> <Button onClick={handleReset}>Reset</Button>
    </>
  );
};

const MyFormItemTemplate = (props) => {
  const { schema, dataPath, parent, next } = props;

  if (
    typeof schema === 'boolean' ||
    schema.type === 'object' ||
    schema.type === 'array' ||
    // skip if current node is under an array
    (parent && typeof parent.schema !== 'boolean' && parent.schema.type === 'array')
  )
    return next(props);

  const labelText = schema.title || dataPath[dataPath.length - 1]; // latter one is the current prop name
  const label = schema.description ? (
    <Tooltip title={schema.description}>
      <div>
        {labelText} <InfoCircleOutlined />
      </div>
    </Tooltip>
  ) : (
    labelText
  );

  return (
    <AntdForm.Item label={label} required={isRequired(props)}>
      {next(props)}
    </AntdForm.Item>
  );
};

const schema = {
  type: 'object',
  properties: {
    username: { type: 'string', description: 'Username description' },
    firstname: { type: 'string' },
    lastname: { type: 'string' },
    email: { type: 'string', description: 'Email description' },
  },
};

const defaultData = {
  username: 'jhon',
  firstname: 'Jhon',
  lastname: 'Smith',
};

const middlewares = [
  MyButtonsMw,
  FieldsetTemplateMw,
  MyFormItemTemplate,
  ...schemaMws,
  InputMw,
  NotSupportedMw,
];

render(
  <Form
    defaultData={defaultData}
    layout="vertical"
    schema={schema}
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
