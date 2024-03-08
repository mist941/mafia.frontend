import {ApolloClient, ApolloLink, HttpLink, InMemoryCache, split} from '@apollo/client';
import {onError} from '@apollo/client/link/error';
import {WebSocketLink} from '@apollo/client/link/ws';
import {getMainDefinition} from '@apollo/client/utilities';

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

const wsLink = new WebSocketLink({
  uri: process.env.REACT_APP_API_WS_URL as string,
  options: {
    reconnect: true,
    connectionParams: {
      Authorization: `Bearer ${localStorage.getItem('accessToken') || ''}`,
    },
  },
})

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({headers = {}}) => ({
    headers: {
      ...headers,
      authorization: `Bearer ${localStorage.getItem('accessToken') || ''}`,
    },
  }));

  return forward(operation);
});

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query)
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    )
  },
  wsLink,
  ApolloLink.from([errorLink, authLink, httpLink])
)

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});