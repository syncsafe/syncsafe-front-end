"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSafeAppsSDK } from "@safe-global/safe-apps-react-sdk";

export default function Home() {
  const { sdk, connected, safe } = useSafeAppsSDK();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <p>Hello Safe: {safe.safeAddress}</p>

        <Link href="https://app.safe.global/share/safe-app?appUrl=https%3A%2F%2Fsyncsafe-safe-front-end.vercel.app&chain=eth">
          <Button>Launch App</Button>
        </Link>
      </div>
    </main>
  );
}
