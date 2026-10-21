import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/components/LocaleProvider";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Link } from "@/components/Link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Airi",
  description: "Tu asistente conversacional inteligente",
  icons: {
    icon: "/airi.png",
    shortcut: "/airi.png",
    apple: "/airi.png",
  },
};

const COPYRIGHT_YEAR = 2026;

/**
 * Script anti-flash: aplica la clase .dark al <html> antes del primer paint
 * según la preferencia persistida o la del sistema.
 */
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem("airi-theme");
    var theme = stored === "light" || stored === "dark" || stored === "system" ? stored : "system";
    var dark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
    if (dark) document.documentElement.classList.add("dark");
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen flex flex-col bg-zinc-50 dark:bg-black text-black dark:text-white">
        <ThemeProvider>
          <LocaleProvider>
            <main className="flex-1 flex flex-col">
              {children}
            </main>
            <footer className="relative z-10 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-900">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/airi.png"
                    alt="Airi"
                    width={28}
                    height={28}
                    className="rounded-full"
                  />
                  <span className="text-sm font-bold tracking-[0.2em] text-black dark:text-white">
                    AIRI
                  </span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/airi-icons/discord.svg"
                    alt="Discord"
                    width={16}
                    height={16}
                    className="ml-2 text-gray-500 dark:text-gray-400 dark:invert opacity-60"
                  />
                </div>
                <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <Link href="/privacy" className="font-medium hover:text-black dark:hover:text-white transition-colors">
                    Política de privacidad
                  </Link>
                  <Link href="/terms" className="font-medium hover:text-black dark:hover:text-white transition-colors">
                    Términos de servicio
                  </Link>
                  <a href="https://github.com/airi-moe-team/airi-moe-bot" className="font-medium hover:text-black dark:hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </nav>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  © {COPYRIGHT_YEAR} Airi
                </p>
              </div>
            </footer>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
