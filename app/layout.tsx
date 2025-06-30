import type React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";
import ThemeToggle from "@/components/ThemeToggle";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Product Designer",
  description: "Personal portfolio website",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-200 dark:bg-zinc-900`}>
        <div className="mx-auto min-h-screen max-w-7xl">
          <Navigation />
          {children}
        </div>
        <ThemeToggle />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
