"use client";

import { useEffect } from "react";

export default function MotionEffects() {
  useEffect(() => {
    document.documentElement.classList.add("motion-ready");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" }
    );

    revealItems.forEach((item) => observer.observe(item));

    const parallaxItems = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    const cleanups: Array<() => void> = [];

    if (canHover) {
      parallaxItems.forEach((item) => {
        const handleMove = (event: PointerEvent) => {
          const rect = item.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          item.style.setProperty("--px", `${x * 12}px`);
          item.style.setProperty("--py", `${y * 12}px`);
          item.style.setProperty("--rx", `${-y * 4}deg`);
          item.style.setProperty("--ry", `${x * 4}deg`);
        };

        const handleLeave = () => {
          item.style.setProperty("--px", "0px");
          item.style.setProperty("--py", "0px");
          item.style.setProperty("--rx", "0deg");
          item.style.setProperty("--ry", "0deg");
        };

        item.addEventListener("pointermove", handleMove);
        item.addEventListener("pointerleave", handleLeave);
        cleanups.push(() => {
          item.removeEventListener("pointermove", handleMove);
          item.removeEventListener("pointerleave", handleLeave);
        });
      });
    }

    return () => {
      document.documentElement.classList.remove("motion-ready");
      observer.disconnect();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
