"use client";

import { ThemeProvider } from "./theme-provider";
import { ThemeToggle } from "./theme-toggle";

export function ThemeWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <ThemeToggle />
      {children}
    </ThemeProvider>
  );
}




