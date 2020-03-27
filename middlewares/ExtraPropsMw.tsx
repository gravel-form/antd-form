import get from 'lodash/get';
import * as React from 'react';
import { AntdFormMiddlewareProps } from './share';

export const ExtraPropsMw: React.ComponentType<AntdFormMiddlewareProps> = (props) => {
  const {
    next,
    schemaPath,
    formProps: { extraProps },
  } = props;
  const ep = get(extraProps, schemaPath);
  return ep ? next({ ...props, extraProps: ep }) : next(props);
};

export default ExtraPropsMw;
