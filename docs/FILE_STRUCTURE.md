# Project Structure & File Locations

## 📂 Root Level Files (dalam folder myporto033/)

```
myporto033/
│
├── 📄 Configuration Files
│   ├── package.json              ← Dependencies & scripts
│   ├── tsconfig.json             ← TypeScript config
│   ├── tailwind.config.ts        ← Tailwind theme colors
│   ├── postcss.config.mjs        ← PostCSS config
│   ├── next.config.ts            ← Next.js config
│   └── .eslintrc.json            ← Linting rules
│
├── 📄 Style Files
│   ├── globals.css               ← Global styles, Tailwind layers
│   └── layout.tsx                ← Root HTML layout
│
├── 📄 Page & Main Content
│   ├── page.tsx                  ← Main page (imports all sections)
│   └── public/                   ← Static assets folder (optional)
│
├── 📄 Section Components (Edit These!)
│   ├── navigation.tsx            ← Header & navigation [EDIT]
│   ├── hero-section.tsx          ← Banner, headline [EDIT]
│   ├── portfolio-section.tsx     ← Projects grid [EDIT - IMPORTANT!]
│   ├── about-section.tsx         ← About me, skills [EDIT]
│   ├── contact-section.tsx       ← Contact form, info [EDIT]
│   └── footer.tsx                ← Footer
│
├── 📄 Documentation (Read These!)
│   ├── START_HERE.md             ← Quick start guide ⭐
│   ├── EDITING_GUIDE_ID.md       ← Detailed editing in Indonesian
│   ├── SETUP_GUIDE.md            ← Full setup guide
│   ├── README.md                 ← Basic README
│   └── .gitignore                ← Git ignore rules
│
└── 📁 Folders (Created by npm)
    ├── node_modules/             ← Dependencies (run npm install)
    └── .next/                    ← Build output (don't touch)
```

---

## 🎯 Where to Edit Based on Your Needs

### I want to update my name/contact

→ `navigation.tsx` + `contact-section.tsx`

### I want to add my projects

→ **`portfolio-section.tsx`** (MOST IMPORTANT!)

### I want to write about myself

→ `about-section.tsx` + `hero-section.tsx`

### I want to change colors

→ `tailwind.config.ts`

### I want to change fonts

→ `globals.css`

---

## 📝 Component Breakdown

### navigation.tsx

```
├── Logo (left side)
├── Menu links (Desktop)
├── Mobile menu button
└── CTA button
```

### hero-section.tsx

```
├── Main Headline (big, bold)
├── Sub-headline (description)
├── Feature tags (tech stack)
├── CTA buttons
└── Decorative accent
```

### portfolio-section.tsx

```
├── Section header
└── Project grid (3 columns desktop)
    ├── Project 1
    │   ├── Image (16:9)
    │   ├── Title & description
    │   ├── Tech tags
    │   └── Links (GitHub, Live)
    ├── Project 2
    └── ... more projects
```

### about-section.tsx

```
├── Section header
└── 2-column layout
    ├── Left: Bio paragraphs + stats
    └── Right: Skills matrix
        ├── Frontend
        ├── Backend
        └── Databases
```

### contact-section.tsx

```
├── Section header
└── 2-column layout
    ├── Left: Contact info
    │   ├── Email
    │   ├── Phone
    │   ├── Social links
    │   └── Availability
    └── Right: Contact form
        ├── Name input
        ├── Email input
        ├── Message textarea
        └── Submit button
```

### footer.tsx

```
├── Copyright
├── Quick links
└── Design credit
```

---

## 🔄 Component Flow

```
layout.tsx (Root HTML)
    ↓
page.tsx (Main page)
    ├── imports Navigation
    ├── imports HeroSection
    ├── imports PortfolioSection
    ├── imports AboutSection
    ├── imports ContactSection
    └── imports Footer
        ↓
    All render together into final page
```

---

## 🎨 Styling Architecture

```
globals.css (CSS + Tailwind layers)
    ↓
tailwind.config.ts (Theme colors & config)
    ↓
@tailwind directives (base, components, utilities)
    ↓
Classes used in components
    Example: class="bg-dark-bg text-dark-text btn-primary"
```

---

## 💻 Scripts Available

Run these in terminal:

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Build for production
npm start        # Run production build
npm run lint     # Check code quality
```

---

## 📦 What's Installed

```
Dependencies:
├── next          ← Framework
├── react         ← UI library
└── react-dom     ← React DOM

DevDependencies:
├── typescript    ← Type checking
├── tailwindcss   ← Styling
├── postcss       ← CSS processing
├── autoprefixer  ← Browser prefixes
└── eslint        ← Code linting
```

---

## 🚀 Deployment Files

When you deploy to Vercel/Netlify:

- `.next/` folder gets built
- `public/` folder copied as-is
- Environment variables from `.env.local`

---

**Quick Reference:**

- **To change text content**: Edit .tsx files
- **To change colors**: Edit `tailwind.config.ts`
- **To add images**: Reference URLs or put in `public/` folder
- **To customize styling**: Edit `globals.css` or update classes in components
- **To deploy**: Use Vercel (instant) or Netlify

Enjoy! 🎉
