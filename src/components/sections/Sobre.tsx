import RevealTitle from "@/components/animation/RevealTitle";
export default function Sobre() {
  return (
    <section className="lg:h-[70vh] bg-gray-200 py-32 px-4 lg:px-16 gap-6  lg:sticky top-0 z-[-1] flex justify-center items-center">
      <div className="">
        <div className="grid grid-cols-7 items-start gap-4  ">
          <span className="tagline text-[1.1rem] text-start uppercase text-black col-span-7 sm:col-span-2 tracking-[.16em] font-medium  ">
            Quem somos
          </span>

          <RevealTitle
            as="h3"
            className="text-[1.5rem] sm:text-4xl font-normal text-black col-span-7 sm:col-span-5 leading-8 sm:leading-11 "
          >
            Somos uma <strong>  agência digital</strong> focada em presença online estratégica.
            Atuamos da concepção à execução, integrando <strong>  design, tecnologia,
            conteúdo e gestão para marcas </strong> que querem se destacar no ambiente
            digital de forma consistente e escalável.
          </RevealTitle>
        </div>
      </div>
    </section>
  );
}
