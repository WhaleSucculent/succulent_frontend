import { useHistory, useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from 'pages/LoginPage/constants';
import { useApolloClient } from '@apollo/client';

const useAuthUser = () => {
  const client = useApolloClient();
  const navigate = useNavigate();


  const setAuthUser = (token) => {
    localStorage.setItem(AUTH_TOKEN, token);
    navigate('/')
  };

  const logoutCustomer = () => {
    client.resetStore();
    localStorage.clear();
    navigate('/loginPage')
  };

  return { logoutCustomer, setAuthUser };
};

export default useAuthUser;
