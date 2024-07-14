"use client";

// Next
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";

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
  Progress,
  CircularProgress,
} from "@nextui-org/react";

// Lucide
import { Search } from "lucide-react";
import {
  Send,
  Download,
  MailCheck,
  BookCheck,
  CircleCheck,
} from "lucide-react";

// Local imports
import { supportedChainId } from "@/utils/chainid";

interface DeploymentProgressBarProps {
  chain: number;
  progress: string; // "sent" | "received" | "validated" | "done" | "failed";
}

function DeploymentProgressBar({
  chain,
  progress,
}: DeploymentProgressBarProps) {
  return (
    <div className="flex flex-row items-center gap-4 w-full justify-between mb-4">
      <div className="flex flex-row flex-wrap items-center gap-2 w-1/2 justify-between">
        {chain === supportedChainId.ethereum && (
          <p className="flex gap-2 text-lg">
            <Image
              src="/chains/ethereum.svg"
              width={10}
              height={10}
              alt="Ethereum"
            />{" "}
            Ethereum
          </p>
        )}

        {chain === supportedChainId.arbitrum && (
          <p className="flex gap-2 text-lg">
            <Image
              src="/chains/arbitrum.svg"
              width={10}
              height={10}
              alt="Arbitrum"
            />{" "}
            Arbitrum
          </p>
        )}

        {chain === supportedChainId.base && (
          <p className="flex gap-2 text-lg">
            <Image src="/chains/base.svg" width={10} height={10} alt="Base" />{" "}
            Base
          </p>
        )}

        {chain === supportedChainId.linea && (
          <p className="flex gap-2 text-lg">
            <Image src="/chains/linea.svg" width={10} height={10} alt="Linea" />{" "}
            Linea
          </p>
        )}

        {chain === supportedChainId.scroll && (
          <p className="flex gap-2 text-lg">
            <Image
              src="/chains/scroll.svg"
              width={10}
              height={10}
              alt="Scroll"
            />{" "}
            Scroll
          </p>
        )}

        <div className="flex flex-row items-center gap-2">
          <Avatar
            className={
              "p-2 border-2 flex items-center justify-center " +
              (progress === "failed" ? "border-red-500" : "border-green-500")
            }
          >
            <Send
              className={
                "size-4 " +
                (progress === "failed" ? "text-red-500" : "text-green-500")
              }
            />
          </Avatar>
          <Progress
            className="w-[100px]"
            value={progress === "failed" ? 0 : progress === "sent" ? 60 : 100}
            color="success"
          />
          <Avatar
            className={
              "p-2 border-2 flex items-center justify-center " +
              (progress === "received" ||
              progress === "validated" ||
              progress === "done"
                ? "border-green-500"
                : "border-grey-500")
            }
          >
            <Download
              className={
                "size-4 " +
                (progress === "received" ||
                progress === "validated" ||
                progress === "done"
                  ? "text-green-500"
                  : "text-slate-300")
              }
            />
          </Avatar>
          <Progress
            className="w-[100px]"
            value={
              progress === "validated" || progress === "done"
                ? 100
                : progress === "received"
                ? 60
                : 0
            }
            color="success"
          />
          <Avatar
            className={
              "p-2 border-2 flex items-center justify-center " +
              (progress === "validated" || progress === "done"
                ? "border-green-500"
                : "border-grey-500")
            }
          >
            <MailCheck
              className={
                "size-4 " +
                (progress === "validated" || progress === "done"
                  ? "text-green-500"
                  : "text-slate-300")
              }
            />
          </Avatar>
          <Progress
            className="w-[100px]"
            value={
              progress === "done" ? 100 : progress === "validated" ? 60 : 0
            }
            color="success"
          />
          <Avatar
            className={
              "p-2 border-2 flex items-center justify-center " +
              (progress === "done" ? "border-green-500" : "border-grey-500")
            }
          >
            <BookCheck
              className={
                "size-4 " +
                (progress === "done" ? "text-green-500" : "text-slate-300")
              }
            />
          </Avatar>
        </div>
      </div>
    </div>
  );
}

interface DeploymentBoxProps {
  status: {
    chain: number;
    status: string; //"error" | "loading" | "ok" "sent" | "received" | "validated" | "done" | "failed";
  }[];
}

export default function DeploymentBox({ status }: DeploymentBoxProps) {
  return (
    <div className="flex flex-col flex-wrap justify-between items-center w-full h-full">
      {status.map((status) => (
        <DeploymentProgressBar chain={status.chain} progress={status.status} />
      ))}
    </div>
  );
}
