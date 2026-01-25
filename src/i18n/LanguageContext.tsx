import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import en from './locales/en.json';
import es from './locales/es.json';

type Language = 'en' | 'es';
type TranslationValue = string | number | boolean | null | TranslationValue[] | { [key: string]: TranslationValue };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => TranslationValue;
  isSpanish: boolean;
}

const translations: Record<Language, Record<string, any>> = { en, es };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Helper to get nested value from object using dot notation
const getNestedValue = (obj: any, path: string): TranslationValue => {
  const result = path.split('.').reduce((acc, part) => acc?.[part], obj);
  return result ?? path;
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  
  // Detect language from URL path
  const getLanguageFromPath = (): Language => {
    return location.pathname.startsWith('/es') ? 'es' : 'en';
  };
  
  const [language, setLanguageState] = useState<Language>(() => {
    // First check URL
    if (typeof window !== 'undefined' && window.location.pathname.startsWith('/es')) return 'es';
    
    // Then check localStorage
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('language') as Language;
      if (stored === 'es' || stored === 'en') return stored;
      
      // Finally check browser preference
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith('es')) return 'es';
    }
    
    return 'en';
  });

  // Update language when URL changes
  useEffect(() => {
    const pathLang = getLanguageFromPath();
    if (pathLang !== language) {
      setLanguageState(pathLang);
      localStorage.setItem('language', pathLang);
    }
  }, [location.pathname]);

  const setLanguage = (lang: Language) => {
    localStorage.setItem('language', lang);
    setLanguageState(lang);
  };

  const t = (key: string): TranslationValue => {
    const value = getNestedValue(translations[language], key);
    // Fallback to English if translation not found
    if (value === key && language !== 'en') {
      return getNestedValue(translations.en, key);
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage, 
      t, 
      isSpanish: language === 'es' 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Hook for components that need translated text as string
export const useTranslation = () => {
  const { t, language, setLanguage, isSpanish } = useLanguage();
  
  // Helper to ensure we get a string
  const tString = (key: string): string => {
    const value = t(key);
    return typeof value === 'string' ? value : key;
  };
  
  // Helper to get array of strings
  const tArray = (key: string): string[] => {
    const value = t(key);
    return Array.isArray(value) ? value.map(v => typeof v === 'string' ? v : String(v)) : [];
  };
  
  // Helper to get array of objects
  const tObject = <T extends Record<string, any>>(key: string): T => {
    const value = t(key);
    return (typeof value === 'object' && value !== null ? value : {}) as T;
  };
  
  // Helper to get array of objects
  const tObjectArray = <T extends Record<string, any>>(key: string): T[] => {
    const value = t(key);
    return Array.isArray(value) ? value as T[] : [];
  };
  
  return { t: tString, tArray, tObject, tObjectArray, language, setLanguage, isSpanish };
};
