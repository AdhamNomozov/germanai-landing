"use client"; // Animatsiya uchun bu direktiva kerak

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
import { SiteFooter } from "@/components/landing/site-footer";

import { motion } from "framer-motion";

// Har bir bo'limni animatsiya bilan o'rash uchun yordamchi komponent
function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AnimatedSection><DirectionsSection /></AnimatedSection>
        <AnimatedSection><AiTestSection /></AnimatedSection>
        <AnimatedSection><CoursesSection /></AnimatedSection>
        <AnimatedSection><ResultsSection /></AnimatedSection>
        <AnimatedSection><RoadmapSection /></AnimatedSection>
        <AnimatedSection><PricingSection /></AnimatedSection>
        <AnimatedSection><FaqSection /></AnimatedSection>
        <AnimatedSection><ContactSection /></AnimatedSection>
      </main>
      <SiteFooter />
    </>
  );
}