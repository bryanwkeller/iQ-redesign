"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"

const pillars = [
  {
    num: "01",
    subtitle: "Presence",
    title: "Integrated Search",
    description: "Unified brand visibility across SEO, AIO, and GEO — orchestrated for every product journey.",
    products: ["SIERA", "ALPS"],
  },
  {
    num: "02",
    subtitle: "Amplify",
    title: "Integrated Media",
    description: "Paid, owned, and earned media working in one connected performance loop.",
    products: ["Omnichannel Paid Hub"],
  },
  {
    num: "03",
    subtitle: "Journey",
    title: "Integrated Experience",
    description: "End-to-end CX optimization powered by AI across enterprise martech platforms.",
    products: ["Adobe AEP", "Braze", "LEAP"],
  },
  {
    num: "04",
    subtitle: "Enterprise",
    title: "Integrated B2B",
    description: "ABX performance: GEO sentiment powering agentic account intelligence at scale.",
    products: ["iQ.AI", "SIERA", "6SENSE"],
  },
]

export function IntegratedSolutions() {
  return (
    <section id="solutions" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium tracking-wider uppercase text-[oklch(0.46_0.01_85)]">
              Integrated Solution, Powered by iQ.AI
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mb-16 max-w-2xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-foreground font-medium leading-tight mb-4">
            <span className="text-primary">IQ.Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From intent to conversion, every solution connects — so your marketing intelligence compounds instead of siloes.
          </p>
        </ScrollReveal>

        {/* 4 Pillars */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-border rounded-2xl overflow-hidden">
          {pillars.map((pillar, i) => (
            <StaggerItem key={pillar.num}>
              <motion.div
                className={`group relative h-full flex flex-col p-7 bg-card cursor-default transition-colors duration-300 hover:bg-primary/[0.04] ${
                  i < pillars.length - 1 ? "border-b lg:border-b-0 lg:border-r border-border" : ""
                }`}
                whileHover={{ transition: { duration: 0.2 } }}
              >
                {/* Orange top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary/80 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Number */}
                <span className="font-[family-name:var(--font-display)] text-5xl font-bold text-muted-foreground/20 leading-none mb-6 select-none transition-colors duration-300 group-hover:text-primary/20">
                  {pillar.num}
                </span>

                {/* Content */}
                <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.46_0.01_85)] mb-2">
                  {pillar.subtitle}
                </p>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-foreground mb-3 leading-snug transition-colors duration-300 group-hover:text-primary">
                  {pillar.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                  {pillar.description}
                </p>

                {/* Products */}
                <div className="flex flex-wrap gap-1.5">
                  {pillar.products.map((p) => (
                    <Badge
                      key={p}
                      variant="outline"
                      className="text-xs transition-colors group-hover:border-primary/40 group-hover:bg-primary/5 group-hover:text-primary"
                    >
                      {p}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Core infrastructure connector */}
        <ScrollReveal delay={0.3}>
          <div className="mt-4 px-7 py-4 rounded-xl border border-border bg-secondary/40 flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-primary/40" />
              <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Core</span>
            </div>
            <span className="text-sm font-medium text-foreground">Integrated Tech</span>
            <span className="text-sm text-muted-foreground">iQ.AI orchestration across Adobe AEP, SFM/DC, Braze & Uniphore</span>
            <div className="flex flex-wrap gap-1.5 ml-auto">
              {["iQ.AI Hub", "Full Stack"].map((p) => (
                <Badge key={p} variant="outline" className="text-xs">
                  {p}
                </Badge>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
