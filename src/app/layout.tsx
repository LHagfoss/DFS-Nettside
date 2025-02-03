import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "DFS-Nettside",
  description: "Utvilket av Lucas, Odin og Sidney",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
