import get from 'lodash/get';
import * as React from 'react';
import { AntdFormMiddlewareProps } from './share';

export const ExtraPropsMw: React.ComponentType<AntdFormMiddlewareProps> = (props) => {
  const {
    next,
    schemaPath,
    formProps: { extraProps },
  } = props;
  const ep = schemaPath.length ? get(extraProps, schemaPath) : extraProps;
  return ep === props.extraProps ? next(props) : next({ ...props, extraProps: ep });
};

export default ExtraPropsMw;
