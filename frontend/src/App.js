import React from 'react';
import Navigation from './routes';
import './App.css';
import './styles/index.css';
// import { ApolloProvider } from '@apollo/client';
// import client from './apolloClient.js';

function App() {
    return (
        // <ApolloProvider client={client}>
        <div>
            <Navigation />
        </div>
        // </ApolloProvider>
    );
}

export default App;