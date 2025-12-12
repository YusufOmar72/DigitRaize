"use client";

import { Hero } from "@/app/components/sections/hero";
import { About } from "@/app/components/sections/about";
import { Services } from "@/app/components/sections/services";
import { HowItWorks } from "@/app/components/sections/how-it-works";
import { WhyChooseUs } from "@/app/components/sections/why-choose-us";
import { Testimonials } from "@/app/components/sections/testimonials";
import { FAQ } from "@/app/components/sections/faq";
import { Contact } from "@/app/components/sections/contact";
import { Footer } from "@/app/components/sections/footer";
import { StructuredData } from "@/app/components/structured-data";

export default function Home() {
  return (
    <>
      <StructuredData />
      <main className="min-h-screen bg-white dark:bg-zinc-950">
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
