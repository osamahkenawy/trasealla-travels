import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const languages = [
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
    nativeName: 'English'
  },
  {
    code: 'ar',
    name: 'Arabic',
    flag: '🇦🇪',
    nativeName: 'العربية'
  },
  {
    code: 'ru',
    name: 'Russian',
    flag: '🇷🇺',
    nativeName: 'Русский'
  },
  {
    code: 'pt',
    name: 'Portuguese',
    flag: '🇵🇹',
    nativeName: 'Português'
  },
  {
    code: 'es',
    name: 'Spanish',
    flag: '🇪🇸',
    nativeName: 'Español'
  },
  {
    code: 'fr',
    name: 'French',
    flag: '🇫🇷',
    nativeName: 'Français'
  },
  {
    code: 'hi',
    name: 'Hindi',
    flag: '🇮🇳',
    nativeName: 'हिन्दी'
  },
  {
    code: 'tl',
    name: 'Tagalog',
    flag: '🇵🇭',
    nativeName: 'Tagalog'
  }
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, changeLanguage } = useLanguage();
  const dropdownRef = useRef(null);

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (languageCode) => {
    setIsOpen(false);
    changeLanguage(languageCode);
  };

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button
        className="language-switcher-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
      >
        <span className="flag-emoji">{currentLanguage.flag}</span>
        <span className="language-name">{currentLanguage.nativeName}</span>
        <i className={`bi bi-chevron-${isOpen ? 'up' : 'down'}`}></i>
      </button>
      
      {isOpen && (
        <div className="language-dropdown">
          {languages.map((language) => (
            <button
              key={language.code}
              className={`language-option ${language.code === locale ? 'active' : ''}`}
              onClick={() => handleLanguageChange(language.code)}
            >
              <span className="flag-emoji">{language.flag}</span>
              <span className="language-details">
                <span className="language-native">{language.nativeName}</span>
                <span className="language-english">{language.name}</span>
              </span>
            </button>
          ))}
        </div>
      )}
      
      <style>{`
        .language-switcher {
          position: relative;
          display: inline-block;
          margin: 0 8px;
          z-index: 9999;
        }
        
        .language-switcher-trigger {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 6px;
          color: white;
          font-size: 13px;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 110px;
          white-space: nowrap;
          flex-shrink: 0;
        }
        
        .language-switcher-trigger:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
        }
        
        .flag-emoji {
          font-size: 16px;
        }
        
        .language-name {
          flex: 1;
          text-align: left;
        }
        
        .language-dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 10000;
          margin-top: 4px;
          overflow: hidden;
          min-width: 200px;
        }
        
        .language-option {
          display: flex;
          align-items: center;
          gap: 12px;
          width: 100%;
          padding: 12px 16px;
          background: none;
          border: none;
          border-bottom: 1px solid #f0f0f0;
          cursor: pointer;
          transition: background-color 0.2s ease;
          text-align: left;
        }
        
        .language-option:last-child {
          border-bottom: none;
        }
        
        .language-option:hover {
          background-color: #f5f5f5;
        }
        
        .language-option.active {
          background-color: #e3f2fd;
          color: #1976d2;
        }
        
        .language-details {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        
        .language-native {
          font-weight: 500;
          font-size: 14px;
          color: #333;
        }
        
        .language-english {
          font-size: 12px;
          color: #666;
        }
        
        .language-option.active .language-native,
        .language-option.active .language-english {
          color: #1976d2;
        }
        
        /* RTL Support */
        .rtl-layout .language-switcher-trigger {
          direction: rtl;
        }
        
        .rtl-layout .language-name {
          text-align: right;
        }
        
        .rtl-layout .language-dropdown {
          left: auto;
          right: 0;
        }
      `}</style>
    </div>
  );
}

