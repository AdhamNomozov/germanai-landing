// src/components/landing/contact-section.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin } from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    text: "+998 71 200 00 00",
    href: "tel:+998712000000",
  },
  {
    icon: Mail,
    text: "hello@germanai.uz",
    href: "mailto:hello@germanai.uz",
  },
  {
    icon: MapPin,
    text: "Toshkent shahri, IT Park",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="container py-20 md:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        {/* Chap: Matn va Kontakt ma'lumotlari */}
        <div className="space-y-6">
          <div className="max-w-md">
            <p className="font-semibold uppercase text-primary">Bog'lanish</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              GermanAI bilan bog'laning
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Jamoamiz sizning maqsadingizni eshitishni kutmoqda. Formani to‘ldiring va 24 soat ichida javob oling.
            </p>
          </div>
          <div className="space-y-4">
            {contactDetails.map((detail) => (
              <div key={detail.text} className="flex items-center gap-4">
                <detail.icon className="h-5 w-5 flex-none text-primary" />
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="transition-colors hover:text-primary"
                  >
                    {detail.text}
                  </a>
                ) : (
                  <span>{detail.text}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* O'ng: Forma */}
        <Card className="p-6 md:p-8">
          <CardContent className="p-0">
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Ism</Label>
                  <Input id="name" placeholder="Ismingiz" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input id="phone" type="tel" placeholder="+998" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="email@germanai.uz" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="goal">Maqsad</Label>
                <Textarea id="goal" placeholder="Nemis tilini qaysi maqsad uchun o'rganmoqchisiz?" />
              </div>
              <Button type="submit" className="w-full">Yuborish</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}