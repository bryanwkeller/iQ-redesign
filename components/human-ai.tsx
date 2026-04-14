"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Users, Zap, TrendingUp } from "lucide-react"
import Image from "next/image"

const capabilities = [
  {
    icon: Brain,
    title: "ALPS",
    subtitle: "Predictive SEO Platform",
    description: "AI-powered content optimization that identifies high-value opportunities before your competitors."
  },
  {
    icon: Zap,
    title: "LEAP",
    subtitle: "Conversion Optimization",
    description: "Machine learning driven A/B testing that continuously improves landing page performance."
  },
  {
    icon: TrendingUp,
    title: "AMAZE",
    subtitle: "Marketing Analytics",
    description: "Real-time attribution modeling that connects every touchpoint to revenue outcomes."
  },
  {
    icon: Users,
    title: "Expert Teams",
    subtitle: "Financial Services Specialists",
    description: "18+ years of domain expertise powering every algorithm and strategy we deploy."
  }
]

export function HumanAI() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" })

  return (
    <section id="ai-approach" className="py-24 lg:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        {/* Top row: copy + image */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-16 lg:mb-20">

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-medium tracking-wider uppercase text-primary">
                Our Approach
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight font-medium">
              AI is only as powerful as the{" "}
              <span className="text-primary">people</span> driving it.
            </h2>

            <div className="space-y-6 text-background/70 leading-relaxed">
              <p>
                Every agency claims AI capabilities. Few understand how to deploy them for financial services — where compliance matters, customer journeys are complex, and acquisition costs are high.
              </p>
              <p>
                Our proprietary platforms are built by marketers who&apos;ve spent nearly two decades in banking, insurance, and fintech. We don&apos;t just run algorithms — we know which signals matter and why.
              </p>
            </div>
          </motion.div>

          {/* Team photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
              <Image
                src="https://www.iquanti.com/wp-content/uploads/2026/01/IMG_9391.jpg"
                alt="iQuanti team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-foreground/40 via-transparent to-primary/20" />
              <motion.div
                className="absolute inset-x-0 h-px bg-primary/50"
                initial={{ top: "0%" }}
                animate={isInView ? { top: ["0%", "100%", "0%"] } : {}}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </div>
            {/* Corner brackets */}
            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg" />
            <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-lg" />
            <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-primary rounded-bl-lg" />
            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-primary rounded-br-lg" />
          </motion.div>
        </div>

        {/* Bottom row: 4 capability cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="group relative bg-background/5 border border-background/15 rounded-xl p-6 hover:border-primary/50 hover:bg-background/10 transition-all duration-300"
            >
              {/* Corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-12 h-12 overflow-hidden rounded-tr-xl"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-primary/60 to-transparent" />
                <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-primary/60 to-transparent" />
              </motion.div>

              <div className="w-10 h-10 rounded-lg bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                <capability.icon className="w-5 h-5 text-primary" />
              </div>

              <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-background mb-1">
                {capability.title}
              </h3>
              <p className="text-xs text-primary mb-3 uppercase tracking-wider">
                {capability.subtitle}
              </p>
              <p className="text-sm text-background/60">
                {capability.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
