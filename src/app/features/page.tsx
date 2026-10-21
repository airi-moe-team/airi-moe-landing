"use client";

import React from "react";
import { useTranslations } from "@/components/LocaleProvider";
import { Link } from "@/components/Link";
import { SiteHeader } from "@/components/SiteHeader";

import { Card, IconChip, BrandIcon, CardTitle, CardText } from "@/components/ui/Card";
import { withBase } from "@/lib/basePath";

type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};

export default function FeaturesPage() {
  const { translations } = useTranslations();

  return (
    <div className="flex flex-col flex-1 w-full font-sans bg-white dark:bg-zinc-950">
      <main className="flex flex-col flex-1 w-full px-4 sm:px-6 lg:px-8 py-16">
        <SiteHeader className="mb-8" />

        <div className="w-full max-w-5xl mx-auto">

        <div className="flex flex-wrap items-center gap-2 mb-8">
          <Link href="/" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">{translations.header.nav[0].label}</Link> /
          <span className="text-gray-600">{translations.header.nav[1].label}</span>
        </div>

        <section className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4">
              {translations.features.title}
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-zinc-600 dark:text-zinc-400">
              {translations.features.description}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {translations.features.items.map((item: FeatureItem) => (
              <Card key={item.title} className="p-8 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <IconChip size="lg" rounded="rounded-2xl" className="mb-6">
                  <BrandIcon src={item.icon} size={32} />
                </IconChip>
                <CardTitle size="lg">{item.title}</CardTitle>
                <CardText className="text-lg mb-6">{item.description}</CardText>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
              {translations.screenshots.title}
            </h2>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-zinc-600 dark:text-zinc-400">
              {translations.screenshots.description}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {translations.screenshots.items.map((item) => (
              <Card key={item.src} className="overflow-hidden p-0 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <a href={withBase(item.src)} target="_blank" rel="noopener noreferrer" className="block bg-gray-100 dark:bg-zinc-800">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={withBase(item.src)}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-72 object-contain"
                  />
                </a>
                <div className="p-4">
                  <CardTitle size="sm">{item.caption}</CardTitle>
                </div>
              </Card>
            ))}
          </div>
        </section>      </div>
</main>
    </div>
  );
}