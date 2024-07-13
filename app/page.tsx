"use client";

// Next
import Link from "next/link";
import React, { useEffect, useState } from "react";

// Shadcn
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button, Button as ShadButton } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// NextUI
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  Button as NextButton,
} from "@nextui-org/react";

// Lucide
import { Search } from "lucide-react";
import {
  CopyPlus,
  BadgePlus,
  Link as LinkIcon,
  Pencil,
  CircleHelp,
} from "lucide-react";

// SDK
import { useSafeAppsSDK } from "@safe-global/safe-apps-react-sdk";
import { useSDK } from "@metamask/sdk-react";

export default function Home() {
  // const { sdk, connected, safe } = useSafeAppsSDK();
  const { sdk, account, connected, connecting, provider, chainId } = useSDK();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const connect = async () => {
    try {
      await sdk?.connect();
    } catch (err) {
      alert("Failed to connect. Please try again.");
    }
  };

  return (
    <main className="flex flex-col justify-between gap-14 p-12">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-3">
          <NextButton
            onPress={onOpen}
            className="bg-black text-white rounded-md"
          >
            <CopyPlus className="size-4" />
            New
          </NextButton>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1 text-center">
                    Create a new SafeSync
                  </ModalHeader>
                  <ModalBody className="flex flex-row items-center justify-center mb-2">
                    <Link href="/linkSafe" className="w-1/2">
                      <NextButton className="w-full h-20 border-2 bg-white border-0 text-sm bg-black text-white flex flex-col">
                        <LinkIcon className="size-4" />I already have a Safe
                        Wallet
                      </NextButton>
                    </Link>
                    <Link href="/newSafe" className="w-1/2">
                      <NextButton className="w-full h-20 border-2 bg-white border-0 text-sm bg-green-400 text-white flex flex-col">
                        <BadgePlus className="size-4" />I want to create a new
                        one
                      </NextButton>
                    </Link>
                  </ModalBody>
                </>
              )}
            </ModalContent>
          </Modal>
          <Link href="https://www.youtube.com">
            <NextButton className="rounded-md" variant="flat">
              <CircleHelp className="size-4" />
              How to use SafeSync
            </NextButton>
          </Link>
        </div>

        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
          />
        </div>

        <div className="flex items-center justify-center gap-2">
          {connected ? (
            <>
              <p>{account}</p>
              <Avatar>
                <AvatarImage src="" alt="" />
                <AvatarFallback>{chainId}</AvatarFallback>
              </Avatar>
            </>
          ) : (
            <Button onClick={connect}>Connect wallet</Button>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-8">
        <Card className="w-[350px] flex flex-col justify-between">
          <CardHeader>
            <CardTitle>SafeSync n°1</CardTitle>
            <CardDescription>
              Deployed on Ethereum ♢, Arbitrum ⚬, Linea
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Some informations about your SafeSync...</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <ShadButton>See more</ShadButton>
            <ShadButton variant="secondary" className="flex gap-2" disabled>
              <Pencil className="size-3" />
              Edit
            </ShadButton>
          </CardFooter>
        </Card>
        <Card className="w-[350px] flex flex-col justify-between">
          <CardHeader>
            <CardTitle>SafeSync n°2</CardTitle>
            <CardDescription>
              Deployed on Gnosis Chain, Arbitrum ⚬ and Linea
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Some informations about your SafeSync...</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <ShadButton>See more</ShadButton>
            <ShadButton variant="secondary" className="flex gap-2" disabled>
              <Pencil className="size-3" />
              Edit
            </ShadButton>
          </CardFooter>
        </Card>
        <Card className="w-[350px] flex flex-col justify-between">
          <CardHeader>
            <CardTitle>SafeSync n°3</CardTitle>
            <CardDescription>
              Deployed on Ethereum ♢, Arbitrum ⚬, Linea
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Some informations about your SafeSync...</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <ShadButton>See more</ShadButton>
            <ShadButton variant="secondary" className="flex gap-2" disabled>
              <Pencil className="size-3" />
              Edit
            </ShadButton>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
