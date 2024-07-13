"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSafeAppsSDK } from "@safe-global/safe-apps-react-sdk";

export default function Home() {
  const { sdk, connected, safe } = useSafeAppsSDK();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/dashboard">
        <p>Hello Safe: {safe.safeAddress}</p>

        <Button>Launch (from Safe)</Button>

        <Button>Connect wallet</Button>
      </Link>
    </main>
  );
}
