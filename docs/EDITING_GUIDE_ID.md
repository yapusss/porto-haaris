# 📖 DOKUMENTASI LENGKAP - Portfolio Next.js Anda

## 🚀 Mulai Cepat

### Step 1: Install Dependencies

```bash
cd myporto033
npm install
```

### Step 2: Run Development Server

```bash
npm run dev
```

Buka **http://localhost:3000** di browser.

### Step 3: Edit & Customize

Mulai edit file-file di folder root untuk menyesuaikan dengan data Anda.

---

## 📂 Struktur File yang Perlu Anda Tahu

| File                    | Fungsi                            | Edit?        |
| ----------------------- | --------------------------------- | ------------ |
| `page.tsx`              | Main page (import semua sections) | ✓ (minimal)  |
| `layout.tsx`            | Root layout wrapper               | ✗            |
| `globals.css`           | Global styles & Tailwind config   | ✗ (advanced) |
| `tailwind.config.ts`    | Tailwind color & theme            | ✓ (warna)    |
| `navigation.tsx`        | Header & menu bar                 | ✓ PERLU EDIT |
| `hero-section.tsx`      | Banner utama                      | ✓ PERLU EDIT |
| `portfolio-section.tsx` | Galeri proyek                     | ✓ PERLU EDIT |
| `about-section.tsx`     | Tentang saya & skills             | ✓ PERLU EDIT |
| `contact-section.tsx`   | Form kontak & info kontak         | ✓ PERLU EDIT |
| `footer.tsx`            | Footer                            | ✓ minor      |

---

## ✏️ LANGKAH-LANGKAH EDITING

### 1️⃣ NAVIGATION - Update Logo & Menu

**File:** `navigation.tsx` (baris 10-20)

```typescript
// UBAH INI:
<a href="#" className="text-xl md:text-2xl font-bold tracking-tight hover:text-accent-cyan">
  Haaris<span className="text-accent-cyan">.dev</span>  // Ganti "Haaris" dengan nama Anda
</a>
```

### 2️⃣ HERO SECTION - Update Headline

**File:** `hero-section.tsx` (baris 11-27)

```typescript
// Ubah headline:
<h1 className="mb-6 animate-fade-in">
  Crafting Digital
  <br />
  <span className="text-gradient">Experiences</span>
</h1>

// Ubah sub-headline:
<p className="text-lg md:text-xl text-dark-muted mb-8">
  Full-Stack Developer dedicated to building seamless, high-performance web applications...
</p>
```

**Tips:**

- Headline harus singkat & impactful (max 2-3 kata per baris)
- Sub-headline explain unique value Anda

### 3️⃣ PORTFOLIO - Update Proyek Anda ⭐ PENTING

**File:** `portfolio-section.tsx` (baris 4-50)

Ini yang paling penting! Ganti `projects` array dengan proyek Anda:

```typescript
const projects: ProjectCard[] = [
  {
    id: "project-1", // Unique ID
    title: "Nama Proyek Anda",
    description: "Apa masalah yang diselesaikan? Gunakan bahasa sederhana.",
    image: "https://images.unsplash.com/photo-xxx?w=600&h=400&fit=crop",
    // atau lokal: '/images/project-1.jpg'
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/username/repo-name",
    live: "https://project-live-url.com",
  },
  // Tambahkan 5-6 proyek terbaik Anda
];
```

**Cara mendapatkan images:**

- **Unsplash**: https://unsplash.com (gratis, high quality)
- **Pexels**: https://pexels.com (gratis juga)
- **Host sendiri**: Taruh di folder `public/images/` lalu gunakan `/images/filename.jpg`

**Aspek rasio harus 16:9** (e.g., 600x400, 1200x800)

### 4️⃣ ABOUT SECTION - Update Bio & Skills

**File:** `about-section.tsx` (baris 4-60)

```typescript
// Edit paragraf kiri:
<p className="text-dark-muted leading-relaxed mb-6">
  Hello! I'm [Nama], a full-stack developer with a passion for...
  // Ganti dengan story Anda sendiri
</p>

// Edit skills di kanan:
const skills = {
  'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  'Backend': ['Node.js', 'Python', 'Django'],
  'Databases': ['PostgreSQL', 'MongoDB'],
}
```

**Tips Skill Boxes:**

- List hanya teknologi yang benar-benar Anda kuasai
- Maksimal 6 per kategori
- 3 kategori sudah cukup

### 5️⃣ CONTACT - Update Info & Form

**File:** `contact-section.tsx` (baris 35-80)

```typescript
// Update email:
<a href="mailto:your-email@example.com">
  your-email@example.com
</a>

// Update phone:
<a href="tel:+1234567890">
  +1 (234) 567-890
</a>

// Update social links (cari section "GitHub", "LinkedIn", "Twitter")
<a href="https://github.com/your-username" ...>
<a href="https://linkedin.com/in/your-profile" ...>
<a href="https://twitter.com/your-handle" ...>
```

