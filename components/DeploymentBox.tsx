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
  progress: "sent" | "received" | "validated" | "done" | "failed";
}

function DeploymentProgressBar({
  chain,
  progress,
}: DeploymentProgressBarProps) {
  return (
    <div className="flex flex-row items-center gap-4 w-full justify-between">
      <div className="flex flex-row items-center gap-4 w-1/2 justify-between">
        {chain === supportedChainId.ethereum && (
          <p className="flex gap-2">
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
          <p className="flex gap-2">
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
          <p className="flex gap-2">
            <Image src="/chains/base.svg" width={10} height={10} alt="Base" />{" "}
            Base
          </p>
        )}

        {chain === supportedChainId.linea && (
          <p className="flex gap-2">
            <Image src="/chains/linea.svg" width={10} height={10} alt="Linea" />{" "}
            Linea
          </p>
        )}

        {chain === supportedChainId.scroll && (
          <p className="flex gap-2">
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
      {progress === "failed" && <Button>Resend</Button>}
    </div>
  );
}

interface DeploymentBoxProps {}

export default function DeploymentBox() {
  return (
    <>
      <form className="grid w-full items-start gap-6 w-1/2">
        <fieldset className="grid gap-6 rounded-lg border py-4 px-8 flex items-center justify-center">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <CircularProgress color="warning" aria-label="Loading..." />
              <p className="flex gap-2">Deploying on Linea...</p>
            </div>
            <div className="flex items-center gap-4">
              <CircularProgress color="warning" aria-label="Loading..." />
              <p className="flex gap-2">Deploying on Arbitrum...</p>
            </div>
            <div className="flex items-center gap-4">
              <CircleCheck className="size-10" color="green" />

              <p className="flex gap-2">
                Deployed on{" "}
                <Image
                  src="/chains/ethereum.svg"
                  width={10}
                  height={10}
                  alt="Ethereum"
                />{" "}
                Ethereum
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Link href="/">
              <Button>Back to dashboard</Button>
            </Link>
          </div>
        </fieldset>
      </form>

      <DeploymentProgressBar
        chain={supportedChainId.ethereum}
        progress={"failed"}
      />
      <DeploymentProgressBar
        chain={supportedChainId.arbitrum}
        progress={"sent"}
      />
      <DeploymentProgressBar
        chain={supportedChainId.base}
        progress={"received"}
      />
      <DeploymentProgressBar
        chain={supportedChainId.scroll}
        progress={"validated"}
      />
      <DeploymentProgressBar chain={supportedChainId.linea} progress={"done"} />
    </>
  );
}
