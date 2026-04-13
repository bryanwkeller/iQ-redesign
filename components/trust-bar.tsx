"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useAnimatedCounter } from "@/hooks/use-animated-counter"

const clientStats = [
  { value: 3, label: "Top US credit card companies" },
  { value: 14, label: "US banks & financial services" },
  { value: 6, label: "Top US insurance providers" },
  { value: 5, label: "Digital-first US fintech companies" },
  { value: 8, label: "Leading US consumer brands" },
]

function AnimatedStat({ value, label, index, isInView }: { value: number; label: string; index: number; isInView: boolean }) {
  const count = useAnimatedCounter(value, isInView, 1500 + index * 200)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center text-center p-4"
    >
      <motion.span
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{
          duration: 0.4,
          delay: index * 0.1 + 0.2,
          type: "spring",
          stiffness: 200,
        }}
        className="text-4xl font-bold text-primary mb-2"
      >
        {count}
      </motion.span>
      <span className="text-xs text-muted-foreground leading-tight">
        {label}
      </span>
    </motion.div>
  )
}

export function TrustBar() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px" })

  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.02]">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-muted-foreground mb-12"
        >
          Top brands trust us to drive their growth goals
        </motion.p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {clientStats.map((stat, index) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              label={stat.label}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
