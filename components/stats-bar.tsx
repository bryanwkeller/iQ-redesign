"use client"

import { HoverCard } from "@/components/hover-card"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"

const stats = [
  {
    label: "Fortune 500",
    value: "45%",
    description: "of our client base are Fortune 500 enterprises",
  },
  {
    label: "Banking & Finance",
    value: "7/10",
    description: "of the largest US banks partner with us for growth",
  },
  {
    label: "Global Reach",
    value: "6",
    description: "markets served across North America, EMEA & APAC",
  },
  {
    label: "Proven Track Record",
    value: "18+",
    description: "years building enterprise growth programs",
  },
]

export function StatsBar() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-[oklch(0.15_0.03_260)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="max-w-2xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium tracking-wider uppercase text-primary">
              Trusted at scale
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-white font-medium leading-tight mb-6">
            The agency that enterprises trust
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            From Fortune 500 leaders to category-defining challengers, the most demanding organizations partner with iQuanti to turn signal into measurable growth.
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
