import type { Metadata } from "next";
import { ebGaramond } from "@/app/ui/fonts";
import "./globals.css";

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
      {children}
        </body>
    </html>
  );
}
