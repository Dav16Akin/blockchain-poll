import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Topbar from "../components/Topbar";
import { ToggleProvider } from "./toggle-povider";
import { SelectedProvider } from "./selected-poll-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlockchainPoll",
  description: "powered by blockchain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToggleProvider>
          <Topbar />
          <SelectedProvider>{children}</SelectedProvider>
        </ToggleProvider>
      </body>
    </html>
  );
}