### Form Submission - Setup Email

Pilih salah satu:

#### Option A: Email.js (Mudah, No Backend)

1. Daftar di https://emailjs.com
2. Install library:
   ```bash
   npm install @emailjs/browser
   ```
3. Di `contact-section.tsx`, ganti `handleSubmit`:

   ```typescript
   import emailjs from "@emailjs/browser";

   const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     emailjs.init("YOUR_PUBLIC_KEY"); // dari Email.js dashboard
     emailjs
       .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
       .then(() => setSubmitted(true))
       .catch((err) => console.error(err));
   };
   ```

#### Option B: Formspree (Super Mudah)

1. Daftar di https://formspree.io
2. Ganti form action:
   ```typescript
   <form onSubmit={(e) => {
     // Form akan auto-submit ke Formspree endpoint
   }} action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

#### Option C: Backend API Sendiri

Jika punya backend, ganti `handleSubmit`:

```typescript
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(formData),
  });
  if (response.ok) setSubmitted(true);
};
```

---

## 🎨 KUSTOMISASI DESAIN

### Ubah Warna Accent

**File:** `tailwind.config.ts` (baris 15-20)

Saat ini: Cyan (#00d9ff) untuk accent utama

Ingin ubah? Ganti di sini:

```typescript
accent: {
  cyan: '#00d9ff',   // Primary accent
  teal: '#0ea5b8',   // Secondary accent
  hover: '#06b6d4',  // Hover state
}
```

Rekomendasi kombinasi warna:

- **Cyan + Teal** (current) ✓ Modern, fresh
- **Purple + Pink**: Ganti `#9333ea` dan `#ec4899`
- **Orange + Amber**: Ganti `#ea580c` dan `#d97706`
- **Green + Emerald**: Ganti `#10b981` dan `#059669`

### Ubah Typography

**File:** `globals.css` (baris 8)

Saat ini: Inter (Google Fonts)

Ingin ubah ke font lain? Update:

```css
@import url("https://fonts.googleapis.com/css2?family=YourFont:wght@400;500;600;700;800&display=swap");
```

Font recommendations:

- **Poppins**: `family=Poppins`
- **Playfair Display**: `family=Playfair+Display` (elegant)
- **Outfit**: `family=Outfit` (modern)

---

## 📱 Testing Responsive

Pastikan website terlihat bagus di:

- **Mobile** (320px - 768px): Gunakan DevTools (Ctrl+Shift+I) → Toggle device toolbar
- **Tablet** (768px - 1024px)
- **Desktop** (> 1024px)

Breakpoints di Tailwind:

- `md:` = di atas 768px
- `lg:` = di atas 1024px

---

## 🚀 DEPLOY KE LIVE

### Vercel (Rekomendasi - Gratis)

Paling mudah:

```bash
npm i -g vercel
vercel
```

Ikuti prompts, connect ke GitHub, auto-deploy done!

### Netlify (Alternatif)

1. Push ke GitHub
2. Connect repo di https://netlify.com
3. Build: `npm run build`
4. Publish: `.next`

### Custom Domain

Di Vercel/Netlify dashboard:

1. Go to Domain settings
2. Add custom domain (e.g., haaris.dev)
3. Update DNS records dari registrar Anda (Namecheap, GoDaddy, dll)

---

## ✅ FINAL CHECKLIST SEBELUM DEPLOY

- [ ] Ubah semua placeholder text dengan data asli
- [ ] Upload 5-6 proyek terbaik Anda dengan images
- [ ] Update semua social media links
- [ ] Setup email form (pilih Email.js / Formspree / custom)
- [ ] Test di mobile (responsive)
- [ ] Check semua links berfungsi
- [ ] Review grammar & spelling
- [ ] Deploy ke Vercel/Netlify

---

## 🆘 TROUBLESHOOTING

### Error: "Port 3000 already in use"

```bash
npm run dev -- -p 3001
```

Jalankan di port 3001 instead.

### Styling tidak muncul

1. Pastikan `globals.css` di-import di `layout.tsx`
2. Restart dev server: Ctrl+C lalu `npm run dev`
3. Clear browser cache: Ctrl+Shift+Delete

### Build error

```bash
npm run build  # Check error detail
```

### Images tidak load

- Pastikan URL valid (test buka di browser)
- Jika lokal, taruh di `public/` folder
- Format: JPG/PNG, ukuran < 200KB

---

## 📚 RESOURCES

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com
- **TypeScript Handbook**: https://www.typescriptlang.org/docs
- **Unsplash Images**: https://unsplash.com
- **Icons**: https://heroicons.com

---

## 🎉 Selesai!

Portfolio Anda now live! Tinggal update content, test, dan deploy.

Untuk bantuan lebih lanjut:

- GitHub Issues di project repo
- Vercel/Netlify documentation
- Stack Overflow (tag: nextjs, tailwindcss)

Good luck! 🚀✨
