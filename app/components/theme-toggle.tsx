"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 shadow-lg w-10 h-10 sm:w-11 sm:h-11" />
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={(e) => {
        e.preventDefault();
        toggleTheme();
      }}
      className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full bg-white dark:bg-zinc-800 border-2 border-zinc-200 dark:border-zinc-700 shadow-lg hover:shadow-xl transition-all cursor-pointer touch-manipulation"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-900 dark:text-zinc-100" />
      ) : (
        <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-900 dark:text-zinc-100" />
      )}
    </motion.button>
  );
}
