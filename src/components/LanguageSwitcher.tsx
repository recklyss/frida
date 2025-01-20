"use client";

import { IconLanguage } from "@tabler/icons-react";
import { useTranslation } from "@/i18n/context";

interface LanguageSwitcherProps {
  isMobile?: boolean;
  onClick?: () => void;
}

export const LanguageSwitcher = ({ isMobile = false, onClick }: LanguageSwitcherProps) => {
  const { language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en");
    onClick?.();
  };

  if (isMobile) {
    return (
      <button
        onClick={toggleLanguage}
        className="flex items-center px-3 py-2 rounded-md text-gray-800 hover:text-gray-600 transition-colors w-full"
        aria-label={`Switch to ${language === "en" ? "Chinese" : "English"}`}
      >
        <IconLanguage className="w-5 h-5 mr-1" />
        <span className="text-sm font-medium">
          {language === "en" ? "切换语言" : "Switch language"}
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-300/20 hover:scale-105 backdrop-blur-lg transition-colors shadow-lg"
      aria-label={`Switch to ${language === "en" ? "Chinese" : "English"}`}
    >
      <IconLanguage className="w-5 h-5 text-gray-800" />
    </button>
  );
}; 