import * as React from 'react';
import omit from 'lodash/omit';
import { Card, Row, Col } from 'antd';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

import FormDataViewerMw from '../components/FormDataViewerMw';

const DemoForm: React.FC<{ code: string; scope?: { [key: string]: any } | React.ReactElement }> = ({ code, scope }) => {
  return (
    <LiveProvider
      code={code}
      scope={{
        ...omit(require('../src'), 'default'),
        GravelFormCore: require('../src/core'),
        FormDataViewerMw,
        Ajv: require('ajv'),
        Antd: require('antd'),
        AntdIcons: require('@ant-design/icons'),
        ReactAsyncHook: require('react-async-hook'),
        Bluebird: require('bluebird'),
        Lodash: require('lodash'),
        ...scope,
      }}
      noInline={true}
    >
      <Row>
        <Col span={12}>
          <Card style={{ height: '100vh', overflowY: 'auto', overflowX: 'auto' }}>
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
};

export default DemoForm;
