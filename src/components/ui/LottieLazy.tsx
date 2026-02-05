"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";

type Props = {
  src: string; // "/lottie/RQRY952.json"
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
  // começa a carregar quando estiver próximo de aparecer (pré-load)
  rootMargin?: string; // ex: "200px"
};

export default function LottieLazy({
  src,
  className,
  loop = true,
  autoplay = true,
  rootMargin = "200px",
}: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  const [shouldLoad, setShouldLoad] = useState(false);
  const [animationData, setAnimationData] = useState<object | null>(null);

  // 1) Observa quando entra perto da viewport
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  // 2) Carrega o JSON só quando precisar
  useEffect(() => {
    if (!shouldLoad) return;

    let cancelled = false;

    async function load() {
      const res = await fetch(src);
      const json = await res.json();
      if (!cancelled) setAnimationData(json);
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [shouldLoad, src]);

  // Placeholder com tamanho (evita CLS)
  const placeholder = useMemo(
    () => <div className={className} aria-hidden />,
    [className]
  );

  return (
    <div ref={containerRef}>
      {!animationData ? (
        placeholder
      ) : (
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={loop}
          autoplay={autoplay}
          className={className}
        />
      )}
    </div>
  );
}
