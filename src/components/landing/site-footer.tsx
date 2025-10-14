// src/components/landing/site-footer.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Linkedin, Instagram } from "lucide-react";

// Telegram ikonkasini qo'lda yaratamiz, chunki lucide-react'da yo'q
const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 10l-4 4 6 6 4-16-18 7 4 2 2 6 3-4" />
  </svg>
);

const socialLinks = [
  { name: "Telegram", href: "https://t.me/germanai", icon: TelegramIcon },
  { name: "Instagram", href: "https://www.instagram.com/germanai", icon: Instagram },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/germanai", icon: Linkedin },
];

export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand va Ijtimoiy tarmoqlar */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg">
              <span aria-hidden className="inline-block h-2.5 w-2.5 rounded-full bg-primary" />
              GermanAI
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Nemis tili ta’limini sun’iy intellekt bilan yangi bosqichga olib chiqamiz.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((link) => (
                <Link key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary">
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigatsiya Linklari */}
          <div className="md:col-span-2">
            <h4 className="font-semibold">Mahsulot</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#courses" className="text-muted-foreground hover:text-primary">Kurslar</Link></li>
              <li><Link href="#pricing" className="text-muted-foreground hover:text-primary">Narxlar</Link></li>
              <li><Link href="#results" className="text-muted-foreground hover:text-primary">Sertifikat</Link></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="font-semibold">Kompaniya</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#faq" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary">Bog'lanish</Link></li>
            </ul>
          </div>

          {/* Yangiliklarga Obuna (Newsletter) */}
          <div className="md:col-span-4">
            <h4 className="font-semibold">Yangiliklardan xabardor bo'ling</h4>
            <p className="mt-4 text-sm text-muted-foreground">
              Eng so'nggi yangiliklar va maxsus takliflar uchun obuna bo'ling.
            </p>
            <form className="mt-4 flex gap-2">
              <Input type="email" placeholder="Email manzilingiz" className="flex-grow" />
              <Button type="submit">Obuna</Button>
            </form>
          </div>
        </div>

        {/* Yakuniy qism */}
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} GermanAI. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
}