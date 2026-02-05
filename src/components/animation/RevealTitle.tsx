"use client";

import React, { useEffect, useId, useRef } from "react";
import { gsap } from "@/lib/gsap/register";

type Props<T extends React.ElementType> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
  y?: number;
  duration?: number;
  threshold?: number;
  rootMargin?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children">;

export default function RevealTitle<T extends React.ElementType = "h2">({
  as,
  children,
  className,
  delay = 0,
  once = true,
  y = 24,
  duration = 0.9,
  threshold = 0.25,
  rootMargin = "0px 0px -10% 0px",
  ...rest
}: Props<T>) {
  const Comp = (as ?? "h2") as React.ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const uid = useId();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion =
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

    if (reduceMotion) {
      // garante visível sem animação
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    // estado inicial (evita flash)
    gsap.set(el, { opacity: 0, y });

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          const ctx = gsap.context(() => {
            gsap.to(el, {
              opacity: 1,
              y: 0,
              duration,
              delay,
              ease: "power3.out",
              clearProps: "transform",
            });
          }, el);

          if (once) io.disconnect();
          return () => ctx.revert();
        }
      },
      { threshold, rootMargin }
    );

    io.observe(el);

    return () => {
      io.disconnect();
    };
  }, [delay, once, y, duration, threshold, rootMargin]);

  return (
    <Comp
      ref={(node: any) => (ref.current = node)}
      className={className}
      data-reveal-title={uid}
      {...rest}
    >
      {children}
    </Comp>
  );
}
