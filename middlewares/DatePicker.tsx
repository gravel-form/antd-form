import * as React from 'react';
import _ from 'lodash';
import { DatePicker } from 'antd';
import { AntdFormMiddlewareProps } from './share';
import moment from 'moment';

export const DatePickerMw: React.ComponentType<AntdFormMiddlewareProps> = (props) => {
  const { next, schema, data, onChange, extraProps } = props;

  if (typeof schema === 'boolean' || schema.type !== 'string' || _.get(extraProps, 'component') !== 'DatePicker')
    return next(props);

  return (
    <DatePicker
      style={{ width: '100%' }}
      value={typeof data === 'string' ? moment(data) : null}
      onChange={(_, dateString) => {
        onChange(dateString || undefined);
      }}
      {..._.get(extraProps, 'props')}
    />
  );
};

export default DatePickerMw;
