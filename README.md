# DigitRaize - Premium Web Development Company Website

A high-end, minimal, and outstanding one-page website showcasing professional web development services. Built with Next.js 16, React 19, TypeScript, and Framer Motion.

## ✨ Features

### Design & UX
- **Sleek Minimal Design**: Clean, premium look with neutral color palette
- **Strong Typography**: Beautiful spacing and grid layout using Inter font
- **Fully Responsive**: Mobile-first design that looks stunning on all devices
- **Dark Mode Support**: Automatic theme detection based on system preferences

### Sections
1. **Hero Section** - Bold headline with parallax effects and atmospheric animations
2. **About Us** - Professional, trustworthy introduction
3. **Services** - 6 service cards with hover effects and icons
4. **How It Works** - 4-step process with auto-looping highlights and manual control
5. **Why Choose Us** - 4 key differentiators with icons
6. **Testimonials** - Client testimonials with clean card design
7. **FAQ** - Smooth accordion with expand/collapse animations
8. **Contact** - Clean form with contact information
9. **Footer** - Minimal links and social media icons

### Cinematic Interactions
- **Parallax Hero Motion**: Gentle parallax movement in the hero background
- **Scroll-based Animations**: Elements fade in, slide in, or scale in on scroll
- **Auto-looping Steps**: Automatic cycling through "How It Works" steps
- **Hover Micro-interactions**: Buttons, cards, and elements have soft hover animations
- **Smooth Transitions**: Fluid page navigation with ease-in-out transitions
- **Atmospheric Touches**: Floating dots and gradient animations

## 🚀 Tech Stack

- **Framework**: Next.js 16 with App Router
- **UI Library**: React 19
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## 📦 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended)

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

The website will be available at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
digitraize/
├── app/
│   ├── components/
│   │   ├── sections/        # Page sections
│   │   │   ├── hero.tsx
│   │   │   ├── about.tsx
│   │   │   ├── services.tsx
│   │   │   ├── how-it-works.tsx
│   │   │   ├── why-choose-us.tsx
│   │   │   ├── testimonials.tsx
│   │   │   ├── faq.tsx
│   │   │   ├── contact.tsx
│   │   │   └── footer.tsx
│   │   └── ui/              # Reusable UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── accordion.tsx
│   │       ├── Input.tsx
│   │       └── Textarea.tsx
│   ├── hooks/               # Custom React hooks
│   │   ├── use-in-view.ts
│   │   └── use-media-query.ts
│   ├── lib/
│   │   └── utils.ts         # Utility functions
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── public/                  # Static assets
└── package.json
```

## 🎨 Customization

### Colors
The design uses a neutral color palette (zinc) that works beautifully in both light and dark modes. To customize:
- Edit color classes in component files
- Modify Tailwind configuration for global color changes

### Content
Update content in the respective section files:
- Services: `app/components/sections/services.tsx`
- Testimonials: `app/components/sections/testimonials.tsx`
- FAQ: `app/components/sections/faq.tsx`
- Contact info: `app/components/sections/contact.tsx`

### Animations
Adjust animation parameters in component files using Framer Motion's `transition` props:
- Duration, delay, easing functions
- Animation variants
- Scroll triggers

## 🎯 Key Interactive Features

### Auto-looping "How It Works"
The steps automatically cycle every 3 seconds with smooth transitions. Users can also manually hover or click to highlight specific steps. The loop pauses during user interaction.

### Scroll Animations
All sections use the `useInView` hook to trigger animations when scrolling into view, creating a cinematic reveal effect.

### Parallax Hero
The hero section uses Framer Motion's `useScroll` and `useTransform` to create a parallax effect as you scroll down.

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This project is private and proprietary.

## 🙏 Acknowledgments

Built with modern web technologies to create a premium, performant, and accessible user experience.

---

**DigitRaize** - Crafting Digital Excellence
