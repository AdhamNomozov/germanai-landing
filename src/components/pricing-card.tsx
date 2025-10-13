import { ButtonLink } from "@/components/button-link";

export type PricingCardProps = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export function PricingCard({
  name,
  price,
  description,
  features,
  highlighted
}: PricingCardProps) {
  return (
    <div
      className={`flex flex-col rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur transition-transform hover:-translate-y-1 ${
        highlighted ? "border-brand-yellow bg-brand-yellow/10" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-brand-white">{name}</h3>
        {highlighted ? (
          <span className="rounded-full bg-brand-yellow px-3 py-1 text-xs font-semibold text-brand-black">
            Eng mashhur
          </span>
        ) : null}
      </div>
      <p className="mt-4 text-4xl font-bold text-brand-yellow">{price}</p>
      <p className="mt-2 text-sm text-gray-300">{description}</p>
      <ul className="mt-6 space-y-3 text-sm text-gray-200">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-brand-yellow" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <ButtonLink
        href="https://app.germanai.uz"
        variant={highlighted ? "primary" : "secondary"}
        className="mt-8"
      >
        Boshlash
      </ButtonLink>
    </div>
  );
}
