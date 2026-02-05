import Accordion from "@/components/section/Accordion";
import Hero from "@/components/section/Hero";
// import Service from "@/components/Service"

import Funcionalidades from "@/components/Funcionalidades";
import Sobre from "@/components/Sobre";
import Beneficios from "@/components/section/beneficios";

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
