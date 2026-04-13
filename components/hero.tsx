"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useRef, useEffect, useState } from "react"

const CYCLING_WORDS = ["AI", "Data", "Precision", "Performance"]

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])

  const [displayText, setDisplayText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentWord = CYCLING_WORDS[wordIndex]

    if (isPaused) {
      const pauseTimer = setTimeout(() => setIsPaused(false), 1800)
      return () => clearTimeout(pauseTimer)
    }

    const speed = isDeleting ? 60 : 100

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = currentWord.slice(0, displayText.length + 1)
        setDisplayText(next)
        if (next === currentWord) setIsPaused(true)
      } else {
        const next = currentWord.slice(0, displayText.length - 1)
        setDisplayText(next)
        if (next === "") {
          setIsDeleting(false)
          setWordIndex((i) => (i + 1) % CYCLING_WORDS.length)
        }
      }

      if (isPaused === false && displayText === currentWord) {
        setIsDeleting(true)
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [displayText, wordIndex, isDeleting, isPaused])

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(232,121,59,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(232,121,59,0.07)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <motion.div
        style={{ y, opacity, scale }}
        className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-primary"
            />
            <span className="text-sm text-primary font-medium">AI-Powered Performance Marketing</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6 text-balance"
          >
            Measurable Growth for the World&apos;s Leading Financial Brands
            <span className="block mt-2">
              — Powered by{" "}
              <span className="text-primary inline-flex items-center">
                {displayText}
                <span
                  className="ml-0.5 inline-block w-0.5 h-10 bg-primary align-middle"
                  style={{ animation: "blink 1s step-end infinite" }}
                />
              </span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty"
          >
            We partner with the world&apos;s leading banks, insurers, and fintechs to turn data and AI into
            measurable acquisition growth — with the domain expertise to know what actually moves the needle in financial services.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="group">
              Let&apos;s Talk
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-border hover:bg-secondary">
              See Our Work
            </Button>
          </motion.div>

          {/* Stats teaser */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 pt-16 border-t border-border"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { value: "18+", label: "Years in Financial Services Marketing" },
                { value: "90%", label: "Average Traffic Growth for Enterprise Clients" },
                { value: "$2B+", label: "In Client Revenue Influenced" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}
