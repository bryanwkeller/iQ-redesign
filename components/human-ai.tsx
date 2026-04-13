"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Users, Zap, TrendingUp } from "lucide-react"

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

// Animated circuit pattern
function CircuitPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
      <defs>
        <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.55 0.15 35 / 0.2)" />
          <stop offset="100%" stopColor="oklch(0.55 0.15 35 / 0.05)" />
        </linearGradient>
      </defs>
      {/* Circuit paths */}
      <motion.path
        d="M50,200 L150,200 L150,100 L250,100"
        stroke="url(#circuit-gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 2, delay: 0.5 }}
      />
      <motion.path
        d="M250,100 L250,150 L350,150"
        stroke="url(#circuit-gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 1 }}
      />
      <motion.path
        d="M150,200 L150,300 L300,300"
        stroke="url(#circuit-gradient)"
        strokeWidth="2"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 1.5 }}
      />
      {/* Junction points */}
      {[[150, 200], [150, 100], [250, 100], [150, 300]].map(([cx, cy], i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r="4"
          fill="oklch(0.55 0.15 35)"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.8 + i * 0.2 }}
        />
      ))}
    </svg>
  )
}

export function HumanAI() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" })

  return (
    <section id="ai-approach" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background circuit pattern */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-50 hidden lg:block">
        <CircuitPattern />
      </div>

      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
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

            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight font-medium">
              AI is only as powerful as the{" "}
              <span className="text-primary">people</span> behind it.
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Every agency claims AI capabilities. Few understand how to deploy them for financial services — where compliance matters, customer journeys are complex, and acquisition costs are high.
              </p>
              
              <p>
                Our proprietary platforms are built by marketers who&apos;ve spent nearly two decades in banking, insurance, and fintech. We don&apos;t just run algorithms — we know which signals matter and why.
              </p>
            </div>
          </motion.div>

          {/* Capabilities grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                {/* Animated corner accent */}
                <motion.div 
                  className="absolute top-0 right-0 w-12 h-12 overflow-hidden rounded-tr-xl"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="absolute top-0 right-0 w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
                  <div className="absolute top-0 right-0 w-8 h-px bg-gradient-to-l from-primary/50 to-transparent" />
                </motion.div>

                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <capability.icon className="w-5 h-5 text-primary" />
                </div>
                
                <h3 className="font-[family-name:var(--font-display)] text-lg font-medium text-foreground mb-1">
                  {capability.title}
                </h3>
                <p className="text-xs text-primary mb-3 uppercase tracking-wider">
                  {capability.subtitle}
                </p>
                <p className="text-sm text-muted-foreground">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
