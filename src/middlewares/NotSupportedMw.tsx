import * as React from 'react';
import { toJSONSchemaPath } from '../core';
import { MiddlewareProps } from '../share';
import { Alert } from 'antd';

export const NotSupportedMw: React.FC<MiddlewareProps> = ({ schemaPath }) => (
  <Alert message={`schema not supported, location ${toJSONSchemaPath(schemaPath)}`} type="error" showIcon />
);

export default NotSupportedMw;
