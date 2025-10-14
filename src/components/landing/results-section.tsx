// src/components/landing/results-section.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Daromad qilgan ballaringiz, grammatik xatolar va talaffuz tahlili bitta dashtbordda.",
  "Mentorlar uchun sharing link va real vaqtli kuzatuv.",
  "Sertifikatni QR orqali skanerlab natijalarni tekshirish mumkin.",
];

export function ResultsSection() {
  return (
    <section id="results" className="container py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Chap: Matn */}
        <div className="space-y-6">
          <div className="max-w-md">
            <p className="font-semibold uppercase text-primary">Natijalar</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Natijalar va sertifikat
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              AI monitoring orqali har bir darsdan so‘ng natijalarni kuzatib boring va
              QR kodli sertifikat bilan yutuqlaringizni tasdiqlang.
            </p>
          </div>
          <ul className="space-y-4">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 flex-none text-primary" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          <Button variant="outline" asChild>
            <Link href="https://go.germanai.uz/roadmap">Namunaviy sertifikat</Link>
          </Button>
        </div>

        {/* O'ng: Sertifikat Kartalari */}
        <div className="grid gap-6">
          <Card className="bg-secondary">
            <CardHeader className="flex-row items-center justify-between">
              <CardTitle className="text-base text-primary">GermanAI Sertifikat</CardTitle>
              <p className="text-xs text-muted-foreground">ID: GA-2405</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold">Dilshod M.</p>
                <p className="text-sm text-muted-foreground">B1 Kursi • 2024</p>
              </div>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt>Umumiy ball</dt>
                  <dd className="font-semibold text-primary">86 / 100</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Speaking</dt>
                  <dd className="font-semibold text-primary">A-</dd>
                </div>
                <div className="flex justify-between">
                  <dt>Writing</dt>
                  <dd className="font-semibold text-primary">B+</dd>
                </div>
              </dl>
            </CardContent>
          </Card>
          <Card className="flex items-center justify-between p-6 bg-secondary">
            <div>
              <CardTitle className="text-base">QR orqali tasdiqlash</CardTitle>
              <CardContent className="p-0 mt-2">
                <p className="text-sm text-muted-foreground">
                  Sertifikat haqiqiyligini 1 soniyada tekshiring.
                </p>
              </CardContent>
            </div>
            <Image
              src="/images/qr-placeholder.svg"
              alt="QR kod"
              width={80}
              height={80}
              className="rounded-lg border"
            />
          </Card>
        </div>
      </div>
    </section>
  );
}