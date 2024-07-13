"use client";

import { FC } from "react";
import { NextUIProvider } from "@nextui-org/react";
import SafeProvider from "@safe-global/safe-apps-react-sdk";

const Providers: FC<any> = ({ children }) => {
  return (
    <SafeProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </SafeProvider>
  );
};

export default Providers;
