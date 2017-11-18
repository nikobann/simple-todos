import React from 'react';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import TodoList from './TodoList';

const link = new HttpLink({
  uri: 'https://api.graphcms.com/simple/v1/cja4wnnwa1w4m01697edo325m',
});
const cache = new InMemoryCache();
const client = new ApolloClient({ link, cache });

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h1>TODOs</h1>
      <TodoList />
    </div>
  </ApolloProvider>
);

export default App;
