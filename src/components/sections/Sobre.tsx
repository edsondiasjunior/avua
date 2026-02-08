import RevealTitle from "@/components/animation/RevealTitle";
export default function Sobre() {
  return (
    <section className="lg:h-[70vh] bg-gray-200 py-32 px-4 lg:px-16 gap-6  lg:sticky top-0 z-[-1] flex justify-center items-center">
      <div className="">
        <div className="grid grid-cols-7 items-start gap-4  ">
          <span className="tagline ">
            Quem somos
          </span>

          <RevealTitle
            as="h4"
            className="sm:text-4xl font-light text-black col-span-7 sm:col-span-5 leading-8 sm:leading-11 "
          >
            Somos uma agência digital que constrói presença online com
            estratégia. Atuamos da concepção à execução, integrando design,
            tecnologia, conteúdo e gestão para marcas que buscam destaque no
            ambiente digital de forma consistente e escalável.
          </RevealTitle>
        </div>
      </div>
    </section>
  );
}
