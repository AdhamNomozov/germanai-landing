// src/components/landing/directions-section.tsx
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { directions } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function DirectionsSection() {
  return (
    <section id="directions" className="container py-16 md:py-20">
      {/* Orqa fon uchun nozik gradient */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[800px] bg-gradient-to-b from-secondary/50 via-background to-background" />

      {/* Section Heading */}
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="font-semibold uppercase text-primary">Yo'nalishlar</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          GermanAI qanday yordam beradi?
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Platformaning uch asosiy yo‘nalishi bilan nemis tilini tezroq o‘rganing.
        </p>
      </div>

      {/* Glassmorphism Kartalar Grid */}
      <div className="grid gap-8 md:grid-cols-3">
        {directions.map((direction) => (
          <Card
            key={direction.title}
            className={cn(
              "group relative flex flex-col overflow-hidden",
              "border-white/10 bg-white/5 backdrop-blur-lg", // Shisha effekti
              "transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10"
            )}
          >
            {/* Interaktiv Nur Effekti */}
            <div className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
            </div>

            <CardHeader>
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                <span className="text-2xl">{(direction as any).icon ?? "✨"}</span>
              </div>
              {/* ===== QAYTARILGAN SARLAVHA ===== */}
              <CardTitle className="text-xl font-semibold text-white">{direction.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-slate-400">{direction.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Link
                href="https://go.germanai.uz/roadmap"
                className="flex items-center text-sm font-semibold text-primary transition-colors hover:text-yellow-300"
              >
                Batafsil
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}