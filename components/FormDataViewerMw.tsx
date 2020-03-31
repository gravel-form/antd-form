import * as React from 'react';
import { Affix, Input } from 'antd';
import { AntdFormMiddlewareProps } from '../src';

const JsonEditor: React.FC<{ value: any; onChange?: any }> = ({ value, onChange }) => {
  const [editingValue, setEditingValue] = React.useState('');
  const [focus, setFocus] = React.useState(false);
  return (
    <Input.TextArea
      value={focus ? editingValue : JSON.stringify(value, null, 2)}
      onChange={(e) => {
        setEditingValue(e.target.value);
        try {
          onChange(JSON.parse(editingValue));
        } catch (e) {}
      }}
      onFocus={() => {
        setEditingValue(JSON.stringify(value, null, 2));
        setFocus(true);
      }}
      onBlur={() => {
        setFocus(false);
      }}
      autoSize={{ minRows: 2, maxRows: 6 }}
    />
  );
};

export const FormDataViewerMw: React.ComponentType<AntdFormMiddlewareProps> = (props) => {
  const { data, parent, onChange, next } = props;
  const [container, setContainer] = React.useState<HTMLElement | null>(null);
  React.useEffect(() => {
    setContainer(document.querySelectorAll<HTMLElement>('div.ant-card')[1]);
  });

  if (parent) return next(props);
  return (
    <>
      <Affix offsetTop={0} target={() => container}>
        <div style={{ background: '#fff', paddingBottom: 12 }}>
          <fieldset>
            <legend>Form Data</legend>
            <JsonEditor value={data} onChange={onChange} />
          </fieldset>
        </div>
      </Affix>
      {next(props)}
    </>
  );
};

export default FormDataViewerMw;
