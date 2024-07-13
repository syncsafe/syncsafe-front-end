"use client";

import { FC } from "react";
import { NextUIProvider } from "@nextui-org/react";
import SafeProvider from "@safe-global/safe-apps-react-sdk";
import { MetaMaskProvider } from "@metamask/sdk-react";

const Providers: FC<any> = ({ children }) => {
  return (
    <MetaMaskProvider
      debug={false}
      sdkOptions={{
        dappMetadata: {
          name: "SafeSync",
          url: window.location.href,
        },
        // infuraAPIKey: process.env.INFURA_API_KEY,
      }}
    >
      <SafeProvider>
        <NextUIProvider>{children}</NextUIProvider>
      </SafeProvider>
    </MetaMaskProvider>
  );
};

export default Providers;
