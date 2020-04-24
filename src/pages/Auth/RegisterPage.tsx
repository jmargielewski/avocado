import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from 'react-router-dom';

const RegisterPage: FunctionComponent<RouteComponentProps> = (props): JSX.Element => {
  const {
    match: { path },
  } = props;

  return <div>{path}</div>;
};

export type RegisterPageType = typeof RegisterPage;

export default RegisterPage;
