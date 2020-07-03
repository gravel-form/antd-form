import React from 'react';
import { Alert } from 'antd';
import { MiddlewareProps, validate } from '../share';

export const LiveValidateMw: React.FC<MiddlewareProps> = (props) => {
  const { schema, data, next, parent } = props;
  const [errors, ajvException] = React.useMemo(() => {
    try {
      return [parent || typeof schema === 'boolean' ? null : validate(schema, data), null];
    } catch (err) {
      return [null, err];
    }
  }, [schema, data]);
  const newProps = React.useMemo(() => ({ ...props, errors }), [errors, props]);
  return ajvException ? (
    <>
      <Alert message="Ajv exception" description={ajvException.message} type="error" showIcon />
      {next(props)}
    </>
  ) : (
    next(errors ? newProps : props)
  );
};

export default LiveValidateMw;
