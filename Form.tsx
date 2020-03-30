import * as React from 'react';
import get from 'lodash/get';
import { AntdFormProps, FormCore, AntdFormMiddlewareProps } from './middlewares/share';
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

  const { colon, hideRequiredMark, labelAlign, labelCol, layout, name, size } = props;

  return (
    <AntdForm {...{ colon, hideRequiredMark, labelAlign, labelCol, layout, name, size }}>
      <FormCore {...props} onChange={handleChange} data={data} />
    </AntdForm>
  );
};

export function withName(list: [string, React.FC<AntdFormMiddlewareProps>][]): React.FC<AntdFormMiddlewareProps>[] {
  return list.map(([name, Component]) => {
    const C: React.FC<AntdFormMiddlewareProps> = (props: AntdFormMiddlewareProps) => {
      if (get(props.extraProps, 'component') !== name) return props.next(props);
      return <Component {...props} />;
    };
    return C;
  });
}

export default Form;
