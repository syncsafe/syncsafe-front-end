import DeploymentBox from "@/components/DeploymentBox";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function Deployment() {
  return (
    <main className="flex flex-col gap-6 p-24 items-center">
      {/* <DeploymentBox /> */}
      <Link href="/">
        <Button>Back to dashboard</Button>
      </Link>
    </main>
  );
}
