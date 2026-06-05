"use client"

import { Award, Shield, Trophy, Building2 } from "lucide-react"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"

const recognitions = [
  {
    icon: Building2,
    title: "Inc. 5000",
    description: "Named one of America's fastest-growing companies 10 consecutive times.",
  },
  {
    icon: Trophy,
    title: "Industry Awards",
    description: "Consistently recognized at the industry's most prestigious awards globally and across disciplines.",
  },
  {
    icon: Award,
    title: "Great Place To Work®",
    description: "Certified in the US and India reflecting the culture that attracts and retains the specialists our clients rely on.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Certified across data, privacy, AI governance, and healthcare compliance meeting the highest enterprise standards.",
  },
]

export function RecognitionTrust() {
  return (
    <section id="our-work" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-foreground font-medium leading-tight mb-6">
            Recognition & trust
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Earned recognition of our culture, processes, and performance across nearly two decades.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {recognitions.map((item) => (
            <StaggerItem key={item.title}>
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm h-full text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.2}>
          <div className="rounded-xl border border-border bg-secondary/50 p-6 text-center">
            <p className="text-sm font-semibold text-foreground mb-2">Certifications</p>
            <p className="text-sm text-muted-foreground">
              ISO 27001 · ISO 27701 · SOC 2 Type II · ISO 42001 · HIPAA Compliant
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
