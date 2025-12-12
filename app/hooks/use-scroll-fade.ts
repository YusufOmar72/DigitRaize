"use client";

import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function useScrollFade() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Fade in as section enters viewport, fade out as it exits
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  );

  // Subtle parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return { ref, opacity, y };
}



