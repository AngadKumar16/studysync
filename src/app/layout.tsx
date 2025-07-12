import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StudySync",
  description: "Beat burnout together — study with purpose and peace.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ChakraProvider>
          <Navbar />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
