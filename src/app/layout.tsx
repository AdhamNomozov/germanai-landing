import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils"; // Bu qatorni `shadcn` avtomatik yaratgan

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "GermanAI | AI bilan nemis tili",
  description:
    "GermanAI.uz — sun’iy intellekt yordamida nemis tili imtihonlariga tayyorgarlik.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}