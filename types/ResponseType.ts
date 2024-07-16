import { SupportedChainID } from "@/utils/chainid";
import { Address } from "viem";

type SyncSafe = {
  id: string;
  chainId: string;
  address: Address;
  localOwners: Address[];
  localThreshold: number;
};

export type IndexerResponse = {
  id: string;
  signers: Address[];
  threshold: number;
  chains: SupportedChainID[];
  syncSafes: SyncSafe[];
};
