"use client";

import { FC } from "react";
import { NextUIProvider } from "@nextui-org/react";
import SafeProvider from "@safe-global/safe-apps-react-sdk";
import { MetaMaskProvider } from "@metamask/sdk-react";

import { createConfig, http } from "wagmi";
import {
  mainnet,
  sepolia,
  arbitrum,
  arbitrumSepolia,
  base,
  baseSepolia,
  scroll,
  scrollSepolia,
  linea,
  lineaSepolia,
} from "wagmi/chains";
import { metaMask } from "wagmi/connectors";

const MetaMaskOptions = {
  dappMetadata: {
    name: "Example Wagmi dapp",
  },
  //infuraAPIKey: "YOUR-API-KEY",
  // Other options.
};

export const config = createConfig({
  chains: [mainnet, sepolia],
  connectors: [
    metaMask(MetaMaskOptions),
    // Other connectors
  ],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [arbitrum.id]: http(),
    [arbitrumSepolia.id]: http(),
    [base.id]: http(),
    [baseSepolia.id]: http(),
    [scroll.id]: http(),
    [scrollSepolia.id]: http(),
    [linea.id]: http(),
    [lineaSepolia.id]: http(),
  },
});

const Providers: FC<any> = ({ children }) => {
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    return (
      <MetaMaskProvider
        debug={false}
        sdkOptions={{
          dappMetadata: {
            name: "SafeSync",
            url: window.location.href,
          },
          // infuraAPIKey: process.env.INFURA_API_KEY,
        }}>
        <SafeProvider>
          <NextUIProvider>{children}</NextUIProvider>
        </SafeProvider>
      </MetaMaskProvider>
    );
  }
};

export default Providers;
