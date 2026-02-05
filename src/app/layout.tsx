import type { Metadata } from "next";
import { nohemi, workSans } from "./fonts";

import "./globals.css";
import Header from "@/components/Header";



export const metadata: Metadata = {
  title: "Avuá Agency",
  description: "Criação de sites profissionais",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${nohemi.variable} ${workSans.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        
      </body>
    </html>
  );
}
