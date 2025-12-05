import Btn from "@/components/ui/Btn";
import Image from "next/image";


export default function Hero() {
  return (
    <section  className="px-4 py-16 flex flex-col items-center justify-center relative h-[60vh]">
      <div className="flex flex-col gap-8 items-center justify-center ">
        <h1 className="text-center text-5xl md:text-8xl max-w-5xl">Transformamos ideias em sites profissinais</h1>
        <div className="flex flex-col gap-4 items-center justify-center md:grid md:grid-cols-3 max-w-3xl">
          <p className="text-center md:text-start md:col-span-2">
            Agência de criação de<strong> sites personalizados para empresas.</strong> Somoes
            especialistas em desenvolvimento de sites
          </p>
          <Btn/>
        </div>
      </div>
      <div className="hidden lg:block">
        <Image className="absolute left-[5%] top-[45%]" src="/ballon.svg" alt="Balões Flutuando" height={172} width={189}/>
        <Image className="absolute md:right-[5%] md:top-[45%]" src="/rocket.svg" alt="Foguete subindo" height={172} width={189}/>
      </div>
    </section>
  );
}
