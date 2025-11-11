import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  getLocalizedPath: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguageState] = useState<Language>('en');
  const [translations, setTranslations] = useState<Record<string, string>>({});

  // Detect language from URL
  useEffect(() => {
    const pathLang = location.pathname.startsWith('/de') ? 'de' : 'en';
    setLanguageState(pathLang);
  }, [location.pathname]);

  // Load translations
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const module = await import(`../locales/${language}/translation.json`);
        setTranslations(module.default);
      } catch (error) {
        console.error('Failed to load translations:', error);
      }
    };
    loadTranslations();
  }, [language]);

  const setLanguage = (lang: Language) => {
    const currentPath = location.pathname;
    let newPath = currentPath;

    if (lang === 'de') {
      // Switch to German
      if (!currentPath.startsWith('/de')) {
        newPath = currentPath === '/' ? '/de' : `/de${currentPath}`;
      }
    } else {
      // Switch to English
      if (currentPath.startsWith('/de')) {
        newPath = currentPath.replace(/^\/de/, '') || '/';
      }
    }

    navigate(newPath);
  };

  const t = (key: string): string => {
    return translations[key] || key;
  };

  const getLocalizedPath = (path: string): string => {
    if (language === 'de') {
      return path === '/' ? '/de' : `/de${path}`;
    }
    return path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getLocalizedPath }}>
      {children}
    </LanguageContext.Provider>
  );
};
