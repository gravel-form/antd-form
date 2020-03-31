import * as React from 'react';
import omit from 'lodash/omit';
import { Card, Row, Col } from 'antd';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import FormDataViewerMw from '../components/FormDataViewerMw';

const DemoForm: React.FC<{ code: string; scope?: { [key: string]: any } | React.ReactElement }> = ({ code, scope }) => {
  if (typeof code === 'string') {
    const gravelFormAntd = require('../src');
    console.log(gravelFormAntd);
    return (
      <LiveProvider
        code={code}
        scope={{
          ...omit(gravelFormAntd, 'default'),
          FormDataViewerMw,
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
