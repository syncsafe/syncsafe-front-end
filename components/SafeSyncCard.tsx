"use client";

// Next
import Image from "next/image";

// Shadcn
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { supportedChainId } from "@/utils/chainid";

// NextUI
import {
  Accordion,
  AccordionItem,
  Avatar,
  Button,
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

// Lucide
import {
  BadgePlus,
  Link,
  LinkIcon,
  Pencil,
  CircleCheck,
  CircleDotDashed,
  CircleMinus,
} from "lucide-react";
import DeploymentBox from "./DeploymentBox";

// SDK

interface SafeSyncCardProps {
  name: string;
  chains: number[];
  signers: string[];
  threshold: number;
  status: {
    chain: number;
    status: string; //"error" | "loading" | "ok"
  }[];
}

export default function SafeSyncCard({
  name,
  chains,
  signers,
  threshold,
  status,
}: SafeSyncCardProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  let mostCriticalStatus = "ok";

  status.forEach((s) => {
    s.status === "loading" && mostCriticalStatus === "ok"
      ? (mostCriticalStatus = s.status)
      : (mostCriticalStatus === "ok" || mostCriticalStatus === "loading") &&
        s.status === "error"
      ? (mostCriticalStatus = s.status)
      : "";
  });

  return (
    <>
      <Card className="w-[355px] flex flex-col justify-between">
        <CardHeader>
          <CardTitle className="flex flex-row justify-between">
            {name}
            {mostCriticalStatus === "ok" && <CircleCheck color="green" />}
            {mostCriticalStatus === "loading" && (
              <CircleDotDashed color="orange" />
            )}
            {mostCriticalStatus === "error" && <CircleMinus color="red" />}
          </CardTitle>
          <CardDescription className="flex flex-row gap-2 items-center">
            Deployed on{" "}
            <div className="flex gap-2">
              {chains.includes(supportedChainId.ethereum) && (
                <Image
                  src="/chains/ethereum.svg"
                  width={10}
                  height={10}
                  alt="Ethereum"
                />
              )}
              {chains.includes(supportedChainId.arbitrum) && (
                <Image
                  src="/chains/arbitrum.svg"
                  width={15}
                  height={15}
                  alt="Arbitrum"
                />
              )}
              {chains.includes(supportedChainId.base) && (
                <Image
                  src="/chains/base.svg"
                  width={15}
                  height={15}
                  alt="Base"
                />
              )}
              {chains.includes(supportedChainId.linea) && (
                <Image
                  src="/chains/linea.svg"
                  width={15}
                  height={15}
                  alt="Linea"
                />
              )}
              {chains.includes(supportedChainId.scroll) && (
                <Image
                  src="/chains/scroll.svg"
                  width={15}
                  height={15}
                  alt="scroll"
                />
              )}
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Chip radius="sm">${"????.??"}</Chip>
            <Chip
              variant="flat"
              avatar={<Avatar name={signers.length.toString()} />}
            >
              Signers
            </Chip>
            <Chip
              variant="flat"
              avatar={<Avatar name={Number(threshold).toString()} />}
            >
              Thresholds
            </Chip>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onPress={onOpen} color="primary" size="sm">
            Open
          </Button>
        </CardFooter>
      </Card>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="xl"
        scrollBehavior={"inside"}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{name}</ModalHeader>
              <ModalBody>
                <Accordion selectionMode="multiple">
                  <AccordionItem
                    key="1"
                    aria-label="Blockchain status"
                    title="Blockchain status"
                  >
                    <DeploymentBox status={status} />
                  </AccordionItem>
                  <AccordionItem
                    key="2"
                    aria-label="Last transactions"
                    title="Last transactions"
                  >
                    Last transactions
                  </AccordionItem>
                </Accordion>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
