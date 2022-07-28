import { useMutation } from '@apollo/client';
import { LOGIN_CUSTOMER, REGISTER_CUSTOMER } from 'mutations/userMutations';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from './constants';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    login: true,
    email: '',
    password: '',
    name: ''
  });

  const [login] = useMutation(LOGIN_CUSTOMER, {
    variables: {
      email: formState.email,
      password: formState.password
    },
    onCompleted: ({ loginCustomer }) => {
      localStorage.setItem(AUTH_TOKEN, loginCustomer.token);
      navigate('/');
    }
  });

  const [signup] = useMutation(REGISTER_CUSTOMER, {
    variables: {
      email: formState.email,
      password: formState.password
    },
    onCompleted: ({ registerCustomer }) => {
      localStorage.setItem(AUTH_TOKEN, registerCustomer.token);
      navigate('/');
    }
  });

  return (
    <div>
      <h4 className="mv3">
        {formState.login ? 'Login' : 'Sign Up'}
      </h4>
      <div className="flex flex-column">
        <input
          value={formState.email}
          onChange={(e) =>
            setFormState({
              ...formState,
              email: e.target.value
            })
          }
          type="text"
          placeholder="Your email address"
        />
        <input
          value={formState.password}
          onChange={(e) =>
            setFormState({
              ...formState,
              password: e.target.value
            })
          }
          type="password"
          placeholder="Choose a safe password"
        />
      </div>
      <div className="flex mt3">
        <button
          className="pointer mr2 button"
          onClick={formState.login ? login: signup}
        >
          {formState.login ? 'login' : 'create account'}
        </button>
        <button
          className="pointer button"
          onClick={(e) =>
            setFormState({
              ...formState,
              login: !formState.login
            })
          }
        >
          {formState.login
            ? 'need to create an account?'
            : 'already have an account?'}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;