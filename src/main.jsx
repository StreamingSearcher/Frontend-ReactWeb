import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { URL_GraphQL } from './config/config.js';

const client = new ApolloClient({
  uri: URL_GraphQL,
  cache: new InMemoryCache(),
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider  client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
)
