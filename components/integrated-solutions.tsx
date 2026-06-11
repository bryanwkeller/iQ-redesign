"use client"

import { Search, Megaphone, Route, Building2, Cpu } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { HoverCard } from "@/components/hover-card"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"

const pillars = [
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
    icon: Building2,
    subtitle: "Enterprise",
    title: "Integrated B2B",
    description: "ABX performance: GEO sentiment powering agentic account intelligence at scale.",
    products: ["iQ.AI", "SIERA", "6SENSE"],
  },
  {
    icon: Cpu,
    subtitle: "Core",
    title: "Integrated Tech",
    description: "iQ.AI orchestration embedded across Adobe AEP, SFM/DC, Braze & Uniphore.",
    products: ["iQ.AI Hub", "Full Stack"],
  },
]

export function IntegratedSolutions() {
  return (
    <section id="solutions" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mb-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[oklch(0.46_0.01_85)]" />
            <span className="text-sm font-medium tracking-wider uppercase text-[oklch(0.46_0.01_85)]">
              Integrated Solution, Powered by iQ.AI
            </span>
            <div className="h-px w-12 bg-[oklch(0.46_0.01_85)]" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mb-16 max-w-2xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-foreground font-medium leading-tight mb-4">
            <span className="text-primary">IQ.Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From intent to conversion, every solution connects — so your marketing intelligence compounds instead of siloes.
          </p>
        </ScrollReveal>

        {/* 3 / 2 centered grid with iconography */}
        <StaggerContainer className="flex flex-wrap justify-center gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <StaggerItem
                key={pillar.title}
                className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <HoverCard className="p-8 h-full flex flex-col items-center text-center">
                  {/* Icon medallion */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-5 transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                    <Icon className="h-8 w-8" strokeWidth={1.75} aria-hidden="true" />
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.46_0.01_85)] mb-2">
                    {pillar.subtitle}
                  </p>
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-foreground mb-3 leading-snug transition-colors duration-300 group-hover:text-primary">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                    {pillar.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-1.5">
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
                </HoverCard>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
