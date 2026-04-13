"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// Animated grid lines component
function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Horizontal lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          style={{ top: `${(i + 1) * 16}%` }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
        />
      ))}
      {/* Vertical lines */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent"
          style={{ left: `${(i + 1) * 11}%` }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 + i * 0.08, ease: "easeOut" }}
        />
      ))}
    </div>
  )
}

// Floating data nodes
function DataNodes() {
  const nodes = [
    { x: "15%", y: "25%", delay: 0, size: 8 },
    { x: "85%", y: "20%", delay: 0.3, size: 6 },
    { x: "75%", y: "70%", delay: 0.6, size: 10 },
    { x: "25%", y: "75%", delay: 0.9, size: 7 },
    { x: "60%", y: "40%", delay: 1.2, size: 5 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-primary/60"
          style={{ 
            left: node.x, 
            top: node.y, 
            width: node.size, 
            height: node.size 
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.2, 1], 
            opacity: [0, 1, 0.8],
          }}
          transition={{ 
            duration: 0.8, 
            delay: node.delay,
            ease: "easeOut"
          }}
        />
      ))}
      {/* Animated connection lines */}
      <svg className="absolute inset-0 w-full h-full">
        <motion.line
          x1="15%" y1="25%" x2="60%" y2="40%"
          stroke="oklch(0.55 0.15 35 / 0.3)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        />
        <motion.line
          x1="60%" y1="40%" x2="85%" y2="20%"
          stroke="oklch(0.55 0.15 35 / 0.3)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 1.8 }}
        />
        <motion.line
          x1="60%" y1="40%" x2="75%" y2="70%"
          stroke="oklch(0.55 0.15 35 / 0.3)"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 2.1 }}
        />
      </svg>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated background elements */}
      <AnimatedGrid />
      <DataNodes />
      
      {/* Gradient orb */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24 w-full relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium tracking-wider uppercase text-primary">
              Performance Marketing + AI
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[1.05] tracking-tight mb-6 text-balance font-medium"
          >
            Financial services brands that{" "}
            <span className="text-primary">outperform</span>{" "}
            work with iQuanti.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed text-pretty"
          >
            We combine 18+ years of financial services expertise with proprietary AI platforms to drive measurable acquisition growth for Fortune 500 banks, insurers, and fintechs.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6"
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group h-12 px-8">
              {"Let's Talk"}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <a 
              href="#results" 
              className="text-foreground font-medium hover:text-primary transition-colors inline-flex items-center gap-2"
            >
              See Our Results
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 pt-10 border-t border-border/50 grid grid-cols-3 gap-8 max-w-xl"
          >
            <div>
              <div className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-medium text-foreground">18+</div>
              <div className="text-sm text-muted-foreground mt-1">Years in FinServ</div>
            </div>
            <div>
              <div className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-medium text-foreground">50+</div>
              <div className="text-sm text-muted-foreground mt-1">Fortune 500 Clients</div>
            </div>
            <div>
              <div className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-medium text-foreground">$2B+</div>
              <div className="text-sm text-muted-foreground mt-1">Revenue Driven</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
