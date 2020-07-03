import * as React from 'react';
import get from 'lodash/get';
import { Slider } from 'antd';
import { MiddlewareProps } from '../share';

export const SliderMw: React.ComponentType<MiddlewareProps> = (props) => {
  const { next, schema, data, onChange, extraProps } = props;
  if (typeof schema === 'boolean' || !(schema.type === 'number' || schema.type === 'integer')) return next(props);
  const { maximum, minimum } = schema;
  return (
    <Slider
      min={minimum}
      max={maximum}
      value={typeof data === 'number' ? data : undefined}
      onChange={(value) => {
        if (!Array.isArray(value)) onChange(value);
      }}
      {...get(extraProps, 'props')}
    />
  );
};

export default SliderMw;
