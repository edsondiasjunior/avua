import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";
import Header from "@/components/Header";


const mdLump = localFont({
  src: [{ path: "../fonts/md-lump.otf", style: "normal" }],
  variable: "--font-md-lump",
  display: "swap",
});

const nohemi = localFont({
  src: [
    { path: "../fonts/Nohemi-Light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/Nohemi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/Nohemi-Medium.woff2", weight: "600", style: "normal" },
    { path: "../fonts/Nohemi-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-nohemi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Avuá Agency",
  description: "Criação de sites profissionais",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${nohemi.variable} ${mdLump.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        
      </body>
    </html>
  );
}
