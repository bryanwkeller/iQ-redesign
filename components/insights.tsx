"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HoverCard } from "@/components/hover-card"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"

const articles = [
  {
    tag: "Playbook",
    title: "AI Visibility Is the New Competitive Advantage for Banks",
    description:
      "A new playbook for financial institutions: how to build AI-ready content, strengthen entity authority, earn trusted citations, and improve visibility in AI search.",
  },
  {
    tag: "Report",
    title: "Performance Marketing in the Age of AI: Q2 2026 Trends",
    description:
      "AI search, social media, video, and advertising insights from the Q2 2026 Performance Marketing Report to strengthen customer acquisition.",
  },
  {
    tag: "Perspective",
    title: "Follow the Consumer: AI and the New Rules of Marketing",
    description:
      "How AI is reshaping marketing as consumer behavior evolves — iQuanti's Arnab Sen and Jonathan Gagliano discuss the new rules of engagement.",
  },
]

export function Insights() {
  return (
    <section id="insights" className="py-16 lg:py-24 bg-[oklch(0.15_0.05_264)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="font-[family-name:var(--font-label)] text-sm font-bold tracking-wider uppercase text-primary">
              How We Think
            </span>
            <div className="h-px w-12 bg-primary" />
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight mb-4">
            Insights
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            We&apos;ve distilled our learnings from helping clients across industries maximize their performance marketing ROI.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <StaggerItem key={article.title}>
              <HoverCard dark className="h-full">
                <div className="p-6 lg:p-7 flex flex-col h-full">
                  <span className="font-[family-name:var(--font-label)] inline-flex w-fit mb-4 text-xs font-bold uppercase tracking-wider text-white/90 bg-white/10 border border-white/15 px-3 py-1 rounded-full">
                    {article.tag}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-lg md:text-xl font-bold text-white leading-snug mb-3">
                    {article.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-6">
                    {article.description}
                  </p>
                  <a
                    href="#"
                    className="mt-auto inline-flex items-center text-sm font-semibold text-primary hover:gap-2.5 gap-1.5 transition-all"
                  >
                    Read more
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
            className="border-white/25 bg-white/10 text-white backdrop-blur-sm hover:bg-white/15 hover:text-white group"
          >
            More Insights
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </ScrollReveal>
      </div>
    </section>
  )
}
