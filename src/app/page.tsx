import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { FaqItem } from "@/components/faq-item";
import { PricingCard } from "@/components/pricing-card";
import { SectionHeading } from "@/components/section-heading";
import { SiteHeader } from "@/components/site-header";
import {
  courseLevels,
  directions,
  faqs,
  pricingPlans,
  roadmapSteps
} from "@/lib/data";

const heroStats = [
  { value: "5 000+", label: "AI generatsiyalangan savollar" },
  { value: "92%", label: "Muvaffaqiyatli natija foizi" },
  { value: "24/7", label: "AI mentor yordami" }
];

export default function HomePage() {
  return (
    <main>
      <SiteHeader />
      <section id="hero" className="section-container relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-yellow/40 blur-3xl" />
          <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-brand-red/30 blur-3xl" />
        </div>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-yellow">
              GermanAI
            </span>
            <h1 className="text-4xl font-bold text-brand-white sm:text-5xl lg:text-6xl">
              Nemis tili imtihonlariga AI bilan tayyorgarlik qiling
            </h1>
            <p className="max-w-2xl text-lg text-gray-200">
              GermanAI.uz sizga sun'iy intellekt yordamida nemis tilini tez va samarali o'rganish imkonini beradi. Adaptiv testlar, shaxsiylashtirilgan kurslar va professional konsalting – barchasi bitta platformada.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="https://exam.germanai.uz/quick-test" variant="primary">
                5 daqiqada AI test
              </ButtonLink>
              <ButtonLink href="https://app.germanai.uz" variant="secondary">
                Platformaga o'tish
              </ButtonLink>
            </div>
            <dl className="grid gap-6 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                  <dt className="text-sm text-gray-300">{stat.label}</dt>
                  <dd className="mt-2 text-2xl font-semibold text-brand-yellow">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="absolute -left-6 top-6 hidden h-20 w-20 rounded-2xl border border-brand-yellow/40 lg:block" />
            <div className="absolute -right-6 bottom-6 hidden h-20 w-20 rounded-2xl border border-brand-red/40 lg:block" />
            <div className="relative w-full max-w-md overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/10 p-6 shadow-2xl">
              <div className="rounded-2xl border border-white/10 bg-black/80 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-brand-yellow">AI Speaking</span>
                  <span className="text-xs text-gray-400">demo</span>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-gray-300">
                  "Guten Tag! Bugungi mavzuda Heimat haqida gaplashamiz. Javobingizni yozing yoki ovozli yuboring, men grammatikangizni tahlil qilib beraman."
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow text-brand-black">
                    ▶
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-brand-white">AI Tutor Clara</p>
                    <p className="text-xs text-gray-400">24/7 monitoring</p>
                  </div>
                </div>
                <div className="mt-8 grid gap-3 text-xs text-gray-400">
                  <div className="flex items-center justify-between">
                    <span>Grammatika</span>
                    <span className="text-brand-yellow">95%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-full w-[95%] rounded-full bg-brand-yellow" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span>So'z boyligi</span>
                    <span className="text-brand-yellow">88%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-full w-[88%] rounded-full bg-brand-red" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="directions" className="section-container py-24">
        <SectionHeading eyebrow="Yo'nalishlar" title="GermanAI qanday yordam beradi?">
          Platformaning uch asosiy yo'nalishi bilan nemis tilini tezroq o'rganing.
        </SectionHeading>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {directions.map((direction) => (
            <div
              key={direction.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8"
            >
              <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/20 via-transparent to-brand-red/20" />
              </div>
              <h3 className="text-2xl font-semibold text-brand-white">{direction.title}</h3>
              <p className="mt-4 text-sm text-gray-300">{direction.description}</p>
              <Link
                href="https://go.germanai.uz/roadmap"
                className="mt-6 inline-flex items-center text-sm font-semibold text-brand-yellow"
              >
                Batafsil →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section id="ai-test" className="section-container py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="AI Test"
              title="5 daqiqalik diagnostika"
            >
              Quick-test orqali darajangizni bilib, shaxsiy yo'l xaritasini oling. Sun'iy intellekt javoblaringizni tahlil qilib, grammatik va leksik tavsiyalar beradi.
            </SectionHeading>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="https://exam.germanai.uz/quick-test">Testni boshlash</ButtonLink>
              <ButtonLink href="https://go.germanai.uz/roadmap" variant="secondary">
                Yo'l xaritasini ko'rish
              </ButtonLink>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
            <div className="space-y-4 text-sm text-gray-200">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-brand-yellow">AI Quick Test</span>
                <span className="text-xs text-gray-400">00:05:00</span>
              </div>
              <p>"Wie heißt du?" savoliga javobingizni yozing:</p>
              <div className="rounded-2xl border border-white/10 bg-black/70 p-4">
                <p className="text-brand-yellow">Ich heiße Dilshod. Ich komme aus Taschkent.</p>
              </div>
              <div className="rounded-2xl border border-brand-yellow/40 bg-brand-yellow/10 p-4">
                <p className="text-xs uppercase tracking-widest text-brand-yellow">AI tahlil</p>
                <p className="mt-2 text-sm text-gray-200">
                  Juda yaxshi! Keyingi bosqichda "Wo wohnst du?" savoliga 2-3 gapda javob bering.
                </p>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span className="inline-flex h-3 w-3 rounded-full bg-brand-yellow" />
                Adaptiv murakkablik
                <span className="inline-flex h-3 w-3 rounded-full bg-brand-red" />
                Real imtihon formati
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="courses" className="section-container py-24">
        <SectionHeading eyebrow="Kurslar" title="A1 dan B2 gacha AI kurslar">
          Har bir daraja uchun interaktiv darslar, speaking mashg'ulotlari va uy vazifalar.
        </SectionHeading>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {courseLevels.map((course) => (
            <div
              key={course.level}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl"
            >
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-yellow">
                  {course.level}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-brand-white">{course.focus}</h3>
                <p className="mt-4 text-sm text-gray-300">{course.intensity}</p>
              </div>
              <ButtonLink
                href="https://app.germanai.uz"
                variant="secondary"
                className="mt-8 w-full"
              >
                Kursni tanlash
              </ButtonLink>
            </div>
          ))}
        </div>
      </section>

      <section id="results" className="section-container py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Natijalar"
              title="Natijalar va sertifikat"
            >
              AI monitoring orqali har bir darsdan so'ng natijalarni kuzatib boring va QR kodli sertifikat bilan yutuqlaringizni tasdiqlang.
            </SectionHeading>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-brand-yellow" />
                Daromad qilgan ballaringiz, grammatik xatolar va talaffuz tahlili bitta dashtbordda.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-brand-yellow" />
                Mentorlar uchun sharing link va real vaqtli kuzatuv.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-2.5 w-2.5 flex-none rounded-full bg-brand-yellow" />
                Sertifikatni QR orqali skanerlab natijalarni tekshirish mumkin.
              </li>
            </ul>
            <ButtonLink href="https://go.germanai.uz/roadmap" variant="secondary">
              Namunaviy sertifikat
            </ButtonLink>
          </div>
          <div className="relative grid gap-6 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-10">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-brand-yellow">GermanAI Sertifikat</p>
              <p className="text-xs text-gray-400">ID: GA-2405</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/70 p-6">
              <p className="text-lg font-semibold text-brand-white">Dilshod M.</p>
              <p className="text-sm text-gray-400">B1 Kursi • 2024</p>
              <div className="mt-6 grid gap-4 text-sm text-gray-300">
                <div className="flex items-center justify-between">
                  <span>Umumiy ball</span>
                  <span className="text-brand-yellow">86 / 100</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Speaking</span>
                  <span className="text-brand-yellow">A-</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Writing</span>
                  <span className="text-brand-yellow">B+</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/60 p-6">
              <div>
                <p className="text-sm font-semibold text-brand-white">QR orqali tasdiqlash</p>
                <p className="mt-2 text-xs text-gray-400">Sertifikat haqiqiyligini 1 soniyada tekshiring.</p>
              </div>
              <Image
                src="/images/qr-placeholder.svg"
                alt="QR kod"
                width={120}
                height={120}
                className="h-24 w-24"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="section-container py-24">
        <SectionHeading eyebrow="Yo'l xaritasi" title="5 qadamda natija">
          GermanAI yo'l xaritasi bilan maqsadga tezroq yeting.
        </SectionHeading>
        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {roadmapSteps.map((step, index) => (
            <div
              key={step.title}
              className="relative flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-yellow font-semibold text-brand-black">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-brand-white">{step.title}</h3>
              <p className="text-sm text-gray-300">{step.text}</p>
              {index < roadmapSteps.length - 1 ? (
                <span className="absolute right-[-14px] top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-r from-brand-yellow/60 to-transparent lg:block" />
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="section-container py-24">
        <SectionHeading eyebrow="Narxlar" title="Mos obuna rejasini tanlang">
          Har bir bosqich uchun moslashuvchan tariflar. Istalgan payt yangilang yoki bekor qiling.
        </SectionHeading>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </section>

      <section id="faq" className="section-container py-24">
        <SectionHeading eyebrow="FAQ" title="Ko'p so'raladigan savollar">
          Savollaringizga tezkor javob oling. Yana savollar bormi? Biz bilan bog'laning.
        </SectionHeading>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {faqs.map((item) => (
            <FaqItem key={item.question} {...item} />
          ))}
        </div>
      </section>

      <section id="contact" className="section-container py-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Bog'lanish" title="GermanAI bilan bog'laning">
              Jamoamiz sizning maqsadingizni eshitishni kutmoqda. Formani to'ldiring va 24 soat ichida javob oling.
            </SectionHeading>
            <div className="mt-8 space-y-4 text-sm text-gray-300">
              <p>
                Telefon: <a href="tel:+998712000000" className="text-brand-yellow">+998 71 200 00 00</a>
              </p>
              <p>
                Email: <a href="mailto:hello@germanai.uz" className="text-brand-yellow">hello@germanai.uz</a>
              </p>
              <p>Manzil: Toshkent shahri, IT Park</p>
            </div>
          </div>
          <form className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-8">
            <div>
              <label htmlFor="name" className="text-sm font-medium text-gray-200">
                Ism
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Ismingiz"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-brand-white placeholder:text-gray-500 focus:border-brand-yellow focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-sm font-medium text-gray-200">
                Telefon
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+998"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-brand-white placeholder:text-gray-500 focus:border-brand-yellow focus:outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm font-medium text-gray-200">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="email@germanai.uz"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-brand-white placeholder:text-gray-500 focus:border-brand-yellow focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="goal" className="text-sm font-medium text-gray-200">
                Maqsad
              </label>
              <textarea
                id="goal"
                name="goal"
                rows={4}
                placeholder="Nemis tilini qaysi maqsad uchun o'rganmoqchisiz?"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/60 px-4 py-3 text-sm text-brand-white placeholder:text-gray-500 focus:border-brand-yellow focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-brand-yellow px-6 py-3 text-sm font-semibold text-brand-black transition-colors hover:bg-[#FFD633] focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-yellow"
            >
              Yuborish
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/90 py-12">
        <div className="section-container grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-brand-yellow">GermanAI</p>
            <p className="mt-3 text-sm text-gray-400">
              Nemis tili ta'limini sun'iy intellekt bilan yangi bosqichga olib chiqamiz.
            </p>
          </div>
          <div className="space-y-3 text-sm text-gray-300">
            <p>
              Email: <a href="mailto:support@germanai.uz" className="text-brand-yellow">support@germanai.uz</a>
            </p>
            <p>
              Telefon: <a href="tel:+998712000000" className="text-brand-yellow">+998 71 200 00 00</a>
            </p>
            <p>IT Park, Tashkent, Uzbekistan</p>
          </div>
          <div className="space-y-3 text-sm text-gray-300">
            <p>Social:</p>
            <div className="flex gap-3">
              <Link href="https://t.me/germanai" className="hover:text-brand-yellow">
                Telegram
              </Link>
              <Link href="https://www.instagram.com/germanai" className="hover:text-brand-yellow">
                Instagram
              </Link>
              <Link href="https://www.linkedin.com/company/germanai" className="hover:text-brand-yellow">
                LinkedIn
              </Link>
            </div>
            <p className="text-xs text-gray-500">© {new Date().getFullYear()} GermanAI. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
