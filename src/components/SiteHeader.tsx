"use client";

import React from "react";
import { useTranslations } from "@/components/LocaleProvider";
import { Link } from "@/components/Link";
import { ThemeToggle } from "@/components/ThemeProvider";
import type { Locale } from "@/lib/translations";
import { BrandIcon } from "@/components/ui/Card";

/**
 * Header ( navbar ) reutilizable de la landing Airi.
 * Identico en todas las páginas: logo de marca, nav de 5 enlaces,
 * toggle de tema y selector de idioma con icono earth.
 */
export function SiteHeader({ className = "mb-8" }: { className?: string }) {
  const { activeLocale, setLocale, translations } = useTranslations();

  const navLinks = [
    "/",
    "/features",
    "/how-it-works",
    "/technology",
    "/privacy",
    "/contact",
  ];

  return (
    <header className={`w-full border-b border-gray-200 dark:border-gray-600 ${className}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/airi.png"
            alt="Airi"
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="text-2xl font-bold tracking-[0.2em] text-black dark:text-white">
            AIRI
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Navegación principal">
          {navLinks.map((href, i) => (
            <Link
              key={href}
              href={href}
              className="whitespace-nowrap text-gray-600 hover:text-black dark:text-gray-400 hover:text-white transition-colors"
            >
              {translations.header.nav[i].label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <label className="relative flex items-center">
            <BrandIcon src="/airi-icons/earth.svg" size={16} className="absolute left-2.5 pointer-events-none" />
            <select
              className="bg-transparent border border-gray-300 dark:border-gray-600 rounded-md pl-8 pr-2 py-2 text-sm font-medium text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 cursor-pointer"
              aria-label="Selección de idioma"
              value={activeLocale}
              onChange={(e) => setLocale(e.target.value as Locale)}
            >
              <option value="es">Español</option>
              <option value="en">English</option>
            </select>
          </label>
        </div>
      </div>
    </header>
  );
}
