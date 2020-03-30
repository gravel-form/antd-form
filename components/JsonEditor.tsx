import * as React from 'react';
import { Input } from 'antd';

const JsonEditor: React.FC<{ value: any; onChange?: any }> = ({ value, onChange }) => {
  const [editingValue, setEditingValue] = React.useState('');
  const [focus, setFocus] = React.useState(false);
  return (
    <Input.TextArea
      value={focus ? editingValue : JSON.stringify(value, null, 2)}
      onChange={(e) => setEditingValue(e.target.value)}
      onFocus={() => {
        setEditingValue(JSON.stringify(value, null, 2));
        setFocus(true);
      }}
      onBlur={() => {
        try {
          onChange(JSON.parse(editingValue));
        } catch (e) {}
      }}
      autoSize
    />
  );
};

export default JsonEditor;
