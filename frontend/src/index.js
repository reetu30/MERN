import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import {Provider} from 'react-redux'
import store  from './components/redux/store';
import { AuthProvider } from './components/context/AuthContext';

ReactDOM.render(
  // <React.StrictMode>
  <AuthProvider>
  <ApolloProvider client={client}>
  <Provider store={store}>
      <App />
    </Provider>
    </ApolloProvider>,
    </AuthProvider>,
  // </React.StrictMode>,
  document.getElementById('root')
);