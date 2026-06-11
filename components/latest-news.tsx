"use client"

import { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ArrowLeft, Video, Lightbulb, TrendingUp, FileText, BookOpen } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

const articles = [
  {
    category: "Webinar",
    icon: Video,
    title: "Turn Your Financial Services Website into a Revenue Engine with AI",
    description: "Learn how AI-powered optimization transforms financial services websites into measurable growth engines.",
    gradient: "linear-gradient(135deg, oklch(0.68 0.19 50) 0%, oklch(0.55 0.16 35) 100%)",
    href: "#",
  },
  {
    category: "Insights",
    icon: Lightbulb,
    title: "The Future of AI Search in Financial Services",
    description: "How GEO and LLM visibility are reshaping discovery for banks, insurers, and fintechs.",
    gradient: "linear-gradient(135deg, oklch(0.55 0.12 250) 0%, oklch(0.40 0.10 260) 100%)",
    href: "#",
  },
  {
    category: "Case Study",
    icon: TrendingUp,
    title: "How a Top US Bank Achieved 152% Form-Fill Uplift",
    description: "A strategic AI-led optimization program delivered significant conversion growth.",
    gradient: "linear-gradient(135deg, oklch(0.60 0.10 150) 0%, oklch(0.45 0.09 165) 100%)",
    href: "#",
  },
  {
    category: "Report",
    icon: FileText,
    title: "2026 BFSI Performance Marketing Benchmark",
    description: "Where banking, insurance, and fintech leaders are investing — and what's actually driving returns.",
    gradient: "linear-gradient(135deg, oklch(0.65 0.15 200) 0%, oklch(0.48 0.12 215) 100%)",
    href: "#",
  },
  {
    category: "Guide",
    icon: BookOpen,
    title: "The Enterprise Marketer's Guide to Agentic AI",
    description: "A practical framework for embedding agentic workflows across strategy, execution, and measurement.",
    gradient: "linear-gradient(135deg, oklch(0.72 0.08 85) 0%, oklch(0.55 0.10 70) 100%)",
    href: "#",
  },
]

const ROTATE_MS = 5500

export function LatestNews() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + articles.length) % articles.length),
    []
  )

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % articles.length), ROTATE_MS)
    return () => clearInterval(id)
  }, [paused])

  const article = articles[index]
  const Icon = article.icon

  return (
    <section id="insights" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mb-12 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[oklch(0.46_0.01_85)]" />
              <span className="text-sm font-medium tracking-wider uppercase text-[oklch(0.46_0.01_85)]">
                Latest at iQuanti
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-foreground font-medium leading-tight">
              Insights, research & results
            </h2>
          </div>

          {/* Prev / next controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous article"
              className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary/40 hover:text-primary cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next article"
              className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary/40 hover:text-primary cursor-pointer"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </ScrollReveal>

        <div
          className="relative rounded-2xl border border-border bg-card overflow-hidden shadow-sm"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid md:grid-cols-2"
            >
              {/* Visual panel */}
              <div
                className="relative min-h-[240px] md:min-h-[360px] flex flex-col justify-between p-8"
                style={{ background: article.gradient }}
              >
                <span className="inline-flex w-fit items-center text-xs font-semibold uppercase tracking-widest text-white/90 bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <Icon className="h-16 w-16 text-white/90" strokeWidth={1.5} />
              </div>

              {/* Content panel */}
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <h3 className="font-[family-name:var(--font-display)] text-2xl lg:text-3xl font-medium text-foreground leading-snug mb-4">
                  {article.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {article.description}
                </p>
                <Link
                  href={article.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors group/link w-fit"
                >
                  Read more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {articles.map((a, i) => (
            <button
              key={a.title}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to ${a.category}: ${a.title}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === index ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
