import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/app/_components/Footer";
import { Header } from "./_components/Header";
import { I18nProvider } from "@/i18n/context";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frida's Handmade Zone",
  description: "Frida's Handmade Zone, knitting, crochet, embroidery, and more",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          backgroundImage: 'url("/pineNut.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <I18nProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow">{children}</div>
            <Footer />
          </div>
        </I18nProvider>
      </body>
    </html>
  );
}
