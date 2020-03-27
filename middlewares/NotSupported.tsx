import * as React from 'react';
import { AntdFormMiddlewareProps, toJSONSchemaPath } from './share';
import { Alert } from 'antd';

export default ({ schemaPath }: AntdFormMiddlewareProps) => (
  <Alert message={`schema not supported, location ${toJSONSchemaPath(schemaPath)}`} type="error" showIcon />
);
