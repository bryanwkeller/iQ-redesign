"use client"

import { HoverCard } from "@/components/hover-card"
import { StaggerContainer, StaggerItem } from "@/components/scroll-reveal"

const stats = [
  {
    eyebrow: "Credit Card",
    headline: "7/10",
    description: "of the leading US credit card issuers empowered to grow",
  },
  {
    eyebrow: "Banking",
    headline: "7/10",
    description: "of the largest US banks partner with us for growth marketing",
  },
  {
    headline: "6 Markets",
    description: "Trusted by leading US insurance providers",
  },
  {
    headline: "P&C · Auto · Dental",
    description: "Trusted by leading US insurance providers",
  },
  {
    headline: "BFSI CoE",
    description: "In-house Center of excellence",
  },
  {
    headline: "18+ Years",
    description: "Dedicated BFSI practice",
  },
]

export function StatsBar() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-[oklch(0.15_0.03_260)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Heading block fills the offset gap (cols 1–2, row 1) */}
          <StaggerItem className="sm:col-span-2 flex flex-col justify-center pr-0 lg:pr-6 mb-4 sm:mb-0">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-white font-medium leading-tight mb-5">
              The agency that enterprises trust
            </h2>
            <p className="text-lg text-white/60 leading-relaxed">
              Orchestrating AI, data, and industry expertise to meet your customers in their moment, and convert that signal into a measurable business impact.
            </p>
          </StaggerItem>

          {stats.map((stat) => (
            <StaggerItem key={stat.headline + stat.description}>
              <HoverCard borderAnimation dark className="p-6 h-full">
                {stat.eyebrow && (
                  <p className="text-sm font-medium text-primary uppercase tracking-wide mb-2">
                    {stat.eyebrow}
                  </p>
                )}
                <p className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-semibold text-white mb-3 leading-tight">
                  {stat.headline}
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
