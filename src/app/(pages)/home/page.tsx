
import Hero from "@/components/sections/Hero";


import Funcionalidades from "@/components/sections/Funcionalidades";
import Sobre from "@/components/sections/Sobre";
import Beneficios from "@/components/sections/beneficios";


import type { Metadata } from "next";
import Cta from "@/components/sections/Cta";

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
      <Cta/>

      
    </>
  );
}
