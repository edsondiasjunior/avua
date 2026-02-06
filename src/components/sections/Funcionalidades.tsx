import dynamic from "next/dynamic";
import RevealTitle from "@/components/animation/RevealTitle";

const LottieLazy = dynamic(() => import("@/components/ui/LottieLazy"), {});

export default function Funcionalidades() {
  return (
    <section className="bg-[#131313] py-22 px-4 lg:px-16 z-100 ">
      <div className=" flex flex-col items-center justify-center lg:grid-cols-2 gap-26 sticky ">
        {/* TÍTULO */}
        <div className="flex flex-col items-center gap-8  sm:sticky top-22  ">
          <span className="tagline text-[1.1rem] uppercase text-[#8BED02] text-center tracking-[.16em] font-medium">
            O que entregamos
          </span>

          <RevealTitle
            as="h2"
            className="text-5xl md:text-5xl text-white max-w-6xl text-center"
          >
            Nada aqui é por acaso
          </RevealTitle>
          <p className="text-white">
            Estratégia, método e intenção em cada entrega.
          </p>
        </div>

        {/* CARDS */}
        <div className="flex flex-col items-center gap-80">
          {/* CARD 01 */}
          <article className="w-full flex h-[90%] sm:h-auto flex-col py-8 sm:grid sm:grid-cols-2   sm:min-h-96 bg-[#e9e9e9]  rounded-2xl lg:rounded-[18px] sticky top-[5%] sm:top-[24%] lg:top-[40%] max-w-[1000] ">

            <div className="col-span-1 flex h-[300px] w-auto sm:h-full pt-8  relative">
              <LottieLazy
                src="/lottie/lottie-card-01.json"
                className="w-full h-full absolute sm:h-[420px] sm:top-[-5%] sm:max-w-[516px]"
              />
            </div>

            <div className="flex flex-col lg:items-start gap-4 p-8 sm:p-12 border-l text-4xl w-full justify-center col-span-1">
              <span className="tagline text-[1rem] font-bold tracking-[.16em] leading-0 text-center flex items-center justify-center h-[30px] w-[50px] bg-[#8BED02]   ">
                01
              </span>

              <h3 className="text-black">Design & UI/UX</h3>

              <p className="text-gray-700">
                Criamos interfaces funcionais, intuitivas e esteticamente
                relevantes, focadas na experiência do usuário e nos objetivos do
                negócio.
              </p>
            </div>
          </article>

          {/* CARD 02 */}
          <article className="w-full flex h-[90%] sm:h-auto flex-col-reverse py-8 sm:grid sm:grid-cols-2   sm:min-h-96 bg-[#e9e9e9]  rounded-2xl lg:rounded-[18px] sticky top-[5%] sm:top-[24%] lg:top-[40%] max-w-[1000] ">
            <div className="flex flex-col lg:items-start gap-4 p-8 sm:p-12 border-r text-4xl w-full justify-center col-span-1">
              <span className="tagline text-[1rem] font-bold tracking-[.16em] leading-0 text-center flex items-center justify-center h-[30px] w-[50px] bg-[#8BED02] ">
                02
              </span>

              <h3 className="text-black ">Desenvolvimento Web</h3>

              <p className="text-gray-700 text-[1.2rem] ">
                Sites, landing pages e produtos digitais rápidos, responsivos e
                preparados para conversão e crescimento.
              </p>
            </div>

            <div className="col-span-1 flex h-[300px] w-auto sm:h-full pt-8  relative">
              <LottieLazy
                src="/lottie/lottie-card-02.json"
                className="absolute w-full top-[-20%]  max-w-[600px]"
              />
            </div>
          </article>

          {/* CARD 03 */}
          <article className="w-full flex h-[90%] sm:h-auto flex-col py-8 sm:grid sm:grid-cols-2   sm:min-h-96 bg-[#e9e9e9]  rounded-2xl lg:rounded-[18px] sticky top-[5%] sm:top-[24%] lg:top-[40%] max-w-[1000] ">
            <div className="col-span-1 flex h-[300px] w-auto sm:h-full pt-8  relative">
              <LottieLazy
                src="/lottie/lottie-card-03.json"
                className="absolute w-full h-[420px]  max-w-[516px] top-[-15%]"
              />
            </div>

            <div className="flex flex-col lg:items-start gap-4 p-8 sm:p-12 border-l text-4xl w-full justify-center col-span-1">
              <span className="tagline text-[1rem] font-bold tracking-[.16em] leading-0 text-center flex items-center justify-center h-[30px] w-[50px] bg-[#8BED02]">
                03
              </span>

              <h3 className="text-black">Gestão & Estratégia </h3>

              <p className="text-gray-700 text-[1.2rem] ">
                Planejamento estratégico, posicionamento de marca, funil digital
                e decisões orientadas por dados.
              </p>
            </div>
          </article>

          {/* CARD 04 */}
          <article className="w-full flex h-[90%] sm:h-auto flex-col-reverse py-8 sm:grid sm:grid-cols-2   sm:min-h-96 bg-[#e9e9e9]  rounded-2xl lg:rounded-[18px] sticky top-[5%] sm:top-[24%] lg:top-[40%] max-w-[1000] ">
            <div className="flex flex-col lg:items-start gap-4 p-8 sm:p-12 border-r text-4xl w-full justify-center col-span-1">
              <span className="tagline text-[1rem] font-bold tracking-[.16em] leading-0 text-center flex items-center justify-center h-[30px] w-[50px] bg-[#8BED02] ">
                04
              </span>

              <h3 className="text-black">Redes Sociais & Conteúdo</h3>

              <p className="text-gray-700 text-[1.2rem] ">
                Gestão completa de social media, com estratégia, calendário,
                linguagem de marca e consistência visual.
              </p>
            </div>

            <div className="col-span-1 flex h-[300px] w-auto sm:h-full pt-8  relative">
              <LottieLazy
                src="/lottie/lottie-card-04.json"
                className="absolute w-full h-[420px]  max-w-[516px] top-[-15%]"
              />
            </div>
          </article>

          {/* CARD 05 */}
          <article className="w-full flex h-[90%] sm:h-auto flex-col py-8 sm:grid sm:grid-cols-2   sm:min-h-96 bg-[#e9e9e9]  rounded-2xl lg:rounded-[18px] sticky top-[5%] sm:top-[24%] lg:top-[40%] max-w-[1000] ">
            <div className="col-span-1 flex h-[300px] w-auto sm:h-full pt-8  relative">
              <LottieLazy
                src="/lottie/lottie-card-05.json"
                className="absolute w-full h-[420px]  max-w-[516px] top-[-15%]"
              />
            </div>

            <div className="flex flex-col lg:items-start gap-4 p-8 sm:p-12 border-l text-4xl w-full justify-center col-span-1">
              <span className="tagline text-[1rem] font-bold tracking-[.16em] leading-0 text-center flex items-center justify-center h-[30px] w-[50px] bg-[#8BED02] ">
                05
              </span>

              <h3 className="text-black">Criativos & Performance</h3>

              <p className="text-gray-700 text-[1.2rem] ">
                Criação de peças visuais e campanhas pensadas para engajar,
                comunicar e converter.
              </p>
            </div>
          </article>

          {/* CARD 06 */}
          <article className="w-full flex h-[90%] sm:h-auto flex-col-reverse py-8 sm:grid sm:grid-cols-2   sm:min-h-96 bg-[#e9e9e9]  rounded-2xl lg:rounded-[18px] sticky top-[5%] sm:top-[24%] lg:top-[40%] max-w-[1000] ">
            <div className="flex flex-col lg:items-start gap-4 p-8 sm:p-12 border-r text-4xl w-full justify-center col-span-1">
              <span className="tagline text-[1rem] font-bold tracking-[.16em] leading-0 text-center flex items-center justify-center h-[30px] w-[50px] bg-[#8BED02] ">
                06
              </span>

              <h3 className="text-black">Produção de Vídeo</h3>

              <p className="text-gray-700 text-[1.2rem] ">
                Vídeos que contam histórias, fortalecem marcas e performam em
                múltiplas plataformas.
              </p>
            </div>

            <div className="col-span-1 flex h-[300px] w-auto sm:h-full pt-8  relative">
              <LottieLazy
                src="/lottie/lottie-card-06.json"
                className="absolute w-full h-[420px] max-w-[516px] top-[-12%] right-[-3%]"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
