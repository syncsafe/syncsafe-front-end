import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// Initialize the Apollo Client
export const client = new ApolloClient({
  uri: "https://indexer-production-b662.up.railway.app/",
  cache: new InMemoryCache(),
});
