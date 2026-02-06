import Btn from "../ui/Btn";

export default function Cta() {
  return (
    <section className="relative px-4 sm:px-16 pb-42 h-[120vh] flex justify-center ">
      <div
        className="absolute inset-0 bg-[url('/bg-cta.avif')] bg-cover bg-bottom"
        aria-hidden
      />
      <div className="flex flex-col items-center justify-end gap-8 relative z-10">
        <span className="tagline text-[1.1rem] uppercase text-[#8BED02] text-center tracking-[.16em] font-medium">
            Dê o próximo passo
          </span>
        <h2 className="text-white text-center sm:max-w-4xl">
          Vamos transformar sua presença online em resultado
        </h2>
        <p className="text-white sm:max-w-3xl text-center ">
          Da estratégia ao design, do conteúdo à tecnologia, ajudamos marcas a
          construir uma presença digital consistente, relevante e preparada para
          crescer.
        </p>

        <Btn />
      </div>
    </section>
  );
}
