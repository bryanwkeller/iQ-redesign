"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/scroll-reveal"

const pillars = [
  {
    name: "AI for Visibility",
    description:
      "Unifying SEO, AIO, and GEO into one orchestrated system so your brand is present and authoritative across every search surface, from traditional engines to LLMs.",
  },
  {
    name: "AI for Performance",
    description:
      "Predictive gap scoring, AI-led paid media planning, and creative intelligence identifying the highest-value opportunities and activating against them faster than competitors can react.",
  },
  {
    name: "AI for Experience",
    description:
      "End-to-end AI-driven UX scoring, test ideation, and conversion optimization turning consumer behavior signals into measurable lift across every regulated journey.",
  },
]

export function AiNative() {
  return (
    <section id="products" className="py-16 lg:py-24 bg-[oklch(0.15_0.05_264)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="font-[family-name:var(--font-label)] text-sm font-bold tracking-wider uppercase text-primary">
                AI-native approach
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight mb-6">
              AI runs through everything we do
            </h2>
            <p className="text-lg text-white/60 leading-relaxed">
              Not bolted on as afterthought. Our proprietary platforms and AI-first workflows are embedded across strategy, execution and measurement.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {pillars.map((pillar) => (
                <motion.div
                  key={pillar.name}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  <AccordionItem
                    value={pillar.name}
                    className="border border-white/10 rounded-xl px-4 bg-white/[0.06] shadow-sm transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.09] data-[state=open]:border-primary/50 data-[state=open]:bg-white/[0.09]"
                  >
                    <AccordionTrigger className="hover:no-underline py-5 [&[data-state=open]>svg]:text-primary [&>svg]:text-white/40">
                      <span className="font-[family-name:var(--font-display)] text-lg font-bold text-white text-left">
                        {pillar.name}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-white/55 leading-relaxed pb-5">
                      {pillar.description}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
