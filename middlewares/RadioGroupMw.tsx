import * as React from 'react';
import _ from 'lodash';
import { Radio } from 'antd';
import { AntdFormMiddlewareProps } from './share';

export const RadioGroupMw: React.ComponentType<AntdFormMiddlewareProps> = (props) => {
  const { schema, onChange, data, extraProps, next } = props;
  if (typeof schema === 'boolean' || !schema.enum || _.get(extraProps, 'component') !== 'RadioGroup')
    return next(props);

  const labels = _.get(extraProps, 'labels') || schema.enum;

  return (
    <Radio.Group onChange={(e) => onChange(e.target.value)} value={data} {..._.get(extraProps, 'props')}>
      {schema.enum.map((value, index) => (
        <Radio key={JSON.stringify(value)} value={value}>
          {labels[index]}
        </Radio>
      ))}
    </Radio.Group>
  );
};

export default RadioGroupMw;
