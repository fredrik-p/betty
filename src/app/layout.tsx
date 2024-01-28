import type { Metadata } from "next";
import { ebGaramond } from "@/app/ui/fonts";
import "./globals.css";
import { Navbar } from "../components/Navbar";

export const metadata: Metadata = {
  title: "Betty Norling",
  description: "Portfolio of Betty Norling",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ebGaramond.className} h-screen flex flex-col`}> 
        <Navbar />
        <main>{children}</main>
        </body>
    </html>
  );
}
