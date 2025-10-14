// src/components/landing/pricing-section.tsx
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/lib/data";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section id="pricing" className="container py-20 md:py-28">
      {/* Section Heading */}
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="font-semibold uppercase text-primary">Narxlar</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Mos obuna rejasini tanlang
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Har bir bosqich uchun moslashuvchan tariflar. Istalgan payt yangilang yoki bekor qiling.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid gap-8 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.name}
            className={cn(
              "flex flex-col",
              plan.recommended && "border-primary ring-2 ring-primary"
            )}
          >
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div>
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground"> {plan.pricePeriod}</span>
              </div>
            </CardHeader>

            <CardContent className="flex-grow">
              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="h-5 w-5 flex-none text-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>

            <CardFooter>
              <Button
                asChild
                className="w-full"
                variant={plan.recommended ? "default" : "outline"}
              >
                <Link href="https://app.germanai.uz">Rejani tanlash</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}