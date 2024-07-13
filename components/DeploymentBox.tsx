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

interface DeploymentProgressBarProps {}

function DeploymentProgressBar() {
  return (
    <div className="flex flex-row items-center gap-4">
      <p className="flex gap-2">
        <Image
          src="/chains/ethereum.svg"
          width={10}
          height={10}
          alt="Ethereum"
        />{" "}
        Ethereum
      </p>
      <div className="flex flex-row items-center gap-2">
        <Avatar className="p-2 border-2 flex items-center justify-center">
          <Send className="size-4" />
        </Avatar>
        <Progress className="w-[100px]" value={true ? 100 : 0} />
        <Avatar className="p-2 border-2 flex items-center justify-center">
          <Download className="size-4" />
        </Avatar>
        <Progress className="w-[100px]" value={true ? 100 : 0} />
        <Avatar className="p-2 border-2 flex items-center justify-center">
          <MailCheck className="size-4" />
        </Avatar>
        <Progress className="w-[100px]" value={true ? 100 : 0} />
        <Avatar className="p-2 border-2 flex items-center justify-center">
          <BookCheck className="size-4" />
        </Avatar>
      </div>
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
      <DeploymentProgressBar />
      <DeploymentProgressBar />
      <DeploymentProgressBar />
    </>
  );
}
