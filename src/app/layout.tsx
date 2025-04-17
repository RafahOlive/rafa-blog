import type { Metadata } from "next";

import "./globals.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Blog Rafael",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-main min-h-screen flex flex-col">
        <Header />
        <main >{children}</main>
        <Footer />
      </body>
    </html>
  );
}
