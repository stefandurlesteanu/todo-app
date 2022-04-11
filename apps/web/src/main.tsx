import { StrictMode } from 'react';

import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from '@apollo/client';
import { GlobalStyle } from './app/styles/global.style';

const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
