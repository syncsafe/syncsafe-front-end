import { supportedChainId } from "@/utils/chainid";
import * as React from "react";
import Image from "next/image";

export function getExplorerDomain(chainId: number) {
  switch (chainId) {
    case supportedChainId.ethereum:
      return "https://eth.blockscout.com";

    case supportedChainId.arbitrum:
      return "https://arbitrum.blockscout.com";

    case supportedChainId.base:
      return "https://base.blockscout.com";

    case supportedChainId.linea:
      return "https://explorer.linea.build";

    case supportedChainId.scroll:
      return "https://scrollscan.com";
  }
}

export function shortenAddress(longAddress: string) {
  const beg = longAddress.substring(0, 6);
  const end = longAddress.substring(longAddress.length - 4);

  return `${beg}...${end}`;
}

export function clickAddress(
  address: string,
  chainId: number,
  isShortenAddress?: boolean
) {
  const _address = isShortenAddress ? shortenAddress(address) : address;

  return (
    <a
      href={`${getExplorerDomain(chainId)}/address/${address}`}
      target="_blank"
      rel="noreferrer"
      className="flex gap-2 items-center "
    >
      {_address}
      <Image
        src="/chains/blockscout.jpg"
        width={10}
        height={10}
        alt="Blockscout"
      />
    </a>
  );
}
