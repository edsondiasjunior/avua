
import Image from "next/image";
export default function Funcionalidades() {
  return (
    <section className="bg-[#1f1f1f] py-22 px-4 lg:px-16 z-100 ">
      <div className=" flex flex-col items-center justify-center lg:grid-cols-2 gap-26 sticky ">
        {/* TÍTULO */}
        <div className="flex flex-col items-center gap-8  sticky top-22  ">
          <span className="text-[1.1rem] uppercase text-[#8BED02] text-center tracking-[.16em]">
            O que fazemos
          </span>
          <h2 className="text-5xl md:text-5xl text-white max-w-4xl text-center">
            Presença digital não é só estar online. <br /> É saber como, onde e
            por quê.
          </h2>
        </div>

        {/* CARDS */}
        <div className="flex flex-col items-center gap-125">
          {/* CARD 01 */}
          <article className="w-full grid grid-cols-5 p-12  lg:min-h-96 bg-[#ffffff]  rounded-2xl lg:rounded-[18px] sticky top-[24%] lg:top-[40%] max-w-[90%]">
            <div className="col-span-3">
              <Image
                src="/ilustra-01.avif"
                width={516}
                height={400}
                alt="Ilustração"
                
              />
            </div>

            <div className="flex flex-col lg:items-start gap-4 text-4xl   w-full justify-center col-span-2">
              <span className="text-[1.2rem] ">01</span>

              <h3 className="text-black">Design & UI/UX</h3>

              <p className="text-gray-700 text-[1.2rem] ">
                Criamos interfaces funcionais, intuitivas e esteticamente
                relevantes, focadas na experiência do usuário e nos objetivos do
                negócio.
              </p>
            </div>
          </article>

          {/* CARD 02 */}
          <article className="w-full grid grid-cols-5 p-12 lg:min-h-96 bg-[#ffffff]  rounded-2xl lg:rounded-[18px] sticky top-[24%] lg:top-[40%] max-w-[90%]">
            <div className="flex flex-col lg:items-start gap-4 text-4xl   w-full justify-center col-span-2">
              <span className="text-[1.2rem] ">02</span>

              <h3 className="text-black">Desenvolvimento Digital</h3>

              <p className="text-gray-700 text-[1.2rem] ">
                Sites, landing pages e produtos digitais rápidos, responsivos e
                preparados para conversão e crescimento.
              </p>
            </div>

            <div className="col-span-3 justify-self-end">
              <Image
                src="/ilustra-02.avif"
                width={516}
                height={400}
                alt="Ilustração"
              />
            </div>
          </article>

          {/* CARD 03 */}
          <article className="w-full grid grid-cols-5 p-12  lg:min-h-96 bg-[#ffffff]  rounded-2xl lg:rounded-[18px] sticky top-[24%] lg:top-[40%] max-w-[90%] ">
            <div className="col-span-3">
              <Image
                src="/ilustra-03.avif"
                width={516}
                height={400}
                alt="Ilustração"
              />
            </div>

            <div className="flex flex-col lg:items-start gap-4 text-4xl   w-full justify-center col-span-2">
              <span className="text-[1.2rem] ">03</span>

              <h3 className="text-black">Gestão & Estratégia Digital</h3>

              <p className="text-gray-700 text-[1.2rem] ">
                Planejamento estratégico, posicionamento de marca, funil digital
                e decisões orientadas por dados.
              </p>
            </div>
          </article>

          {/* CARD 04 */}
          <article className="w-full grid grid-cols-5 p-12 lg:min-h-96 bg-[#ffffff]  rounded-2xl lg:rounded-[18px] sticky top-[24%] lg:top-[40%] max-w-[90%] ">
            <div className="flex flex-col lg:items-start gap-4 text-4xl   w-full justify-center col-span-2">
              <span className="text-[1.2rem] ">04</span>

              <h3 className="text-black">Redes Sociais & Conteúdo</h3>

              <p className="text-gray-700 text-[1.2rem] ">
                Gestão completa de social media, com estratégia, calendário,
                linguagem de marca e consistência visual.
              </p>
            </div>

            <div className="col-span-3 justify-self-end">
              <Image
                src="/ilustra-04.avif"
                width={516}
                height={400}
                alt="Ilustração"
              />
            </div>
          </article>

          {/* CARD 05 */}
          <article className="w-full grid grid-cols-5 p-12 lg:min-h-96 bg-[#ffffff]  rounded-2xl lg:rounded-[18px] sticky top-[24%] lg:top-[40%] max-w-[90%] ">
            <div className="col-span-3">
              <Image
                src="/ilustra-05.avif"
                width={516}
                height={400}
                alt="Ilustração"
              />
            </div>

            <div className="flex flex-col lg:items-start gap-4 text-4xl   w-full justify-center col-span-2">
              <span className="text-[1.2rem] ">05</span>

              <h3 className="text-black">Criativos & Performance</h3>

              <p className="text-gray-700 text-[1.2rem] ">
                Criação de peças visuais e campanhas pensadas para engajar,
                comunicar e converter.
              </p>
            </div>
          </article>

          {/* CARD 06 */}
          <article className="w-full grid grid-cols-5 p-12 lg:min-h-96 bg-[#ffffff]  rounded-2xl lg:rounded-[18px] sticky top-[24%] lg:top-[40%] max-w-[90%] ">
            <div className="flex flex-col lg:items-start gap-4 text-4xl   w-full justify-center col-span-2">
              <span className="text-[1.2rem] ">06</span>

              <h3 className="text-black">Produção de Vídeo</h3>

              <p className="text-gray-700 text-[1.2rem] ">
                Vídeos que contam histórias, fortalecem marcas e performam em
                múltiplas plataformas.
              </p>
            </div>

            <div className="col-span-3 justify-self-end">
              <Image
                src="/ilustra-06.avif"
                width={516}
                height={400}
                alt="Ilustração"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
