import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// Initialize the Apollo Client
export const client = new ApolloClient({
  uri: "https://your-graphql-endpoint.com/graphql",
  cache: new InMemoryCache(),
});
