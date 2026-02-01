# Vintage Espresso CMS - TypeScript Edition

A professional Next.js TypeScript website with Decap CMS for managing a vintage espresso machine collection. Features multi-language support (English/Italian), local image storage, and automated Netlify deployment.

## 🚀 Features

- ✅ **Next.js 14** with TypeScript
- ✅ **Decap CMS** - Git-based, free CMS with image upload
- ✅ **Multi-language** (IT/EN) with next-i18next
- ✅ **Local Images** - All images stored in `/public/images`
- ✅ **Image Optimization** - Using next/image with size limits
- ✅ **Type-Safe** - Full TypeScript coverage
- ✅ **Git-based Workflow** - CMS → Git → Auto Deploy
- ✅ **Responsive Design** - Mobile-first approach

## 📁 Project Structure

```
vintage-espresso-cms/
├── components/          # TypeScript React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Layout.tsx
├── content/            # CMS content (JSON files)
│   ├── config/         # Site configuration
│   ├── hero/           # Hero section (EN/IT)
│   ├── about/          # About section (EN/IT)
│   ├── machines/       # Machine collection
│   ├── gallery/        # Gallery images
│   └── stats/          # Statistics (EN/IT)
├── lib/                # Utility functions
│   └── content.ts      # Content loading functions
├── pages/              # Next.js pages (TypeScript)
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx       # Home page
│   └── collection.tsx  # Collection page
├── public/
│   ├── admin/          # Decap CMS admin
│   ├── images/         # All images stored here
│   │   ├── uploads/    # CMS uploaded images
│   │   ├── machines/   # Machine images
│   │   └── gallery/    # Gallery images
│   └── locales/        # i18n translations
├── styles/
│   └── globals.css     # Global styles
├── types/
│   └── index.ts        # TypeScript type definitions
└── tsconfig.json       # TypeScript configuration
```

## 🎯 Workflow: Editor → CMS → Git → Deploy

```
1. Editor opens /admin
2. Logs in with Netlify Identity
3. Uploads images & edits content
4. Clicks "Publish"
   ↓
5. Decap CMS commits to Git
   ↓
6. Netlify detects commit
   ↓
7. Auto-builds & deploys
   ↓
8. Site updated! 🎉
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### 3. Local CMS Development

**Option A: Using Decap Server (Recommended)**
```bash
# Terminal 1
npm run dev

# Terminal 2
npx decap-server
```

**Option B: Using Netlify CLI**
```bash
# Terminal 1
npm run dev

# Terminal 2
npx netlify-cms-proxy-server
```

Then visit [http://localhost:3000/admin](http://localhost:3000/admin)

⚠️ **Note**: For local development, uncomment `local_backend: true` in `public/admin/config.yml`

## 🌐 Deployment to Netlify

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/vintage-espresso-cms.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Netlify

1. Go to [netlify.com](https://www.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub and select your repository
4. Build settings (auto-detected):
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
5. Click "Deploy site"

### Step 3: Enable Netlify Identity

1. In Netlify dashboard → **Identity** tab
2. Click **"Enable Identity"**
3. Settings:
   - **Registration**: "Invite only" (recommended)
   - **External providers**: Optional (GitHub, Google, etc.)
4. Under **Services** → Click **"Enable Git Gateway"**

### Step 4: Invite Yourself

1. Identity tab → **"Invite users"**
2. Enter your email
3. Check email → Set password
4. Done! 🎉

### Step 5: Access CMS

Go to `https://your-site.netlify.app/admin` and log in!

## 📸 Image Management

### Image Storage

All images are stored locally in:
- `/public/images/` - Manual images
- `/public/images/uploads/` - CMS uploaded images
- `/public/images/machines/` - Machine photos
- `/public/images/gallery/` - Gallery photos

### Image Size Limits (Configured in CMS)

- **Logo**: Max 2MB, resized to 200x200px
- **Hero Background**: Max 5MB, resized to 2000x2000px
- **About Image**: Max 3MB, resized to 1200x1200px
- **Machine Images**: Max 3MB, resized to 1200x1600px
- **Gallery Images**: Max 3MB, resized to 1200x1200px

