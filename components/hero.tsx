"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// Animated network of drifting nodes connected by lines
function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let w = 0
    let h = 0

    interface Node {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
    }

    const nodes: Node[] = []

    const resize = () => {
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width = w
      canvas.height = h
    }

    resize()

    // Spread nodes across the canvas after size is known
    for (let i = 0; i < 6; i++) {
      nodes.push({
        x: w * 0.1 + Math.random() * w * 0.8,
        y: h * 0.1 + Math.random() * h * 0.8,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: 1.5 + Math.random() * 1.5,
      })
    }

    const ro = new ResizeObserver(() => {
      resize()
    })
    ro.observe(canvas)

    const MAX_SPEED = 0.55
    const MAX_DIST = 420
    const PAD = 60

    let animId: number

    const tick = () => {
      ctx.clearRect(0, 0, w, h)

      for (const node of nodes) {
        // Gentle random walk
        node.vx += (Math.random() - 0.5) * 0.02
        node.vy += (Math.random() - 0.5) * 0.02

        // Clamp speed
        const spd = Math.hypot(node.vx, node.vy)
        if (spd > MAX_SPEED) {
          node.vx = (node.vx / spd) * MAX_SPEED
          node.vy = (node.vy / spd) * MAX_SPEED
        }

        node.x += node.vx
        node.y += node.vy

        // Soft boundary repulsion
        if (node.x < PAD) node.vx += 0.04
        if (node.x > w - PAD) node.vx -= 0.04
        if (node.y < PAD) node.vy += 0.04
        if (node.y > h - PAD) node.vy -= 0.04
      }

      // Draw connecting lines with distance-based opacity
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < MAX_DIST) {
            const alpha = ((1 - dist / MAX_DIST) * 0.4).toFixed(3)
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `oklch(0.68 0.19 50 / ${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      for (const node of nodes) {
        // Soft glow
        const grd = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 3.5
        )
        grd.addColorStop(0, "oklch(0.68 0.19 50 / 0.08)")
        grd.addColorStop(1, "oklch(0.68 0.19 50 / 0)")
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 3.5, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()

        // Core dot
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = "oklch(0.68 0.19 50 / 0.35)"
        ctx.fill()
      }

      animId = requestAnimationFrame(tick)
    }

    animId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(animId)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}

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

const stats = [
  { value: 18, prefix: "", suffix: "+", label: "Years in Finance & Insurance" },
  { value: 50, prefix: "", suffix: "+", label: "Fortune 500 Clients" },
  { value: 2,  prefix: "$", suffix: "B+", label: "Revenue Driven" },
]

function CountUp({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1400
    const startTime = performance.now()
    const tick = (t: number) => {
      const progress = Math.min((t - startTime) / duration, 1)
      setCount(Math.round((1 - Math.pow(1 - progress, 3)) * to))
      if (progress < 1) requestAnimationFrame(tick)
    }
    const id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [isInView, to])

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated background elements */}
      <AnimatedGrid />
      <NetworkCanvas />
      
      {/* Gradient orb */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl"
        initial={{ opacity: 0, scale: 0.8, x: 0, y: 0 }}
        animate={{
          opacity: 1,
          scale: [1, 1.08, 0.97, 1.04, 1],
          x: [0, 30, -20, 15, 0],
          y: [0, -25, 20, -10, 0],
        }}
        transition={{
          opacity: { duration: 2, ease: "easeOut" },
          scale: { duration: 18, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" },
          x: { duration: 18, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" },
          y: { duration: 18, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" },
        }}
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
            The financial brands that{" "}
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
            We combine 18+ years of expertise across banking, insurance, and fintech with proprietary AI platforms to drive measurable acquisition growth for the world's leading financial brands.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a href="#contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group h-12 px-8">
                {"Let's Talk"}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a 
              href="#results" 
              className="text-foreground font-medium hover:text-primary transition-colors inline-flex items-center gap-2"
            >
              See Our Results
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 rounded-2xl border border-border/60 bg-background/70 backdrop-blur-sm overflow-hidden shadow-[0_8px_32px_oklch(0.68_0.19_50/0.14),0_2px_8px_rgba(0,0,0,0.06)]"
        >
          <div className="grid grid-cols-3 divide-x divide-border/60">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex flex-col items-center py-10 px-8 text-center cursor-default"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
              >
                <div className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-semibold text-primary">
                  <CountUp to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground mt-2 tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
