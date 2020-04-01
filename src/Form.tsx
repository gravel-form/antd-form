import * as React from 'react';
import { Form as AntdForm } from 'antd';
import { FormCore } from './core';
import { AntdFormProps } from './share';
import { presetMws } from './preset';

const Form: React.FC<AntdFormProps> = (props) => {
  const { onChange } = props;
  const { current: isControlled } = React.useRef(Object.hasOwnProperty.call(props, 'data'));
  const [data, setData] = React.useState(isControlled ? props.data : props.defaultData);
  const handleChange = (newData: unknown) => {
    if (!isControlled) {
      setData(newData);
    }
    onChange && onChange(newData);
  };

  const { colon, hideRequiredMark, labelAlign, labelCol, layout, name, size } = props;

  return (
    <AntdForm {...{ colon, hideRequiredMark, labelAlign, labelCol, layout, name, size }}>
      <FormCore {...props} onChange={handleChange} data={isControlled ? props.data : data} />
    </AntdForm>
  );
};

Form.defaultProps = {
  middlewares: presetMws,
};

export default Form;
