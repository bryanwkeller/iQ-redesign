"use client"

import { motion, useInView } from "framer-motion"
import { useAnimatedCounter } from "@/hooks/use-animated-counter"
import { useRef } from "react"

const stats = [
  {
    value: 90,
    suffix: "%",
    label: "Traffic growth for a Fortune 500 financial services content hub",
  },
  {
    value: 152,
    suffix: "%",
    label: "Form-fill uplift via AI-led optimization",
  },
  {
    value: 30,
    suffix: "%",
    label: "Online card acquisition growth for a top US bank",
  },
]

function AnimatedStat({
  value,
  suffix,
  label,
  isVisible,
  index,
}: {
  value: number
  suffix: string
  label: string
  isVisible: boolean
  index: number
}) {
  const count = useAnimatedCounter(value, isVisible, 2000)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="text-center"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={isVisible ? { scale: 1 } : {}}
        transition={{
          duration: 0.5,
          delay: index * 0.15 + 0.2,
          type: "spring",
          stiffness: 200,
        }}
        className="text-5xl md:text-6xl lg:text-7xl font-serif text-primary mb-4"
      >
        {count}
        {suffix}
      </motion.div>
      <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
        {label}
      </p>
    </motion.div>
  )
}

export function Results() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" })

  return (
    <section id="results" className="py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Results That Speak for Themselves
          </h2>
          <p className="text-lg text-muted-foreground">
            Real outcomes from engagements with leading financial institutions.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              isVisible={isInView}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
