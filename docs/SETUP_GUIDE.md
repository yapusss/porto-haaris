# 🎨 Premium Portfolio Website - Setup & Customization Guide

## 📋 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

### 3. Build untuk Production

```bash
npm run build
npm start
```

---

## 🎯 Struktur Proyek

```
myporto033/
├── globals.css              # Global styles & Tailwind layers
├── tailwind.config.ts       # Tailwind configuration
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── layout.tsx               # Root layout
├── page.tsx                 # Main page (import semua sections)
├── navigation.tsx           # Header & navigation
├── hero-section.tsx         # Hero banner
├── portfolio-section.tsx    # Projects grid
├── about-section.tsx        # About & skills
├── contact-section.tsx      # Contact form & info
└── footer.tsx               # Footer
```

---

## ✏️ PANDUAN EDITING - Sesuaikan dengan Data Anda

### 1. **Navigation (navigation.tsx)**

Ubah nama dan link menu:

```typescript
<a href="#" className="text-xl md:text-2xl font-bold">
  YourName<span className="text-accent-cyan">.dev</span>
</a>
```

### 2. **Hero Section (hero-section.tsx)**

Update headline, sub-headline, dan feature tags:

```typescript
<h1>Your Main Headline</h1>
<p>Your value proposition here</p>
```

### 3. **Portfolio Section (portfolio-section.tsx)** ⭐ PENTING

Ganti `projects` array dengan proyek Anda:

```typescript
const projects: ProjectCard[] = [
  {
    id: "unique-id",
    title: "Nama Proyek",
    description: "Deskripsi singkat masalah yang diselesaikan",
    image: "URL_gambar_atau_path_lokal",
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/username/repo",
    live: "https://project-live-url.com",
  },
  // ... tambahkan lebih banyak proyek
];
```

**Tips untuk images:**

- Gunakan URL dari Unsplash, Pexels, atau host gambar Anda
- Aspek rasio 16:9 untuk konsistensi
- Format: JPG/PNG dioptimalkan untuk web (~200KB max)

### 4. **About Section (about-section.tsx)**

Update biography dan skills:

```typescript
// Ubah teks di paragraf kiri
// Update skills categories di kanan:
const skills = {
  Frontend: ["Teknologi 1", "Teknologi 2"],
  Backend: ["Teknologi 1", "Teknologi 2"],
  Databases: ["Teknologi 1", "Teknologi 2"],
};
```

### 5. **Contact Section (contact-section.tsx)**

Update informasi kontak:

```typescript
<a href="mailto:your-email@example.com">
  your-email@example.com
</a>

<a href="tel:+1234567890">
  +1 (234) 567-890
</a>
```

**Social Links:** Update link GitHub, LinkedIn, Twitter di section "Follow"

**Form Setup:** Untuk mengirim email, integrasikan dengan:

- **Email.js** (mudah, no backend required)
- **Formspree** (simple form service)
- **Backend API Anda sendiri**

---

## 🎨 Kustomisasi Desain

### Warna & Theme

Ubah di `tailwind.config.ts`:

```typescript
colors: {
  dark: {
    bg: '#0f1117',      // Main background
    surface: '#161b22', // Card surface
    text: '#c9d1d9',    // Primary text
    muted: '#8b949e',   // Secondary text
  },
  accent: {
    cyan: '#00d9ff',    // Primary accent
    teal: '#0ea5b8',    // Secondary accent
  },
}
```

### Tipografi

Font saat ini: **Inter** (diload dari Google Fonts)
Untuk menggantinya, edit di `globals.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700;800&display=swap");
```

### Spacing & Responsive

- Mobile: Full width dengan padding 1.5rem
- Tablet: 2 kolom
- Desktop: 3 kolom untuk portfolio grid

---

## 📱 Responsive Breakpoints

| Size    | Usage                |
| ------- | -------------------- |
| Mobile  | < 768px (md:)        |
| Tablet  | 768px - 1024px (lg:) |
| Desktop | > 1024px             |

Tailwind classes sudah dioptimalkan. Cek dengan `md:` dan `lg:` prefixes di code.

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

Follow prompts, connected ke GitHub untuk CI/CD otomatis.

### Netlify

1. Push ke GitHub
2. Connect repository di Netlify dashboard
3. Build command: `npm run build`
4. Publish directory: `.next`

### Self-hosted

```bash
npm run build
npm start
```

---

## 🔧 Advanced Customization

### Menambah Section Baru

1. Buat file baru: `new-section.tsx`
2. Import di `page.tsx`:
   ```typescript
   import NewSection from "@/new-section";
   ```
3. Tambahkan di JSX:
   ```typescript
   <main>
     <NewSection />
   </main>
   ```

### Micro-interactions

Animasi sudah ditambahkan:

- `animate-fade-in` - Fade in effect
- `animate-slide-up` - Slide up effect
- Hover transitions di cards (scale, border, shadow)

Tambahkan delay dengan inline style:

```typescript
style={{ animationDelay: '0.2s' }}
```

### Dark Mode Toggle (Optional)

Untuk add light mode toggle:

1. Gunakan `next-themes` library
2. Tambahkan toggle di Navigation
3. Update Tailwind untuk support light mode

---

## 📝 SEO Best Practices

Sudah termasuk:

- ✅ Meta tags (title, description)
- ✅ Semantic HTML (`<section>`, `<nav>`, `<main>`)
- ✅ Open Graph support (ready untuk customize)

Tambahkan di `layout.tsx`:

```typescript
export const metadata: Metadata = {
  openGraph: {
    title: "Haaris - Full Stack Developer",
    description: "Your description",
    url: "https://haaris.dev",
    images: [{ url: "https://your-og-image.jpg" }],
  },
};
```

---

## ⚡ Performance Tips

1. **Image Optimization**: Gunakan Next.js Image component:

   ```typescript
   import Image from 'next/image'
   <Image src={project.image} alt={project.title} width={600} height={400} />
   ```

2. **Lazy Loading**: Sudah otomatis di Next.js 13+

3. **Font Loading**: Inter sudah dioptimalkan dengan `display=swap`

---

## 🐛 Troubleshooting

### Port 3000 sudah digunakan?

```bash
npm run dev -- -p 3001
```

### TypeScript errors?

```bash
npm run build
```

Untuk check error lebih detail.

### Styling tidak terlihat?

1. Pastikan `globals.css` diimport di `layout.tsx`
2. Run `npm run dev` ulang
3. Clear browser cache (Ctrl+Shift+Delete)

---

## 📞 Support Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **TypeScript Docs**: https://www.typescriptlang.org/docs/

---

## 🎉 Final Checklist

- [ ] Update nama dan email
- [ ] Tambahkan 3-6 proyek terbaik Anda
- [ ] Edit biography di About section
- [ ] Update skills list
- [ ] Hubungkan social media links
- [ ] Setup email form (Email.js, Formspree, atau backend)
- [ ] Test responsive di mobile
- [ ] Deploy ke Vercel/Netlify

Selamat! Portfolio Anda siap untuk showcase kepada dunia! 🚀
