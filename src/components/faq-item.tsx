'use client';

import { useState } from "react";
import { twMerge } from "tailwind-merge";

export type FaqItemProps = {
  question: string;
  answer: string;
};

export function FaqItem({ question, answer }: FaqItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <button
        type="button"
        className="flex w-full items-center justify-between text-left"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-brand-white sm:text-lg">{question}</span>
        <span
          className={twMerge(
            "ml-6 flex h-8 w-8 items-center justify-center rounded-full border border-brand-yellow text-brand-yellow transition-transform",
            open ? "rotate-45" : ""
          )}
        >
          +
        </span>
      </button>
      <div
        className={twMerge(
          "grid overflow-hidden text-sm text-gray-300 transition-[grid-template-rows,opacity] duration-300",
          open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <p className="overflow-hidden leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
