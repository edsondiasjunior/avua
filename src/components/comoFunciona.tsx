import Tagline from "./typography/Tagline";
import Image from "next/image";

export default function comoFunciona() {
  return (
    <section className=" p-4 py-28 flex flex-col items-center justify-center gap-16 lg:sticky lg:top-0 z-[-1] ">

      <div className="flex flex-col items-center justify-center gap-4">
        <Tagline tagline={"Agência de sites"} />
        <h2 className="text-5xl text-center md:text-7xl">CO que fazemos</h2>
      </div>
      <div className="flex flex-col w-full gap-8 md:grid md:grid-cols-3">
        <article className="px-8 py-8 flex flex-col justify-between items-end h-[450px] bg-[#0153E3] rounded-4xl">
          <h3 className="text-5xl font-bold text-white w-full">
            Definição do site ideal
          </h3>

          <div className="max-w-58 flex flex-col items-end gap-8">
            <Image src={"/icon-escolha-o-tipo-de-site.svg"} alt="Icone de tela de tablet" width={92} height={73}   />
            <p className="text-white text-end text-base">
              Entendemos seus objetivos e ajudamos a definir o tipo de site mais adequado para comunicar bem seu negócio.
            </p>
          </div>
        </article>

        <article className="px-8 py-8 flex flex-col justify-between items-end h-[450px] bg-[#012C8A] rounded-4xl">
          <h3 className="text-5xl font-bold text-white w-full">
            Funcionalidades
          </h3>

          <div className="max-w-78 flex flex-col items-end gap-8">
            <Image src={"/icon-adcionais.svg"} alt="Icone de tela de tablet" width={92} height={73}   />
            <p className="text-white text-end text-base">
              Definimos apenas as funcionalidades necessárias para que o site funcione bem e seja útil no dia a dia.
            </p>
          </div>
        </article>

        <article className="px-8 py-8 flex flex-col justify-between items-end h-[450px] bg-[#01112B] rounded-4xl">
          <h3 className="text-5xl font-bold text-white w-full">
            Desenvolvimento
          </h3>

          <div className="max-w-58 flex flex-col items-end gap-8">
            <Image src={"/icon-start-do-projeto.svg"} alt="Icone de tela de tablet" width={92} height={73}   />
            <p className="text-white text-end text-base">
              Desenvolvemos, ajustamos e publicamos o site com acompanhamento e orientações básicas para uso.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
