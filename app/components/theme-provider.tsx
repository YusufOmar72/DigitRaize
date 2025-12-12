"use client";

import * as React from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<Theme>("light");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    
    // Always use time-based automatic theme on every refresh
    const hour = new Date().getHours();
    // 6 AM (6) to 5:59 PM (17) = Light Mode ☀️
    // 6 PM (18) to 5:59 AM (5) = Dark Mode 🌙
    const isDay = hour >= 6 && hour < 18;
    const autoTheme = isDay ? "light" : "dark";
    
    setTheme(autoTheme);
    if (autoTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = React.useCallback(() => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      // No localStorage - temporary toggle only, resets on refresh
      
      // Remove dark class if switching to light, add if switching to dark
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      
      return newTheme;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}

