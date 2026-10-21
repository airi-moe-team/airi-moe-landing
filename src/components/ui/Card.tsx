import React from "react";
import { withBase } from "@/lib/basePath";

/**
 * Sistema de tarjetas reutilizable de la landing Airi.
 * Garantiza un diseño uniforme en todas las páginas y en ambos modos (claro/oscuro).
 *
 * Variantes:
 *  - "solid": superficie sólida blanca (claro) / zinc-900 (oscuro) — tarjetas de contenido
 *  - "glass": superficie translúcida con blur — tarjetas sobre el fondo animado de la home
 *  - "subtle": superficie tenue — tarjetas anidadas o de segundo nivel
 *  - "panel": contenedor grande de página (sección principal)
 */

export type CardVariant = "solid" | "glass" | "subtle" | "panel";

const variantClasses: Record<CardVariant, string> = {
  solid:
    "bg-white dark:bg-zinc-900 border-gray-100 dark:border-gray-700",
  glass:
    "bg-white/90 dark:bg-zinc-900/80 backdrop-blur-sm border-gray-100 dark:border-gray-700",
  subtle:
    "bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-gray-700",
  panel:
    "bg-white dark:bg-zinc-900 border-gray-100 dark:border-gray-700 p-6 sm:p-8",
};

export function Card({
  variant = "solid",
  className = "",
  children,
  ...rest
}: {
  variant?: CardVariant;
  className?: string;
  children: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "children">) {
  return (
    <div
      className={[
        "rounded-xl border shadow-sm",
        variantClasses[variant],
        className,
      ].join(" ")}
      {...rest}
    >
      {children}
    </div>
  );
}

/** Chip contenedor de icono, uniforme en todas las tarjetas */
export function IconChip({
  size = "md",
  rounded = "rounded-lg",
  className = "",
  children,
}: {
  size?: "sm" | "md" | "lg";
  rounded?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const sizeClasses = {
    sm: "w-9 h-9",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }[size];

  return (
    <div
      className={[
        sizeClasses,
        rounded,
        "flex items-center justify-center bg-zinc-100 dark:bg-zinc-800",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

/** Imagen de icono SVG de marca con soporte de modo oscuro (invert) */
export function BrandIcon({
  src,
  size = 24,
  className = "",
  light = false,
}: {
  src: string;
  size?: number;
  className?: string;
  /** Los badges monocromo (cpu, cloud) ya tienen fondo: no invertir */
  light?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={withBase(src)}
      alt=""
      width={size}
      height={size}
      className={light ? className : `dark:invert ${className}`}
      aria-hidden="true"
    />
  );
}

/** Etiqueta pequeña de sección (ej: "Paso 1") */
export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
      {children}
    </span>
  );
}

/** Título de tarjeta uniforme */
export function CardTitle({
  size = "md",
  className = "",
  children,
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
}) {
  const sizeClasses = {
    sm: "text-lg font-bold mb-2",
    md: "text-xl font-bold mb-2",
    lg: "text-2xl font-bold mb-3",
  }[size];

  return (
    <h3 className={`${sizeClasses} text-black dark:text-white ${className}`}>
      {children}
    </h3>
  );
}

/** Texto de descripción de tarjeta uniforme */
export function CardText({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={`text-zinc-600 dark:text-zinc-400 ${className}`}>{children}</p>
  );
}
