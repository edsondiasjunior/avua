import Tagline from "./typography/Tagline";
import Image from "next/image";

export default function comoFunciona() {
  return (
    <section className=" p-4 py-28 flex flex-col items-center justify-center gap-16 sticky top-0 z-[-1] ">

      <div className="flex flex-col items-center justify-center gap-4">
        <Tagline tagline={"Agência de sites"} />
        <h2 className="text-5xl text-center md:text-7xl">Como Funciona?</h2>
      </div>
      <div className="flex flex-col w-full gap-8 md:grid md:grid-cols-3">
        <article className="px-8 py-8 flex flex-col justify-between items-end h-[450px] bg-[#0153E3] rounded-4xl">
          <h3 className="text-5xl font-bold text-white w-full">
            Escolha o <br />
            tipo de site
          </h3>

          <div className="max-w-58 flex flex-col items-end gap-8">
            <Image src={"/icon-escolha-o-tipo-de-site.svg"} alt="Icone de tela de tablet" width={92} height={73}   />
            <p className="text-white text-end text-base">
              Site sob medida ou site com template? Ajudamos a definir o tipo de
              site ideal para você!
            </p>
          </div>
        </article>

        <article className="px-8 py-8 flex flex-col justify-between items-end h-[450px] bg-[#012C8A] rounded-4xl">
          <h3 className="text-5xl font-bold text-white w-full">
            Adcionais
          </h3>

          <div className="max-w-78 flex flex-col items-end gap-8">
            <Image src={"/icon-adcionais.svg"} alt="Icone de tela de tablet" width={92} height={73}   />
            <p className="text-white text-end text-base">
              Escolha os adicionais do seu site. Blog, Multi-idioma, Portfólio, Cadastro de imóveis, Área de membros e mais!
            </p>
          </div>
        </article>

        <article className="px-8 py-8 flex flex-col justify-between items-end h-[450px] bg-[#01112B] rounded-4xl">
          <h3 className="text-5xl font-bold text-white w-full">
            Start do <br/> Projeto
          </h3>

          <div className="max-w-58 flex flex-col items-end gap-8">
            <Image src={"/icon-start-do-projeto.svg"} alt="Icone de tela de tablet" width={92} height={73}   />
            <p className="text-white text-end text-base">
              Emissão de contrato, briefing e mãos na massa! Em poucos dias um site novinho em folha!
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
