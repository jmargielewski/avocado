import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

const LoginPage: FunctionComponent<RouteComponentProps> = (props): JSX.Element => {
  const {
    match: { path },
  } = props;

  return <div>{path}</div>;
};

export type LoginPageType = typeof LoginPage;

export default LoginPage;
