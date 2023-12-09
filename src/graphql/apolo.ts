import {ApolloClient, ApolloLink, concat, HttpLink, InMemoryCache} from '@apollo/client';
import {onError} from '@apollo/client/link/error';

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_API_URL,
});

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
  if (graphQLErrors) {
    for (const err of graphQLErrors) {
      if (err.extensions?.code === 'UNAUTHENTICATED') {
        //
      }
    }
  }
  return forward(operation);
});

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({headers = {}}) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${localStorage.getItem('token') || ''}`,
    },
  }));

  return forward(operation);
});

export const client = new ApolloClient({
  link: concat(errorLink, concat(authLink, httpLink)),
  cache: new InMemoryCache(),
});