### Uploading Images via CMS

1. Go to `/admin`
2. Select content type (Hero, About, Machines, Gallery)
3. Click on image field
4. Upload new image or select from media library
5. Image is automatically:
   - Uploaded to `/public/images/uploads/`
   - Resized according to limits
   - Committed to Git
6. Click "Publish"

### Using next/image

Images use Next.js Image component with `unoptimized` flag for static export compatibility:

```tsx
<Image 
  src="/images/hero-bg.jpg" 
  alt="Hero"
  width={2000}
  height={1000}
  unoptimized
/>
```

## 🔧 TypeScript

### Type Definitions

All types are defined in `types/index.ts`:

```typescript
export interface Machine {
  slug: string;
  title_en: string;
  title_it: string;
  description_en: string;
  description_it: string;
  image: string;
  featured: boolean;
  order: number;
}
```

### Type Checking

```bash
npm run type-check
```

## 🌍 Multi-Language

### Switching Language

Users can switch between EN/IT using the button in the header.

### Adding Translations

Edit language files:
- `/public/locales/en/common.json`
- `/public/locales/it/common.json`

### Content Translation

Most content has separate files for each language:
- `content/hero/en.json` & `content/hero/it.json`
- `content/about/en.json` & `content/about/it.json`
- `content/stats/en.json` & `content/stats/it.json`

Machines and gallery have bilingual fields in single files:
```json
{
  "title_en": "Machine Name",
  "title_it": "Nome Macchina"
}
```

## 📝 Editing Content

### Via CMS (Recommended)

1. Go to `/admin`
2. Navigate to content section
3. Edit and save
4. Publish

### Via JSON Files (Advanced)

Edit files in `content/` directory directly:

```json
// content/machines/my-machine.json
{
  "title_en": "La Pavoni",
  "title_it": "La Pavoni",
  "description_en": "Classic lever machine",
  "description_it": "Classica macchina a leva",
  "image": "/images/machines/la-pavoni.jpg",
  "featured": true,
  "order": 1
}
```

Commit and push changes.

## 🎨 Customization

### Colors

Edit `styles/globals.css`:

```css
:root {
  --primary-color: #6592e6;
  --secondary-color: #4a69bd;
  --text-dark: #232323;
}
```

### Adding New Pages

1. Create `pages/newpage.tsx`
2. Follow pattern from `pages/collection.tsx`
3. Add navigation in `components/Header.tsx`

### Adding New CMS Collections

Edit `public/admin/config.yml`:

```yaml
- name: "testimonials"
  label: "Testimonials"
  folder: "content/testimonials"
  create: true
  fields:
    - { label: "Name", name: "name", widget: "string" }
    - { label: "Quote", name: "quote", widget: "text" }
```

## 🔍 SEO

### Meta Tags

Edit in `components/Layout.tsx`:

```tsx
<Head>
  <title>{title}</title>
  <meta name="description" content="Your description" />
  <meta property="og:title" content={title} />
</Head>
```

## 🐛 Troubleshooting

### CMS not loading
- Check `/admin` URL (not `/admin/`)
- Clear browser cache
- Check browser console for errors
- Ensure Netlify Identity is enabled

### Images not showing
- Images must be in `/public/images/`
- Paths in JSON start with `/images/`
- Run `npm run dev` to see errors

### Build errors
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### TypeScript errors
```bash
npm run type-check
```

## 📦 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 🔐 Security

- Identity registration set to "Invite only"
- Email validation in config
- No API keys in code
- All auth handled by Netlify
- Git Gateway for secure CMS access

## 📚 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **CMS**: Decap CMS (formerly Netlify CMS)
- **Styling**: CSS (with CSS variables)
- **i18n**: next-i18next
- **Deployment**: Netlify
- **Version Control**: Git

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Test locally
5. Submit pull request

## 📄 License

MIT

## 🆘 Support

- [Next.js Docs](https://nextjs.org/docs)
- [Decap CMS Docs](https://decapcms.org/docs/)
- [Netlify Docs](https://docs.netlify.com/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

---

Made with ☕ by Luca & Valentina
