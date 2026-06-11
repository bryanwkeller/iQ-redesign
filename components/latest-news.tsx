"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
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
    <section id="insights" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[oklch(0.46_0.01_85)]" />
            <span className="text-sm font-medium tracking-wider uppercase text-[oklch(0.46_0.01_85)]">
              Latest at iQuanti
            </span>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <StaggerItem key={article.title}>
              <motion.div
                className="group relative h-full flex flex-col p-6 rounded-xl border border-border bg-card cursor-default"
                whileHover={{ scale: 1.025, y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
                style={{ willChange: "transform" }}
              >
                <motion.span
                  className="pointer-events-none absolute inset-0 rounded-xl"
                  style={{ boxShadow: "inset 0 0 0 0px oklch(0.68 0.19 50)" }}
                  whileHover={{ boxShadow: "inset 0 0 0 1.5px oklch(0.68 0.19 50)" }}
                  transition={{ duration: 0.2 }}
                />
                <span className="inline-block w-fit text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-muted-foreground mb-4">
                  {article.category}
                </span>
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
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
