import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

// Initialize the Apollo Client
export const client = new ApolloClient({
  uri: "https://mainnet-indexer-production.up.railway.app/",
  cache: new InMemoryCache(),
});
