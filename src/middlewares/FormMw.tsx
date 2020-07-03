import * as React from 'react';
import { Form as AntdForm } from 'antd';
import { MiddlewareProps } from '../share';

const Form: React.FC<MiddlewareProps> = (props) => {
  const { onChange, formProps, next } = props;
  const { current: isControlled } = React.useRef(Object.hasOwnProperty.call(formProps, 'data'));
  const [data, setData] = React.useState(isControlled ? props.data : formProps.defaultData);
  const handleChange = (newData: unknown) => {
    if (!isControlled) {
      setData(newData);
    }
    onChange && onChange(newData);
  };

  const { colon, hideRequiredMark, labelAlign, labelCol, layout, name, size } = formProps;

  return (
    <AntdForm {...{ colon, hideRequiredMark, labelAlign, labelCol, layout, name, size }}>
      {next({ props, onChange: handleChange, data: isControlled ? props.data : data })}
    </AntdForm>
  );
};

export default Form;
