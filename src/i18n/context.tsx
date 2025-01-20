"use client";

import { createContext, useContext, useEffect, useState } from "react";

import en from "./locales/en.json";
import zh from "./locales/zh.json";

type Language = "en" | "zh";
type Translations = typeof en;

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const translations: Record<Language, Translations> = { en, zh };

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    // Get language preference from localStorage or browser
    const savedLang = localStorage.getItem("language") as Language;
    const browserLang = navigator.language.startsWith("zh") ? "zh" : "en";
    setLanguage(savedLang || browserLang);
  }, []);

  useEffect(() => {
    // Save language preference
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };

  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within an I18nProvider");
  }
  return context;
} 