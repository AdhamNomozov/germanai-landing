// src/components/landing/results-section.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Award, ShieldCheck } from "lucide-react";

const features = [
  "Daromad qilgan ballaringiz, grammatik xatolar va talaffuz tahlili bitta dashtbordda.",
  "Mentorlar uchun sharing link va real vaqtli kuzatuv.",
  "Sertifikatni QR orqali skanerlab natijalarni tekshirish mumkin.",
];

const scores = [
    { name: "Hören", score: "88" },
    { name: "Lesen", score: "92" },
    { name: "Schreiben", score: "85" },
    { name: "Sprechen", score: "90" },
];

export function ResultsSection() {
  return (
    <section id="results" className="container py-16 md:py-20">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        {/* Chap: Matn */}
        <div className="space-y-6">
          <div className="max-w-md">
            <p className="font-semibold uppercase text-primary">Natijalar</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Natijalar va Xalqaro Sertifikat
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

        {/* O'ng: PREMIUM SERTIFIKAT KARTASI */}
        <Card className="relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-slate-950 via-slate-900 to-black text-slate-100 shadow-2xl transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-1">
          <ShieldCheck className="absolute -bottom-10 -right-10 h-40 w-40 text-slate-700/20" />

          <CardContent className="relative z-10 p-6 md:p-8">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-primary/10 ring-2 ring-primary/50">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">SERTIFIKAT</p>
                  <p className="font-semibold text-slate-300">Certificate of Achievement</p>
                </div>
              </div>
              <p className="text-xs text-slate-500">ID: GA-2405-B1</p>
            </div>

            {/* O'quvchi ma'lumotlari */}
            <div className="my-8 text-center">
                <h3 className="text-4xl font-bold tracking-tight">Dilshod Murodov</h3>
                <p className="mt-1 text-slate-400">B1 Kursini muvaffaqiyatli yakunladi • 2024</p>
            </div>

            {/* Ballar (4 bo'lim) */}
            <div className="grid grid-cols-4 divide-x divide-slate-700 rounded-lg border border-slate-700 bg-slate-900/50 text-center">
              {scores.map(score => (
                <div key={score.name} className="p-3">
                  <dt className="text-xs text-slate-400">{score.name}</dt>
                  <dd className="text-xl font-semibold text-primary">{score.score}</dd>
                </div>
              ))}
            </div>

            {/* QR Kod va Imzo */}
            <div className="mt-8 flex items-end justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-white p-1">
                  <Image src="/images/qr-placeholder.svg" alt="QR kod" width={48} height={48} />
                </div>
                <div>
                    <p className="text-sm font-semibold">QR orqali tasdiqlash</p>
                    <p className="text-xs text-slate-400">Scan to Verify</p>
                </div>
              </div>
              <div className="text-center">
                <p className="font-serif italic text-lg text-slate-300">E. Buriyev</p>
                <p className="border-t border-slate-600 pt-1 text-xs text-slate-500">Direktor</p>
              </div>
            </div>

          </CardContent>
        </Card>
      </div>
    </section>
  );
}