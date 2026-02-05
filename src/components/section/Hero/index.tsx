import Btn from "@/components/ui/Btn";
import Image from "next/image";
import "@/components/gsap/gsap";

export default function Hero() {
  return (
    <>
      <section className="px-4 py-16 flex flex-col items-center justify-end relative h-[80vh]">
        <div className="flex justify-between px-12 w-full">
          <h1 className="text-start text-5xl md:text-6xl max-w-[990] ">
            Construímos presença digital que gera valor, conexão e crescimento.
          </h1>

          <div className="flex flex-col gap-4 items-start justify-center   max-w-[400px]">
            <p className="text-center md:text-start md:col-span-4">
              Unimos estratégia, design e tecnologia para transformar marcas em
              experiências digitais relevantes. Do visual à performance.
            </p>

            <div className="md:col-span-4 flex ">
              <Btn />
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-x-hidden relative w-full">
        <div className="relative w-full aspect-video">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/images/hero-poster.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/video/website-portfolio.mp4" type="video/webm" />
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
}
