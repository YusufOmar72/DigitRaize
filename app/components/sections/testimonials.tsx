"use client";

import { motion } from "framer-motion";
import { useInView } from "@/app/hooks/use-in-view";
import { Globe, TrendingUp, Users, Zap, Shield, Target } from "lucide-react";

const benefits = [
  {
    icon: Globe,
    title: "24/7 Global Reach",
    description:
      "Your business never sleeps. Reach customers around the world, any time of day, from anywhere.",
  },
  {
    icon: TrendingUp,
    title: "Increase Revenue",
    description:
      "Turn visitors into customers. A professional online presence drives sales and grows your business.",
  },
  {
    icon: Users,
    title: "Build Trust & Credibility",
    description:
      "Stand out from competitors. A polished website establishes your brand as professional and trustworthy.",
  },
  {
    icon: Zap,
    title: "Instant Customer Access",
    description:
      "Make it easy for customers to find you, learn about your services, and get in touch instantly.",
  },
  {
    icon: Target,
    title: "Targeted Marketing",
    description:
      "Connect with your ideal audience. Track data, optimize campaigns, and maximize your marketing ROI.",
  },
  {
    icon: Shield,
    title: "Stay Competitive",
    description:
      "Don't get left behind. An online presence is essential to compete in today's digital marketplace.",
  },
];

export function Testimonials() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-16 sm:py-24 md:py-32 bg-white dark:bg-zinc-950 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
            Boost Your{" "}
            <span className="bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
              Business
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-4">
            Unlock the power of online presence and transform your business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center px-4"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="inline-flex items-center justify-center mb-4 sm:mb-6"
              >
                <benefit.icon className="w-10 h-10 sm:w-12 sm:h-12 text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-300" />
              </motion.div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-2 sm:mb-3">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}



