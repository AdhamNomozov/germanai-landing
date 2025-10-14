// src/app/page.tsx
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/landing/hero-section";
import { DirectionsSection } from "@/components/landing/directions-section";
import { AiTestSection } from "@/components/landing/ai-test-section";
import { CoursesSection } from "@/components/landing/courses-section";
import { ResultsSection } from "@/components/landing/results-section";
import { RoadmapSection } from "@/components/landing/roadmap-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { FaqSection } from "@/components/landing/faq-section";
import { ContactSection } from "@/components/landing/contact-section";
import { SiteFooter } from "@/components/landing/site-footer"; // <-- YANGI QATOR

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <DirectionsSection />
        <AiTestSection />
        <CoursesSection />
        <ResultsSection />
        <RoadmapSection />
        <PricingSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter /> {/* <-- YANGI QATOR */}
    </>
  );
}