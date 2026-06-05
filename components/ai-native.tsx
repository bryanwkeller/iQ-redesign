"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/scroll-reveal"

const products = [
  {
    name: "SIERA",
    category: "Experience & CRO",
    description:
      "AI-powered multi surface search intelligence, expanding beyond traditional SEO to integrate, optimize, and orchestrate the full owned media ecosystem including GEO and LLM visibility.",
  },
  {
    name: "LEAP",
    category: "SEO Intelligence",
    description:
      "End-to-end AI-driven system spanning UX scoring → competitive benchmarking → recommendations → test ideation → prioritization → prototyping. BFSI intelligence layer built-in.",
  },
  {
    name: "ALPS",
    category: "Creative Intelligence",
    description:
      "Predictive SEO intelligence and gap scoring. Identifies and prioritizes growth opportunities before competitors act purpose-built for financial services search complexity.",
  },
  {
    name: "CreativeiQ",
    category: "Agentic AI",
    description:
      "AI-powered system that audits creatives, enhanced by a BFSI intelligence layer for industry-specific insights accelerating ad production and quality at scale.",
  },
  {
    name: "Agentic Suite",
    category: "Paid Media",
    description:
      "Agentic AI embedded across iQuanti's full solution suite from automated content review and intelligent keyword classification to cross-channel performance orchestration.",
  },
  {
    name: "Omnichannel Paid Hub",
    category: "Paid Media",
    description:
      "AI-led planning, activation, measurement, and optimization with outcome-driven execution at its core maximizing ROI across Google, Meta, and programmatic.",
  },
]

export function AiNative() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-medium tracking-wider uppercase text-primary">
                AI-native approach
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-foreground font-medium leading-tight mb-6">
              AI runs through everything we do
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Not bolted on as afterthought. Our proprietary platforms and AI-first workflows are embedded across strategy, execution and measurement.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {products.map((product) => (
                <motion.div
                  key={product.name}
                  whileHover={{ x: 4, transition: { duration: 0.2 } }}
                >
                  <AccordionItem
                    value={product.name}
                    className="border border-border rounded-xl px-4 bg-card shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5 data-[state=open]:border-primary/50 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/10"
                  >
                    <AccordionTrigger className="hover:no-underline py-5 [&[data-state=open]>svg]:text-primary">
                      <div className="flex flex-col items-start gap-2 text-left">
                        <span className="font-[family-name:var(--font-display)] text-lg font-medium text-foreground transition-colors group-hover:text-primary">
                          {product.name}
                        </span>
                        <Badge
                          variant="secondary"
                          className="text-xs font-normal transition-colors group-hover:bg-primary/10 group-hover:text-primary"
                        >
                          {product.category}
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                      {product.description}
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
