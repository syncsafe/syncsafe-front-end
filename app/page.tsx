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

        <button
          onClick={async () => {
            const response = await sdk.safe.requestAddressBook();
            console.log("Safe call response:", response);
          }}
        >
          Safe trigger
        </button>

        <Link href="/dashboard">
          <Button>Launch App</Button>
        </Link>
      </div>
    </main>
  );
}
