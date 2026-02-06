import type { Metadata } from "next";
import { nohemi, workSans } from "./fonts";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TagManager from "@/components/TagManager";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://avua.agency"),
  title: {
    default: "Avuá Agency | Estratégia, Design e Experiência Digital",
    template: "%s | Avuá Agency",
  },
  description:
    "Unimos estratégia, design e experiência do usuário para criar soluções digitais consistentes, relevantes e orientadas a resultado.",
  openGraph: {
    type: "website",
    siteName: "Avuá Agency",
    locale: "pt_BR",
    url: "https://avua.agency",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const GTM_ID = "GTM-PTH8CZF2";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${nohemi.variable} ${workSans.variable} antialiased`}>
        {/* GTM (noscript) — logo após abrir o body */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* GTM script */}
        <TagManager />

        <Header />

        <main>
          <SmoothScrollProvider>{children}</SmoothScrollProvider>
        </main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
