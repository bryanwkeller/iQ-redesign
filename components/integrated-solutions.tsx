"use client"

import { useState, type CSSProperties } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Megaphone, Route, Cpu, Building2, type LucideIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"

type Pillar = {
  icon: LucideIcon
  subtitle: string
  title: string
  description: string
  products: string[]
}

// Order maps to the honeycomb: [0,1] sit on top, [2,3,4] form the base row
// (index 3 — Integrated Tech — anchors the center as the foundation).
const pillars: Pillar[] = [
  {
    icon: Search,
    subtitle: "Presence",
    title: "Integrated Search",
    description: "Unified brand visibility across SEO, AIO, and GEO — orchestrated for every product journey.",
    products: ["SIERA", "ALPS"],
  },
  {
    icon: Megaphone,
    subtitle: "Amplify",
    title: "Integrated Media",
    description: "Paid, owned, and earned media working together in one connected performance loop.",
    products: ["Omnichannel Paid Hub"],
  },
  {
    icon: Route,
    subtitle: "Journey",
    title: "Integrated Experience",
    description: "End-to-end CX optimization powered by AI across enterprise martech platforms.",
    products: ["Adobe AEP", "Braze", "LEAP"],
  },
  {
    icon: Cpu,
    subtitle: "Core",
    title: "Integrated Tech",
    description: "iQ.AI orchestration embedded across Adobe AEP, SFM/DC, Braze & Uniphore.",
    products: ["iQ.AI Hub", "Full Stack"],
  },
  {
    icon: Building2,
    subtitle: "Enterprise",
    title: "Integrated B2B",
    description: "ABX performance: GEO sentiment powering agentic account intelligence at scale.",
    products: ["iQ.AI", "SIERA", "6SENSE"],
  },
]

const HEX_CLIP = "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
const GLOW =
  "drop-shadow(0 0 6px rgba(242, 107, 31, 0.18)) drop-shadow(0 0 14px rgba(242, 107, 31, 0.1))"
const NO_GLOW =
  "drop-shadow(0 0 0 rgba(242, 107, 31, 0)) drop-shadow(0 0 0 rgba(242, 107, 31, 0))"

function Hex({
  pillar,
  popped,
  onFocus,
}: {
  pillar: Pillar
  popped: boolean
  onFocus: () => void
}) {
  const Icon = pillar.icon
  return (
    // Glow lives on a non-clipped wrapper so the drop-shadow follows the hex
    // shape instead of being clipped by the hexagon's own clip-path.
    <motion.div
      style={{ zIndex: popped ? 10 : 1, filter: popped ? GLOW : NO_GLOW, transition: "filter 300ms ease" }}
      animate={{ scale: popped ? 1.06 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="relative"
    >
      <button
        type="button"
        onMouseEnter={onFocus}
        onFocus={onFocus}
        aria-pressed={popped}
        style={{ width: "var(--hex-w)", aspectRatio: "0.866", clipPath: HEX_CLIP }}
        className="flex flex-col items-center justify-center text-center px-4 cursor-pointer outline-none bg-secondary"
      >
        <Icon className="h-8 w-8 sm:h-9 sm:w-9 mb-2 text-primary" strokeWidth={1.75} aria-hidden="true" />
        <span className="font-[family-name:var(--font-label)] text-[11px] sm:text-xs font-normal uppercase tracking-widest mb-1 text-muted-foreground">
          {pillar.subtitle}
        </span>
        <span
          className={`font-[family-name:var(--font-display)] text-sm sm:text-base font-bold leading-tight transition-colors duration-300 ${
            popped ? "text-primary" : "text-foreground"
          }`}
        >
          {pillar.title}
        </span>
      </button>
    </motion.div>
  )
}

export function IntegratedSolutions() {
  const [active, setActive] = useState(0)
  const current = pillars[active]

  const top = [0, 1]
  const bottom = [2, 3, 4]

  return (
    <section id="solutions" className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mb-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[oklch(0.46_0.01_85)]" />
            <span className="font-[family-name:var(--font-label)] text-sm font-normal tracking-wider uppercase text-[oklch(0.46_0.01_85)]">
              Integrated Solution, Powered by iQ.AI
            </span>
            <div className="h-px w-12 bg-[oklch(0.46_0.01_85)]" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mb-14 max-w-2xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-foreground font-bold leading-tight mb-4">
            <span className="text-primary">IQ.Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From intent to conversion, every solution connects — so your marketing intelligence compounds instead of siloes.
          </p>
        </ScrollReveal>

        {/* Honeycomb cluster of 5 hexagons with breathing room */}
        <ScrollReveal delay={0.15}>
          <div
            className="flex flex-col items-center"
            style={{ "--hex-w": "clamp(7rem, 21vw, 11rem)" } as CSSProperties}
          >
            <div className="flex justify-center" style={{ gap: "calc(var(--hex-w) * 0.16)" }}>
              {top.map((i) => (
                <Hex key={pillars[i].title} pillar={pillars[i]} popped={active === i} onFocus={() => setActive(i)} />
              ))}
            </div>
            <div
              className="flex justify-center"
              style={{ gap: "calc(var(--hex-w) * 0.16)", marginTop: "calc(var(--hex-w) * -0.1)" }}
            >
              {bottom.map((i) => (
                <Hex key={pillars[i].title} pillar={pillars[i]} popped={active === i} onFocus={() => setActive(i)} />
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Detail panel for the focused pillar */}
        <div className="mt-12 min-h-[150px] max-w-2xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <p className="font-[family-name:var(--font-label)] text-xs font-normal uppercase tracking-widest text-[oklch(0.46_0.01_85)] mb-2">
                {current.subtitle}
              </p>
              <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-foreground mb-3">
                {current.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-5">{current.description}</p>
              <div className="flex flex-wrap justify-center gap-1.5">
                {current.products.map((p) => (
                  <Badge key={p} variant="outline" className="text-xs border-primary/40 bg-primary/5 text-primary">
                    {p}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
