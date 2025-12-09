# Salem Saber - Senior Backend Engineer Portfolio

A modern, responsive portfolio website showcasing my expertise as a Senior Backend Engineer with 9 years of experience in PHP, Laravel, and scalable system architecture.

## 🚀 Live Demo

[View Portfolio](https://salemsaber.com)

## 📋 About

This portfolio showcases my professional journey, technical skills, and achievements as a Senior Backend Engineer. Built with modern web technologies to demonstrate both my technical capabilities and attention to design details.

### Key Highlights
- 9+ years of backend engineering experience
- 500+ successful projects delivered
- 99.99% system uptime achieved
- 180% improvement in delivery times

## 🛠️ Technologies Used

### Frontend
- **Next.js 15.5.4** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Type Animation** - Typewriter effect animations
- **React Intersection Observer** - Scroll-based animations

### Icons & Assets
- **Heroicons** - Beautiful hand-crafted SVG icons
- **Next.js Image Optimization** - Optimized image loading

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **npm** - Package management

## ✨ Features

### 🎨 Design & UI
- **Responsive Design** - Optimized for all device sizes
- **Modern Dark Theme** - Professional blue-purple color scheme
- **Smooth Animations** - Engaging user interactions with Framer Motion
- **Typewriter Effects** - Dynamic text animations
- **Scroll Animations** - Content reveals on scroll

### 📱 Navigation
- **Fixed Navigation Bar** - Always accessible navigation
- **Smooth Scrolling** - Seamless section transitions
- **Mobile-Friendly Menu** - Collapsible mobile navigation
- **Active Section Highlighting** - Visual feedback for current section

### 📄 Content Sections
- **Hero Section** - Dynamic introduction with contact information
- **About Me** - Professional background with statistics and education
- **Skills** - Technical expertise organized by categories
- **Experience** - Detailed work history with achievements
- **Contact** - Multiple ways to connect (Email, Phone, LinkedIn, GitHub)

### 📥 Interactive Features
- **CV Download** - Direct download of PDF resume
- **Contact Links** - Direct links to email, phone, LinkedIn, and GitHub
- **Responsive Images** - Optimized loading and display
- **Form Interactions** - Smooth hover and click animations

## 🏗️ Project Structure

```
salem-saber/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Main page component
│   ├── components/              # UI components used across the site
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx         # Projects list + modal logic (client component)
│   │   ├── ProjectCard.tsx      # Individual project card
│   │   └── Skills.tsx
│   ├── data/                    # All site data lives here (projects, skills, experiences, contact)
│   │   ├── projects.ts
│   │   ├── experiences.ts
│   │   ├── skills.ts
│   │   └── contact.tsx
│   ├── hooks/
│   │   └── useMounted.ts
│   └── lib/                     # Small utilities and helpers
├── public/
│   ├── projects/                # Product images organized by product id
│   ├── profile-image.jpg          # Profile image
│   ├── CV.pdf  # CV file
│   └── *.svg                    # Various icons
├── out/                         # Generated static files (after build)
├── next.config.ts               # Next.js configuration
├── postcss.config.mjs
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies and scripts
```

## 🚀 Projects

Projects are defined in `src/data/projects.ts` and images for each project are stored under `public/projects/{productId}/`.

Example project data shape (edit `src/data/projects.ts`):

```ts
export type Project = {
  id: string; // used as folder name under public/projects/
  title: string;
  description: string;
  stack: string[];
  link?: string; // optional external link
  images?: string[]; // relative paths like '/projects/1/1.png'
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'Portfolio Website',
    description: 'Personal portfolio built with Next.js and TypeScript.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://salemsaber.com',
    images: ['/projects/1/1.png', '/projects/1/2.png'],
    featured: true,
  },
  // ...add more projects
];
```

How to add a new project:

1. Add images to `public/projects/{newId}/` (for example `public/projects/3/1.png`).
2. Add a new project object to `src/data/projects.ts` using the `id` that matches the image folder.
3. Restart the dev server if needed: `npm run dev`.

Notes about making project items open a popup/modal:

- Components that use browser-only hooks (like `useRef`, `useState`, `useEffect`) must be client components. Add `"use client"` at the top of `src/components/Projects.tsx`.
- Ensure React hooks are imported where used, for example:
  `import React, { useRef, useState, useEffect } from 'react';`
- A simple modal pattern:
  - Keep `selectedProject` in state (e.g. `const [selectedProject, setSelectedProject] = useState<Project | null>(null)`).
  - When a project card is clicked, call `setSelectedProject(project)` and render a modal showing `selectedProject` details and images.
  - Close the modal by setting `setSelectedProject(null)` or clicking a backdrop.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/salem-saber/salem-saber-portfolio.git
   cd salem-saber-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production and generate static export
- `npm run start` - Start production server (if not using static export)
- `npm run lint` - Run ESLint for code quality

## 📦 Deployment

This portfolio is configured for static export, making it deployable to any static hosting service.

### Build for Production

```bash
npm run build
```

The static files will be generated in the `out/` directory.

### Deployment Options

#### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `out/` folder to Netlify

#### Vercel
1. Connect your GitHub repository
2. Vercel will automatically detect Next.js and deploy

#### GitHub Pages
1. Build the project: `npm run build`
2. Push the `out/` directory contents to your gh-pages branch

#### AWS S3 / CloudFront
1. Build the project: `npm run build`
2. Upload the `out/` directory contents to your S3 bucket

## 🎨 Customization

### Colors
The portfolio uses a blue-purple color scheme defined in Tailwind CSS:
- Primary: `blue-500` to `purple-600`
- Secondary: `blue-400`
- Background: `slate-800`, `slate-900`

### Content Updates
- Update personal information in `src/components/Hero.tsx`
- Modify experience data in `src/components/Experience.tsx`
- Update skills in `src/components/Skills.tsx`
- Change about content in `src/components/About.tsx`
- Update contact information in `src/components/Contact.tsx`

### Assets
- Replace `public/salem-saber.jpg` with your profile image
- Replace `public/Salem Saber - Senior Backend Engineer.pdf` with your CV
- Update favicon and other icons in the `public/` directory

## 🔧 Configuration

### Next.js Configuration
The project is configured for static export in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
    output: 'export', // Enables static export
    images: {
        unoptimized: true, // Required for static export
    },
};
```

### Tailwind CSS
Custom configuration in `tailwind.config.ts` for animations and theme extensions.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   - Ensure all dependencies are installed: `npm install`
   - Check for TypeScript errors: `npm run lint`

2. **Images Not Loading**
   - Verify image paths in `public/` directory
   - Check Next.js image configuration

3. **Mobile Navigation Issues**
   - Clear browser cache
   - Verify JavaScript is enabled

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📞 Contact

**Salem Saber** - Senior Backend Engineer

- 📧 Email: [salem.saber97@gmail.com](mailto:salem.saber97@gmail.com)
- 📱 Phone: [+20 114 036 6864](tel:+201140366864)
- 💼 LinkedIn: [salem-saber](https://linkedin.com/in/salem-saber)
- 🐱 GitHub: [salem-saber](https://github.com/salem-saber)

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

*Last updated: October 2025*
