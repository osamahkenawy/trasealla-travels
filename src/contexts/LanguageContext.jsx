import { createContext, useContext, useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router';

// Import all translation files
import en from '../../messages/en.json';
import ar from '../../messages/ar.json';
import ru from '../../messages/ru.json';
import pt from '../../messages/pt.json';
import es from '../../messages/es.json';
import fr from '../../messages/fr.json';
import hi from '../../messages/hi.json';
import tl from '../../messages/tl.json';

const translations = {
  en,
  ar,
  ru,
  pt,
  es,
  fr,
  hi,
  tl
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const locale = params.locale || 'en';
  const [messages, setMessages] = useState(translations[locale] || translations.en);

  useEffect(() => {
    // Update messages when locale changes
    setMessages(translations[locale] || translations.en);
    
    // Update document direction for RTL languages
    if (locale === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', locale);
    }
  }, [locale]);

  const changeLanguage = (newLocale) => {
    // Get the current path without the locale prefix
    const segments = location.pathname.split('/').filter(Boolean);
    const pathWithoutLocale = segments.length > 1 ? `/${segments.slice(1).join('/')}` : '';
    
    // Save to localStorage
    localStorage.setItem('preferred-language', newLocale);
    
    // Navigate to the new locale
    if (newLocale === 'en') {
      navigate(`${pathWithoutLocale || '/'}`);
    } else {
      navigate(`/${newLocale}${pathWithoutLocale}`);
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = messages;
    
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        console.warn(`Translation key not found: ${key}`);
        return key;
      }
    }
    
    return value;
  };

  return (
    <LanguageContext.Provider value={{ locale, messages, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

