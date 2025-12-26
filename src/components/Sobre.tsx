import Image from "next/image";
export default function Sobre() {
  return (
    <section className="lg:h-screen bg-gray-200 py-32 lg:pl-16 px-4 gap-6 overflow-hidden lg:sticky top-0">
      <div className="grid lg:grid-cols-2">
        <div className="flex flex-col items-start gap-4 lg:self-center sticky  lg:max-w-[700px] ">
          <span className="text-[1.1rem] uppercase text-[#8BED02]">
            criação de site profissional
          </span>
          <h2 className="text-5xl md:text-7xl text-black">
            Agência de Criação de sites
          </h2>
          <p>
            Na Avuá, desenvolvemos sites profissionais gerenciáveis, que
            permitem que você tenha total controle sobre o conteúdo da sua
            página. Isso significa que você mesmo poderá fazer atualizações
            sempre que quiser sem depender de ninguém.
          </p>
          <p>
            Nosso painel administrativo intuitivo permite adicionar ou editar
            textos, imagens, vídeos e até criar novas páginas, de forma simples
            e rápida.
          </p>
        </div>

        <div className="relative h-[600] lg:h-full ">
          <Image src={"/Dark.png"} alt="Tela" width={988} height={655} className="absolute top-20 lg:top-[-50%] lg:right-[-50]  rotate-10 z-10 "/>
          <Image src={"/ligth.png"} alt="Tela" width={988} height={655} className="absolute top-100 lg:top-[50%] rotate-[-10deg]" />
        </div>
      </div>
    </section>
  );
}
