// src/components/landing/roadmap-section.tsx
"use client"; // Animatsiya uchun bu direktiva kerak

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { roadmapSteps } from "@/lib/data";
import { motion } from "framer-motion";

// Animatsiya uchun variantlar
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Har bir element 0.2 soniya kechikish bilan chiqadi
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function RoadmapSection() {
  return (
    <section id="roadmap" className="container py-16 md:py-20">
      {/* Section Heading */}
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <p className="font-semibold uppercase text-primary">Yo'l xaritasi</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
          5 qadamda natija
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          GermanAI yo‘l xaritasi bilan maqsadga tezroq yeting.
        </p>
      </div>

      {/* Dinamik Timeline */}
      <motion.div
        className="relative grid grid-cols-1 gap-12 md:grid-cols-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Bog'lovchi chiziq */}
        <div className="absolute left-0 top-6 hidden h-0.5 w-full bg-border md:block" />

        {roadmapSteps.map((step, index) => (
          <motion.div key={step.title} className="group relative" variants={itemVariants}>
            {/* Raqam va nuqta */}
            <div className="absolute -top-1 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-2 border-border bg-background transition-colors duration-300 group-hover:border-primary">
              <span className="text-xl font-bold text-muted-foreground transition-colors duration-300 group-hover:text-primary">
                {index + 1}
              </span>
            </div>

            {/* Kontent kartasi */}
            <Card className="mt-[60px] h-full text-center transition-all duration-300 group-hover:border-primary/50 group-hover:bg-secondary group-hover:shadow-lg group-hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{step.text}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}