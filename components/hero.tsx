"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

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
        node.vx += (Math.random() - 0.5) * 0.02
        node.vy += (Math.random() - 0.5) * 0.02

        const spd = Math.hypot(node.vx, node.vy)
        if (spd > MAX_SPEED) {
          node.vx = (node.vx / spd) * MAX_SPEED
          node.vy = (node.vy / spd) * MAX_SPEED
        }

        node.x += node.vx
        node.y += node.vy

        if (node.x < PAD) node.vx += 0.04
        if (node.x > w - PAD) node.vx -= 0.04
        if (node.y < PAD) node.vy += 0.04
        if (node.y > h - PAD) node.vy -= 0.04
      }

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
            ctx.strokeStyle = `oklch(0.7395 0.1828 55.13 / ${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      for (const node of nodes) {
        const grd = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 3.5
        )
        grd.addColorStop(0, "oklch(0.7395 0.1828 55.13 / 0.08)")
        grd.addColorStop(1, "oklch(0.7395 0.1828 55.13 / 0)")
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 3.5, 0, Math.PI * 2)
        ctx.fillStyle = grd
        ctx.fill()

        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = "oklch(0.7395 0.1828 55.13 / 0.35)"
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

function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
      <AnimatedGrid />
      <NetworkCanvas />

      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-br from-primary/20 to-transparent blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
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
        <div className="max-w-4xl text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-[oklch(0.46_0.01_85)]" />
            <span className="text-sm font-medium tracking-wider uppercase text-[oklch(0.46_0.01_85)]">
              AI-Native Growth Marketing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[1.05] tracking-tight mb-6 text-balance font-medium"
          >
            Turn Every Consumer Signal Into{" "}
            <span className="text-primary">Enterprise Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-12 leading-relaxed text-pretty"
          >
            Proprietary AI-Powered Tech. Deep industry expertise. A data science core built for enterprise complexity. iQuanti drives measurable acquisition growth for global brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a href="#solutions">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group h-12 px-8">
                Explore Solutions
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            <a href="#our-work">
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-8 border-border hover:bg-secondary hover:text-foreground"
              >
                Our Work
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
