import RevealTitle from "@/components/animation/RevealTitle";
export default function Sobre() {
  return (
    <section className="lg:h-[70vh] bg-gray-200 py-32 px-16 gap-6  lg:sticky top-0 z-[-1] flex justify-center items-center">
      <div className="">
        <div className="grid grid-cols-7 items-start gap-4  ">
          <span className="text-[1.1rem] text-start uppercase text-black col-span-2">
            Quem somos
          </span>

          <RevealTitle
            as="h3"
            className="text-4xl font-normal text-black col-span-5 leading-11 "
          >
            Somos uma agência digital focada em presença digital estratégica.
            Atuamos da concepção à execução, integrando design, tecnologia,
            conteúdo e gestão para marcas que querem se destacar no ambiente
            digital de forma consistente e escalável.
          </RevealTitle>
        </div>
      </div>
    </section>
  );
}
