import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers";
import DesktopNavigation from "@/components/desktop-navigation";
import TopBar from "@/components/top-bar";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";

export const metadata = {
  title: "Billcrest",
  description: "POS",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/assets/icons/logo.svg" sizes="any" />
      </Head>
      <div className="flex">
        <DesktopNavigation />
        <div className=" md:ml-72 mb-8 w-full md:px-8 py-4">
          {/* <MobileNavigation /> */}
          <TopBar />
          <main className=" px-8 max-w-7xl mt-4 w-full container mx-auto">
            {children}
            <Toaster />
          </main>
        </div>
      </div>
    </>
  );
}
