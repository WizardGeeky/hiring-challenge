import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import dynamic from "next/dynamic";
import ClientWrapper from "./helper/ClientWrapper";
import FloatingAvatar from "./components/floatingavatar";

const CanvaCursor = dynamic(() => import("./cursor/CanvasCursor"));

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cuberto Next App",
  description: "Developed By GitHub: WizardGeeky(Eswar)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <CanvaCursor />
        <ClientWrapper />
        <FloatingAvatar />
      </body>
    </html>
  );
}
