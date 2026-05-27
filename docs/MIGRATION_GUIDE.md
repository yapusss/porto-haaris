# 🔧 MIGRATION GUIDE - Reorganisasi ke Struktur Standar

Panduan untuk reorganisasi folder dari berantakan menjadi terstruktur rapi.

---

## 📋 LANGKAH-LANGKAH MIGRATION

### Step 1: Buat Folder Structure

```bash
# Navigate ke project
cd c:\Users\Haaris\Documents\MyPorto033

# Buat folder-folder baru
mkdir src
mkdir src\app
mkdir src\components
mkdir src\lib
mkdir src\styles
mkdir docs
mkdir public
```

### Step 2: Pindahkan File-File

**Move dari root ke `src/app/`:**

- `layout.tsx` → `src/app/layout.tsx`
- `page.tsx` → `src/app/page.tsx`
- `globals.css` → `src/app/globals.css` (atau `src/styles/globals.css`)

**Move dari root ke `src/components/`:**

- `navigation.tsx` → `src/components/navigation.tsx`
- `hero-section.tsx` → `src/components/hero-section.tsx`
- `portfolio-section.tsx` → `src/components/portfolio-section.tsx`
- `about-section.tsx` → `src/components/about-section.tsx`
- `contact-section.tsx` → `src/components/contact-section.tsx`
- `footer.tsx` → `src/components/footer.tsx`

**Move semua docs ke `docs/`:**

- `00_READ_ME_FIRST.txt` → `docs/00_READ_ME_FIRST.txt`
- `START_HERE.md` → `docs/START_HERE.md`
- `EDITING_GUIDE_ID.md` → `docs/EDITING_GUIDE_ID.md`
- `SETUP_GUIDE.md` → `docs/SETUP_GUIDE.md`
- `FILE_STRUCTURE.md` → `docs/FILE_STRUCTURE.md`
- `EXAMPLE_DATA.md` → `docs/EXAMPLE_DATA.md`
- `CHECKLIST.md` → `docs/CHECKLIST.md`
- `DOCS_INDEX.md` → `docs/DOCS_INDEX.md`
- `FILE_INVENTORY.md` → `docs/FILE_INVENTORY.md`
- `PROJECT_SUMMARY.md` → `docs/PROJECT_SUMMARY.md`
- `README_THIS_FIRST.md` → `docs/README_THIS_FIRST.md`
- `GET_STARTED.txt` → `docs/GET_STARTED.txt`

**Keep di root:**

- `package.json`
- `tsconfig.json`
- `tailwind.config.ts`
- `postcss.config.mjs`
- `next.config.ts`
- `.eslintrc.json`
- `.gitignore`
- `README.md`

### Step 3: Update Imports di `src/app/page.tsx`

**BEFORE (current imports):**

```typescript
import Navigation from "./navigation";
import HeroSection from "./hero-section";
import PortfolioSection from "./portfolio-section";
import AboutSection from "./about-section";
import ContactSection from "./contact-section";
import Footer from "./footer";
```

**AFTER (new imports):**

```typescript
import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import PortfolioSection from "@/components/portfolio-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
```

### Step 4: Update Imports di `src/app/layout.tsx`

**BEFORE:**

```typescript
import "./globals.css";
```

**AFTER:**

```typescript
import "@/styles/globals.css";
// or jika globals.css tetap di src/app/:
import "./globals.css";
```

### Step 5: Verify tsconfig.json

Pastikan baseUrl & paths sudah benar:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Step 6: Test

```bash
npm run dev
```

Pastikan:

- ✅ Tidak ada import errors
- ✅ Website load correctly
- ✅ All pages render
- ✅ No console errors

### Step 7: Commit

```bash
git add .
git commit -m "chore: reorganize folder structure to follow Next.js standards"
```

---

## 📂 FINAL STRUCTURE (After Migration)

```
myporto033/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── navigation.tsx
│   │   ├── hero-section.tsx
│   │   ├── portfolio-section.tsx
│   │   ├── about-section.tsx
│   │   ├── contact-section.tsx
│   │   └── footer.tsx
│   ├── lib/
│   │   ├── constants.ts (optional)
│   │   ├── types.ts (optional)
│   │   └── utils.ts (optional)
│   └── styles/
│       └── (additional styles if needed)
│
├── docs/
│   ├── 00_READ_ME_FIRST.txt
│   ├── START_HERE.md
│   ├── EDITING_GUIDE_ID.md
│   ├── SETUP_GUIDE.md
│   ├── FILE_STRUCTURE.md
│   ├── EXAMPLE_DATA.md
│   ├── CHECKLIST.md
│   ├── DOCS_INDEX.md
│   ├── FILE_INVENTORY.md
│   ├── PROJECT_SUMMARY.md
│   ├── README_THIS_FIRST.md
│   ├── GET_STARTED.txt
│   └── FOLDER_STRUCTURE_TARGET.md
│
├── public/
│   └── (static assets go here)
│
├── Configuration
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.ts
│   ├── postcss.config.mjs
│   ├── next.config.ts
│   ├── .eslintrc.json
│   ├── .gitignore
│   ├── .env.example
│   └── README.md
│
├── .next/
└── node_modules/
```

---

## ⚠️ COMMON ISSUES & FIXES

### Issue: Import errors after migration

**Solution:**

1. Check tsconfig.json has `@/*` paths
2. Ensure paths is pointing to `./src/*`
3. Restart dev server: `npm run dev`

### Issue: Components not found

**Solution:**

1. Verify file path is correct: `src/components/filename.tsx`
2. Import using: `@/components/filename`
3. Check for typos in filename

### Issue: Styles not loading

**Solution:**

1. Verify globals.css path in layout.tsx
2. Check Tailwind is configured correctly
3. Clear .next/ folder and rebuild

---

## 🎯 BENEFITS AFTER MIGRATION

✅ Clean root directory (only config files)  
✅ Code organized by type  
✅ Docs separated from code  
✅ Easier to navigate project  
✅ Scalable (easy to add new components)  
✅ Professional structure  
✅ Follows Next.js best practices

---

## 📞 HELP

If you get stuck:

1. Check tsconfig.json paths
2. Verify all imports use `@/` prefix
3. Restart dev server
4. Check file locations match import paths

---

Ready to reorganize! 🚀
