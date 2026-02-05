"use client";

import { PropsWithChildren, useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap/register";

export default function SmoothScrollProvider({ children }: PropsWithChildren) {
  useEffect(() => {
    // Acessibilidade: respeita "reduzir movimento"
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      // Ajuste fino depois (feel do scroll)
      duration: 1.1,
      smoothWheel: true,
    //   smoothTouch: false,
      // wheelMultiplier: 1,
    });

    // Toda vez que o Lenis “mexe” no scroll, o ScrollTrigger recalcula
    lenis.on("scroll", ScrollTrigger.update);

    // Faz o GSAP ticker dirigir o RAF do Lenis
    const raf = (time: number) => {
      // Lenis espera ms
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Atualiza triggers após tudo inicializar
    requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      gsap.ticker.remove(raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
