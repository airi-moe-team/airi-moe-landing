"use client";

import React from "react";

/**
 * Fondo animado de marca Airi:
 * burbujas de chat flotantes y corazones al estilo del banner monocromo.
 * Respeto por accesibilidad: se desactiva con prefers-reduced-motion (CSS).
 */
type Particle = {
  id: number;
  left: string;      // posición horizontal
  top: string;       // posición vertical inicial
  size: number;      // tamaño en px
  delay: string;     // retraso de animación
  duration: string;  // duración de animación
  kind: "bubble" | "bubbleSmall" | "heart";
  opacity: number;
};

const PARTICLES: Particle[] = [
  { id: 0,  left: "8%",  top: "72%", size: 90,  delay: "0s",   duration: "11s", kind: "bubble",     opacity: 0.08 },
  { id: 1,  left: "22%", top: "58%", size: 56,  delay: "1.4s", duration: "13s", kind: "bubbleSmall", opacity: 0.10 },
  { id: 2,  left: "64%", top: "70%", size: 120, delay: "0.8s", duration: "12s", kind: "bubble",     opacity: 0.07 },
  { id: 3,  left: "78%", top: "50%", size: 70,  delay: "2.2s", duration: "14s", kind: "bubbleSmall", opacity: 0.09 },
  { id: 4,  left: "90%", top: "78%", size: 46,  delay: "1s",   duration: "10s", kind: "bubbleSmall", opacity: 0.11 },
  { id: 5,  left: "12%", top: "22%", size: 26,  delay: "0.4s", duration: "9s",  kind: "heart",      opacity: 0.14 },
  { id: 6,  left: "30%", top: "34%", size: 20,  delay: "2.6s", duration: "11s", kind: "heart",      opacity: 0.12 },
  { id: 7,  left: "55%", top: "24%", size: 24,  delay: "1.8s", duration: "12s", kind: "heart",      opacity: 0.13 },
  { id: 8,  left: "70%", top: "14%", size: 18,  delay: "0.2s", duration: "10s", kind: "heart",      opacity: 0.15 },
  { id: 9,  left: "85%", top: "30%", size: 22,  delay: "3.2s", duration: "13s", kind: "heart",      opacity: 0.12 },
  { id: 10, left: "44%", top: "84%", size: 20,  delay: "1.2s", duration: "9s",  kind: "heart",      opacity: 0.14 },
  { id: 11, left: "3%",  top: "45%", size: 74,  delay: "0.6s", duration: "12s", kind: "bubble",     opacity: 0.07 },
  { id: 12, left: "48%", top: "12%", size: 110, delay: "1.1s", duration: "13s", kind: "bubble",     opacity: 0.06 },
  { id: 13, left: "38%", top: "62%", size: 60,  delay: "2.0s", duration: "11s", kind: "bubbleSmall", opacity: 0.09 },
  { id: 14, left: "68%", top: "86%", size: 52,  delay: "0.9s", duration: "12s", kind: "bubbleSmall", opacity: 0.10 },
  { id: 15, left: "16%", top: "8%",  size: 28,  delay: "0.3s", duration: "9s",  kind: "heart",      opacity: 0.13 },
  { id: 16, left: "40%", top: "40%", size: 16,  delay: "2.4s", duration: "10s", kind: "heart",      opacity: 0.14 },
  { id: 17, left: "62%", top: "38%", size: 20,  delay: "1.6s", duration: "11s", kind: "heart",      opacity: 0.12 },
  { id: 18, left: "76%", top: "68%", size: 24,  delay: "3.0s", duration: "12s", kind: "heart",      opacity: 0.13 },
  { id: 19, left: "92%", top: "20%", size: 18,  delay: "0.7s", duration: "9s",  kind: "heart",      opacity: 0.15 },
  { id: 20, left: "26%", top: "78%", size: 22,  delay: "2.1s", duration: "10s", kind: "heart",      opacity: 0.14 },
  { id: 21, left: "52%", top: "52%", size: 68,  delay: "1.3s", duration: "13s", kind: "bubbleSmall", opacity: 0.08 },
];
function Bubble({ size }: { size: number }) {
  // Burbuja de chat con dos líneas de texto, como en el banner de marca
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <rect x="4" y="10" width="92" height="56" rx="10"
            fill="none" stroke="currentColor" strokeWidth="6" />
      <line x1="24" y1="34" x2="76" y2="34" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      <line x1="24" y1="50" x2="60" y2="50" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

function BubbleSmall({ size }: { size: number }) {
  return (
    <svg width={size} height={size * 0.8} viewBox="0 0 100 80" aria-hidden="true" focusable="false">
      <rect x="4" y="6" width="92" height="52" rx="10"
            fill="none" stroke="currentColor" strokeWidth="7" />
      <path d="M30 58 L 26 74 L 44 58" fill="currentColor" />
    </svg>
  );
}

function Heart({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M16 29 C 8 22 2 17 2 10.5 C 2 5.5 6 2 10.5 2 C 13 2 15 3.5 16 5.5 C 17 3.5 19 2 21.5 2 C 26 2 30 5.5 30 10.5 C 30 17 24 22 16 29 Z"
            fill="currentColor" />
    </svg>
  );
}

export function AnimatedBackground() {
  return (
    <div
      className="airi-bg pointer-events-none absolute inset-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-zinc-50 to-zinc-100 dark:from-black dark:via-zinc-900/40 dark:to-black" />
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="airi-bg-item absolute text-black dark:text-white"
          style={{
            left: p.left,
            top: p.top,
            opacity: p.opacity,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        >
          {p.kind === "bubble" && <Bubble size={p.size} />}
          {p.kind === "bubbleSmall" && <BubbleSmall size={p.size} />}
          {p.kind === "heart" && <Heart size={p.size} />}
        </div>
      ))}
    </div>
  );
}
