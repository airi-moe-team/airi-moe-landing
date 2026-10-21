"use client";

import React from "react";
import { useTranslations } from "@/components/LocaleProvider";
import { SiteHeader } from "@/components/SiteHeader";

import { Card, IconChip, BrandIcon, SectionLabel, CardTitle, CardText } from "@/components/ui/Card";

type StepItem = {
  step: string;
  icon: string;
  title: string;
  description: string;
};

export default function HowItWorksPage() {
  const { activeLocale, translations } = useTranslations();

  return (
    <div className="flex flex-col flex-1 w-full font-sans bg-white dark:bg-zinc-950">
      <main className="flex flex-col flex-1 w-full px-4 sm:px-6 lg:px-8 py-16">
        <SiteHeader className="mb-8" />

        <div className="w-full max-w-5xl mx-auto">

        <Card variant="panel">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-6">
              {translations.howItWorks.title}
            </h1>
            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
              {translations.howItWorks.description}
            </p>

            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {translations.howItWorks.steps.map((step: StepItem) => (
                  <Card key={step.step} variant="subtle" className="p-6">
                    <IconChip rounded="rounded-full" className="mb-4">
                      <BrandIcon src={step.icon} size={24} />
                    </IconChip>
                    <SectionLabel>
                      {activeLocale === "es" ? "Paso" : "Step"} {step.step}
                    </SectionLabel>
                    <CardTitle size="lg">{step.title}</CardTitle>
                    <CardText className="text-lg">{step.description}</CardText>
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