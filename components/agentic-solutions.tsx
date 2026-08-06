"use client"

import { useState } from "react"
import { BarChart3, Megaphone, Cpu, Palette, ChevronDown, type LucideIcon } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { HoverCard } from "@/components/hover-card"
import { ScrollReveal } from "@/components/scroll-reveal"

type PoweredByItem = {
  name: string
  description: string
}

type LayerCard = {
  icon: LucideIcon
  eyebrow: string
  title: string
  summary: string
  description: string
  capabilities: string[]
  poweredBy: PoweredByItem[]
}

const intelligenceLayer: LayerCard = {
  icon: BarChart3,
  eyebrow: "Intelligence Layer",
  title: "Marketing Analytics",
  summary: "Turning data into a clear, measurable read on what's actually working.",
  description:
    "Enabling smarter, data-driven decisions through advanced measurement — MMM, MTA, and Incrementality — to quantify true marketing impact and effectiveness.",
  capabilities: [
    "Media Analytics",
    "Attribution Modeling",
    "Analytics Strategy",
    "Resource Augmentation",
  ],
  poweredBy: [
    {
      name: "iQ.Core",
      description: "iQ.AI orchestration embedded across your full data and analytics stack",
    },
  ],
}

const activationLayer: LayerCard = {
  icon: Megaphone,
  eyebrow: "Activation Layer",
  title: "Performance Marketing",
  summary: "Full-funnel media that maximizes ROI across every owned and paid channel.",
  description:
    "Full-funnel performance marketing that maximizes ROI across owned and paid channels powered by AI/Agentic AI and the predictive ALPS model for SEO, GEO, and LLMs.",
  capabilities: ["SEO", "GEO/AIO", "Paid Search", "Paid Social", "Programmatic", "ASO"],
  poweredBy: [
    {
      name: "iQ.Presence",
      description: "Unified brand visibility across SEO, AIO, and GEO",
    },
    {
      name: "iQ.Voice",
      description: "LLM sentiment and citation optimisation",
    },
    {
      name: "iQ.Amplify",
      description: "Total media performance across paid, owned, and earned",
    },
  ],
}

const enablementLayer: LayerCard = {
  icon: Cpu,
  eyebrow: "Enablement Layer",
  title: "Marketing Technology",
  summary: "MarTech and CDP infrastructure built to power personalization at scale.",
  description:
    "Unlocking MarTech value across content, CDPs, and personalization to drive targeted experiences and web & app development powered by Adobe, Salesforce, and scalable cloud partnerships.",
  capabilities: [
    "CMS & App Development",
    "CDP & Personalization",
    "Journey Orchestration",
    "Stack Strategy",
    "AI-led Personalization",
  ],
  poweredBy: [
    {
      name: "iQ.Journey",
      description: "Behaviour-based digital experiences built for regulated consumer journeys",
    },
    {
      name: "iQ.Commerce",
      description: "Agentic commerce at the consumer's decision moment",
    },
  ],
}

const experienceLayer: LayerCard = {
  icon: Palette,
  eyebrow: "Experience Layer",
  title: "Creative Design & Experience Optimization",
  summary: "AI-driven design and testing that turns more visitors into customers.",
  description:
    "AI/ML-driven content and experiences with LEAP that spans across strategy, design, and production, powered by advanced UX scoring, testing, and in-house expertise.",
  capabilities: [
    "CRO",
    "Website Design & Development",
    "Content Strategy",
    "Creative Production",
    "Landing Page Optimization",
  ],
  poweredBy: [
    {
      name: "iQ.Core",
      description: "iQ.AI orchestration across Adobe AEP, Salesforce MC, Braze, and Uniphore",
    },
    {
      name: "iQ.B2B",
      description: "ABX performance powering agentic account intelligence",
    },
    {
      name: "iQ.Shield",
      description: "Real-time brand, reputational, and risk intelligence",
    },
  ],
}

function LayerCardContent({ layer }: { layer: LayerCard }) {
  const Icon = layer.icon
  const [open, setOpen] = useState(false)

  return (
    <HoverCard className="h-full flex flex-col">
      <div className="p-6 lg:p-7 flex flex-col flex-1">
        <div className="flex items-start gap-4 mb-4">
          <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-lg bg-primary-ink/10 text-primary-ink">
            <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="font-[family-name:var(--font-label)] text-xs font-bold uppercase tracking-wider text-primary-ink mb-1">
              {layer.eyebrow}
            </p>
            <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold text-foreground leading-tight">
              {layer.title}
            </h3>
          </div>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{layer.summary}</p>

        <div className="flex flex-wrap gap-1.5 mb-5">
          {layer.capabilities.map((cap) => (
            <span
              key={cap}
              className="text-xs font-medium text-foreground/80 bg-secondary/80 border border-border/50 rounded-full px-2.5 py-1"
            >
              {cap}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-primary-ink hover:gap-2.5 transition-all self-start"
        >
          {open ? "Hide details" : "View details"}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t border-border/60">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {layer.description}
                </p>

                <div className="rounded-lg bg-secondary/80 border border-border/60 p-4">
                  <p className="font-[family-name:var(--font-label)] text-xs font-bold uppercase tracking-wider text-[oklch(0.46_0.01_85)] mb-3">
                    Powered by
                  </p>
                  <ul className="space-y-2">
                    {layer.poweredBy.map((item) => (
                      <li key={item.name} className="text-sm text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-foreground">{item.name}</span>
                        {", "}
                        {item.description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </HoverCard>
  )
}

function CenterImpactCard() {
  return (
    <div className="relative overflow-hidden rounded-xl h-full min-h-[360px] lg:min-h-[620px] flex flex-col items-center justify-center text-center p-8 lg:p-10 bg-gradient-to-br from-[oklch(0.15_0.05_264)] via-[oklch(0.22_0.08_264)] to-[oklch(0.42_0.14_55.13)] shadow-lg">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, oklch(0.7395 0.1828 55.13 / 0.35) 0%, transparent 50%), radial-gradient(circle at 80% 20%, oklch(0.55 0.12 264 / 0.4) 0%, transparent 45%)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 max-w-xs">
        <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          Agentic Solutions
        </h2>
        <p className="text-white/70 text-sm mb-3">Powered by</p>
        <div className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-white/10 backdrop-blur-sm px-6 py-3 mb-6">
          <span className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white">
            iQ.Impact
          </span>
        </div>
        <p className="text-white/75 text-sm md:text-base leading-relaxed">
          Where every signal, layer, and platform connects
        </p>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </div>
  )
}

export function AgenticSolutions() {
  return (
    <section id="solutions" className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mb-12 text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[oklch(0.46_0.01_85)]" />
            <span className="font-[family-name:var(--font-label)] text-sm font-bold tracking-wider uppercase text-[oklch(0.46_0.01_85)]">
              Agentic Solutions
            </span>
            <div className="h-px w-12 bg-[oklch(0.46_0.01_85)]" />
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-foreground font-bold leading-tight">
            Powered by <span className="text-primary-headline">iQ.Impact</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <ScrollReveal delay={0.05}>
              <LayerCardContent layer={intelligenceLayer} />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <LayerCardContent layer={enablementLayer} />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.1} className="order-1 lg:order-2">
            <CenterImpactCard />
          </ScrollReveal>

          <div className="flex flex-col gap-6 order-3">
            <ScrollReveal delay={0.05}>
              <LayerCardContent layer={activationLayer} />
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <LayerCardContent layer={experienceLayer} />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
