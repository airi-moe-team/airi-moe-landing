"use client";

import { useState } from "react";
import translations from "@/lib/translations";
import type { Translations, Locale } from "@/lib/translations";

export function useTranslations() {
  const [locale, setLocale] = useState<Locale>("es");
  
  return {
    activeLocale: locale,
    setLocale,
    translations: translations[locale] as Translations
  };
}