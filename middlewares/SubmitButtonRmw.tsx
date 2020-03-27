import * as React from 'react';
import _ from 'lodash';
import { Form, Button } from 'antd';
import { AntdFormMiddlewareProps } from './share';

export const SubmitButtonRmw: React.ComponentType<AntdFormMiddlewareProps> = (props) => {
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
        <Button onClick={onSubmit} type="primary" {..._.get(extraProps, 'props')}>
          Submit
        </Button>
      </Form.Item>
    </>
  );
};

export default SubmitButtonRmw;
