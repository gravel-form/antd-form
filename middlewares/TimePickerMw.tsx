import * as React from 'react';
import get from 'lodash/get';
import { TimePicker } from 'antd';
import { AntdFormMiddlewareProps } from './share';
import moment from 'moment';

export const TimePickerMw: React.ComponentType<AntdFormMiddlewareProps> = (props) => {
  const { next, schema, data, onChange, extraProps } = props;

  if (typeof schema === 'boolean' || schema.type !== 'string') return next(props);

  return (
    <TimePicker
      style={{ width: '100%' }}
      value={typeof data === 'string' ? moment(data, 'HH:mm:ss') : null}
      onChange={(_, dateString) => {
        onChange(dateString || undefined);
      }}
      {...get(extraProps, 'props')}
    />
  );
};

export default TimePickerMw;
