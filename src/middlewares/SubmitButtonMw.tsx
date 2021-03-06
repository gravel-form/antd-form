import * as React from 'react';
import get from 'lodash/get';
import { Form, Button, Alert } from 'antd';
import { MiddlewareProps, ErrorObject, validate } from '../share';

export const SubmitButtonMw: React.ComponentType<MiddlewareProps> = (props) => {
  const { parent, next, data } = props;
  if (parent) return next(props);
  const { extraProps } = props;

  const onSubmit = props.onSubmit || props.formProps.onSubmit;
  return (
    <>
      {props.next(props)}
      <Form.Item>
        <Button onClick={() => onSubmit && onSubmit(data)} type="primary" {...get(extraProps, 'props')}>
          Submit
        </Button>
      </Form.Item>
    </>
  );
};

export const SubmitButtonWithValidationMw: React.ComponentType<MiddlewareProps> = (props) => {
  const {
    data,
    parent,
    next,
    formProps: { schema },
  } = props;
  const [errors, setErrors] = React.useState<ErrorObject[] | null | undefined>();
  const [ajvException, setAjvException] = React.useState<Error | null>(null);

  if (parent) return next(props);
  const { extraProps } = props;

  const handleClick = () => {
    try {
      const onSubmit = props.onSubmit || props.formProps.onSubmit;
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
