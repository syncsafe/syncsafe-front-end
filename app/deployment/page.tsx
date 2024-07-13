// Next
import Image from "next/image";
import Link from "next/link";

// Shadcn
import { Button } from "@/components/ui/button";

// NextUI
import { CircularProgress } from "@nextui-org/react";

// Lucide
import { CircleCheck } from "lucide-react";

export default function Deployment() {
  return (
    <main className="flex flex-col gap-6 p-24 items-center">
      <form className="grid w-full items-start gap-6 w-1/2">
        <fieldset className="grid gap-6 rounded-lg border py-4 px-8 flex items-center justify-center">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <CircularProgress color="warning" aria-label="Loading..." />
              <p className="flex gap-2">Deploying on Linea...</p>
            </div>
            <div className="flex items-center gap-4">
              <CircularProgress color="warning" aria-label="Loading..." />
              <p className="flex gap-2">Deploying on Arbitrum...</p>
            </div>
            <div className="flex items-center gap-4">
              <CircleCheck className="size-10" color="green" />

              <p className="flex gap-2">
                Deployed on{" "}
                <Image
                  src="/chains/ethereum.svg"
                  width={10}
                  height={10}
                  alt="Ethereum"
                />{" "}
                Ethereum
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Link href="/dashboard">
              <Button>Back to dashboard</Button>
            </Link>
          </div>
        </fieldset>
      </form>
    </main>
  );
}
