"use client";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react"

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "E-voting App",
//   description: "E-voting app with Next.js",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  bg-quinary`}>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
