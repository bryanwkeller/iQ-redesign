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
    category: "Search Intelligence",
    description: "Multi-surface search intelligence — SEO, GEO & LLM visibility in one engine.",
  },
  {
    name: "LEAP",
    category: "Experience & CRO",
    description: "UX scoring to prototyping, end to end — with BFSI intelligence built in.",
  },
  {
    name: "ALPS",
    category: "SEO Intelligence",
    description: "Predictive SEO gap scoring that surfaces growth opportunities first.",
  },
  {
    name: "CreativeiQ",
    category: "Creative Intelligence",
    description: "AI creative auditing that accelerates ad production at scale.",
  },
  {
    name: "Agentic Suite",
    category: "Agentic AI",
    description: "Agentic AI embedded across the full iQuanti solution stack.",
  },
  {
    name: "Omnichannel Paid Hub",
    category: "Paid Media",
    description: "AI-led paid planning, activation & optimization across every channel.",
  },
]

export function AiNative() {
  return (
    <section id="products" className="py-24 lg:py-32 bg-[oklch(0.15_0.03_260)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-medium tracking-wider uppercase text-primary">
                AI-native approach
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-white font-medium leading-tight mb-6">
              AI runs through everything we do
            </h2>
            <p className="text-lg text-white/60 leading-relaxed">
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
                    className="border border-white/10 rounded-xl px-4 bg-white/[0.06] shadow-sm transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.09] data-[state=open]:border-primary/50 data-[state=open]:bg-white/[0.09]"
                  >
                    <AccordionTrigger className="hover:no-underline py-5 [&[data-state=open]>svg]:text-primary [&>svg]:text-white/40">
                      <div className="flex flex-col items-start gap-2 text-left">
                        <span className="font-[family-name:var(--font-display)] text-lg font-medium text-white">
                          {product.name}
                        </span>
                        <Badge
                          variant="secondary"
                          className="text-xs font-normal bg-white/10 text-white/60 border-0 hover:bg-white/10"
                        >
                          {product.category}
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-white/55 leading-relaxed pb-5">
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
