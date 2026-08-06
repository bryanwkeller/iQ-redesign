"use client"

import { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, ArrowLeft, Play } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

type Slide = {
  category: string
  isWebinar?: boolean
  titleLead: string
  titleBold: string
  cta: string
  href: string
  gradient: string
  speaker?: { name: string; title: string; company: string; initials: string }
}

const slides: Slide[] = [
  {
    category: "On-Demand Webinar",
    isWebinar: true,
    titleLead: "Turn Your Financial Services Website Into ",
    titleBold: "A Revenue Engine With AI",
    cta: "Watch Now",
    href: "#",
    gradient: "radial-gradient(circle at 88% 120%, oklch(0.60 0.16 55.13 / 0.30), transparent 55%), linear-gradient(110deg, oklch(0.21 0.035 266) 0%, oklch(0.15 0.05 264) 60%, oklch(0.20 0.04 270) 100%)",
    speaker: { name: "Vishal Maru", title: "Vice President – Solutions", company: "iQuanti", initials: "VM" },
  },
  {
    category: "Insights",
    titleLead: "The Future of ",
    titleBold: "AI Search in Financial Services",
    cta: "Read More",
    href: "#",
    gradient: "radial-gradient(circle at 80% -15%, oklch(0.60 0.16 55.13 / 0.26), transparent 52%), linear-gradient(110deg, oklch(0.20 0.03 264) 0%, oklch(0.15 0.05 264) 62%, oklch(0.19 0.035 268) 100%)",
  },
  {
    category: "Case Study",
    titleLead: "How a Top US Bank Achieved ",
    titleBold: "152% Form-Fill Uplift",
    cta: "Read More",
    href: "#",
    gradient: "radial-gradient(circle at 100% 50%, oklch(0.60 0.16 55.13 / 0.24), transparent 50%), linear-gradient(110deg, oklch(0.21 0.03 262) 0%, oklch(0.15 0.05 264) 60%, oklch(0.20 0.035 268) 100%)",
  },
  {
    category: "Report",
    titleLead: "2026 ",
    titleBold: "BFSI Performance Marketing Benchmark",
    cta: "Get the Report",
    href: "#",
    gradient: "radial-gradient(circle at 90% 120%, oklch(0.60 0.16 55.13 / 0.30), transparent 55%), linear-gradient(110deg, oklch(0.22 0.035 268) 0%, oklch(0.15 0.05 264) 60%, oklch(0.21 0.04 272) 100%)",
  },
  {
    category: "Guide",
    titleLead: "The Enterprise Marketer's Guide to ",
    titleBold: "Agentic AI",
    cta: "Read More",
    href: "#",
    gradient: "radial-gradient(circle at 76% -12%, oklch(0.60 0.16 55.13 / 0.26), transparent 52%), linear-gradient(110deg, oklch(0.20 0.03 265) 0%, oklch(0.15 0.05 264) 62%, oklch(0.19 0.035 269) 100%)",
  },
]

const ROTATE_MS = 5500

const HALFTONE = {
  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.22) 1px, transparent 1.4px)",
  backgroundSize: "16px 16px",
  WebkitMaskImage: "linear-gradient(to left, black 0%, black 35%, transparent 70%)",
  maskImage: "linear-gradient(to left, black 0%, black 35%, transparent 70%)",
}

export function LatestNews() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + slides.length) % slides.length),
    []
  )

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), ROTATE_MS)
    return () => clearInterval(id)
  }, [paused])

  const slide = slides[index]

  return (
    <section id="news" className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mb-10 flex items-end justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-[oklch(0.46_0.01_85)]" />
              <span className="font-[family-name:var(--font-label)] text-sm font-bold tracking-wider uppercase text-[oklch(0.46_0.01_85)]">
                Latest at iQuanti
              </span>
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-foreground font-bold leading-tight">
              Insights, research & results
            </h2>
          </div>

          {/* Prev / next controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous"
              className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary/40 hover:text-primary cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next"
              className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary/40 hover:text-primary cursor-pointer"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </ScrollReveal>

        {/* Rotating banner */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-lg shadow-black/10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative min-h-[300px] md:min-h-[240px]"
              style={{ background: slide.gradient }}
            >
              {/* Halftone texture */}
              <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={HALFTONE} />

              {/* iQuanti wordmark */}
              <span className="absolute top-6 right-6 text-sm font-semibold tracking-wide text-white/90">
                iQuanti
              </span>

              <div className="relative h-full flex flex-col lg:flex-row lg:items-center gap-8 p-8 lg:p-12">
                {/* Left: pill + title */}
                <div className="flex-1 min-w-0">
                  {slide.isWebinar ? (
                    <span className="inline-flex items-center gap-2 mb-5 rounded-full bg-white/15 backdrop-blur-sm pl-1.5 pr-3 py-1.5">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                        <Play className="h-3 w-3 text-primary-foreground fill-current" />
                      </span>
                      <span className="font-[family-name:var(--font-label)] text-xs font-bold uppercase tracking-widest text-white">
                        {slide.category}
                      </span>
                    </span>
                  ) : (
                    <span className="font-[family-name:var(--font-label)] inline-flex items-center mb-5 rounded-full bg-white/15 backdrop-blur-sm px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                      {slide.category}
                    </span>
                  )}
                  <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl lg:text-4xl text-white leading-tight max-w-2xl">
                    <span className="font-normal text-white/90">{slide.titleLead}</span>
                    <span className="font-semibold">{slide.titleBold}</span>
                  </h3>
                </div>

                {/* Right: speaker + CTA */}
                <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end gap-5 shrink-0">
                  {slide.speaker && (
                    <div className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-sm pl-1.5 pr-5 py-1.5 border border-white/15">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/20 text-white font-semibold text-sm">
                        {slide.speaker.initials}
                      </span>
                      <span className="leading-tight">
                        <span className="block text-sm font-semibold text-white">{slide.speaker.name}</span>
                        <span className="block text-xs text-white/70">{slide.speaker.title}</span>
                        <span className="block text-xs font-medium text-primary">{slide.speaker.company}</span>
                      </span>
                    </div>
                  )}
                  <Link
                    href={slide.href}
                    className="font-[family-name:var(--font-label)] inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-transform hover:scale-105 group/cta whitespace-nowrap"
                  >
                    {slide.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {slides.map((s, i) => (
            <button
              key={s.titleBold}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to ${s.category}`}
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
