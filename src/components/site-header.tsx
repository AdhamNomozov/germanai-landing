'use client';

import { useState } from "react";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";

const navItems = [
  { label: "Yo'nalishlar", href: "#directions" },
  { label: "Kurslar", href: "#courses" },
  { label: "Narxlar", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Bog'lanish", href: "#contact" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="section-container flex items-center justify-between py-4">
        <Link href="#hero" className="text-lg font-bold text-brand-yellow">
          GermanAI
        </Link>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm text-brand-white lg:hidden"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          ☰
        </button>
        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-200 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-brand-yellow focus-visible:text-brand-yellow focus-visible:outline-none"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <ButtonLink href="https://exam.germanai.uz/quick-test" variant="primary">
            AI Quick Test
          </ButtonLink>
        </div>
      </div>
      {open ? (
        <div className="section-container pb-4 lg:hidden">
          <nav className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-gray-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 hover:bg-brand-yellow/10 hover:text-brand-yellow"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href="https://exam.germanai.uz/quick-test" className="w-full">
              AI Quick Test
            </ButtonLink>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
