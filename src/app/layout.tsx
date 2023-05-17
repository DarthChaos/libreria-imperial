"use client";

import { Roboto_Condensed } from "next/font/google";
import { ToastContainer } from "react-toastify";

import Providers from "./app-redux/providers";
import Header from "@/layouts/header";
import Footer from "@/layouts/footer";

import "./globals.css";

const robotoCondensed = Roboto_Condensed({
  weight: ["300", "400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Librería Imperial",
  icons: {
    icon: "/black_iso.svg",
    shortcut: "/black_iso.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={robotoCondensed.className}>
        <Header />
        <main className='pt-[70px] min-h-[calc(100vh-70px)]'>
          <Providers>
            {/* <ToastContainer className='absolute' /> */}
            {children}
          </Providers>
        </main>
        <Footer />
      </body>
    </html>
  );
}
