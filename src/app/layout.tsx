import type { Metadata } from "next";
import { nohemi, workSans } from "./fonts";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import Footer from "@/components/Footer";


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
        <main>
          <SmoothScrollProvider>
          {children}
          </SmoothScrollProvider>
        </main>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
