"use client";

import { motion } from "framer-motion";
import { useInView } from "@/app/hooks/use-in-view";
import { Award, Users, Clock, Tag } from "lucide-react";

const reasons = [
  {
    icon: Tag,
    title: "Affordable Pricing",
    description:
      "Great websites shouldn't break the bank. We offer transparent, startup-friendly pricing with no hidden fees, delivering exceptional value.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description:
      "Affordable doesn't mean compromise. We deliver exceptional craftsmanship with attention to every detail, ensuring your digital presence looks professional.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description:
      "Your deadline matters. We respect your timeline and consistently deliver projects on schedule without cutting corners or sacrificing quality.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our seasoned professionals bring years of experience and cutting-edge expertise to every project. We understand startups and their unique challenges.",
  },
];

export function WhyChooseUs() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="why-choose-us"
      ref={ref}
      className="py-16 sm:py-24 md:py-32 bg-zinc-50 dark:bg-zinc-900 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
            Why{" "}
            <span className="bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
              Choose Us
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-4">
            We combine expertise, creativity, and dedication to deliver outstanding results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="text-center p-6 sm:p-8 rounded-2xl hover:bg-white/50 dark:hover:bg-zinc-800/50 transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="inline-flex items-center justify-center mb-4 sm:mb-6"
                >
                  <reason.icon className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white transition-all duration-300 stroke-[1.5]" />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-grow mx-auto max-w-[280px]">
                  {reason.description}
                </p>
              </div>

              {/* Subtle glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-zinc-200/0 to-zinc-300/0 dark:from-zinc-700/0 dark:to-zinc-600/0 opacity-0 group-hover:opacity-100 group-hover:from-zinc-200/30 group-hover:to-zinc-300/30 dark:group-hover:from-zinc-700/20 dark:group-hover:to-zinc-600/20 blur-xl -z-10 transition-all duration-500"
                initial={false}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



