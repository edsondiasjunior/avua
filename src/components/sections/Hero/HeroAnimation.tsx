"use client";

import { useEffect } from "react";
import { gsap } from "@/lib/gsap/register";


export default function HeroAnimation() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-title]", {
        y: 24,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
      });

      gsap.from("[data-hero-side]", {
        y: 16,
        opacity: 0,
        duration: 2,
        delay: 0.1,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
