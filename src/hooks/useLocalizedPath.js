import { useLanguage } from '../contexts/LanguageContext';

/**
 * Custom hook to create localized paths
 * Usage: const localizedPath = useLocalizedPath('/about') 
 * Returns: '/about' for English, '/ar/about' for Arabic, etc.
 */
export function useLocalizedPath() {
  const { locale } = useLanguage();
  
  return (path) => {
    // Ensure path starts with /
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    
    // English is the default, no prefix needed
    if (locale === 'en') {
      return normalizedPath;
    }
    
    // Add locale prefix for other languages
    return `/${locale}${normalizedPath}`;
  };
}

