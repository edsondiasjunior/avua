import Accordion from "@/components/section/Accordion";
import Hero from "@/components/section/Hero";
// import Service from "@/components/Service"
import Price from "@/components/Price"
import ComoFunciona from "@/components/comoFunciona";
import Funcionalidades from "@/components/Funcionalidades";
import Sobre from "@/components/Sobre";




export default function Home() {
  return (
    <>
    <Hero/>     
    <ComoFunciona/>
    <Funcionalidades/>
    <Sobre/>
    <Accordion/>
    <Price/>

    </>
  );
}
