"use client";
import React, { useState } from "react";

const Accordion = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg uppercase">
                empresa de criação de sites
              </span>
              <h2 className="mb-4 text-5xl md:text-7xl text-dark text-black sm:text-[40px]/[48px]">
                Perguntas Frequentes
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="Qual é o prazo médio para desenvolvimento de um site?"
              text="Para site expresso: Após a escolha do modelo e envio do texto, o site estará pronto em até 5 dias úteis. Para site sob medida: O prazo varia de acordo com o tamanho e complexidade do site. Em média, os sites são totalmente desenvolvidos em aproximadamente 30 a 45 dias úteis. No entanto, esse prazo pode variar conforme as especificidades de cada projeto."
            />
            <AccordionItem
              header="Qual será o canal de contato durante o processo de criação do site?"
              text="Após a contratação do site, você será designado a um dos nossos gerentes de projetos dedicados. Este profissional será seu ponto de contato central durante todo o processo de criação do site. Estarão disponíveis para esclarecer dúvidas e oferecer orientação por meio de canais exclusivos de atendimento, como WhatsApp, e-mail e telefone."
            />
            <AccordionItem
              header="O site será responsivo e adaptado para celular?"
              text="Sim, todos os sites desenvolvidos pela Avuá são totalmente responsivos, o que significa que se adaptam automaticamente a qualquer dispositivo, seja celular, tablet ou computador. Esse tipo de estrutura é importante para garantir uma navegação fluida, rápida e intuitiva, principalmente porque a maior parte dos acessos hoje acontece via smartphones. Além de melhorar a experiência do usuário, um site responsivo contribui diretamente para o SEO, já que o Google prioriza páginas adaptadas para dispositivos móveis nos resultados de busca."
            />
            <AccordionItem
              header="Quais são as etapas envolvidas no processo de criação de sites?"
              text="Para o site expresso: 1. Escolha do modelo: Você seleciona o modelo desejado.
2. Envio de conteúdo: Você envia o conteúdo do seu site.
3. Customização do site: Nossa equipe personaliza o site.
4. Entrega em até 5 dias úteis: Em breve, você terá um site profissional.
 
Para o site sob medida:
1. Briefing: Coletamos informações detalhadas sobre o projeto.
2. Criação do layout: Desenvolvemos um layout personalizado.
3. Desenvolvimento do site: Transformamos o layout em um site funcional.
4. Testes: Realizamos testes rigorosos para garantir desempenho e funcionalidade.
5. Checklist: Revisamos todos os detalhes conforme suas especificações.
6. Lançamento: Seu site é lançado para o público."
            />
            <AccordionItem
              header="Vale a pena ter um site One Page para minha empresa?"
              text="Sim, um site One Page (ou site de uma página) pode ser uma excelente escolha para empresas que buscam simplicidade, agilidade e impacto visual.
Esse tipo de site reúne todo o conteúdo principal, como apresentação da empresa, serviços, depoimentos e contato em uma única página com rolagem fluida, ideal para quem deseja uma navegação rápida e direta.
Na Avuá, desenvolvemos sites One Page com design moderno, carregamento rápido e estrutura otimizada para dispositivos móveis, garantindo uma experiência excelente tanto para o usuário quanto para o Google.
Ele é especialmente indicado para:
Negócios locais e profissionais autônomos,
Landing pages e campanhas específicas e 
Empresas que estão dando os primeiros passos no digital"
            />
            <AccordionItem
              header="Meu site será encontrado no Google?"
              text="Sim. Todos os sites criados pela Avuá são desenvolvidos com estrutura técnica otimizada para o Google, seguindo as melhores práticas de SEO desde o início.
Nos projetos sob medida, fazemos a configuração completa do Google Search Console, envio do sitemap XML, validação da indexação e aplicação de tags e estruturas que facilitam o ranqueamento do seu site nos resultados de busca.
Isso significa que seu site estará pronto para ser encontrado no Google com agilidade, tanto em buscas pelo nome da sua empresa quanto por palavras-chave relacionadas ao seu negócio."
            />
            <AccordionItem
              header="A plataforma permite que eu faça alterações no meu site de forma fácil?"
              text="Sim, a plataforma oferece uma edição fácil do seu site, independentemente da opção escolhida.
