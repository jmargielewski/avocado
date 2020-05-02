import React, { FunctionComponent } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';

const RegisterPage: FunctionComponent<RouteComponentProps> = (props): JSX.Element => {
  const {
    match: { path },
  } = props;

  return (
    <div>
      <h2>{path}</h2>
      <div>
        <div className="field">
          <label htmlFor="email">
            email
            <input id="email" type="email" />
          </label>
        </div>

        <div className="field">
          <label htmlFor="password">
            password
            <input id="password" type="passport" />
          </label>
        </div>

        <button type="submit">Register</button>
        <p>
          You already have an account? Login
          <Link to="/login"> here.</Link>
        </p>
      </div>
    </div>
  );
};

export type RegisterPageType = typeof RegisterPage;

export default RegisterPage;
