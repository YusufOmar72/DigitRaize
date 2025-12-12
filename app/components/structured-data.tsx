"use client";

export function StructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://digitraize.com';

  // Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DigitRaize",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": "Transform your vision into exceptional web experiences. Expert web development, UI/UX design, e-commerce solutions, and SEO optimization.",
    "sameAs": [
      // Add your social media profiles here
      // "https://twitter.com/digitraize",
      // "https://linkedin.com/company/digitraize",
      // "https://facebook.com/digitraize"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": ["English"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  };

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DigitRaize",
    "url": baseUrl,
    "description": "Transform your vision into exceptional web experiences. Expert web development, UI/UX design, e-commerce solutions, and SEO optimization.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Development Services",
    "provider": {
      "@type": "Organization",
      "name": "DigitRaize"
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Modern websites built for optimal performance and scalability."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "UI/UX Design",
            "description": "Beautiful interfaces that provide exceptional user experiences."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Responsive Design",
            "description": "Seamless experiences across all devices and screen sizes."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Performance Optimization",
            "description": "Lightning-fast load times and smooth interactions."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-Commerce Solutions",
            "description": "Powerful online stores that drive sales and delight customers."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "SEO Optimization",
            "description": "Improve visibility and rank higher in search results."
          }
        }
      ]
    }
  };

  // FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services do you offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer comprehensive web development services including custom website design and development, e-commerce solutions, web applications, UI/UX design, mobile-responsive design, performance optimization, SEO, and ongoing support and maintenance."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a typical project take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Project timelines vary based on scope and complexity. A standard website typically takes 2-4 weeks, while more complex web applications can take 2-3 months. We'll provide a detailed timeline during our initial consultation based on your specific requirements."
        }
      },
      {
        "@type": "Question",
        "name": "What is your development process?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our process follows four key stages: Discovery (understanding your needs), Strategy & Design (planning and creating designs), Development (building with clean code), and Launch & Support (deployment and ongoing maintenance). We maintain clear communication throughout each phase."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide ongoing support after launch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer comprehensive post-launch support including regular updates, security patches, performance monitoring, content updates, and technical assistance. We have flexible support packages tailored to your needs."
        }
      },
      {
        "@type": "Question",
        "name": "What technologies do you work with?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with modern, industry-leading technologies including React, Next.js, TypeScript, Node.js, and various databases and cloud platforms. We select the best tech stack for each project based on specific requirements and long-term scalability."
        }
      },
      {
        "@type": "Question",
        "name": "How do you ensure quality and performance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Quality is our priority. We follow best practices including code reviews, automated testing, performance optimization, security audits, and accessibility standards. Every project undergoes thorough testing before launch to ensure it meets our high standards."
        }
      },
      {
        "@type": "Question",
        "name": "How can I get started with Digitraize?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Getting started is simple! Just reach out through our contact form, email, or phone. We'll schedule a free consultation to discuss your project goals, requirements, and vision. From there, we'll provide a detailed proposal with timeline and pricing, and once approved, we'll kick off your project right away."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

