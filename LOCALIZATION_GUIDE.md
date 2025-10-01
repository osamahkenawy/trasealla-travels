# Localization Guide

## Overview
Your app now supports 8 languages with URL-based routing:
- English (default): `/about`, `/contact`, etc.
- Arabic: `/ar/about`, `/ar/contact`, etc.
- Russian: `/ru/...`
- Portuguese: `/pt/...`
- Spanish: `/es/...`
- French: `/fr/...`
- Hindi: `/hi/...`
- Tagalog: `/tl/...`

## How It Works

### 1. Language Context
All translations are managed through the `LanguageContext` which provides:
- `locale`: Current language code (e.g., 'en', 'ar')
- `t(key)`: Translation function to get translated text
- `changeLanguage(locale)`: Function to change language
- `messages`: All translation messages for current locale

### 2. Using Translations in Components

```jsx
import { useLanguage } from '../contexts/LanguageContext';

function MyComponent() {
  const { t, locale } = useLanguage();
  
  return (
    <div>
      <h1>{t('nav.home')}</h1>
      <p>{t('common.readMore')}</p>
    </div>
  );
}
```

### 3. Creating Localized Links

**Option A: Using the helper function (as in Nav.jsx)**
```jsx
import { useLanguage } from '../contexts/LanguageContext';

function MyComponent() {
  const { locale } = useLanguage();
  
  const getLocalizedPath = (path) => {
    if (locale === 'en') return path;
    return `/${locale}${path}`;
  };
  
  return <Link to={getLocalizedPath('/about')}>About</Link>;
}
```

**Option B: Using the custom hook (recommended)**
```jsx
import { useLocalizedPath } from '../hooks/useLocalizedPath';

function MyComponent() {
  const localizedPath = useLocalizedPath();
  
  return <Link to={localizedPath('/about')}>About</Link>;
}
```

## Translation Files

All translations are stored in `/messages/*.json`:
- `en.json` - English
- `ar.json` - Arabic
- `ru.json` - Russian
- `pt.json` - Portuguese
- `es.json` - Spanish
- `fr.json` - French
- `hi.json` - Hindi
- `tl.json` - Tagalog

### Adding New Translations

1. Open the relevant JSON file (e.g., `messages/en.json`)
2. Add your key-value pair:
```json
{
  "mySection": {
    "title": "My Title",
    "description": "My Description"
  }
}
```
3. Add the same structure to ALL other language files
4. Use in component: `t('mySection.title')`

## RTL Support

Arabic language automatically enables RTL (right-to-left) layout:
- The `<html>` element gets `dir="rtl"` and `lang="ar"` attributes
- This is handled automatically by the LanguageContext

## Language Switcher

The LanguageSwitcher component is already integrated in the header. It:
- Shows current language with flag emoji
- Provides dropdown with all 8 languages
- Persists selection to localStorage
- Automatically updates all links when language changes

## Examples

### Example 1: Simple Text Translation
```jsx
const { t } = useLanguage();
<h1>{t('nav.home')}</h1> // Shows "Home" or "الرئيسية"
```

### Example 2: Localized Navigation Link
```jsx
const localizedPath = useLocalizedPath();
<Link to={localizedPath('/contact')}>Contact</Link>
// English: /contact
// Arabic: /ar/contact
```

### Example 3: Programmatic Language Change
```jsx
const { changeLanguage } = useLanguage();
<button onClick={() => changeLanguage('ar')}>العربية</button>
```

## Notes

- English routes don't have a prefix (SEO friendly)
- Other languages use their code as prefix (/ar, /ru, etc.)
- Language preference is saved to localStorage
- All routes automatically work with all languages
- The system handles URL changes when switching languages

