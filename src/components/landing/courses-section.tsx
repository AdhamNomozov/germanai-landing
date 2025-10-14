// src/components/landing/courses-section.tsx
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { courseLevels } from "@/lib/data";

export function CoursesSection() {
  return (
    <section id="courses" className="container py-16 md:py-20">
      {/* Section Heading */}
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="font-semibold uppercase text-primary">Kurslar</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          A1 dan B2 gacha AI kurslar
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Har bir daraja uchun interaktiv darslar, speaking mashg‘ulotlari va uy vazifalar.
        </p>
      </div>

      {/* Cards Grid (4 ustunli qilingan) */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {courseLevels.map((course) => (
          <Card key={course.level} className="flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
            <CardHeader>
              <p className="font-semibold uppercase text-primary">{course.level}</p>
              <CardTitle className="text-xl">{course.focus}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-sm">{course.intensity}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="https://app.germanai.uz">Kursni tanlash</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}