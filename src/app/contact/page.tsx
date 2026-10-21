"use client";

import React, { useState } from "react";
import { useTranslations } from "@/components/LocaleProvider";
import { Link } from "@/components/Link";
import { SiteHeader } from "@/components/SiteHeader";
import { Card } from "@/components/ui/Card";

export default function ContactPage() {
  const { translations } = useTranslations();
  const form = translations.contactPage.form;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [server, setServer] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Solicitud de integración — ${name}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\nServidor Discord: ${server || "(no indicado)"}\n\nMensaje:\n${message}`
    );
    window.location.href = `mailto:davidalexd1234@gmail.com?subject=${subject}&body=${body}`;
    setStatus("success");
    setName("");
    setEmail("");
    setServer("");
    setMessage("");
  }

  return (
    <div className="flex flex-col flex-1 w-full font-sans bg-white dark:bg-zinc-950">
      <main className="flex flex-col flex-1 w-full px-4 sm:px-6 lg:px-8 py-16">
        <SiteHeader className="mb-8" />

        <div className="w-full max-w-3xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <Link href="/" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
              {translations.header.nav[0].label}
            </Link>
            <span className="text-gray-600">/</span>
            <span className="text-gray-600">{translations.contactPage.title}</span>
          </div>

          <Card variant="panel">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
                {translations.contactPage.title}
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                {translations.contactPage.description}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-900 dark:text-gray-100">{form.name}</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 px-3 py-2 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-900 dark:text-gray-100">{form.email}</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 px-3 py-2 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-900 dark:text-gray-100">{form.server}</label>
                  <input
                    type="text"
                    value={server}
                    onChange={(e) => setServer(e.target.value)}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 px-3 py-2 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-900 dark:text-gray-100">{form.message}</label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-900 px-3 py-2 text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full font-medium hover:opacity-80 transition-opacity disabled:opacity-50"
                >
                  {status === "sending" ? form.sending : form.submit}
                </button>
                {status === "success" && (
                  <p className="text-green-600 dark:text-green-400">{form.success}</p>
                )}
                {status === "error" && (
                  <p className="text-red-600 dark:text-red-400">{form.error}</p>
                )}
              </form>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}