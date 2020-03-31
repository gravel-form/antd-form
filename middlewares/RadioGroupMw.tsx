import * as React from 'react';
import get from 'lodash/get';
import { Radio } from 'antd';
import { AntdFormMiddlewareProps } from './share';

export const RadioGroupMw: React.FC<AntdFormMiddlewareProps> = (props) => {
  const { schema, onChange, data, extraProps, next } = props;
  if (typeof schema === 'boolean' || !schema.enum) return next(props);

  const labels = get(extraProps, 'labels') || schema.enum;

  return (
    <Radio.Group onChange={(e) => onChange(e.target.value)} value={data} {...get(extraProps, 'props')}>
      {schema.enum.map((value, index) => (
        <Radio key={JSON.stringify(value)} value={value}>
          {labels[index]}
        </Radio>
      ))}
    </Radio.Group>
  );
};

export default RadioGroupMw;
