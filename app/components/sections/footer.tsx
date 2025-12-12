"use client";

import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black dark:bg-black text-white py-6 sm:py-8 border-t border-zinc-900">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-zinc-300 text-sm sm:text-base text-center md:text-left"
          >
            © {currentYear} DigitRaize. All rights reserved.
          </motion.p>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-400 text-sm sm:text-base text-center md:text-right"
          >
            Crafting digital experiences that inspire
          </motion.p>
        </div>
      </div>
    </footer>
  );
}



