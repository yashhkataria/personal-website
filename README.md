<div align="center">

# 🌐 Yash Kataria — Personal Portfolio

A modern, responsive personal portfolio website built with **Next.js 14**, **React 18**, and **TailwindCSS**. Showcasing my professional journey, projects, and skills as a software development engineer.

[![Next.js](https://img.shields.io/badge/Next.js-14.2.3-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?logo=vercel)](https://vercel.com/)

</div>

---

## ✨ Features

- **Typing Animation** — Dynamic hero section with rotating text powered by `react-type-animation`
- **Smooth Scrolling** — Seamless in-page navigation using `react-scroll`
- **Motion Animations** — Fade-in effects on the hero section with `framer-motion`
- **Responsive Design** — Fully responsive layout optimized for mobile, tablet, and desktop
- **Mobile Navigation** — Hamburger menu with overlay for small screens
- **Horizontal Scroll Experience Timeline** — Work experience displayed in a horizontally scrollable card layout
- **Interactive Project Cards** — Hover overlays with quick links to GitHub repos and live demos
- **Tabbed Content** — Skills and Education toggled with smooth tab transitions
- **Downloadable Resume** — One-click CV download from the hero section
- **Vercel Analytics** — Built-in visitor tracking via `@vercel/analytics`
- **Dark Theme** — Sleek dark UI with gradient accents

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router) |
| **UI Library** | [React 18](https://react.dev/) |
| **Language** | TypeScript + JSX |
| **Styling** | [TailwindCSS 3.4](https://tailwindcss.com/) |
| **Font** | [Inter](https://fonts.google.com/specimen/Inter) (via `next/font`) |
| **Icons** | [@heroicons/react](https://heroicons.com/) |
| **Animations** | [Framer Motion](https://www.framer.com/motion/), [react-type-animation](https://github.com/maxeth/react-type-animation) |
| **Navigation** | [react-scroll](https://github.com/fisshy/react-scroll) |
| **Analytics** | [@vercel/analytics](https://vercel.com/analytics) |
| **Deployment** | [Vercel](https://vercel.com/) |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or yarn/pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/yashhkataria/personal-website.git
cd personal-website

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint for code quality checks |

---

## 📁 Project Structure

```
personal-website/
├── app/
│   ├── layout.tsx              # Root layout — font, metadata, analytics
│   ├── page.tsx                # Home page — assembles all sections
│   ├── globals.css             # Tailwind directives & CSS custom properties
│   └── components/
│       ├── Navbar.jsx          # Fixed top navbar with smooth-scroll links
│       ├── MenuOverlay.jsx     # Mobile hamburger menu overlay
│       ├── HeroSection.jsx     # Hero with typing animation + profile photo
│       ├── AboutSection.jsx    # Bio with tabbed Skills/Education content
│       ├── TabButton.jsx       # Tab switcher for the About section
│       ├── ExperienceSection.jsx   # Horizontally scrollable work timeline
│       ├── ExperienceCard.jsx  # Individual experience card
│       ├── ProjectsSection.jsx # 3-column project grid
│       ├── ProjectsCard.jsx    # Project card with hover overlay
│       ├── ContactSection.jsx  # Social links (GitHub, LinkedIn)
│       └── Footer.jsx          # Logo + copyright
├── public/
│   ├── Yash_Kataria_Resume.pdf # Downloadable resume
│   ├── github-icon.svg         # GitHub social icon
│   ├── linkedin-icon.svg       # LinkedIn social icon
│   └── images/
│       ├── hero-img.jpg        # Profile photo
│       ├── logo.png            # Site logo
│       ├── setup.jpeg          # About section image
│       ├── experiences/        # Company logos/banners
│       └── projects/           # Project screenshots
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── next.config.mjs             # Next.js configuration
├── postcss.config.mjs          # PostCSS configuration
└── package.json
```

---

## 🧩 Sections Overview

### 🏠 Hero
Full-width landing section with a gradient heading, animated typing effect that cycles through identities, a profile photo, and a CV download button.

### 👤 About
Two-column layout with a workspace photo and a personal bio. Includes tabbed content to toggle between **Education** and **Skills**.

### 💼 Experience
Horizontally scrollable timeline showcasing work experience cards. Each card features a company banner image, role title, and duration. Mouse wheel scrolls the container horizontally.

### 🚀 Projects
A responsive 3-column grid of project cards. Hovering over a card reveals an overlay with quick-access buttons to the **GitHub repository** and **live preview**.

### 📬 Contact
Social links section with GitHub and LinkedIn icons, accented by decorative radial gradient backgrounds.

### 🔻 Footer
Minimal footer with the site logo and copyright text.

---

## 🎨 Customization

### Updating Content

All content is stored as data arrays directly in the component files:

| Data | File | Variable |
|---|---|---|
| Work Experience | `app/components/ExperienceSection.jsx` | `EXPERIENCES` |
| Projects | `app/components/ProjectsSection.jsx` | `PROJECTS` |
| Skills & Education | `app/components/AboutSection.jsx` | `TAB_DATA` |
| Nav Links | `app/components/Navbar.jsx` | `navlinks` |
| Hero Text | `app/components/HeroSection.jsx` | `TypeAnimation` sequence |

### Adding a New Project

Add an entry to the `PROJECTS` array in `app/components/ProjectsSection.jsx`:

```javascript
{
    id: 6,
    imageUrl: '/images/projects/6.jpg',
    title: 'Your Project Name',
    description: 'A brief description of the project.',
    gitUrl: 'https://github.com/username/repo',
    previewUrl: 'https://your-live-demo.com'
}
```

Then place the project screenshot at `public/images/projects/6.jpg`.

### Adding a New Experience

Add an entry to the `EXPERIENCES` array in `app/components/ExperienceSection.jsx`:

```javascript
{
    id: 4,
    imageUrl: '/images/experiences/company.jpg',
    company: 'Company Name',
    title: 'Your Role',
    duration: 'Month Year - Present'
}
```

Then place the company banner at `public/images/experiences/company.jpg`.

---

## 🚢 Deployment

This project is optimized for deployment on **Vercel**:

1. Push your code to GitHub
2. Import the repository on [vercel.com](https://vercel.com/new)
3. Vercel auto-detects Next.js — no configuration needed
4. Every push to `main` triggers an automatic deployment

For other platforms, build and serve:

```bash
npm run build
npm start
```

---

<div align="center">

**Built with ❤️ by [Yash Kataria](https://github.com/yashhkataria)**

</div>