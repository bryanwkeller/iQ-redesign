"use client"

import { HoverCard } from "@/components/hover-card"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"

const stats = [
  {
    label: "Credit Card",
    value: "7/10",
    description: "of the leading US credit card issuers empowered to grow",
  },
  {
    label: "Banking",
    value: "7/10",
    description: "of the largest US banks partner with us for growth marketing",
  },
  {
    label: "6 Markets",
    value: "6",
    description: "Trusted by leading US insurance providers",
  },
  {
    label: "18+ years",
    value: "18+",
    description: "Dedicated BFSI practice",
  },
]

export function StatsBar() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[oklch(0.15_0.03_260)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-white font-medium leading-tight mb-6">
            The agency that financial services trusts above all others
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Orchestrating AI, data, and industry expertise to meet your customers in their moment, and convert that signal into a measurable business impact.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <HoverCard borderAnimation dark className="p-6 h-full">
                <p className="text-sm font-medium text-primary uppercase tracking-wide mb-3">
                  {stat.label}
                </p>
                <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-white mb-3">
                  {stat.value}
                </p>
                <p className="text-sm text-white/55 leading-relaxed">
                  {stat.description}
                </p>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
