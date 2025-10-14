// src/components/landing/roadmap-section.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { roadmapSteps } from "@/lib/data";

export function RoadmapSection() {
  return (
    <section id="roadmap" className="container py-20 md:py-28">
      {/* Section Heading */}
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="font-semibold uppercase text-primary">Yo'l xaritasi</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          5 qadamda natija
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          GermanAI yo‘l xaritasi bilan maqsadga tezroq yeting.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="relative">
        {/* The connecting line - visible on desktop */}
        <div className="absolute left-1/2 top-1/2 hidden h-px w-full -translate-y-1/2 bg-border lg:block" />

        <div className="grid gap-8 lg:grid-cols-5">
          {roadmapSteps.map((step, index) => (
            <Card key={step.title} className="relative text-center">
              <CardHeader>
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground ring-8 ring-background">
                  {index + 1}
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg">{step.title}</CardTitle>
                <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}