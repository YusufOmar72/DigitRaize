"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/app/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

type AccordionItemProps = {
  title: string;
  content: string;
  isOpen: boolean;
  onToggle: () => void;
};

export function AccordionItem({ title, content, isOpen, onToggle }: AccordionItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group mb-4"
    >
      <div
        className={cn(
          "rounded-2xl border-2 transition-all duration-300 bg-white dark:bg-zinc-900",
          isOpen
            ? "border-zinc-900 dark:border-white shadow-xl"
            : "border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 shadow-md hover:shadow-lg"
        )}
      >
        <button
          onClick={onToggle}
          className="flex w-full items-center justify-between p-4 sm:p-6 text-left"
        >
          <span className={cn(
            "text-base sm:text-lg font-bold transition-colors duration-300 pr-4",
            isOpen ? "text-zinc-900 dark:text-white" : "text-zinc-700 dark:text-zinc-300"
          )}>
            {title}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex-shrink-0"
          >
            <ChevronDown
              className={cn(
                "h-5 w-5 sm:h-6 sm:w-6 shrink-0 transition-colors duration-300",
                isOpen ? "text-zinc-900 dark:text-white" : "text-zinc-600 dark:text-zinc-400"
              )}
            />
          </motion.div>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-200 dark:border-zinc-800 pt-3 sm:pt-4">
                {content}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

type AccordionProps = {
  items: Array<{ title: string; content: string }>;
  allowMultiple?: boolean;
};

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      }
      return allowMultiple ? [...prev, index] : [index];
    });
  };

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openItems.includes(index)}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  );
}



