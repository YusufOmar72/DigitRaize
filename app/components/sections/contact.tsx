"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useInView } from "@/app/hooks/use-in-view";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/Input";
import { Textarea } from "@/app/components/ui/Textarea";
import { Mail, MapPin, Phone, Send, CheckCircle2, X, AlertCircle } from "lucide-react";

export function Contact() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = formRef.current;
    if (!form) {
      return;
    }

    // Clear previous errors
    setFieldErrors({});
    setErrorMessage('');

    // Custom validation
    const formData = new FormData(form);
    const data = {
      name: (formData.get('name') as string)?.trim() || '',
      email: (formData.get('email') as string)?.trim() || '',
      subject: (formData.get('subject') as string)?.trim() || '',
      message: (formData.get('message') as string)?.trim() || '',
    };

    const errors: Record<string, string> = {};

    if (!data.name) {
      errors.name = 'Please enter your name';
    }
    if (!data.email) {
      errors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!data.subject) {
      errors.subject = 'Please enter a subject';
    }
    if (!data.message) {
      errors.message = 'Please enter your message';
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      // Scroll to first error
      const firstErrorField = Object.keys(errors)[0];
      const errorElement = form.querySelector(`[name="${firstErrorField}"]`) as HTMLElement;
      if (errorElement) {
        errorElement.focus();
        errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        form.reset();
        setShowSuccessModal(true);
        // Hide modal after 3 seconds
        setTimeout(() => {
          setShowSuccessModal(false);
        }, 3000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-16 sm:py-24 md:py-32 bg-white dark:bg-zinc-950 relative overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-zinc-100/50 dark:bg-grid-zinc-900/50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto px-4">
            Let's discuss your project and bring your vision to life
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-zinc-50 dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl text-center border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-white hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-zinc-900 dark:bg-white flex items-center justify-center mx-auto mb-4 sm:mb-6"
              >
                <Mail className="w-7 h-7 sm:w-8 sm:h-8 text-white dark:text-zinc-900" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-2 sm:mb-3">
                Email
              </h3>
              <a
                href="mailto:info@digitraize.com"
                className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors break-all"
              >
                info@digitraize.com
              </a>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-zinc-50 dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl text-center border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-white hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-zinc-900 dark:bg-white flex items-center justify-center mx-auto mb-4 sm:mb-6"
              >
                <Phone className="w-7 h-7 sm:w-8 sm:h-8 text-white dark:text-zinc-900" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-2 sm:mb-3">
                Phone
              </h3>
              <a
                href="tel:+447405282896"
                className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors"
              >
                +447405282896
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-zinc-50 dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl text-center border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-white hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-zinc-900 dark:bg-white flex items-center justify-center mx-auto mb-4 sm:mb-6"
              >
                <MapPin className="w-7 h-7 sm:w-8 sm:h-8 text-white dark:text-zinc-900" />
              </motion.div>
              <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-white mb-2 sm:mb-3">
                Location
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                Remote, Worldwide
              </p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-zinc-50 dark:bg-zinc-900 p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800"
          >
            <form 
              ref={formRef}
              className="space-y-5 sm:space-y-6"
              onSubmit={handleSubmit}
            >
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-zinc-900 dark:text-white"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    disabled={isSubmitting}
                    className={`bg-white dark:bg-zinc-950 border-zinc-300 dark:border-zinc-700 focus:border-zinc-900 dark:focus:border-white transition-all duration-200 ${
                      fieldErrors.name ? 'border-amber-300 dark:border-amber-700/50' : ''
                    }`}
                  />
                  {fieldErrors.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-zinc-500 dark:text-zinc-400 mt-1.5"
                    >
                      {fieldErrors.name}
                    </motion.p>
                  )}
                </div>

                <div className="space-y-3">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-zinc-900 dark:text-white"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    disabled={isSubmitting}
                    className={`bg-white dark:bg-zinc-950 border-zinc-300 dark:border-zinc-700 focus:border-zinc-900 dark:focus:border-white transition-all duration-200 ${
                      fieldErrors.email ? 'border-amber-300 dark:border-amber-700/50' : ''
                    }`}
                  />
                  {fieldErrors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-zinc-500 dark:text-zinc-400 mt-1.5"
                    >
                      {fieldErrors.email}
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-3">
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-zinc-900 dark:text-white"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Project inquiry"
                  disabled={isSubmitting}
                  className={`bg-white dark:bg-zinc-950 border-zinc-300 dark:border-zinc-700 focus:border-zinc-900 dark:focus:border-white transition-all duration-200 ${
                    fieldErrors.subject ? 'border-amber-300 dark:border-amber-700/50' : ''
                  }`}
                />
                {fieldErrors.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-zinc-500 dark:text-zinc-400 mt-1.5"
                  >
                    {fieldErrors.subject}
                  </motion.p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-3">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-zinc-900 dark:text-white"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project..."
                  disabled={isSubmitting}
                  className={`bg-white dark:bg-zinc-950 border-zinc-300 dark:border-zinc-700 focus:border-zinc-900 dark:focus:border-white transition-all duration-200 resize-none ${
                    fieldErrors.message ? 'border-amber-300 dark:border-amber-700/50' : ''
                  }`}
                  rows={6}
                />
                {fieldErrors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-zinc-500 dark:text-zinc-400 mt-1.5"
                  >
                    {fieldErrors.message}
                  </motion.p>
                )}
              </div>

              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                >
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <p className="text-sm text-red-800 dark:text-red-200">
                    {errorMessage || 'Failed to send message. Please try again.'}
                  </p>
                </motion.div>
              )}

              {/* Submit Button */}
              <Button 
                type="submit"
                size="lg" 
                className="w-full group text-base font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    Sending...
                    <Send className="w-5 h-5 ml-2 animate-pulse" />
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSuccessModal(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            
            {/* Modal */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-white dark:bg-zinc-900 rounded-2xl p-8 sm:p-10 max-w-sm w-full shadow-2xl border border-zinc-200 dark:border-zinc-800 pointer-events-auto"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Animated Checkmark */}
                  <div className="relative mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", duration: 0.6, delay: 0.1 }}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center"
                    >
                      <svg
                        className="w-12 h-12 sm:w-14 sm:h-14 text-green-600 dark:text-green-400"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <motion.path
                          d="M5 13l4 4L19 7"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                        />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Success Message */}
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-3"
                  >
                    Message Sent
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-base text-zinc-600 dark:text-zinc-400"
                  >
                    Successfully! We'll get back to you soon.
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}



