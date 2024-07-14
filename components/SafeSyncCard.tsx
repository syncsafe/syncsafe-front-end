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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// NextUI
import {
  Avatar,
  Button,
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  Table,
  getKeyValue,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
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
import { clickAddress } from "./FormattedAddress";

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
                <Accordion type="multiple" collapsible>
                  <AccordionItem value="signers">
                    <AccordionTrigger>Signers</AccordionTrigger>
                    <AccordionContent className="p-2 pb-4">
                      <Table aria-label="">
                        <TableHeader>
                          <TableColumn key={"chain"}>Chain</TableColumn>
                          <TableColumn key={"address"}>Address</TableColumn>
                        </TableHeader>
                        <TableBody>
                          {signers.map((signer, index) => (
                            <TableRow key={index}>
                              <TableCell className="flex flex-row gap-2">
                                <Image
                                  src="/chains/ethereum.svg"
                                  width={10}
                                  height={10}
                                  alt="Ethereum"
                                />
                                <Image
                                  src="/chains/arbitrum.svg"
                                  width={10}
                                  height={10}
                                  alt="Arbitrum"
                                />
                              </TableCell>
                              <TableCell>
                                {clickAddress(signer, chains[0])}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="status">
                    <AccordionTrigger>
                      <div className="flex gap-2">
                        {mostCriticalStatus === "ok" && (
                          <CircleCheck color="green" />
                        )}
                        {mostCriticalStatus === "loading" && (
                          <CircleDotDashed color="orange" />
                        )}
                        {mostCriticalStatus === "error" && (
                          <CircleMinus color="red" />
                        )}
                        Blockchain status
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <DeploymentBox status={status} />
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="tx">
                    <AccordionTrigger>Previous transactions</AccordionTrigger>
                    <AccordionContent>
                      Display previous transactions...
                    </AccordionContent>
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
