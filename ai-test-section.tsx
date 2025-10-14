// src/components/landing/ai-test-section.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AiTestSection() {
  return (
    <section id="ai-test" className="container py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Chap: Matn */}
        <div className="space-y-6">
          <div className="max-w-md">
            <p className="font-semibold uppercase text-primary">AI Test</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              5 daqiqalik diagnostika
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Quick-test orqali darajangizni bilib, shaxsiy yo‘l xaritasini oling. Sun’iy
              intellekt javoblaringizni tahlil qilib, grammatik va leksik tavsiyalar beradi.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="https://exam.germanai.uz/quick-test">Testni boshlash</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://go.germanai.uz/roadmap">Yo'l xaritasini ko'rish</Link>
            </Button>
          </div>
        </div>

        {/* O'ng: Demo Karta */}
        <Card>
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle className="text-base">AI Quick Test</CardTitle>
            <span className="text-xs text-muted-foreground">00:05:00</span>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              “Wie heißt du?” savoliga javobingizni yozing:
            </p>
            <div className="rounded-lg bg-secondary p-4 text-sm text-secondary-foreground">
              Ich heiße Dilshod. Ich komme aus Taschkent.
            </div>
            <div className="rounded-lg border border-primary/50 bg-primary/10 p-4">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-primary">
                AI TAHLIL
              </p>
              <p className="mt-1 text-sm text-foreground">
                Juda yaxshi! Keyingi bosqichda “Wo wohnst du?” savoliga 2–3 gapda javob bering.
              </p>
            </div>
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                Adaptiv murakkablik
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-destructive" />
                Real imtihon formati
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}