import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeWrapper } from "./components/theme-wrapper";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://digitraize.com'),
  title: {
    default: "DigitRaize - Crafting Digital Excellence | Web Development & Design",
    template: "%s | DigitRaize"
  },
  description: "Transform your vision into exceptional web experiences. Expert web development, UI/UX design, e-commerce solutions, and SEO optimization. Drive results and elevate your brand with DigitRaize.",
  keywords: [
    "web development",
    "web design",
    "UI/UX design",
    "e-commerce development",
    "responsive web design",
    "SEO optimization",
    "Next.js development",
    "React development",
    "custom websites",
    "web applications",
    "performance optimization",
    "digital agency",
    "web development services",
    "modern web design",
    "professional web development"
  ],
  authors: [{ name: "DigitRaize" }],
  creator: "DigitRaize",
  publisher: "DigitRaize",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "DigitRaize",
    title: "DigitRaize - Crafting Digital Excellence | Web Development & Design",
    description: "Transform your vision into exceptional web experiences. Expert web development, UI/UX design, e-commerce solutions, and SEO optimization.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DigitRaize - Crafting Digital Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DigitRaize - Crafting Digital Excellence",
    description: "Transform your vision into exceptional web experiences. Expert web development, UI/UX design, and e-commerce solutions.",
    images: ["/og-image.jpg"],
    creator: "@digitraize",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href={process.env.NEXT_PUBLIC_SITE_URL || 'https://digitraize.com'} />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#18181b" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body
        className={`${inter.variable} antialiased`}
      >
        <ThemeWrapper>
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}
