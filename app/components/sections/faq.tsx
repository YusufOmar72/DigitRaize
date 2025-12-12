"use client";

import { motion } from "framer-motion";
import { useInView } from "@/app/hooks/use-in-view";
import { Accordion } from "@/app/components/ui/accordion";

const faqs = [
  {
    title: "What services do you offer?",
    content:
      "We offer comprehensive web development services including custom website design and development, e-commerce solutions, web applications, UI/UX design, mobile-responsive design, performance optimization, SEO, and ongoing support and maintenance.",
  },
  {
    title: "How long does a typical project take?",
    content:
      "Project timelines vary based on scope and complexity. A standard website typically takes 2-4 weeks, while more complex web applications can take 2-3 months. We'll provide a detailed timeline during our initial consultation based on your specific requirements.",
  },
  {
    title: "What is your development process?",
    content:
      "Our process follows four key stages: Discovery (understanding your needs), Strategy & Design (planning and creating designs), Development (building with clean code), and Launch & Support (deployment and ongoing maintenance). We maintain clear communication throughout each phase.",
  },
  {
    title: "Do you provide ongoing support after launch?",
    content:
      "Yes! We offer comprehensive post-launch support including regular updates, security patches, performance monitoring, content updates, and technical assistance. We have flexible support packages tailored to your needs.",
  },
  {
    title: "What technologies do you work with?",
    content:
      "We work with modern, industry-leading technologies including React, Next.js, TypeScript, Node.js, and various databases and cloud platforms. We select the best tech stack for each project based on specific requirements and long-term scalability.",
  },
  {
    title: "How do you ensure quality and performance?",
    content:
      "Quality is our priority. We follow best practices including code reviews, automated testing, performance optimization, security audits, and accessibility standards. Every project undergoes thorough testing before launch to ensure it meets our high standards.",
  },
  {
    title: "How can I get started with Digitraize?",
    content:
      "Getting started is simple! Just reach out through our contact form, email, or phone. We'll schedule a free consultation to discuss your project goals, requirements, and vision. From there, we'll provide a detailed proposal with timeline and pricing, and once approved, we'll kick off your project right away.",
  },
];

export function FAQ() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  return (
    <section
      id="faq"
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
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-4">
            Find answers to common questions about our services and process
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion items={faqs} />
        </motion.div>
      </div>
    </section>
  );
}



