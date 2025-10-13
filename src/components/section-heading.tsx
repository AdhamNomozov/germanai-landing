import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  children
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="text-center">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-yellow">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-3xl font-bold text-brand-white sm:text-4xl">{title}</h2>
      {children ? (
        <p className="mx-auto mt-3 max-w-2xl text-base text-gray-300 sm:text-lg">
          {children}
        </p>
      ) : null}
    </div>
  );
}
