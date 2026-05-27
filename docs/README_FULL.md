![Portfolio Banner](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=flat-square) ![Tailwind](https://img.shields.io/badge/Tailwind-3.3-blue?style=flat-square) ![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

# 🚀 Premium Portfolio Website

A **minimalist, modern, and professional portfolio website** built with Next.js, TypeScript, and Tailwind CSS. No AI slop, no unnecessary decorations—just pure, elegant design focused on content.

## ✨ Features

- 🎨 **Dark Mode First** - Easy on the eyes, professional look
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- ⚡ **Performance Optimized** - Built with Next.js 14 for speed
- 🔍 **SEO Ready** - Semantic HTML, meta tags, OpenGraph
- 🎯 **Content-First Design** - Strong typography, precise grid, smooth micro-interactions
- 💎 **Premium Aesthetics** - Cyan accent color, minimalist approach
- 🔧 **Easy to Customize** - Clear structure, well-commented code
- 📦 **Type-Safe** - Full TypeScript support
- 🚀 **Deploy Ready** - One-click deploy to Vercel/Netlify

---

## 🎯 What You Get

### Sections Included

1. **Navigation** - Sticky header with smooth scroll
2. **Hero** - Powerful headline with CTA buttons
3. **Portfolio** - Responsive grid for your projects (3 desktop, 2 tablet, 1 mobile)
4. **About Me** - Biography + skills matrix
5. **Contact** - Form + contact information + social links
6. **Footer** - Copyright + links

### Design System

- **Colors**: Dark slate background, cyan accents
- **Typography**: Inter font, clean hierarchy
- **Spacing**: Proportional whitespace using Tailwind
- **Interactions**: Smooth hover states, subtle animations
- **Grid**: Precise alignment, consistent gutters

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Edit & Customize

Start editing the component files:

- `navigation.tsx` - Update logo/name
- `hero-section.tsx` - Update headline
- `portfolio-section.tsx` - Add your projects ⭐
- `about-section.tsx` - Update bio & skills
- `contact-section.tsx` - Update contact info

### 4. Deploy

```bash
# Via Vercel (recommended)
npm i -g vercel
vercel

# Or push to GitHub and connect to Netlify
```

---

## 📋 File Guide

| File                    | Purpose        | Edit?                 |
| ----------------------- | -------------- | --------------------- |
| `navigation.tsx`        | Header & menu  | ✅ Yes                |
| `hero-section.tsx`      | Banner section | ✅ Yes                |
| `portfolio-section.tsx` | Projects grid  | ✅ **IMPORTANT**      |
| `about-section.tsx`     | About & skills | ✅ Yes                |
| `contact-section.tsx`   | Contact form   | ✅ Yes                |
| `footer.tsx`            | Footer         | ✅ Optional           |
| `globals.css`           | Global styles  | ⚠️ Advanced           |
| `tailwind.config.ts`    | Theme config   | ⚠️ If changing colors |

---

## 📚 Documentation

- **START_HERE.md** - Quick start guide (read this first!)
- **EDITING_GUIDE_ID.md** - Detailed editing guide in Indonesian
- **SETUP_GUIDE.md** - Complete setup & customization guide
- **FILE_STRUCTURE.md** - File organization & component breakdown

---

## 🎨 Customization Examples

### Change Accent Color

Edit `tailwind.config.ts`:

```typescript
accent: {
  cyan: '#9333ea',    // Change to purple
  teal: '#a855f7',
  hover: '#7e22ce',
}
```

### Change Font

Edit `globals.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap");
```

### Add Your Projects

Edit `portfolio-section.tsx`:

```typescript
const projects: ProjectCard[] = [
  {
    id: "your-project",
    title: "Your Project Title",
    description: "What problem does it solve?",
    image: "https://your-image-url.com/image.jpg",
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/username/repo",
    live: "https://project-live-url.com",
  },
  // Add more...
];
```

---

## 📱 Responsive Design

- **Mobile** (< 768px): Single column, optimized for touch
- **Tablet** (768px - 1024px): 2-column grid for portfolio
- **Desktop** (> 1024px): 3-column grid for portfolio

All breakpoints use Tailwind's responsive prefixes (`md:`, `lg:`).

---

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Run production build
npm run lint     # Check code quality
```

---

## 📦 Dependencies

```json
{
  "next": "^14.0.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "tailwindcss": "^3.3.0",
  "typescript": "^5.0"
}
```

---

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

- Automatic deployments on git push
- Free tier includes all you need
- Custom domain support

### Netlify

1. Push to GitHub
2. Connect repo at netlify.com
3. Auto-builds and deploys

### Self-Hosted

```bash
npm run build
npm start
```

---

## 💡 Design Philosophy

This portfolio follows these principles:

- ✅ **Content First** - Let your work speak
- ✅ **Minimalist** - No unnecessary decorations
- ✅ **Professional** - Premium, trustworthy aesthetic
- ✅ **Responsive** - Works everywhere
- ✅ **Performant** - Fast loading, smooth interactions
- ✅ **Accessible** - Semantic HTML, keyboard navigation
- ❌ **No AI Slop** - No gradients, no neon, no fake placeholders

---

## 🎓 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

---

## 🤝 Support

Need help? Check out:

- Documentation files in this repo
- [Next.js Forum](https://github.com/vercel/next.js/discussions)
- [Tailwind CSS Discord](https://tailwindcss.com/discord)
- Stack Overflow (tag your questions with `nextjs`, `tailwindcss`)

---

## 📄 License

MIT License - feel free to use for personal and commercial projects.

---

## 🎉 Ready to Launch?

1. Read **START_HERE.md**
2. Edit `portfolio-section.tsx` with your projects
3. Update other sections with your info
4. Test responsiveness in browser DevTools
5. Deploy to Vercel

**Your portfolio is now ready to impress! 🚀✨**

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**

![Made with Next.js](https://img.shields.io/badge/Made%20with-Next.js-000000?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-3178c6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.3-06b6d4?style=for-the-badge&logo=tailwind-css)
