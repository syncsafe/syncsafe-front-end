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

interface SafeSyncCardProps {
  name: string;
  chains: number[];
  signers: string[];
  status: {
    chain: number;
    status: "error" | "loading" | "ok";
  }[];
}

export default function SafeSyncCard({ name, chains }: SafeSyncCardProps) {
  return (
    <Card className="w-[350px] flex flex-col justify-between">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>
          Deployed on Ethereum ♢, Arbitrum ⚬, Linea
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>Some informations about your SafeSync...</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <ShadButton>Show more</ShadButton>
        <ShadButton variant="secondary" className="flex gap-2" disabled>
          <Pencil className="size-3" />
          Edit
        </ShadButton>
      </CardFooter>
    </Card>
  );
}
