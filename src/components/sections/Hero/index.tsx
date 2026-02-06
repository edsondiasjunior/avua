import Btn from "@/components/ui/Btn";
import HeroAnimation from "./HeroAnimation";
import RevealTitle from "@/components/animation/RevealTitle"

export default function Hero() {
  return (
    <>
      <section className="px-8 lg:px-16 py-22 flex flex-col items-center justify-end relative w-full h-[70vh]">
        <div className="grid grid-cols-12 gap-10 w-full">


          <RevealTitle
            as="h1"
            className="col-span-12 lg:col-span-8 text-start w-full sm:max-w-[990px] self-end"
          >
            Construímos presença digital que gera <span className="destaqueV"> valor </span> e <span className="destaqueC"> crescimento.</span>
          </RevealTitle>


          <div
            data-hero-side
            className="col-span-12 lg:col-span-4 self-start sm:self-end sm:justify-self-end flex flex-col gap-4 items-start justify-center max-w-[450px] sm:border-l sm:pl-12"
          >
            <div className="flex flex-col gap-8">
              <p className="text-start  md:col-span-4">
                Unimos estratégia, design e tecnologia para transformar marcas
                em <strong>  experiências digitais relevantes. </strong> Do visual à performance.
              </p>

              <div className="md:col-span-4 flex">
                <Btn />
              </div>
            </div>
          </div>
        </div>
      </section>
      <HeroAnimation />

      <section className="overflow-x-hidden relative w-full">
        <div className="relative w-full aspect-video">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/hero-poster.avif"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/video/website-portfolio.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
    </>
  );
}
