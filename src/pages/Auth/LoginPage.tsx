import React, { FunctionComponent, useState } from 'react';
import { RouteComponentProps, Link, Redirect } from 'react-router-dom';

import useForm, { StateSchema, ValidationStateSchema } from './useForm';

import catchError, { ErrorMsg } from '../../utils/catchErrors';

import axios from '../../services';
import { routes } from '../../routes';
import { setToken, getToken } from '../../localStorage/token';

import Paragraph from '../../components/Elements/Paragraph';
import Input from '../../components/Elements/Input';

const INITIAL_ERROR: ErrorMsg[] = [];

const LoginPage: FunctionComponent<RouteComponentProps> = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const [apiErrors, setApiErrors] = useState(INITIAL_ERROR);

  // Define your state schema
  const userSchema: StateSchema = {
    email: { value: '', error: '' },
    password: { value: '', error: '' },
  };

  // Define your validationStateSchema
  // Note: validationStateSchema and stateSchema property
  // should be the same in-order validation works!
  const validationUserSchema: ValidationStateSchema = {
    email: {
      required: true,
      validator: {
        regEx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, // eslint-disable-line no-useless-escape,
        error: 'Invalid email format.',
      },
    },
    password: {
      required: true,
      validator: {
        regEx: /^(?=.{8,})/,
        error: 'Password must be eight characters or longer',
      },
    },
  };

  async function onSubmitForm(state: StateSchema): Promise<void> {
    try {
      setLoading(true);
      setApiErrors([]);

      const payload = { email: state.email.value, password: state.password.value };
      const response = await axios.post<{ token: string }>('/auth/signin', payload);

      setToken(response.data.token);
    } catch (error) {
      catchError(error, setApiErrors);
    } finally {
      setLoading(false);
    }
  }

  const { state, handleOnChange, handleOnSubmit, handleOnBlur, disable } = useForm(
    userSchema,
    validationUserSchema,
    onSubmitForm,
  );

  const handleInputError = (error: string): string => (error ? 'error' : '');

  const displayErrors = (error: ErrorMsg[] | string): JSX.Element[] => {
    if (typeof error === 'string') return [<p key={error}>{error}</p>];

    return error.map(({ message }) => <p key={message}>{message}</p>);
  };

  if (getToken()) return <Redirect to={routes.dashboard} />;

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleOnSubmit} autoComplete="off">
        <div className="field">
          <label htmlFor="email">
            Email
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={state.email.value}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              className={handleInputError(state.email.error)}
            />
            {displayErrors(state.email.error)}
          </label>
        </div>

        <div className="field">
          <label htmlFor="password">
            Password
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={state.password.value}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
              className={handleInputError(state.password.error)}
            />
            {displayErrors(state.email.error)}
          </label>
        </div>
        <p>
          <a href="/auth/google">Login with google</a>
        </p>
        <input type="submit" name="submit" disabled={loading || disable} />
        {displayErrors(apiErrors)}
      </form>
      <Paragraph>
        Do not have an account? Register
        <Link to="/register"> here.</Link>
      </Paragraph>
    </div>
  );
};

export type LoginPageType = typeof LoginPage;

export default LoginPage;
