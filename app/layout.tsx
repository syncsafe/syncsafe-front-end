import type { Metadata } from "next";
import { Krona_One, DM_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const krona_one = Krona_One({
  subsets: ["latin"],
  weight: "400",
});

const dm_sans = DM_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SyncSafe",
  description: "Multi-chain Safe Account",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
