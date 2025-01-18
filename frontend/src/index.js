import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';
import {Provider} from 'react-redux'
import store  from './components/redux/store';

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
  <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);