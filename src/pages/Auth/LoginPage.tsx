import React, { FunctionComponent, useState, ChangeEvent, FormEvent } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import axios from 'axios';

import catchError, { ErrorMsg } from '../../utils/catchErrors';
import { config } from '../../utils/config';

import Paragraph from '../../components/Paragraph';

const INITIAL_USER: User = {
  email: '',
  password: '',
};

const INITIAL_ERROR: ErrorMsg[] = [];

interface User {
  email: string;
  password: string;
}

const LoginPage: FunctionComponent<RouteComponentProps> = (props): JSX.Element => {
  const [user, setUser] = useState(INITIAL_USER);
  const [errors, setErrors] = useState(INITIAL_ERROR);
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const isFormValid = ({ email, password }: User): boolean => !!email && !!password;
  // const isFormValid = (): boolean => Object.values(user).every((el: string) => Boolean(el));

  React.useEffect(() => {
    if (isFormValid(user)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [user]);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;

    setUser((prevState) => ({ ...prevState, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (isFormValid(user)) {
      try {
        setLoading(true);
        setErrors([]);
        const url = `${config.API}/auth/signin`;
        const payload = { ...user };
        const response = await axios.post(url, payload);
        console.log('response', response);
        // handleLogin(response.data);
      } catch (error) {
        catchError(error, setErrors);
      } finally {
        setLoading(false);
      }
    }
  }

  const handleInputError = (errs: ErrorMsg[], inputName: string): string =>
    errs.some((err) => err.message.toLowerCase().includes(inputName)) ? 'error' : '';

  const displayErrors = (errs: ErrorMsg[]): JSX.Element[] =>
    errs.map(({ message }) => <p key={message}>{message}</p>);

  const {
    match: { path },
  } = props;

  return (
    <div>
      <h2>{path}</h2>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="email">
            Email
            <input
              id="email"
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className={handleInputError(errors, 'email')}
            />
          </label>
        </div>

        <div className="field">
          <label htmlFor="password">
            Password
            <input
              id="password"
              type="passport"
              name="password"
              value={user.password}
              onChange={handleChange}
              className={handleInputError(errors, 'password')}
            />
          </label>
        </div>

        <button onClick={(): void => {}} type="submit" disabled={disabled || loading}>
          Login
        </button>
      </form>
      {errors.length > 0 && (
        <div>
          Error
          {displayErrors(errors)}
        </div>
      )}
      <Paragraph>
        Do not have an account? Register
        <Link to="/register"> here.</Link>
      </Paragraph>
    </div>
  );
};

export type LoginPageType = typeof LoginPage;

export default LoginPage;
