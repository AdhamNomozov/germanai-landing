// src/components/landing/faq-section.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";
import { HelpCircle } from "lucide-react";

export function FaqSection() {
  // Savollarni ikki qismga bo'lamiz
  const half = Math.ceil(faqs.length / 2);
  const faqsCol1 = faqs.slice(0, half);
  const faqsCol2 = faqs.slice(half);

  return (
    <section id="faq" className="container py-20 md:py-28">
      {/* Section Heading */}
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <div className="mx-auto mb-4 inline-flex rounded-full bg-secondary p-3">
          <HelpCircle className="h-6 w-6 text-secondary-foreground" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ko‘p so‘raladigan savollar
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Savollaringizga tezkor javob oling. Yana savollar bormi? Biz bilan bog‘laning.
        </p>
      </div>

      {/* Accordion Grid (2 ustunli) */}
      <div className="mx-auto grid max-w-6xl gap-x-8 gap-y-4 md:grid-cols-2">
        {/* Birinchi ustun */}
        <Accordion type="single" collapsible className="w-full">
          {faqsCol1.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Ikkinchi ustun */}
        <Accordion type="single" collapsible className="w-full">
          {faqsCol2.map((faq, i) => (
            <AccordionItem key={i + half} value={`item-${i + half}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}