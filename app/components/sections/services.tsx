"use client";

import { motion } from "framer-motion";
import { useInView } from "@/app/hooks/use-in-view";
import { Code2, Palette, Smartphone, Zap, Globe, Search } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Modern websites built for optimal performance and scalability.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Beautiful interfaces that provide exceptional user experiences.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Seamless experiences across all devices and screen sizes.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Lightning-fast load times and smooth interactions.",
  },
  {
    icon: Globe,
    title: "E-Commerce Solutions",
    description:
      "Powerful online stores that drive sales and delight customers.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Improve visibility and rank higher in search results.",
  },
];

export function Services() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="services"
      ref={ref}
      className="py-16 sm:py-24 md:py-32 bg-zinc-50 dark:bg-black relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-zinc-900 dark:text-white px-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-4">
            Comprehensive solutions tailored to your digital needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-6 sm:p-8 rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-transparent hover:border-zinc-100 dark:hover:border-zinc-300 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:-translate-y-2">
                {/* Icon - No background, much brighter */}
                <div className="mb-4 sm:mb-6 relative">
                  <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-700 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white transition-all duration-300 group-hover:-translate-y-2 group-hover:scale-110" />
                  
                  {/* Subtle glow on hover */}
                  <div className="absolute -inset-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
                    <div className="absolute inset-0 bg-white/5 dark:bg-white/5 blur-2xl rounded-full" />
                  </div>
                </div>

                {/* Title - Bigger font */}
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-3 sm:mb-4">
                  {service.title}
                </h3>

                {/* Description - Stays same size, all 2 lines max naturally */}
                <p className="text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
