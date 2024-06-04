// Author: Corey Dai
// Date: June 3rd, 2024
// Description: Default Layout Template

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";

// Default font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Insights",
  description: "Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Main HTML container
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
