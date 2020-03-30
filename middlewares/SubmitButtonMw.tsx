import * as React from 'react';
import get from 'lodash/get';
import { Form, Button, Alert } from 'antd';
import { AntdFormMiddlewareProps } from './share';
import { ErrorObject, validate } from './ValidateMw';

export const SubmitButtonMw: React.ComponentType<AntdFormMiddlewareProps> = (props) => {
  const {
    parent,
    next,
    formProps: { onSubmit },
  } = props;
  if (parent) return next(props);
  const { extraProps } = props;
  return (
    <>
      {props.next(props)}
      <Form.Item>
        <Button onClick={onSubmit} type="primary" {...get(extraProps, 'props')}>
          Submit
        </Button>
      </Form.Item>
    </>
  );
};

export const SubmitButtonWithValidationMw: React.ComponentType<AntdFormMiddlewareProps> = (props) => {
  const {
    data,
    parent,
    next,
    formProps: { schema, onSubmit },
  } = props;
  const [errors, setErrors] = React.useState<ErrorObject[] | null | undefined>();
  const [ajvException, setAjvException] = React.useState<Error | null>(null);

  if (parent) return next(props);
  const { extraProps } = props;

  const handleClick = () => {
    try {
      const errors = validate(schema, data);
      if (!errors) onSubmit && onSubmit(data);
      setErrors(errors);
      setAjvException(null);
    } catch (err) {
      setAjvException(err);
    }
  };

  return (
    <>
      {props.next(errors === props.errors ? props : { ...props, errors })}
      <Form.Item>
        <Button onClick={handleClick} type="primary" {...get(extraProps, 'props')}>
          Submit
        </Button>
      </Form.Item>
      {ajvException ? <Alert message="Ajv exception" description={ajvException.message} type="error" showIcon /> : null}
    </>
  );
};

export default SubmitButtonMw;
