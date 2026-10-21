"use client";

import React from "react";
import { useTranslations } from "@/components/LocaleProvider";
import { Link } from "@/components/Link";
import { SiteHeader } from "@/components/SiteHeader";
import { Card, CardTitle, CardText } from "@/components/ui/Card";

export default function PrivacyPage() {
  const { translations } = useTranslations();

  return (
    <div className="flex flex-col flex-1 w-full font-sans bg-white dark:bg-zinc-950">
      <main className="flex flex-col flex-1 w-full px-4 sm:px-6 lg:px-8 py-16">
        <SiteHeader className="mb-8" />

        <div className="w-full max-w-5xl mx-auto">

        <div className="flex flex-wrap items-center gap-2 mb-8">
          <Link href="/" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">{translations.header.nav[0].label}</Link> /
          <span className="text-gray-600">{translations.header.nav[4].label}</span>
        </div>

        <Card variant="panel">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
              {translations.privacyPage.title}
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              {translations.privacyPage.intro}
            </p>
            <div className="space-y-6">
              {translations.privacyPage.sections.map((section) => (
                <div key={section.title}>
                  <CardTitle size="md">{section.title}</CardTitle>
                  <CardText>{section.body}</CardText>
                </div>
              ))}
            </div>
          </div>
        </Card>      </div>
</main>
    </div>
  );
}