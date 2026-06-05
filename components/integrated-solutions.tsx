"use client"

import { Badge } from "@/components/ui/badge"
import { HoverCard } from "@/components/hover-card"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"

const solutions = [
  {
    title: "Integrated Search",
    subtitle: "Presence",
    description: "Unified brand visibility: SEO + AIO + GEO for product journeys.",
    products: ["SIERA", "ALPS"],
  },
  {
    title: "Integrated Media",
    subtitle: "Amplify",
    description: "Total media performance: paid, owned, earned in one loop.",
    products: ["Omnichannel Paid Hub"],
  },
  {
    title: "Integrated Experience",
    subtitle: "Journey",
    description: "Total media performance: paid, owned, earned in one loop.",
    products: ["Adobe", "AEP", "Braze", "iQ.AI", "Uniphore", "LEAP"],
  },
  {
    title: "Integrated Enterprise",
    subtitle: "B2B",
    description: "ABX performance: GEO sentiment powering agentic account intelligence.",
    products: ["iQ.AI", "SIERA", "6SENSE", "PROFOUND"],
  },
  {
    title: "Integrated Tech",
    subtitle: "Core",
    description: "iQ.AI orchestration: embedded across Adobe AEP, SFM/DC, Braze & Uniphore.",
    products: ["iQ.AI Hub", "Full Stack"],
  },
]

export function IntegratedSolutions() {
  return (
    <section id="solutions" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium tracking-wider uppercase text-primary">
              Integrated Solution, Powered by iQ.AI
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="mb-16 max-w-2xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-foreground font-medium leading-tight mb-4">
            <span className="text-primary">IQ.Impact</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From intent to conversion, every solution connects, so your marketing intelligence compounds instead of siloes.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <StaggerItem key={solution.title}>
              <HoverCard className="p-6 h-full flex flex-col">
                <p className="text-xs font-medium uppercase tracking-wider text-primary mb-2">
                  {solution.subtitle}
                </p>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-foreground mb-3 transition-colors group-hover:text-primary">
                  {solution.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {solution.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {solution.products.map((product) => (
                    <Badge
                      key={product}
                      variant="outline"
                      className="text-xs transition-colors group-hover:border-primary/40 group-hover:bg-primary/5"
                    >
                      {product}
                    </Badge>
                  ))}
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
