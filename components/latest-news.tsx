"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { HoverCard } from "@/components/hover-card"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"

const articles = [
  {
    category: "Webinar",
    title: "Turn Your Financial Services Website into a Revenue Engine with AI",
    description: "Learn how AI-powered optimization transforms financial services websites into measurable growth engines.",
    href: "#",
  },
  {
    category: "Insights",
    title: "The Future of AI Search in Financial Services",
    description: "How GEO and LLM visibility are reshaping discovery for banks, insurers, and fintechs.",
    href: "#",
  },
  {
    category: "Case Study",
    title: "How a Top US Bank Achieved 152% Form-Fill Uplift",
    description: "A strategic AI-led optimization program delivered significant conversion growth.",
    href: "#",
  },
]

export function LatestNews() {
  return (
    <section id="insights" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium tracking-wider uppercase text-primary">
              Latest at iQuanti
            </span>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <StaggerItem key={article.title}>
              <HoverCard className="h-full flex flex-col p-6">
                <Badge
                  variant="secondary"
                  className="w-fit mb-4 transition-colors group-hover:bg-primary/10 group-hover:text-primary"
                >
                  {article.category}
                </Badge>
                <h3 className="font-[family-name:var(--font-display)] text-xl font-medium text-foreground leading-snug mb-3">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-6">
                  {article.description}
                </p>
                <Link
                  href={article.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors group/link"
                >
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
