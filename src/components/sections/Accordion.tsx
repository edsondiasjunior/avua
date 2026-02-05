"use client";

import React, { useMemo, useState } from "react";

type FaqItem = {
  header: string;
  text: string;
};

type AccordionItemProps = FaqItem;

function normalizeMultilineText(input: string): string {
  // Normaliza quebras (Windows -> Unix) e remove espaços “invisíveis” comuns em copy/paste
  return input.replace(/\r\n/g, "\n").replace(/\u00A0/g, " ").trim();
}

const FAQ: FaqItem[] = [
  {
    header: "Qual é o prazo médio para desenvolvimento de um site?",
    text:
      "Para site expresso: Após a escolha do modelo e envio do texto, o site estará pronto em até 5 dias úteis. " +
      "Para site sob medida: O prazo varia de acordo com o tamanho e complexidade do site. Em média, os sites são totalmente " +
      "desenvolvidos em aproximadamente 30 a 45 dias úteis. No entanto, esse prazo pode variar conforme as especificidades de cada projeto.",
  },
  {
    header: "Quais são as etapas envolvidas no processo de criação de sites?",
    text: `Para o site expresso:
1. Escolha do modelo: Você seleciona o modelo desejado.
2. Envio de conteúdo: Você envia o conteúdo do seu site.
3. Customização do site: Nossa equipe personaliza o site.
4. Entrega em até 5 dias úteis: Em breve, você terá um site profissional.

Para o site sob medida:
1. Briefing: Coletamos informações detalhadas sobre o projeto.
2. Criação do layout: Desenvolvemos um layout personalizado.
3. Desenvolvimento do site: Transformamos o layout em um site funcional.
4. Testes: Realizamos testes rigorosos para garantir desempenho e funcionalidade.
5. Checklist: Revisamos todos os detalhes conforme suas especificações.
6. Lançamento: Seu site é lançado para o público.`,
  },
];

export default function Accordion(): React.JSX.Element {
  // Se você quiser renderizar a lista de FAQ por map (mais limpo)
  const items = useMemo(() => FAQ, []);

  return (
    <section className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg uppercase">
                empresa de criação de sites
              </span>

              <h2 className="mb-4 text-5xl text-black md:text-7xl sm:text-[40px]/[48px]">
                Perguntas Frequentes
              </h2>

              <p className="text-body-color dark:text-dark-6">
                Respostas rápidas e diretas sobre prazos, processo e estrutura do seu site.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            {items.slice(0, 2).map((item, idx) => (
              <AccordionItem key={`${item.header}-${idx}`} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AccordionItem({ header, text }: AccordionItemProps): React.JSX.Element {
  const [active, setActive] = useState(false);

  const contentId = useMemo(() => {
    // id estável (não depende de Math.random)
    const slug = header
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    return `faq-${slug}`;
  }, [header]);

  const normalizedText = useMemo(() => normalizeMultilineText(text), [text]);

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setActive((prev) => !prev);
  };

  return (
    <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 sm:p-8 lg:px-6 xl:px-8">
      <button
        type="button"
        className="faq-btn flex w-full text-left"
        onClick={handleToggle}
        aria-expanded={active}
        aria-controls={contentId}
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
            aria-hidden="true"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          {/* FAQ: ideal usar h3 para semântica */}
          <h3 className="mt-1 text-lg font-semibold text-neutral-900 dark:text-black">
            {header}
          </h3>
        </div>
      </button>

      <div
        id={contentId}
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        {/* whitespace-pre-line preserva as quebras de linha e evita hydration mismatch */}
        <p className="py-3 text-base leading-relaxed text-body-color dark:text-dark-6 whitespace-pre-line">
          {normalizedText}
        </p>
      </div>
    </div>
  );
}
