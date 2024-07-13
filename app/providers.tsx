"use client";

import { FC } from "react";
import { NextUIProvider } from "@nextui-org/react";
import SafeProvider from "@safe-global/safe-apps-react-sdk";

const Providers: FC<any> = ({ children }) => {
  return (
    <NextUIProvider>
      <SafeProvider>{children}</SafeProvider>
    </NextUIProvider>
  );
};

export default Providers;
