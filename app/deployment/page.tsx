import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Bird,
  Book,
  Bot,
  Code2,
  CornerDownLeft,
  LifeBuoy,
  Mic,
  Paperclip,
  Rabbit,
  Settings,
  Settings2,
  Share,
  SquareTerminal,
  SquareUser,
  Triangle,
  Turtle,
  ChevronLeft,
  Trash2,
  Plus,
  Check,
  CircleCheck,
} from "lucide-react";
import { Search, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Badge } from "@nextui-org/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircularProgress, Input as NextInput } from "@nextui-org/react";

export default function Deployment() {
  return (
    <main className="flex flex-col gap-6 p-24 items-center">
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
            <Link href="/dashboard">
              <Button>Back to dashboard</Button>
            </Link>
          </div>
        </fieldset>
      </form>
    </main>
  );
}
