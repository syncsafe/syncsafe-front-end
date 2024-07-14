"use client";

// Next
import Link from "next/link";

// Shadcn
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// NextUI
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Button as NextButton,
  useDisclosure,
} from "@nextui-org/react";

// Lucide
import {
  BadgePlus,
  CircleHelp,
  CopyPlus,
  Link as LinkIcon,
  Search,
} from "lucide-react";

// SDK
// import { useSafeAppsSDK } from "@safe-global/safe-apps-react-sdk";
import SafeSyncCard from "@/components/SafeSyncCard";
import { useSDK } from "@metamask/sdk-react";

// Local
import { supportedChainId } from "@/utils/chainid";
import { clickAddress } from "@/components/FormattedAddress";

export default function Home() {
  // const { sdk, connected, safe } = useSafeAppsSDK();
  const { sdk, account, connected, connecting, provider, chainId } = useSDK();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const mockedSafeSync = [
    {
      chains: [supportedChainId.ethereum, supportedChainId.arbitrum],
      signers: [
        "0x8d1b8a701b3ce393b63b1b29c39e22450cec5c21",
        "0x7d1b8a701b3ce393b63b1b29c39e22450cec5c21",
        "0x6d1b8a701b3ce393b63b1b29c39e22450cec5c21",
        "0x5d1b8a701b3ce393b63b1b29c39e22450cec5c21",
      ],
      status: [
        { chain: supportedChainId.ethereum, status: "loading" },
        { chain: supportedChainId.arbitrum, status: "ok" },
      ],
    },
    {
      chains: [
        supportedChainId.base,
        supportedChainId.linea,
        supportedChainId.scroll,
      ],
      signers: [
        "0x8d1b8a701b3ce393b63b1b29c39e22450cec5c21",
        "0x7d1b8a701b3ce393b63b1b29c39e22450cec5c21",
        "0x6d1b8a701b3ce393b63b1b29c39e22450cec5c21",
        "0x5d1b8a701b3ce393b63b1b29c39e22450cec5c21",
        "0x8d1b8a701b3ce393b63b1b29c39e22450cec5c21",
        "0x7d1b8a701b3ce393b63b1b29c39e22450cec5c21",
      ],
      status: [
        { chain: supportedChainId.base, status: "ok" },
        { chain: supportedChainId.linea, status: "ok" },
        { chain: supportedChainId.scroll, status: "error" },
      ],
    },
  ];

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
                    {/* <Link href="/linkSafe" className="w-1/2"> */}
                    <NextButton
                      className="w-full h-20 border-2 bg-white border-0 text-sm bg-gray-200 text-slate-700 flex flex-col w-1/2"
                      disabled
                    >
                      <LinkIcon className="size-4" />I already have a Safe
                      Wallet
                    </NextButton>
                    {/* </Link> */}
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
              <p>
                {account !== undefined &&
                  clickAddress(account, Number(chainId), true)}
              </p>
            </>
          ) : (
            <Button onClick={connect}>Connect wallet</Button>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-8">
        {mockedSafeSync.length > 0 ? (
          mockedSafeSync.map((safeSync, index) => (
            <SafeSyncCard
              name={"SafeSync n°" + (index + 1).toString()}
              chains={safeSync.chains}
              signers={safeSync.signers}
              threshold={2}
              status={safeSync.status}
            />
          ))
        ) : (
          <div className="flex flex-col gap-4 w-full items-center mt-60">
            <h1 className="text-xl">No SafeSync found 🍃</h1>
            <Link href="/newSafe">
              <Button>Create my first SafeSync</Button>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
