# 🚀 Quick Start Guide

Get your TypeScript Vintage Espresso CMS running in 5 minutes!

## Prerequisites

- Node.js 18+ installed
- Git installed
- A GitHub account (for deployment)

## Step 1: Install & Run Locally

```bash
# Install dependencies
npm install

# Download sample images (optional but recommended)
chmod +x download-images.sh
./download-images.sh

# Start development server
npm run dev
```

Visit **http://localhost:3000** to see your site! 🎉

## Step 2: Test the CMS Locally

### Option A: Using Decap Server

```bash
# Terminal 1: Keep dev server running
npm run dev

# Terminal 2: Start CMS proxy
npx decap-server
```

### Option B: Using Netlify CLI

```bash
# Terminal 1: Keep dev server running
npm run dev

# Terminal 2: Start CMS proxy
npx netlify-cms-proxy-server
```

**Important**: Edit `public/admin/config.yml` and uncomment:
```yaml
local_backend: true
```

Visit **http://localhost:3000/admin** - No login needed locally! ✨

## Step 3: Replace Sample Images

Via CMS (Recommended):
1. Go to `/admin`
2. Click any section (Hero, About, Machines, Gallery)
3. Click image field → Upload new image
4. Your images are saved to `/public/images/uploads/`
5. Click "Publish"

## Step 4: Deploy to Netlify

### A. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/your-repo.git
git branch -M main
git push -u origin main
```

### B. Deploy on Netlify

1. Go to [netlify.com](https://www.netlify.com)
2. **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** → Select your repo
4. Click **"Deploy site"** (settings auto-detected)

### C. Enable CMS

1. **Identity tab** → **"Enable Identity"**
2. **Registration**: Select **"Invite only"**
3. **Services** → **"Enable Git Gateway"**
4. **"Invite users"** → Enter your email
5. Check email → Set password

### D. Access Your Live CMS

Go to `https://your-site.netlify.app/admin` and log in! 🎉

## Workflow After Deployment

```
1. Edit content at your-site.netlify.app/admin
2. Click "Publish"
3. Changes commit to Git
4. Netlify auto-rebuilds (1-2 minutes)
5. Site updated! ✨
```

## TypeScript Features

### Type Checking

```bash
npm run type-check
```

### Auto-completion

Your IDE will provide auto-completion for all content types:

```typescript
// IntelliSense knows all Machine properties!
const machine: Machine = {
  slug: 'my-machine',
  title_en: 'Title',
  title_it: 'Titolo',
  // ... and more
}
```

## Image Guidelines

### Recommended Sizes

- **Logo**: 200x200px (circular)
- **Hero Background**: 1920x1080px (landscape)
- **About Image**: 1200x800px (landscape)
- **Machine Photos**: 800x1000px (portrait)
- **Gallery Images**: 1200x800px (landscape)

### Formats

- Use **JPG** for photos (smaller file size)
- Use **PNG** for graphics with transparency
- Max file sizes enforced by CMS (see README)

## Common Tasks

### Add a New Machine

1. Go to `/admin` → **Espresso Machines**
2. Click **"New Espresso Machines"**
3. Fill in EN and IT titles/descriptions
4. Upload image
5. Set "Featured" checkbox if you want it on homepage
6. Click **"Publish"**

### Change Hero Background

1. Go to `/admin` → **Hero Section**
2. Choose language (English or Italian)
3. Click background image field
4. Upload new image
5. Click **"Publish"**

### Add Gallery Images

1. Go to `/admin` → **Gallery Images**
2. Click **"New Gallery Images"**
3. Upload image
4. Add alt text for both languages
5. Set order number
6. Click **"Publish"**

## Customization

### Change Colors

Edit `styles/globals.css`:

```css
:root {
  --primary-color: #6592e6;    /* Blue */
  --secondary-color: #4a69bd;  /* Dark Blue */
  --text-dark: #232323;        /* Almost Black */
}
```

### Change Fonts

Edit `pages/_document.tsx`:

```tsx
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT&display=swap" rel="stylesheet" />
```

Then update `styles/globals.css`:

```css
body {
  font-family: 'YOUR_FONT', sans-serif;
}
```

## Troubleshooting

### "Cannot find module" errors

```bash
rm -rf node_modules package-lock.json
npm install
```

### Images not showing

- Check image paths start with `/images/`
- Images must be in `/public/images/`
- Run `npm run dev` to see 404 errors

### CMS not loading locally

- Ensure `local_backend: true` in `public/admin/config.yml`
- Run `npx decap-server` in separate terminal
- Clear browser cache

### Build fails on Netlify

- Check build logs in Netlify dashboard
- Ensure all images referenced in JSON exist
- Run `npm run build` locally first

## Next Steps

1. ✅ Replace all sample images with your own
2. ✅ Update content via CMS
3. ✅ Customize colors and fonts
4. ✅ Add your own domain (optional)
5. ✅ Invite team members to CMS

## Resources

- 📖 [Full README](./README.md) - Complete documentation
- 🌐 [Next.js Docs](https://nextjs.org/docs)
- 🎨 [Decap CMS Docs](https://decapcms.org/docs/)
- 🚀 [Netlify Docs](https://docs.netlify.com/)
- 📘 [TypeScript Docs](https://www.typescriptlang.org/docs/)

---

**Need Help?** Check the README or open an issue on GitHub!

Happy coding! ☕✨
