import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from 'pages/CheckoutPage/store/store';
import { client } from 'graphql/apolloClient';
import { ApolloProvider } from '@apollo/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { theme } from 'theme';
import { changeLanguage, initI18n } from './services/i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));


const defaultLanguage = 'en-GB';
initI18n(process.env.PUBLIC_URL + '/i18n/{{lng}}.json', defaultLanguage);
changeLanguage(defaultLanguage);



root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <CssBaseline/>          
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </ApolloProvider>
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
