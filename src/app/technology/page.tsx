"use client";

import React from "react";
import { useTranslations } from "@/components/LocaleProvider";
import { SiteHeader } from "@/components/SiteHeader";
import { Card, IconChip, BrandIcon, CardTitle, CardText } from "@/components/ui/Card";

type OptionItem = {
  icon: string;
  title: string;
  description: string;
  privacy: string;
};

export default function TechnologyPage() {
  const { translations } = useTranslations();

  return (
    <div className="flex flex-col flex-1 w-full font-sans bg-white dark:bg-zinc-950">
      <main className="flex flex-col flex-1 w-full px-4 sm:px-6 lg:px-8 py-16">
        <SiteHeader className="mb-8" />

        <div className="w-full max-w-5xl mx-auto">

        <Card variant="panel">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-6">
              {translations.technology.title}
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
              {translations.technology.description}
            </p>

            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {translations.technology.options.map((option: OptionItem) => (
                  <Card key={option.title} variant="subtle" className="p-6">
                    <IconChip rounded="rounded-full" className="mb-4">
                      <BrandIcon src={option.icon} size={26} />
                    </IconChip>
                    <CardTitle size="lg">{option.title}</CardTitle>
                    <CardText className="text-lg mb-4">{option.description}</CardText>
                    <div className="p-3 bg-black/5 dark:bg-white/5 rounded-lg border border-gray-200 dark:border-gray-600">
                      <span className="text-sm text-gray-900 dark:text-gray-100 font-medium">{option.privacy}</span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </Card>      </div>
</main>
    </div>
  );
}