"use client";

import { motion } from "framer-motion";
import { useInView } from "@/app/hooks/use-in-view";

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section
      id="about"
      className="py-16 sm:py-24 md:py-32 bg-white dark:bg-zinc-950"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-4">
            About{" "}
            <span className="bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
              DigitRaize
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed px-4">
            We are a team of passionate designers and developers dedicated to
            transforming ideas into powerful digital experiences. With years of
            expertise and a commitment to excellence, we partner with
            forward-thinking brands to create websites that don't just look
            stunning—they perform.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed px-4">
            From startups to enterprises, we bring technical precision, creative
            innovation, and strategic thinking to every project. Your success is
            our mission.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
