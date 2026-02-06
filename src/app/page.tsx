import Hero from "@/components/sections/Hero";

import Funcionalidades from "@/components/sections/Funcionalidades";
import Sobre from "@/components/sections/Sobre";
import Beneficios from "@/components/sections/beneficios";

import Cta from "@/components/sections/Cta";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design e Criação de Sites Estratégicos",
  description:
    "Agência especializada em estratégia de marca, design e desenvolvimento web. Criamos sites profissionais, rápidos, responsivos e focados em experiência do usuário e performance.",

  alternates: {
    canonical: "https://avua.agency/",
  },

  openGraph: {
    title: "Criação de Sites Profissionais | Avuá Agency",
    description:
      "Sites rápidos, modernos e otimizados para gerar valor e crescimento.",
    url: "https://avua.agency/",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Avuá Agency",
      },
    ],
  },
};


export default function Home() {
  return (
    <>
      <Hero />

      <Sobre />
      <Funcionalidades />
      <Beneficios />
      <Cta />
    </>
  );
}
