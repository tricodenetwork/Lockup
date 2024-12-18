import { Metadata } from "next";
import { ProvidersAndLayout } from "./ProvidersAndLayout";
import "./globals.css";
import "@mysten/dapp-kit/dist/index.css";
import Header from "@/components/shared/header/Header";

import {Nunito} from "next/font/google"

export const metadata: Metadata = {
  title: "Enoki Example App",
  description: "Learn how to build a dApp with Enoki",
};

const nunito = Nunito({weight:["200","300","400","500","600","700","800","900"],subsets:["cyrillic","cyrillic-ext"]})




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${nunito.className} antialiased bg-background`}>
        <ProvidersAndLayout>
          <Header />
          {children}
        </ProvidersAndLayout>
      </body>
    </html>
  );
}
