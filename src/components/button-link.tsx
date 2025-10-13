import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants = {
  primary:
    "bg-brand-yellow text-brand-black hover:bg-[#FFD633] focus-visible:outline-brand-yellow",
  secondary:
    "border border-white/30 text-brand-white hover:border-brand-yellow hover:text-brand-yellow focus-visible:outline-brand-yellow",
  ghost:
    "text-brand-white hover:text-brand-yellow focus-visible:outline-brand-yellow"
} as const;

type Variant = keyof typeof variants;

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: Variant;
  className?: string;
};

export function ButtonLink({
  variant = "primary",
  className,
  ...props
}: ButtonLinkProps) {
  return <Link className={twMerge(baseStyles, variants[variant], className)} {...props} />;
}
