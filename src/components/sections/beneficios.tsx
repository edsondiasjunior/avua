import Image from "next/image";
import RevealTitle from "@/components/animation/RevealTitle";

export default function Beneficios() {
  return (
    <section className=" bg-white py-52 px-16 flex flex-col items-center gap-52">
      <div className="flex flex-col gap-8">
        <span className="tagline text-[1.1rem] text-start uppercase text-black col-span-2 tracking-[.16em] font-medium  ">
          Benefícios
        </span>

        <RevealTitle
          as="h2"
          className="text-5xl md:text-6xl text-black max-w-[900px] text-start"
        >
          O valor de fazer do jeito certo.
        </RevealTitle>
        <p className="">Cada decisão é pensada para fortalecer a marca e sustentar resultados ao longo do tempo.</p>
      </div>

      <div>
        {/* CARD 1 */}
        <article className="grid grid-cols-12 py-12 border-t  border-t-black items-center relative hover:bg-neutral-200 px-8 group ">
          <div className="flex gap-4 col-span-9 items-center  ">
            <span className="tagline text-[1rem] font-bold tracking-[.16em] leading-0 text-center flex items-center justify-center h-[30px] w-[50px] bg-[#8BED02]">01</span>
            <h3 className="text-4xl ">Clareza para decisões</h3>
          </div>

          <p className="col-span-3">
            Você sabe onde investir, o que priorizar e como evoluir sua presença
            online com direção clara.
          </p>

          {/* HOVER */}
          <span className="flex flex-col opacity-0 justify-between items-end h-[300] w-[250] px-8 py-4 bg-gray-950 absolute left-[50%] p-4 rounded-2xl rotate-8 group-hover:opacity-100 group-hover:translate-x-5 transition duration-300 ease-in-out z-1">
            <Image src="/hover_1.png" alt="hover" width={100} height={100} />
            <div>
              <p className="text-[1.5rem] leading-6 text-white ">
                Direção clara antes da execução
              </p>
            </div>
          </span>
        </article>

        {/* CARD 2 */}
        <article className="grid grid-cols-12 py-12 border-t  border-t-black items-center relative px-8 hover:bg-neutral-200  group">
          <div className="flex gap-4 col-span-9 items-center">
            <span className="tagline text-[1rem] font-bold tracking-[.16em] leading-0 text-center flex items-center justify-center h-[30px] w-[50px] bg-[#8BED02]">02</span>
            <h3 className="text-4xl">Comunicação consistente</h3>
          </div>

          <p className="col-span-3">
            Sua marca se comunica de forma alinhada em todos os canais,
            fortalecendo percepção, autoridade e confiança.
          </p>

          {/* HOVER */}
          <span className="flex flex-col opacity-0 justify-between items-end h-[300] w-[250] px-8 py-4 bg-gray-950 absolute left-[50%] p-4 rounded-2xl rotate-8 group-hover:opacity-100 group-hover:translate-x-5 transition duration-300 ease-in-out z-1">
            <Image src="/hover_2.png" alt="hover" width={100} height={100} />
            <div>
              <p className="text-[1.5rem] leading-6 text-white ">
                Coerência constrói marcas fortes
              </p>
            </div>
          </span>
        </article>

        {/* CARD 3 */}
        <article className="grid grid-cols-12 py-12 border-t  border-t-black items-center relative px-8 hover:bg-neutral-200  group">
          <div className="flex gap-4 col-span-9 items-center">
            <span className="tagline text-[1rem] font-bold tracking-[.16em] leading-0 text-center flex items-center justify-center h-[30px] w-[50px] bg-[#8BED02]">03</span>
            <h3 className="text-4xl">Experiências que convertem</h3>
          </div>

          <p className="col-span-3">
            Interfaces e conteúdos pensados para facilitar a jornada, reduzir
            fricção e gerar resultados reais.
          </p>

          {/* HOVER */}
          <span className="flex flex-col opacity-0 justify-between items-end h-[300] w-[250] px-8 py-4 bg-gray-950 absolute left-[50%] p-4 rounded-2xl rotate-8 group-hover:opacity-100 group-hover:translate-x-5 transition duration-300 ease-in-out z-1">
            <Image src="/hover_3.png" alt="hover" width={100} height={100} />
            <div>
              <p className="text-[1.5rem] leading-6 text-white ">
                Boa experiência gera resultado
              </p>
            </div>
          </span>
        </article>

        {/* CARD 4 */}
        <article className="grid grid-cols-12 py-12 border-t border-b  border-t-black items-center relative px-8 hover:bg-neutral-200  group">
          <div className="flex gap-4 col-span-9 items-center">
            <span className="tagline text-[1rem] font-bold tracking-[.16em] leading-0 text-center flex items-center justify-center h-[30px] w-[50px] bg-[#8BED02]">04</span>
            <h3 className="text-4xl">Crescimento escalável</h3>
          </div>

          <p className="col-span-3">
            Uma base sólida para evoluir, lançar, escalar e sustentar o
            crescimento do negócio no digital.
          </p>

          {/* HOVER */}
          <span className="flex flex-col opacity-0 justify-between items-end h-[300] w-[250] px-8 py-4 bg-gray-950 absolute left-[50%] p-4 rounded-2xl rotate-8 group-hover:opacity-100 group-hover:translate-x-5 transition duration-300 ease-in-outz-1 ">
            <Image src="/hover_4.png" alt="hover" width={100} height={100} />
            <div>
              <p className="text-[1.5rem] leading-6 text-white ">
                Crescer exige estrutura
              </p>
            </div>
          </span>
        </article>
      </div>
    </section>
  );
}
