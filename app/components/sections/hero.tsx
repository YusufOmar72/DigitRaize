"use client";

import { Button } from "@/app/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 bg-gradient-to-br from-white via-zinc-50 to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-800 -z-10"
      />

      {/* Floating Atmospheric Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-zinc-200/30 to-transparent dark:from-zinc-700/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-zinc-300/30 to-transparent dark:from-zinc-600/20 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Dots - Dark Mode Only */}
      {[...Array(20)].map((_, i) => {
        // Generate deterministic positions based on index
        const left = ((i * 37.3) % 100);
        const top = ((i * 53.7) % 100);
        const duration = 3 + ((i * 0.4) % 4);
        const delay = (i * 0.2) % 2;
        
        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-transparent dark:bg-zinc-500/40 rounded-full"
            style={{
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Marble Texture - Light Mode Only - Barely Visible */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none dark:hidden" aria-hidden="true">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Main flowing veins - Whisper subtle */}
          <path
            d="M 100 0 C 200 150 300 50 400 200 C 500 350 600 250 700 400 C 800 550 900 450 1000 600"
            stroke="#d4d4d4"
            strokeWidth="2"
            strokeOpacity="0.12"
            fill="none"
          />
          <path
            d="M 0 300 C 150 400 200 200 350 350 C 500 500 550 350 700 450 C 850 550 900 400 1000 500"
            stroke="#e0e0e0"
            strokeWidth="1.5"
            strokeOpacity="0.1"
            fill="none"
          />
          <path
            d="M 50 600 C 200 700 250 500 400 650 C 550 800 600 650 750 750 C 900 850 950 700 1000 800"
            stroke="#d4d4d4"
            strokeWidth="2"
            strokeOpacity="0.08"
            fill="none"
          />
          
          {/* Secondary branches - Ultra subtle */}
          <path
            d="M 250 100 C 300 200 200 300 350 400"
            stroke="#e5e5e5"
            strokeWidth="1"
            strokeOpacity="0.06"
            fill="none"
          />
          <path
            d="M 600 300 C 650 400 550 500 700 600"
            stroke="#e5e5e5"
            strokeWidth="1"
            strokeOpacity="0.06"
            fill="none"
          />
          <path
            d="M 150 800 C 250 900 200 1000 350 1000"
            stroke="#e0e0e0"
            strokeWidth="1.5"
            strokeOpacity="0.05"
            fill="none"
          />
        </svg>
      </div>

      <motion.div
        style={{ opacity }}
        className="max-w-6xl mx-auto w-full text-center space-y-6 sm:space-y-8 py-20 sm:py-28 md:py-32 relative z-10"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm cursor-pointer hover:border-zinc-500 dark:hover:border-zinc-400 hover:bg-white/80 dark:hover:bg-zinc-800/80 transition-all duration-200 group"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-zinc-200 transition-colors duration-200" />
            <span className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-800 dark:group-hover:text-zinc-200 transition-colors duration-200">
              Premium Web Development
            </span>
          </motion.div>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4 sm:space-y-6 px-4"
        >
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
            <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-200 dark:to-white bg-clip-text text-transparent inline-block">
              Crafting Digital
            </span>
            <br />
            <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-900 dark:from-white dark:via-zinc-200 dark:to-white bg-clip-text text-transparent inline-block">
              Excellence
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed px-2">
            We transform your vision into exceptional web experiences that drive
            results and elevate your brand
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-8 px-4"
        >
          <Button 
            size="lg" 
            className="group w-full sm:w-auto"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto"
            onClick={() => {
              const howItWorksSection = document.getElementById('how-it-works');
              if (howItWorksSection) {
                howItWorksSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Learn More
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 cursor-pointer mb-8"
        >
          <motion.div
            className="group"
            whileHover={{ scale: 1.25 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-8 h-12 border-2 border-zinc-500 dark:border-zinc-500 group-hover:border-zinc-800 dark:group-hover:border-zinc-200 rounded-full flex items-start justify-center p-2 transition-colors duration-200"
            >
              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-4 bg-zinc-600 dark:bg-zinc-400 group-hover:bg-zinc-900 dark:group-hover:bg-white rounded-full transition-colors duration-200"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
