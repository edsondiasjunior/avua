import Btn from "@/components/ui/Btn";
import {Target} from "lucide-react";

export default function Nutri() {
  return (
    <>
      <section className="h-full  2xl:h-screen flex items-center justify-center p-4">
        <div className=" grid  2xl:grid-cols-3 bg-[url(/hero_nutricionistas.webp)] bg-cover bg-center p-20 h-full w-full border-0 rounded-[48px] overflow-hidden relative">
          <div className="col-span-2 flex justify-end 2xl:justify-center items-center 2xl:items-start flex-col gap-20 z-10 ">
            <div className="  flex flex-col items-center 2xl:items-start gap-8">
              <span className="text-gray-100 uppercase border rounded-full px-4 pt-2 pb-1 w-fit h-fit">
                Avuá - agência de CRIAÇÃO DE SITES
              </span>
              <h1 className="text-gray-100 text-7xl text-center 2xl:text-start max-w-240">
                Todos os dias as pessoas buscam por nutricionistas no Google.
                Onde você está?
              </h1>
              <div className="grid grid-cols-3 gap-4">
                <p className="text-gray-100 col-span-2 max-w-140">
                  Tenha um site profissional e 100% responsivo. Ele irá ajudá-lo
                  a conquistar mais clientes, mostrar seu trabalho e
                  compartilhar conhecimento.
                </p>
                <Btn />
              </div>
            </div>

            <div className="flex justify-between gap-4 bg-white/10 border-2 border-white/5 rounded-3xl backdrop-blur-sm w-fit h-fit p-5">
              <article className="flex gap-4 items-center w-fit">
                <h3 className="text-gray-100 font-bold text-4xl">93%</h3>
                <p className="text-gray-100 max-w-90">
                  dos usuários pesquisam internet antes de tomar a decisão de
                  contratar um serviços.
                </p>
              </article>
              <article className="flex gap-4 items-center w-fit ">
                <h3 className="text-gray-100 font-bold text-4xl">75%</h3>
                <p className="text-gray-100 max-w-56 ">
                  dos usuários julgam sua empresa pelo design do site
                </p>
              </article>
            </div>
          </div>

          {/* gradien bg */}
          <div className="nutriGradient absolute top-0 right-0 w-full h-full z-0"></div>
        </div>
      </section>

      <section className="px-4 py-28">
        <div className="grid grid-cols-4 gap-6">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl">
              Ter um site profissional é comprovadamente eficiente na captação
              de novos clientes
            </h2>
            <p>Com ele você pode ter muitos benefícios para seu negocio.</p>
          </div>

          <article className="p-10 flex flex-col justify-between h-[562px] items-end bg-gray-200 rounded-4xl" >
            <span>
              <Target size={82}/>
            </span>

            <div className="flex flex-col gap-2 w-full">

            <h3 className="text-3xl">Captação contínua de pacientes via Google</h3>
            <p>er um site faz você aparecer nas buscas de pessoas que procuram nutricionistas na sua região.</p>
            <p> Mais visibilidade → mais pacientes → mais agendamentos, de forma contínua.</p>
            </div>
          </article>

          <article className="p-10 flex flex-col justify-between h-[562px] items-end bg-gray-200 rounded-4xl" >
            <span>
              <Target size={82}/>
            </span>

            <div className="flex flex-col gap-2 w-full">

            <h3 className="text-3xl">Captação contínua de pacientes via Google</h3>
            <p>er um site faz você aparecer nas buscas de pessoas que procuram nutricionistas na sua região.</p>
            <p> Mais visibilidade → mais pacientes → mais agendamentos, de forma contínua.</p>
            </div>
          </article>

          <article className="p-10 flex flex-col justify-between h-[562px] items-end bg-gray-200 rounded-4xl" >
            <span>
              <Target size={82}/>
            </span>

            <div className="flex flex-col gap-2 w-full">

            <h3 className="text-3xl">Captação contínua de pacientes via Google</h3>
            <p>er um site faz você aparecer nas buscas de pessoas que procuram nutricionistas na sua região.</p>
            <p> Mais visibilidade → mais pacientes → mais agendamentos, de forma contínua.</p>
            </div>
          </article>
        </div>
      </section>

      <section>
        <div>
          <span>foto</span>
          <div>
            <h2>E nós da Avuá entregamos muito mais que um site bonito</h2>
          </div>
          <span>foto</span>
        </div>
      </section>
    </>
  );
}
