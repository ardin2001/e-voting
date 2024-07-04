import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import WrapperSession from "./wrapper/WrapperSession";
import ThemeContextProvider from "./context/ThemeContext";
import SidebarContextProvider from "./context/SidebarContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-voting App",
  description: "E-voting app with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <ThemeContextProvider>
          <SidebarContextProvider>
            <WrapperSession>
              {children}
            </WrapperSession>
          </SidebarContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
