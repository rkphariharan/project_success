# 🌐 Premium Auto Care - Marketing Website

Premium landing page showcasing car service expertise and attracting customers.

## ✨ Features

- **Hero Section** with premium car imagery and CTAs
- **Services Showcase** (Mechanical, Electrical, ECM Updates, Premium Care)
- **Car Brands** served (mid-range and premium vehicles)
- **Statistics** (5000+ cars serviced, 98% satisfaction, 15+ years)
- **Contact Section** with phone, email, and location
- **Premium Design** with purple/grey/gold color scheme
- Fully **responsive** for mobile and desktop

## 🚀 Getting Started

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production
```bash
npm run build
npm start
```

## 🎨 Customization

### Update Brand Colors
Edit `app/page.tsx` and modify the Tailwind classes:
- Primary: `purple-400`, `purple-500`, `purple-600`
- Secondary: `slate-700`, `slate-800`, `slate-900`
- Accent: `amber-400`, `amber-500`

### Update Car Brands
Edit the `carBrands` array in `app/page.tsx`:
```typescript
const carBrands = [
  { name: 'Your Brand', category: 'mid' | 'premium' },
];
```

## 📦 Technologies Used

- Next.js 14+ with TypeScript
- Tailwind CSS
- Lucide React (icons)

## 🚀 Deploy to Vercel

```bash
vercel
```

---

**Part of the Premium Auto Care CRM Suite**
