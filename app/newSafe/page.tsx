"use client";

// Next
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

// Shadcn
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// NextUI
import { Badge } from "@nextui-org/badge";
import { Input as NextInput } from "@nextui-org/react";
import { Button as NextButton } from "@nextui-org/button";

// Lucide
import { Check, ChevronLeft, Plus, Trash2 } from "lucide-react";
import { supportedChainId } from "@/utils/chainid";

interface Signer {
  name: string;
  address: string;
}

export default function NewSafe() {
  const [safeName, setSafeName] = useState("");
  const [signers, setSigners] = useState<Signer[]>([{ name: "", address: "" }]);
  const [threshold, setThreshold] = useState<number>();
  const [deployOnEth, setDeployOnEth] = useState(false);
  const [deployOnArb, setDeployOnArb] = useState(false);
  const [deployOnBase, setDeployOnBase] = useState(false);
  const [deployOnScroll, setDeployOnScroll] = useState(false);
  const [deployOnLinea, setDeployOnLinea] = useState(false);

  function handleInputChange(
    index: number,
    event: ChangeEvent<HTMLInputElement>,
    field: "name" | "address"
  ) {
    const value = event.target.value;

    setSigners((prevSigners) => {
      const newSigners = [...prevSigners];
      newSigners[index] = {
        ...newSigners[index],
        [field]: value,
      };
      return newSigners;
    });
  }

  function handleAddSigner() {
    setSigners([...signers, { name: "", address: "" }]);
  }

  function handleRemoveSigner(index: number) {
    if (signers.length > 1) {
      setSigners((prevSigners) => prevSigners.filter((_, i) => i !== index));
    }
  }

  return (
    <main className="flex flex-col gap-6 p-24">
      <div className="bg-white flex flex-col gap-6 p-12 mx-10 my-6 bg-white rounded-lg">
        <Link href="/">
          <Button variant="outline" size="icon" className="h-7 w-7">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Back</span>
          </Button>
        </Link>
        <form className="grid w-full items-start gap-6">
          <fieldset className="grid gap-6 rounded-lg border py-4 px-8">
            <legend className="-ml-1 px-1 text-sm font-medium">
              Create a SafeSync
            </legend>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <div>
                  <h1 className="text-xl font-bold">Name</h1>
                  <p>Choose the name of your Safe Account.</p>
                </div>
                <NextInput type="text" label="Name" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Signers</h1>
                <p>Set the signer wallets of your Safe Account.</p>
              </div>
              <div className="flex flex-col gap-4">
                {signers.map((signer, index) => (
                  <div key={index} className="flex flex-row gap-3 items-center">
                    <p className="w-1/4">Signer {index + 1}</p>
                    <NextInput
                      type="text"
                      label="Name"
                      value={signer.name}
                      onChange={(event) =>
                        handleInputChange(index, event, "name")
                      }
                    />
                    <NextInput
                      type="text"
                      label="Address"
                      value={signer.address}
                      onChange={(event) =>
                        handleInputChange(index, event, "address")
                      }
                    />
                    {signers.length > 1 && (
                      <NextButton
                        className="bg-black"
                        onClick={() => handleRemoveSigner(index)}
                      >
                        <Trash2 className="size-4 text-white" />
                      </NextButton>
                    )}
                  </div>
                ))}
                <div>
                  <NextButton
                    className="flex gap-2"
                    onClick={handleAddSigner}
                    variant="flat"
                  >
                    <Plus className="size-4" />
                    <p>Add new signer</p>
                  </NextButton>
                </div>
              </div>
            </div>

            <div>
              <div>
                <h1 className="text-xl font-bold">Threshold</h1>
                <p>Any transaction requires the confirmation of...</p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="1" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {signers.map((signer, index) => (
                        <SelectItem value={(index + 1).toString()}>
                          {index + 1}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                out of {signers.length} signer(s)
              </div>
            </div>

            <div className="grid gap-3">
              <div>
                <h1 className="text-xl font-bold">Chains</h1>
                <p>Choose the chains you want to deploy on.</p>
              </div>
              <div className="flex gap-5">
                <Badge
                  isOneChar
                  isInvisible={!deployOnEth}
                  content={<Check className="size-4" />}
                  placement="bottom-right"
                  className="text-white bg-black w-8 h-8"
                >
                  <Card
                    className="w-[150px] h-[150px] flex flex-col items-center p-6"
                    onClick={() => setDeployOnEth(!deployOnEth)}
                  >
                    <CardContent className="flex justify-center items-center h-2/3">
                      <Image
                        src="/chains/ethereum.svg"
                        width={25}
                        height={25}
                        alt="Ethereum"
                      />
                    </CardContent>
                    <CardFooter className="text-sm p-0 h-1/3">
                      Ethereum
                    </CardFooter>
                  </Card>
                </Badge>
                <Badge
                  isOneChar
                  isInvisible={!deployOnArb}
                  content={<Check className="size-4" />}
                  placement="bottom-right"
                  className="text-white bg-black w-8 h-8"
                >
                  <Card
                    className="w-[150px] h-[150px] flex flex-col items-center p-6"
                    onClick={() => setDeployOnArb(!deployOnArb)}
                  >
                    <CardContent className="flex justify-center items-center h-2/3">
                      <Image
                        src="/chains/arbitrum.svg"
                        width={25}
                        height={25}
                        alt="Arbitrum"
                      />
                    </CardContent>
                    <CardFooter className="text-sm h-1/3">Arbitrum</CardFooter>
                  </Card>
                </Badge>
                <Badge
                  isOneChar
                  isInvisible={!deployOnLinea}
                  content={<Check className="size-4" />}
                  placement="bottom-right"
                  className="text-white bg-black w-8 h-8"
                >
                  <Card
                    className="w-[150px] h-[150px] flex flex-col items-center p-6"
                    onClick={() => {
                      setDeployOnLinea(!deployOnLinea);
                    }}
                  >
                    <CardContent className="flex justify-center items-center h-2/3">
                      <Image
                        src="/chains/linea.svg"
                        width={25}
                        height={25}
                        alt="Linea"
                      />
                    </CardContent>
                    <CardFooter className="text-sm h-1/3">Linea</CardFooter>
                  </Card>
                </Badge>
                <Badge
                  isOneChar
                  isInvisible={!deployOnScroll}
                  content={<Check className="size-4" />}
                  placement="bottom-right"
                  className="text-white bg-black w-8 h-8"
                >
                  <Card
                    className="w-[150px] h-[150px] flex flex-col items-center p-6"
                    onClick={() => setDeployOnScroll(!deployOnScroll)}
                  >
                    <CardContent className="flex justify-center items-center h-2/3">
                      <Image
                        src="/chains/scroll.svg"
                        width={25}
                        height={25}
                        alt="Scroll"
                      />
                    </CardContent>
                    <CardFooter className="text-sm h-1/3">Scroll</CardFooter>
                  </Card>
                </Badge>
                <Badge
                  isOneChar
                  isInvisible={!deployOnBase}
                  content={<Check className="size-4" />}
                  placement="bottom-right"
                  className="text-white bg-black w-8 h-8"
                >
                  <Card
                    className="w-[150px] h-[150px] flex flex-col items-center p-6"
                    onClick={() => setDeployOnBase(!deployOnBase)}
                  >
                    <CardContent className="flex justify-center items-center h-2/3">
                      <Image
                        src="/chains/base.svg"
                        width={25}
                        height={25}
                        alt="Base"
                      />
                    </CardContent>
                    <CardFooter className="text-sm h-1/3">Base</CardFooter>
                  </Card>
                </Badge>
              </div>
            </div>
            <div className="flex flex-row-reverse">
              <Link href="/">
                <Button>Deploy</Button>
              </Link>
            </div>
          </fieldset>
        </form>
      </div>
    </main>
  );
}
