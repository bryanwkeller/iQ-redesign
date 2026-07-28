"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HoverCard } from "@/components/hover-card"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"

const featureTiles = [
  {
    title: "Will Your Bank Be Cited in AI Search?",
    tag: "DMFS Toronto 2026",
    gradient:
      "linear-gradient(135deg, oklch(0.55 0.08 257) 0%, oklch(0.35 0.06 264) 50%, oklch(0.25 0.04 264) 100%)",
  },
  {
    title: "Performance Marketing Report",
    edition: "Q2-2026 Edition",
    gradient:
      "linear-gradient(135deg, oklch(0.45 0.12 264) 0%, oklch(0.30 0.08 264) 60%, oklch(0.20 0.05 264) 100%)",
  },
]

const articles = [
  {
    title: "Turning Your Financial Services Website into a Revenue Engine with AI",
    cta: "Read More Blogs",
  },
  {
    date: "June 06, 2026",
    title: "Performance Marketing Report for Banking and Financial Services Q2 2026",
    description:
      "Explore the latest trends in AI Search, ChatGPT advertising, paid social, and consumer behavior impacting financial marketers.",
    cta: "Reports & Whitepapers",
  },
]

export function Insights() {
  return (
    <section id="insights" className="py-16 lg:py-24 bg-secondary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-foreground font-bold leading-tight mb-4">
            Insights
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover the latest news, ideas, and strategies that help marketers stay ahead in a rapidly evolving digital landscape.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {featureTiles.map((tile) => (
            <StaggerItem key={tile.title}>
              <HoverCard className="overflow-hidden h-full min-h-[220px]">
                <div
                  className="relative h-full min-h-[220px] p-8 flex flex-col justify-end"
                  style={{ background: tile.gradient }}
                >
                  <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_80%_20%,white_0%,transparent_50%)]" />
                  <div className="relative z-10">
                    {"tag" in tile && tile.tag && (
                      <span className="font-[family-name:var(--font-label)] inline-block mb-3 text-xs font-bold uppercase tracking-wider text-white/90 bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full">
                        {tile.tag}
                      </span>
                    )}
                    {"edition" in tile && tile.edition && (
                      <span className="font-[family-name:var(--font-label)] inline-block mb-3 text-xs font-bold uppercase tracking-wider text-white/90 bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full">
                        {tile.edition}
                      </span>
                    )}
                    <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white leading-tight">
                      {tile.title}
                    </h3>
                  </div>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start" staggerDelay={0.1}>
          {articles.map((article) => (
            <StaggerItem key={article.title}>
              <HoverCard className="overflow-hidden">
                <div className="p-6 lg:p-8">
                  {"date" in article && article.date && (
                    <p className="text-sm text-muted-foreground mb-2">{article.date}</p>
                  )}
                  <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold text-foreground leading-tight mb-3">
                    {article.title}
                  </h3>
                  {"description" in article && article.description && (
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {article.description}
                    </p>
                  )}
                  <Button
                    variant="default"
                    className="w-fit bg-primary text-primary-foreground hover:bg-primary/90 group"
                  >
                    {article.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
