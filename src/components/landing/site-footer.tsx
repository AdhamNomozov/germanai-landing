// src/components/landing/site-footer.tsx
import Link from "next/link";

const socialLinks = [
  { name: "Telegram", href: "https://t.me/germanai" },
  { name: "Instagram", href: "https://www.instagram.com/germanai" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/germanai" },
];

export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-3">
            <p className="text-lg font-semibold text-primary">GermanAI</p>
            <p className="text-sm text-muted-foreground">
              Nemis tili ta’limini sun’iy intellekt bilan yangi bosqichga olib chiqamiz.
            </p>
          </div>
          {/* Kontaktlar */}
          <div className="space-y-3 text-sm">
            <p className="font-semibold text-foreground">Kontaktlar</p>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="mailto:support@germanai.uz" className="hover:text-primary">support@germanai.uz</a></li>
              <li><a href="tel:+998712000000" className="hover:text-primary">+998 71 200 00 00</a></li>
              <li>IT Park, Tashkent, Uzbekistan</li>
            </ul>
          </div>
          {/* Ijtimoiy tarmoqlar */}
          <div className="space-y-3 text-sm">
            <p className="font-semibold text-foreground">Ijtimoiy tarmoqlar</p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-muted-foreground hover:text-primary">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} GermanAI. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
}