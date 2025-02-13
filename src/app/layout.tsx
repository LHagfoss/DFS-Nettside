import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NC 2025 - Runde 1 - Det frivillige Skyttervesen",
  description: "Laget av Lucas, Odin og Sidney.",
  openGraph: {
    title: "NC 2025 - Runde 1 - Det frivillige Skyttervesen",
    description: "Laget av Lucas, Odin og Sidney.",
    images: [
      {
        url: "/opengraph.png",
        width: 1280,
        height: 720,
        alt: "NC 2025 - Runde 1 - Det frivillige Skyttervesen",
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
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
