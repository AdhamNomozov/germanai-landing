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
import { Button } from "@/components/ui/button";
import { directions } from "@/lib/data";
import { ArrowRight } from "lucide-react";

export function DirectionsSection() {
  return (
    <section id="directions" className="container py-20 md:py-28">
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

      {/* Cards Grid */}
      <div className="grid gap-8 md:grid-cols-3">
        {directions.map((direction) => (
          <Card key={direction.title} className="flex flex-col">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                <span className="text-xl">{(direction as any).icon ?? "✨"}</span>
              </div>
              <CardTitle>{direction.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription>{direction.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="link" asChild className="p-0">
                <Link href="https://go.germanai.uz/roadmap">
                  Batafsil <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}