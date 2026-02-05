import Accordion from "@/components/section/Accordion";
import Hero from "@/components/section/Hero";


import Funcionalidades from "@/components/Funcionalidades";
import Sobre from "@/components/Sobre";
import Beneficios from "@/components/section/beneficios";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Avuá Agency",
  description:
    "Avuá Agency — presença digital estratégica (página em finalização).",
  robots: {
    index: false,
    follow: true,
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      
      <Sobre />
      <Funcionalidades />
      <Beneficios/>
      <Accordion />
      
    </>
  );
}
