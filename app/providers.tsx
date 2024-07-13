"use client";

import { FC } from "react";
import { NextUIProvider } from "@nextui-org/react";

const Providers: FC<any> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default Providers;
