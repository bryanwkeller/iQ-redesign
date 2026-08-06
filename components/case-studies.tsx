"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HoverCard } from "@/components/hover-card"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"

const caseStudies = [
  {
    category: "Uniform Services",
    title: "How UniFirst Drove 3.7X More Leads with Smarter Paid Search Aligned to Business Demand",
    description:
      "UniFirst's paid search program underwent a strategic transformation to support performance goals during a key business cycle.",
  },
  {
    category: "Digital Banking",
    title: "152% Uplift in Form Fill Starts for Laurel Road Achieved Through AI-Led LEAP Optimization Framework",
    description:
      "Laurel Road, a digital banking platform and a subsidiary of KeyBank, partnered with iQuanti to improve conversion performance.",
  },
  {
    category: "Healthcare Finance",
    title: "How Laurel Road Reimagined Banking and Finance for Healthcare Professionals",
    description:
      "A digital experience tailor-made for healthcare professionals, built around the unique financial needs of the profession.",
  },
]

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[oklch(0.46_0.01_85)]" />
            <span className="font-[family-name:var(--font-label)] text-sm font-bold tracking-wider uppercase text-[oklch(0.46_0.01_85)]">
              Our Success Stories
            </span>
            <div className="h-px w-12 bg-[oklch(0.46_0.01_85)]" />
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-foreground font-bold leading-tight mb-4">
            Case Studies
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            See how we&apos;ve helped our clients win at digital marketing.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => (
            <StaggerItem key={study.title}>
              <HoverCard className="h-full">
                <div className="p-6 lg:p-7 flex flex-col h-full">
                  <span className="inline-flex w-fit px-3 py-1 rounded-full bg-secondary text-foreground text-xs font-semibold mb-4">
                    {study.category}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-lg md:text-xl font-bold text-foreground leading-snug mb-3">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {study.description}
                  </p>
                  <a
                    href="#"
                    className="mt-auto inline-flex items-center text-sm font-semibold text-primary-ink hover:gap-2.5 gap-1.5 transition-all"
                  >
                    Read case study
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.15} className="flex justify-center mt-10">
          <Button
            variant="outline"
            className="border-foreground/20 hover:bg-secondary hover:text-foreground group"
          >
            More Case Studies
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
