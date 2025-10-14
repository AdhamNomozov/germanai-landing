// src/components/landing/hero-section.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress"; // Progress komponentini ham o'rnatamiz, keyinroq
import { PlayCircle } from "lucide-react";

const heroStats = [
  { value: "5 000+", label: "AI generatsiyalangan savollar" },
  { value: "92%", label: "Muvaffaqiyatli natija" },
  { value: "24/7", label: "AI mentor yordami" },
];

export function HeroSection() {
  return (
    <section id="hero" className="container py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Chap: Matn */}
        <div className="space-y-8">
          <span className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground">
            GermanAI
          </span>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
            Nemis tili imtihonlariga AI bilan tayyorgarlik qiling
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            Adaptiv testlar, shaxsiylashtirilgan kurslar va yengil konsalting — barchasi
            bitta platformada. Minimal dizayn, maksimal natija.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="https://exam.germanai.uz/quick-test">5 daqiqada AI test</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="https://app.germanai.uz">Platformaga o‘tish</Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 pt-6">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* O'ng: Demo Karta */}
        <div className="lg:pl-8">
          <Card className="overflow-hidden">
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle>AI Speaking Demo</CardTitle>
              <span className="text-xs text-muted-foreground">demo</span>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                “Guten Tag! Bugungi mavzuda <em className="not-italic font-semibold text-foreground">Heimat</em> haqida
                gaplashamiz. Javobingizni yozing yoki ovozli yuboring — AI grammatikangizni
                tahlil qiladi.”
              </p>
              <div className="mt-5 flex items-center gap-4">
                <Button variant="secondary" size="icon" className="h-10 w-10 rounded-full">
                  <PlayCircle className="h-5 w-5" />
                </Button>
                <div>
                  <p className="text-sm font-medium">AI Tutor Clara</p>
                  <p className="text-xs text-muted-foreground">24/7 monitoring</p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                 {/* Progress componentini keyinroq qo'shamiz */}
                 {/* Vaqtinchalik oddiy div */}
                 <div>
                    <div className="mb-1 flex items-center justify-between text-xs text-muted-foreground">
                        <span>Grammatika</span><span>95%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary"><div className="h-full w-[95%] rounded-full bg-primary" /></div>
                 </div>
                 <div>
                    <div className="mb-1 flex items-center justify-between text-xs text-muted-foreground">
                        <span>So‘z boyligi</span><span>88%</span>
                    </div>
                    <div className="h-2 rounded-full bg-secondary"><div className="h-full w-[88%] rounded-full bg-destructive" /></div>
                 </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}