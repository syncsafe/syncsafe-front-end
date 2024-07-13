import { gql } from "@apollo/client";
import { client } from "./graphql";

export async function getSafeWalletsForOwner(address: string) {
  const query = gql`
    query GetSafes {

    }
    `;

  //client.query{{}}
}
