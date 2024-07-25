"use client";

import { FC } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { MetaMaskProvider } from "@metamask/sdk-react";

import { createConfig, http, WagmiProvider } from "wagmi";
import { mainnet, sepolia, arbitrum, base, linea } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const MetaMaskOptions = {
  dappMetadata: {
    name: "Example Wagmi dapp",
  },
  infuraAPIKey: process.env.NEXT_PUBLIC_INFURA_API_KEY,
};

export const config = createConfig({
  chains: [mainnet, arbitrum, base, linea],
  connectors: [
    metaMask(MetaMaskOptions),
    // Other connectors
  ],
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
    [linea.id]: http(),
  },
});

const Providers: FC<any> = ({ children }) => {
  // if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MetaMaskProvider
        debug={true}
        sdkOptions={{
          dappMetadata: {
            name: "SyncSafe",
            url:
              typeof window === "undefined" ? undefined : window.location.href,
          },
          infuraAPIKey: process.env.NEXT_PUBLIC_INFURA_API_KEY,
        }}
      >
        <WagmiProvider config={config}>
          <NextUIProvider>{children}</NextUIProvider>
        </WagmiProvider>
      </MetaMaskProvider>
    </QueryClientProvider>
  );
  // }
};

export default Providers;
