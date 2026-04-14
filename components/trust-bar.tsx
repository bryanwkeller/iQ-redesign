"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const logos = [
  { name: "Major Bank" },
  { name: "Insurance Co" },
  { name: "Fintech Inc" },
  { name: "Credit Union" },
  { name: "Investment Firm" },
  { name: "Regional Bank" },
]

export function TrustBar() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" })

  return (
    <section className="py-20 border-y border-border/60">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60 mb-12"
        >
          Trusted by leading financial institutions
        </motion.p>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden"
        >
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-background to-transparent z-10" />

          <div
            className="flex gap-5"
            style={{ animation: "marquee 28s linear infinite", width: "max-content", willChange: "transform" }}
            onMouseEnter={e => (e.currentTarget.style.animationPlayState = "paused")}
            onMouseLeave={e => (e.currentTarget.style.animationPlayState = "running")}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 h-14 w-44 flex items-center justify-center rounded-xl bg-card border border-border/60 shadow-sm hover:border-primary/70 transition-colors duration-200 cursor-default"
              >
                <span className="text-xs font-medium tracking-wide text-muted-foreground">{logo.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
