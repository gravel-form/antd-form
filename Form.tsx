import * as React from 'react';
import { AntdFormProps, FormCore } from './middlewares/share';
import { Form as AntdForm } from 'antd';

const Form: React.FC<AntdFormProps> = (props) => {
  const { onChange } = props;
  const [data, setData] = React.useState(props.data || props.defaultData);
  const { current: isControlled } = React.useRef(props.data !== undefined);
  const handleChange = (newData: unknown) => {
    if (!isControlled) {
      setData(newData);
    }
    onChange && onChange(newData);
  };

  return (
    <AntdForm>
      <FormCore {...props} onChange={handleChange} data={data} />
    </AntdForm>
  );
};

export default Form;
