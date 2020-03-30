import * as React from 'react';
import { Alert } from 'antd';
import { AntdFormMiddlewareProps } from './share';

export const ErrorListMw: React.ComponentType<AntdFormMiddlewareProps> = (props) => {
  const { parent, next, errors } = props;
  if (parent || !errors || !errors.length) return next(props);

  return (
    <>
      {next(props)}
      {errors.map((error, i) => (
        <Alert key={i} type="error" banner message={`${error.dataPath} ${error.message}`} />
      ))}
    </>
  );
};

export default ErrorListMw;
