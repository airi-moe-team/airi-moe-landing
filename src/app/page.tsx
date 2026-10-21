"use client";

import React from "react";
import { useTranslations } from "@/components/LocaleProvider";
import { Link } from "@/components/Link";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { SiteHeader } from "@/components/SiteHeader";

import { Card, IconChip, BrandIcon, SectionLabel, CardTitle, CardText } from "@/components/ui/Card";

type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};

type StepItem = {
  step: string;
  icon: string;
  title: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

export default function Home() {
  const { translations, activeLocale } = useTranslations();

  return (
    <div className="relative flex flex-col flex-1 w-full font-sans">
      {/* Fondo animado de marca */}
      <AnimatedBackground />

      <main className="relative z-10 flex flex-col flex-1 w-full px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <SiteHeader className="mb-12" />

        {/* Hero con marca */}
        <section className="mb-20 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/airi.png"
                  alt="Logo oficial de Airi"
                  width={140}
                  height={140}
                  className="rounded-full shadow-lg shadow-black/20 ring-4 ring-white dark:ring-zinc-800"
                />
              </div>
              <h1 className="max-w-2xl mx-auto text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 text-black dark:text-white">
                {translations.hero.title}
              </h1>
              <p className="max-w-xl mx-auto text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-10">
                {translations.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/features" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition-colors shadow-lg shadow-black/20">
                  {translations.hero.ctaPrimary}
                </Link>
                <Link href="/how-it-works" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-white dark:hover:bg-gray-800 transition-colors">
                  {translations.hero.ctaSecondary}
                </Link>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-zinc-900/80 px-4 py-1.5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/airi-icons/discord.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="dark:invert"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {activeLocale === "es" ? "Disponible en Discord" : "Available on Discord"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
              {translations.features.title}
            </h2>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400">
              {translations.features.description}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {translations.features.items.map((item: FeatureItem) => (
              <Card key={item.title} variant="glass" className="p-6 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <IconChip className="mb-4">
                  <BrandIcon src={item.icon} size={28} />
                </IconChip>
                <CardTitle>{item.title}</CardTitle>
                <CardText>{item.description}</CardText>
              </Card>
            ))}
          </div>
        </section>

        {/* How it Works */}
        <section className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
              {translations.howItWorks.title}
            </h2>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400">
              {translations.howItWorks.description}
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {translations.howItWorks.steps.map((step: StepItem) => (
              <Card key={step.step} variant="glass" className="flex items-start gap-4 p-5">
                <IconChip rounded="rounded-full" className="flex-shrink-0">
                  <BrandIcon src={step.icon} size={22} />
                </IconChip>
                <div>
                  <SectionLabel>
                    {activeLocale === "es" ? "Paso" : "Step"} {step.step}
                  </SectionLabel>
                  <CardTitle>{step.title}</CardTitle>
                  <CardText>{step.description}</CardText>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Screenshots: secciones alternadas texto ↔ imagen */}
        {translations.screenshots.items.map((item, index) => {
          const textLeft = index % 2 === 0;
          return (
            <section key={item.src} className="mb-20">
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className={textLeft ? "airi-reveal-left" : "md:order-2 airi-reveal-right"}>
                  <h3 className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-3">
                    {item.caption}
                  </h3>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400">
                    {translations.screenshots.description}
                  </p>
                </div>
                <div className={textLeft ? "airi-reveal-right" : "md:order-1 airi-reveal-left"}>
                  <Card variant="glass" className="overflow-hidden p-0">
                    <a href={item.src} target="_blank" rel="noopener noreferrer" className="block bg-gray-100 dark:bg-zinc-800">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        className="w-full h-[26rem] object-contain transition-transform duration-300 hover:scale-[1.02]"
                      />
                    </a>
                  </Card>
                </div>
              </div>
            </section>
          );
        })}

        {/* Privacy CTA */}
        <section className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
            {translations.privacyIntro.title}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            {translations.privacyIntro.description}
          </p>
          <Link href="/privacy" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium hover:opacity-80 transition-opacity shadow-lg shadow-black/20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/airi-icons/shield.svg" alt="" width={18} height={18} className="dark:invert" aria-hidden="true" />
            {translations.privacyIntro.cta}
          </Link>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
              {translations.faq.title}
            </h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-6">
            {translations.faq.items.map((item: FaqItem) => (
              <div key={item.question} className="bg-white/90 dark:bg-zinc-900/80 backdrop-blur-sm p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                <h3 className="text-lg font-bold text-black dark:text-white mb-2">{item.question}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-8 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
            {translations.ctaFinal.title}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
            {translations.ctaFinal.description}
          </p>
          <Link href="/features" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium hover:opacity-80 transition-opacity shadow-lg shadow-black/20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/airi-icons/zap.svg" alt="" width={18} height={18} className="dark:invert" aria-hidden="true" />
            {translations.hero.ctaPrimary}
          </Link>
        </section>
      </main>
    </div>
  );
}
