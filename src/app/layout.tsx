import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Grain from "@/components/grain";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DFS-Nettside",
  description: "Laget av Lucas, Odin og Sidney.",
  openGraph: {
    title: "DFS-Nettside",
    description: "Laget av Lucas, Odin og Sidney.",
    images: [
      {
        url: "/opengraph.png",
        width: 1280,
        height: 720,
        alt: "DFS-Nettside",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased min-h-[100vh]`}
      >
        <Grain />
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