Para sites sob medida, enviaremos vídeos instrutivos após a conclusão do projeto, com orientações detalhadas sobre o uso da plataforma. Além disso, oferecemos suporte gratuito nos primeiros 30 dias para todos os clientes.
Para o site expresso, as facilidades de edição são as mesmas, e o suporte já está incluso no valor da assinatura. Você terá acesso a uma interface amigável e um editor em tempo real de arrasta e solta, eliminando a necessidade de conhecimento técnico."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="Quais otimizações de SEO estão inclusas na criação do site?"
              text="Sim. Todos os sites desenvolvidos pela Avuá incluem otimizações técnicas de SEO para ajudar seu site a ser encontrado nos mecanismos de busca como o Google. Nos sites expressos, configuramos corretamente a hierarquia de títulos (H1, H2, H3…), as tags de título (title) e as meta descriptions, garantindo que o Google entenda bem a estrutura do conteúdo. Já nos sites sob medida, realizamos uma otimização mais avançada, que inclui: Hierarquia semântica completa,Títulos e descrições estratégicas, Imagens com atributos otimizados (alt-text), Indexação e sitemap configurado no Google Search Console. E o mais importante: um planejamento de palavras-chave personalizado, baseado em volume de busca e no contexto do seu negócio. Essas ações tornam seu site muito mais competitivo nos resultados de pesquisa, mas é importante lembrar:Estar na primeira página do Google depende de uma estratégia contínua de SEO, com produção de conteúdo, backlinks e autoridade de domínio, o que pode ser feito com o apoio da nossa Consultoria de SEO."
            />
            <AccordionItem
              header="É seguro contratar a Avuá para criar o meu site?"
              text="Na Avuá, levamos a segurança dos nossos clientes a sério. Por isso, todo projeto começa com um contrato digital formalizado, que detalha prazos, valores, direitos e obrigações de ambas as partes. Esse contrato garante transparência total e segurança jurídica durante o processo de criação do site. Além disso, somos uma agência de criação de sites com sede em São Paulo, atuando no mercado desde 2016, com milhares de projetos entregues para empresas de todos os portes e segmentos. Se você está procurando uma agência confiável para desenvolver seu site com segurança e qualidade, a UpSites está pronta para te atender."
            />
            <AccordionItem
              header="Quais são os requisitos iniciais para dar início a criação de um site?"
              text="Para iniciar a criação do seu site, são necessários três elementos essenciais:
Um domínio (o endereço do site), um servidor de hospedagem (onde armazena os arquivos e banco de dados) e o desenvolvimento do próprio site. A Avuá acompanhará você em todas as etapas desse processo, fornecendo suporte desde a escolha do domínio até a conclusão do desenvolvimento do seu site."
            />
            <AccordionItem
              header="Quais opções de pagamento estão disponíveis?"
              text="Facilitamos o pagamento do seu site ao aceitar parcelamentos via boleto bancário.
Isso proporciona maior segurança e condições ideais para o desenvolvimento do seu site."
            />
            <AccordionItem
              header="É possível hospedar o site em um servidor de hospedagem que não seja o da Avuá?"
              text="Para o site expresso, o site é hospedado em nossos servidores, utilizando o servidor da Hostinger para máxima performance e velocidade. Se optar por um site sob medida, oferecemos flexibilidade na escolha do servidor de hospedagem: pode ser o nosso ou um de sua preferência. Entretanto, recomendamos nossa hospedagem durante o primeiro ano para aproveitar nosso suporte constante, dado o aprendizado contínuo. Acreditamos que a qualidade do servidor de hospedagem desempenha um papel fundamental no sucesso do seu site."
            />
            <AccordionItem
              header="Existem custos mensais obrigatóFrios após a conclusão do meu site?"
              text="Para os sites sob medida, não há uma mensalidade obrigatória. No entanto, temos um produto opcional chamado Plano de Cuidados com o Site, uma solução que inclui um servidor de hospedagem de alta performance, manutenção do site e suporte continuo. Temos uma equipe dedicada para realizar atualizações, alterações e te ajudar com suas dúvidas. No caso do site expresso, há uma mensalidade a partir de R$95/mês. Este valor abrange suporte, atualizações e hospedagem, proporcionando um pacote completo para manter o seu site funcionando de maneira eficiente. Para saber mais detalhes sobre a precificação, leia nosso conteúdo sobre  quanto custa um site."
            />
            <AccordionItem
              header="Quais tipos de sites a Avuá desenvolve?"
              text="Somos uma agência de sites e fornecemos dos tipos de produto: o site sob medida e o site expresso (baseado em template de site).
O site sob medida é criado de forma artesanal e personalizada, isto é, desenvolvido do zero e possui funcionalidades mais complexas. Haverá uma equipe dedicada composta por gestor de projeto, designer e programador. Abrange uma variedade de tipos de sites, incluindo one page, multi page, blog, loja virtual, landing page, diretório, portal de notícias, áreas de membros, entre outros.
O site expresso é um site mais econômico e rápido de ser feito. Ele é baseado em um template de site (modelo) e é desenvolvido em até 5 dias úteis. Com mais de 50 modelos disponíveis, incluindo opções one page, multi page e blog, é ideal para quem precisa de um site em pouco tempo e com um investimento acessível."
            />
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3056D3" stop-opacity="0.36" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div> */}
    </section>
  );
};

export default Accordion;

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2  sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-dark dark:text-black">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
          {text}
        </p>
      </div>
    </div>
  );
};
