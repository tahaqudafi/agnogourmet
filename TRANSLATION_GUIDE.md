# Translation System Guide

## Overview
Your website now supports English (default) and German translations using a Context API-based system.

## URL Structure
- **English (default)**: `yoursite.com/` and `yoursite.com/about`
- **German**: `yoursite.com/de` and `yoursite.com/de/about`

## What's Been Set Up

### 1. Language Context (`src/contexts/LanguageContext.tsx`)
- Manages current language state
- Automatically detects language from URL
- Provides `t()` function for translations
- Handles language switching with URL updates

### 2. Translation Files
- **English**: `src/locales/en/translation.json`
- **German**: `src/locales/de/translation.json`

### 3. Language Switcher
- Added to navbar (desktop and mobile)
- Globe icon with language toggle (EN/DE)
- Automatically updates URL when switching

### 4. Translated Pages & Sections
**Main Page:**
✅ Navbar
✅ Hero Section
✅ Product Showcase
✅ Reviews
✅ Olive Facts
✅ FAQ
✅ Newsletter Footer

**Products/Shop Page:**
✅ Hero Section
✅ Category Filters
✅ Product Cards ("Shop Now" button)
✅ Coming Soon Section
✅ Shipping Marquee
✅ Newsletter Footer

**About Page:**
✅ Hero Section
✅ Origin Section
✅ From Grove to Bottle Section
✅ Our Olives Section (including "Art of Patience")
✅ Lab Results Section (title, description, link)
✅ Lab Results Cards (all 4 cards, mobile & desktop)
✅ Meet Agnó Section
✅ Where Quality Connects Section
✅ Newsletter Footer

## How to Use

### In Components
```tsx
import { useLanguage } from "@/contexts/LanguageContext";

export const MyComponent = () => {
  const { t, getLocalizedPath } = useLanguage();
  
  return (
    <>
      <h1>{t('my.translation.key')}</h1>
      <Link to={getLocalizedPath('/about')}>About</Link>
    </>
  );
};
```

### Language-Aware Navigation
All internal links automatically maintain the current language:
- If you're on `/de/about` and click "Shop", you go to `/de/products`
- If you're on `/about` and click "Shop", you go to `/products`
- Use `getLocalizedPath('/path')` for all internal navigation links

### Adding New Translations
1. Add the key to both `src/locales/en/translation.json` and `src/locales/de/translation.json`
2. Use `t('your.key')` in your component

## Testing
1. Run `npm run dev`
2. Visit `http://localhost:5173/` for English
3. Visit `http://localhost:5173/de` for German
4. Click the language switcher in the navbar

## Next Steps
To translate other pages (Products, About):
1. Add translation keys to the JSON files
2. Import `useLanguage` in those page components
3. Replace hardcoded text with `t('key')`
