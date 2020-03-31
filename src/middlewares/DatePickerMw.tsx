import * as React from 'react';
import get from 'lodash/get';
import { DatePicker } from 'antd';
import { AntdFormMiddlewareProps } from '../share';
import moment from 'moment';

export const DatePickerMw: React.FC<AntdFormMiddlewareProps> = (props) => {
  const { next, schema, data, onChange, extraProps } = props;

  if (typeof schema === 'boolean' || schema.type !== 'string') return next(props);

  return (
    <DatePicker
      style={{ width: '100%' }}
      value={typeof data === 'string' ? moment(data) : null}
      onChange={(_, dateString) => {
        onChange(dateString || undefined);
      }}
      {...get(extraProps, 'props')}
    />
  );
};

export default DatePickerMw;
