"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        {/* <p>Hello Safe: {safe.safeAddress}</p>*/}

        <Link href="/dashboard">
          <Button>Launch App</Button>
        </Link>
      </div>
    </main>
  );
}
