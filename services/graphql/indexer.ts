import { gql } from "@apollo/client";
import { client } from "./graphql";

export async function getSafeWalletsForOwner() {
  const query = gql`
    {
      syncSafes {
        items {
          id
          owners
          threshold
          chains
          chainsSafe {
            items {
              id
              chainId
              address
              localOwners
              localThreshold
            }
          }
        }
      }
    }
  `;

  try {
    const response = await client.query({ query });
    return response.data.syncSafes.items;
  } catch (error) {
    console.error("Error fetching safe wallets:", error);
    throw new Error("Could not fetch safe wallets");
  }
}
