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
    <section className="py-16 border-y border-border">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-muted-foreground mb-10"
        >
          Trusted by leading financial institutions
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.4,
                delay: 0.1 + index * 0.05,
              }}
              className="h-12 w-32 flex items-center justify-center rounded-lg bg-secondary/50 border border-border"
            >
              <span className="text-xs text-muted-foreground font-medium">{logo.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
