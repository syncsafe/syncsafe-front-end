// Next
import Image from "next/image";
import Link from "next/link";

// Shadcn
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// NextUI
import { Badge } from "@nextui-org/react";

// Lucide
import {
  BookHeart,
  BriefcaseBusiness,
  Check,
  ChevronLeft,
  UsersRound,
} from "lucide-react";

export default function linkSafe() {
  return (
    <main className="flex flex-col gap-6 p-24">
      <Link href="/dashboard">
        <Button variant="outline" size="icon" className="h-7 w-7">
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>
      </Link>
      <form className="grid w-full items-start gap-6">
        <fieldset className="grid gap-6 rounded-lg border p-4">
          <legend className="-ml-1 px-1 text-sm font-medium">
            Create a SafeSync
          </legend>
          <div className="grid gap-3">
            <Label htmlFor="signerAddress">Signer</Label>
            <Input
              id="signerAddress"
              type="text"
              placeholder="0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5"
              disabled
            />
          </div>
          <div>
            <Label htmlFor="safeSelector">Select a Safe Account</Label>
            <Select>
              <SelectTrigger
                id="safeSelector"
                className="items-start [&_[data-description]]:hidden"
              >
                <SelectValue placeholder="Select a Safe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="addr1">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <BookHeart className="size-5" />
                    <div className="grid gap-0.5">
                      <p className="font-medium text-black">
                        Personnal ($2898.37) - 4 signers - Recovery
                      </p>
                      <p
                        className="text-xs flex gap-1 items-center"
                        data-description
                      >
                        <Image
                          src="/chains/ethereum.svg"
                          width={6}
                          height={6}
                          alt="Ethereum"
                        />
                        0x8a6AF0d7B9...1011B06a5F2
                      </p>
                    </div>
                  </div>
                </SelectItem>
                <SelectItem value="addr2">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <BriefcaseBusiness className="size-5" />
                    <div className="grid gap-0.5">
                      <p className="font-medium text-black">
                        Company ($13283.37) - 3 signers
                      </p>
                      <p
                        className="text-xs flex gap-1 items-center"
                        data-description
                      >
                        <Image
                          src="/chains/polygon.svg"
                          width={6}
                          height={6}
                          alt="Polygon"
                        />
                        0x8a6AF0d7B9...1011B06a5F2
                      </p>
                    </div>
                  </div>
                </SelectItem>
                <SelectItem value="addr3">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <UsersRound className="size-5" />
                    <div className="grid gap-0.5">
                      <p className="font-medium text-black">
                        Family ($82.2) - 2 signers
                      </p>
                      <p
                        className="text-xs flex gap-1 items-center"
                        data-description
                      >
                        <Image
                          src="/chains/arbitrum.svg"
                          width={6}
                          height={6}
                          alt="Arbitrum"
                        />
                        0x8a6AF0d7B9...1011B06a5F2
                      </p>
                    </div>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-3">
              <Label htmlFor="availableChains">Duplicate your Safe on</Label>
              <div id="availableChains" className="flex gap-5">
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
                      <CardFooter className="text-sm h-1/3">
                        Arbitrum
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
            </div>
          </div>
          <div className="flex flex-row-reverse">
            <Link href="deployment">
              <Button>Deploy</Button>
            </Link>
          </div>
        </fieldset>
      </form>
    </main>
  );
}
