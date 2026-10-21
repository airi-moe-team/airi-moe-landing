"use client";

import React, { createContext, useContext, useState } from "react";
import translations from "@/lib/translations";
import type { Translations, Locale } from "@/lib/translations";

interface LocaleContextType {
  activeLocale: Locale;
  setLocale: (locale: Locale) => void;
  translations: Translations;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("es");
  
  return (
    <LocaleContext.Provider
      value={{
        activeLocale: locale,
        setLocale,
        translations: translations[locale],
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useTranslations() {
  const context = useContext(LocaleContext);
  if (context === undefined) {
    throw new Error("useTranslations must be used within a LocaleProvider");
  }
  return context;
}