"use client";

// Next
import Link from "next/link";
import Image from "next/image";

// Shadcn
import { Button } from "@/components/ui/button";

// NextUI
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Button as NextButton,
  useDisclosure,
  ScrollShadow,
} from "@nextui-org/react";

// Lucide
import {
  BadgePlus,
  CircleHelp,
  CopyPlus,
  Link as LinkIcon,
} from "lucide-react";

// SDK
import SyncSafeCard from "@/components/SyncSafeCard";
import { useSDK } from "@metamask/sdk-react";

// Local
import { clickAddress } from "@/components/FormattedAddress";
import { useEffect, useState } from "react";
import { getSafeWalletsForOwner } from "@/services/graphql/indexer";

export default function Home() {
  const { sdk, account, connected, connecting, provider, chainId } = useSDK();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [syncSafes, setSyncSafes] = useState([] as any[]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getSafeWalletsForOwner();
        console.log("res", response);
        const data = response?.map((safe: any) => {
          return {
            chains: safe.chains,
            signers: safe.owners,
            status: safe.chainsSafe.items.map((chainSafe: any) => {
              return {
                chain: chainSafe.chainId,
                status:
                  chainSafe.localThreshold !== safe.threshold ||
                  !chainSafe.localOwners.every((a: any) =>
                    safe.owners.some(
                      (b: any) => a?.toLowerCase() === b?.toLowerCase()
                    )
                  )
                    ? "sent"
                    : "done",
              };
            }),
          };
        });
        setSyncSafes(data);
        console.log("indexer call response: ", response);
      } catch (error) {
        console.error("Error fetching safe wallets:", error);
      }
    };

    fetchData();
  }, []);

  console.log(syncSafes);

  const connect = async () => {
    try {
      await sdk?.connect();
    } catch (err) {
      alert("Failed to connect. Please try again.");
    }
  };

  return (
    <main className="flex flex-col justify-between gap-14 p-12 min-h-screen">
      <div className="flex flex-col gap-14 p-12 mx-10 my-6 bg-white h-[750px] rounded-lg">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-3">
            <div className="flex flex-col gap-2">
              <NextButton
                onPress={onOpen}
                className="bg-black text-white rounded-md"
              >
                <CopyPlus className="size-4" />
                New
              </NextButton>
              <Link href="https://www.youtube.com">
                <NextButton className="rounded-md" variant="flat">
                  <CircleHelp className="size-4" />
                  How to use SyncSafe
                </NextButton>
              </Link>
            </div>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1 text-center">
                      Create a new SyncSafe
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
          </div>

          <div>
            <Image
              src="/logo/syncsafe-full-logo.svg"
              width={150}
              height={150}
              alt="SyncSafe logo"
            />
          </div>

          <div className="flex justify-center gap-2">
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

        <ScrollShadow className="flex flex-wrap gap-8">
          {syncSafes.length > 0 ? (
            syncSafes
              .filter((syncSafe) => {
                return syncSafe.signers.includes(account);
              })
              .map((syncSafe: any, index) => (
                <SyncSafeCard
                  name={"SyncSafe n°" + (index + 1).toString()}
                  chains={syncSafe.chains}
                  signers={syncSafe.signers}
                  threshold={2}
                  status={syncSafe.status}
                />
              ))
          ) : (
            <div className="flex flex-col gap-4 w-full items-center mt-44">
              <h1 className="text-xl">No SyncSafe found 🍃</h1>
              <Link href="/newSafe">
                <Button>Create my first SyncSafe</Button>
              </Link>
            </div>
          )}
        </ScrollShadow>
      </div>
    </main>
  );
}
