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
import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section id="pricing" className="container py-16 md:py-20">
      {/* Section Heading */}
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <p className="font-semibold uppercase text-primary">Narxlar</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          Mos obuna rejasini tanlang
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Har bir bosqich uchun moslashuvchan tariflar. Istalgan payt yangilang yoki bekor qiling.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid items-start gap-8 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.name}
            className={cn(
              "relative flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
              plan.recommended && "border-2 border-primary shadow-xl -translate-y-2"
            )}
          >
            {plan.recommended && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground">
                Eng ommabop
              </div>
            )}

            <CardHeader className="pt-8">
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div>
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground"> {plan.pricePeriod}</span>
              </div>
            </CardHeader>

            <CardContent className="flex-grow">
              <ul className="space-y-4">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
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
                size={plan.recommended ? "lg" : "default"}
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