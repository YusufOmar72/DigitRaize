"use client";

import { motion } from "framer-motion";
import { useInView } from "@/app/hooks/use-in-view";
import { MessageSquare, Lightbulb, Code, Rocket } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/app/lib/utils";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery",
    description:
      "We start by understanding your goals, audience, and vision through in-depth consultation.",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy & Design",
    description:
      "We craft a strategic plan and design stunning interfaces that align with your brand and vision.",
  },
  {
    number: "03",
    icon: Code,
    title: "Development",
    description:
      "Our expert team builds your project with clean code, ensuring quality and performance.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    description:
      "We launch your project seamlessly and provide ongoing support for continued success.",
  },
];

export function HowItWorks() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [activeStep, setActiveStep] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport (where steps are stacked vertically)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset when section comes into view - start at step 1
  useEffect(() => {
    if (isInView && !hasStarted) {
      setHasStarted(true);
      setHasCompleted(false);
      setActiveStep(0); // Start at step 1 (index 0)
    } else if (!isInView) {
      // Reset when scrolling away
      setHasStarted(false);
      setHasCompleted(false);
      setActiveStep(0);
    }
  }, [isInView, hasStarted]);

  // Animate through steps: 1 -> 2 -> 3 -> 4, then stop (no loop)
  useEffect(() => {
    if (isInView && hasStarted && !hasCompleted && !isHovering) {
      const interval = setInterval(() => {
        setActiveStep((prev) => {
          const next = prev + 1;
          if (next >= steps.length) {
            // Reached the end, stop animating
            setHasCompleted(true);
            return steps.length - 1; // Stay on last step (step 4)
          }
          return next;
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isInView, hasStarted, hasCompleted, isHovering]);

  // Auto-scroll to active step on mobile devices
  useEffect(() => {
    if (isMobile && isInView && stepRefs.current[activeStep]) {
      // Small delay to ensure the step is rendered before scrolling
      const timeout = setTimeout(() => {
        stepRefs.current[activeStep]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [activeStep, isMobile, isInView]);

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="py-16 sm:py-24 md:py-32 bg-white dark:bg-zinc-950 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
            How{" "}
            <span className="bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
              It Works
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-4">
            Our streamlined process ensures your project is delivered with
            excellence
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, index) => (
            <motion.div
              key={index}
              ref={(el) => {
                stepRefs.current[index] = el;
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => {
                // Only allow mouse interaction after first loop is complete
                if (hasCompleted) {
                  setIsHovering(true);
                  setActiveStep(index);
                }
              }}
              onMouseLeave={() => {
                // Only allow mouse interaction after first loop is complete
                if (hasCompleted) {
                  setIsHovering(false);
                }
              }}
              onClick={() => {
                // Only allow mouse interaction after first loop is complete
                if (hasCompleted) {
                  setIsHovering(true);
                  setActiveStep(index);
                  // Scroll to clicked step on mobile
                  if (isMobile && stepRefs.current[index]) {
                    setTimeout(() => {
                      stepRefs.current[index]?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                      });
                    }, 50);
                  }
                  setTimeout(() => {
                    setIsHovering(false);
                  }, 3000);
                }
              }}
            >
              <div
                className={cn(
                  "relative rounded-2xl p-6 sm:p-8 transition-all duration-500 border-2 z-10",
                  hasCompleted ? "cursor-pointer hover:border-zinc-400 dark:hover:border-zinc-600" : "cursor-default",
                  activeStep === index
                    ? "bg-white dark:bg-zinc-800 border-zinc-900 dark:border-white shadow-2xl scale-105 opacity-100"
                    : "bg-white dark:bg-zinc-900 border-zinc-200/50 dark:border-zinc-800/50 shadow-md opacity-30",
                  hasCompleted && activeStep !== index ? "hover:opacity-50" : ""
                )}
              >
                <div className={cn(
                  "text-4xl sm:text-5xl font-bold mb-3 sm:mb-4 transition-colors duration-500",
                  activeStep === index
                    ? "text-zinc-500 dark:text-zinc-400"
                    : "text-zinc-300/50 dark:text-zinc-700/50"
                )}>
                  {step.number}
                </div>

                <motion.div
                  animate={{
                    scale: activeStep === index ? 1.1 : 1,
                    rotate: activeStep === index ? 360 : 0,
                  }}
                  transition={{ duration: 0.5 }}
                  className={cn(
                    "w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-6 transition-colors duration-500",
                    activeStep === index
                      ? "bg-zinc-900 dark:bg-white"
                      : "bg-zinc-100 dark:bg-zinc-800"
                  )}
                >
                  <step.icon
                    className={cn(
                      "w-7 h-7 sm:w-8 sm:h-8 transition-colors duration-500",
                      activeStep === index
                        ? "text-white dark:text-zinc-900"
                        : "text-zinc-600 dark:text-zinc-400"
                    )}
                  />
                </motion.div>

                <h3
                  className={cn(
                    "text-xl sm:text-2xl font-bold mb-3 sm:mb-4 transition-colors duration-500",
                    activeStep === index
                      ? "text-zinc-900 dark:text-white"
                      : "text-zinc-700 dark:text-zinc-300"
                  )}
                >
                  {step.title}
                </h3>

                <p
                  className={cn(
                    "text-sm sm:text-base leading-relaxed transition-colors duration-500",
                    activeStep === index
                      ? "text-zinc-600 dark:text-zinc-400"
                      : "text-zinc-500 dark:text-zinc-500"
                  )}
                >
                  {step.description}
                </p>

                {activeStep === index && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute -inset-x-2 top-auto -bottom-4 h-20 rounded-2xl bg-gradient-to-br from-zinc-300/60 to-zinc-400/60 dark:from-white/20 dark:to-white/10 -z-10 blur-2xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </div>
            </motion.div>
          ))}
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center items-center gap-3 mt-12">
            {steps.map((_, index) => (
              <motion.div
                key={index}
                className={cn(
                  "rounded-full transition-all duration-500 cursor-pointer",
                  activeStep === index
                    ? "w-12 h-2 bg-zinc-900 dark:bg-white"
                    : "w-2 h-2 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600"
                )}
                onClick={() => {
                  // Only allow mouse interaction after first loop is complete
                  if (hasCompleted) {
                    setIsHovering(true);
                    setActiveStep(index);
                    // Scroll to clicked step on mobile
                    if (isMobile && stepRefs.current[index]) {
                      setTimeout(() => {
                        stepRefs.current[index]?.scrollIntoView({
                          behavior: 'smooth',
                          block: 'center',
                        });
                      }, 50);
                    }
                    setTimeout(() => {
                      setIsHovering(false);
                    }, 3000);
                  }
                }}
                animate={{
                  scale: activeStep === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



