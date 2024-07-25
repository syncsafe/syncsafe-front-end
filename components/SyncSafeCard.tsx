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
  PenTool,
  Book,
  MapPin,
  ReceiptText,
} from "lucide-react";
import DeploymentBox from "./DeploymentBox";
import { clickAddress, getExplorerDomain } from "./FormattedAddress";
import { useEffect } from "react";

// SDK

interface SyncSafeCardProps {
  name: string;
  chains: number[];
  signers: string[];
  threshold: number;
  status: {
    chain: number;
    status: string;
  }[];
}

export default function SyncSafeCard({
  name,
  chains,
  signers,
  threshold,
  status,
}: SyncSafeCardProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  let mostCriticalStatus = "done";

  status.forEach((s) => {
    s.status === "sent" && mostCriticalStatus === "done"
      ? (mostCriticalStatus = s.status)
      : (mostCriticalStatus === "done" || mostCriticalStatus === "sent") &&
          s.status === "failed"
        ? (mostCriticalStatus = s.status)
        : "";
  });

  useEffect(() => {
    console.log("chains:", chains);
  });

  return (
    <>
      <Card className="w-[355px] flex flex-col justify-between">
        <CardHeader>
          <CardTitle className="flex flex-row justify-between">
            {name}
            {mostCriticalStatus === "done" && <CircleCheck color="green" />}
            {mostCriticalStatus === "sent" ||
              (mostCriticalStatus === "received" && (
                <CircleDotDashed color="orange" />
              ))}
            {mostCriticalStatus === "failed" && <CircleMinus color="red" />}
          </CardTitle>
          <CardDescription className="flex flex-row gap-2 items-center">
            Deployed on{" "}
            <div className="flex gap-2">
              {(chains.includes(supportedChainId.ethereum) ||
                chains.includes(supportedChainId.ethsepolia)) && (
                <Image
                  src="/chains/ethereum.svg"
                  width={10}
                  height={10}
                  alt="Ethereum"
                />
              )}
              {(chains.includes(supportedChainId.arbitrum) ||
                chains.includes(supportedChainId.arbsepolia)) && (
                <Image
                  src="/chains/arbitrum.svg"
                  width={15}
                  height={15}
                  alt="Arbitrum"
                />
              )}
              {(chains.includes(supportedChainId.base) ||
                chains.includes(supportedChainId.basesepolia)) && (
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
                  alt="Scroll"
                />
              )}
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            {/* <Chip radius="sm">${"1000.00"}</Chip> */}
            <Chip
              variant="flat"
              avatar={<Avatar name={signers.length.toString()} />}
            >
              Signer{signers.length > 1 ? "s" : ""}
            </Chip>
            {/* <Chip
              variant="flat"
              avatar={<Avatar name={Number(threshold).toString()} />}
            >
              Thresholds
            </Chip> */}
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
                <Accordion type="single">
                  <AccordionItem value="address">
                    <AccordionTrigger>
                      <div className="flex gap-4">
                        <ReceiptText />
                        Deployment addresses
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-2 pb-4">
                      <Table aria-label="">
                        <TableHeader>
                          <TableColumn key={"chain"}>Chain</TableColumn>
                          <TableColumn key={"address"}>Address</TableColumn>
                        </TableHeader>
                        <TableBody>
                          {signers.map((signer, index) => (
                            <TableRow key={index}>
                              <TableCell className="flex flex-row gap-2 items-center justify-center">
                                <Image
                                  src="/chains/ethereum.svg"
                                  width={10}
                                  height={10}
                                  alt="Ethereum"
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
                  <AccordionItem value="signers">
                    <AccordionTrigger>
                      <div className="flex gap-4">
                        <PenTool />
                        Signers ({signers.length.toString()})
                      </div>
                    </AccordionTrigger>
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
                      <div className="flex gap-4">
                        {mostCriticalStatus === "done" && (
                          <CircleCheck color="green" />
                        )}
                        {mostCriticalStatus === "sent" && (
                          <CircleDotDashed color="orange" />
                        )}
                        {mostCriticalStatus === "failed" && (
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
                    <AccordionTrigger>
                      <div className="flex gap-4">
                        <Book />
                        Previous transactions
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="p-2">
                      <Table aria-label="">
                        <TableHeader>
                          <TableColumn key={"chain"}>Chain</TableColumn>
                          <TableColumn key={"block"}>Block</TableColumn>
                          <TableColumn key={"method"}>Method</TableColumn>
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
                              <TableCell>{"123456"}</TableCell>
                              <TableCell>{"Approval"}</TableCell>
                              <TableCell>
                                {clickAddress(signer, chains[0], true)}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
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
