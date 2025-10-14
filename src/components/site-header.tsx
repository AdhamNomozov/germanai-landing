import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { label: "Yo'nalishlar", href: "#directions" },
  { label: "Kurslar", href: "#courses" },
  { label: "Narxlar", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Bog'lanish", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 font-bold">
          <span
            aria-hidden
            className="inline-block h-2.5 w-2.5 rounded-full bg-primary"
          />
          GermanAI
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button asChild>
              <Link href="https://exam.germanai.uz/quick-test">
                AI Quick Test
              </Link>
            </Button>
          </div>

          {/* Mobile Nav Trigger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menyuni ochish</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="/"
                    className="flex items-center gap-2 font-bold mb-4"
                  >
                     <span
                        aria-hidden
                        className="inline-block h-2.5 w-2.5 rounded-full bg-primary"
                      />
                    GermanAI
                  </Link>
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
                   <Button asChild className="mt-4">
                      <Link href="https://exam.germanai.uz/quick-test">
                        AI Quick Test
                      </Link>
                    </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}