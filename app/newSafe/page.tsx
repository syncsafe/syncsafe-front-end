// Next
import Image from "next/image";
import Link from "next/link";

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

// Lucide
import { Check, ChevronLeft, Plus, Trash2 } from "lucide-react";

export default function NewSafe() {
  return (
    <main className="flex flex-col gap-6 p-24">
      <Link href="/dashboard">
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
              <div className="flex flex-row gap-3 items-center">
                <p className="w-1/4">Signer 1</p>
                <NextInput type="text" label="Name" />
                <NextInput type="text" label="Address" />
                <Button>
                  <Trash2 className="size-4" />
                </Button>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <p className="w-1/4">Signer 2</p>
                <NextInput type="text" label="Name" />
                <NextInput type="text" label="Address" />
                <Button>
                  <Trash2 className="size-4" />
                </Button>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <p className="w-1/4">Signer 3</p>
                <NextInput type="text" label="Name" />
                <NextInput type="text" label="Address" />
                <Button>
                  <Trash2 className="size-4" />
                </Button>
              </div>
              <div>
                <Button variant="ghost" className="flex gap-2">
                  <Plus className="size-4" />
                  <p>Add new signer</p>
                </Button>
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
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              out of 4 signer(s)
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
                isInvisible={false}
                content={<Check className="size-4" />}
                placement="bottom-right"
                className="text-white bg-black w-8 h-8"
              >
                <Card className="w-[150px] h-[150px] flex flex-col items-center p-6">
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
                isInvisible={false}
                content={<Check className="size-4" />}
                placement="bottom-right"
                className="text-white bg-black w-8 h-8"
              >
                <Card className="w-[150px] h-[150px] flex flex-col items-center p-6">
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
                isInvisible={false}
                content={<Check className="size-4" />}
                placement="bottom-right"
                className="text-white bg-black w-8 h-8"
              >
                <Card className="w-[150px] h-[150px] flex flex-col items-center p-6">
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
                isInvisible={false}
                content={<Check className="size-4" />}
                placement="bottom-right"
                className="text-white bg-black w-8 h-8"
              >
                <Card className="w-[150px] h-[150px] flex flex-col items-center p-6">
                  <CardContent className="flex justify-center items-center h-2/3">
                    <Image
                      src="/chains/polygon.svg"
                      width={25}
                      height={25}
                      alt="Polygon"
                    />
                  </CardContent>
                  <CardFooter className="text-sm h-1/3">Polygon</CardFooter>
                </Card>
              </Badge>
              <Badge
                isOneChar
                isInvisible={false}
                content={<Check className="size-4" />}
                placement="bottom-right"
                className="text-white bg-black w-8 h-8"
              >
                <Card className="w-[150px] h-[150px] flex flex-col items-center p-6">
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
            <Button>Deploy</Button>
          </div>
        </fieldset>
      </form>
    </main>
  );
}
