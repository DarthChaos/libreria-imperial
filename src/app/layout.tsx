import Head from "next/head";
import "./globals.css";
import { Roboto_Condensed } from "next/font/google";

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
      <body className={robotoCondensed.className}>{children}</body>
    </html>
  );
}
