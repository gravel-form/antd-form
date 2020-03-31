import get from 'lodash/get';
import * as React from 'react';
import { AntdFormMiddlewareProps } from '../share';

export function withName(
  list: [string, React.ComponentType<AntdFormMiddlewareProps>][]
): React.FC<AntdFormMiddlewareProps>[] {
  return list.map(([name, Component]) => {
    return (props: AntdFormMiddlewareProps) => {
      if (get(props.extraProps, 'component') !== name) return props.next(props);
      return <Component {...props} />;
    };
  });
}

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
