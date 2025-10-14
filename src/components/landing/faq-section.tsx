// src/components/landing/faq-section.tsx
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { faqs } from "@/lib/data";
import { MessagesSquare } from "lucide-react";

export function FaqSection() {
  return (
    <section id="faq" className="container py-16 md:py-20">
      <Card className="overflow-hidden bg-secondary">
        <div className="grid lg:grid-cols-[1fr_2fr]">
          {/* Chap: Kontekst Bloki */}
          <div className="flex flex-col justify-center bg-muted/50 p-8">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <MessagesSquare className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              Savollaringiz bormi?
            </h2>
            <p className="mt-4 max-w-sm text-muted-foreground">
              Eng ko'p beriladigan savollarga javoblar shu yerda. Agar javob topa olmasangiz, biz bilan bog'laning.
            </p>
            <Button asChild className="mt-6 w-fit">
              <Link href="#contact">Bog'lanish</Link>
            </Button>
          </div>

          {/* O'ng: Akkordeon */}
          <div className="p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Card>
    </section>
  );
}