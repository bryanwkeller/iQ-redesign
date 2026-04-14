"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function TeamGlimpse() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" })

  return (
    <section className="py-24 lg:py-32 bg-foreground text-background relative overflow-hidden">
      {/* Tech pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-medium tracking-wider uppercase text-primary">
                The Team
              </span>
            </div>

            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight font-medium">
              Built by marketers,{" "}
              <span className="text-primary">powered by engineers.</span>
            </h2>
            
            <p className="text-lg text-background/70 mb-8 leading-relaxed max-w-lg">
              400+ specialists across performance marketing, data science, and engineering — unified by a single goal: driving measurable growth for financial services brands.
            </p>

            <div className="grid grid-cols-3 gap-8 mb-10">
              <div>
                <div className="font-[family-name:var(--font-display)] text-3xl font-medium text-primary">400+</div>
                <div className="text-sm text-background/60 mt-1">Team Members</div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-display)] text-3xl font-medium text-primary">4</div>
                <div className="text-sm text-background/60 mt-1">Global Offices</div>
              </div>
              <div>
                <div className="font-[family-name:var(--font-display)] text-3xl font-medium text-primary">85%</div>
                <div className="text-sm text-background/60 mt-1">Client Retention</div>
              </div>
            </div>

            <a 
              href="/careers" 
              className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
            >
              Join Our Team
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* Single team photo with tech overlay */}
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
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-foreground/40 via-transparent to-primary/20" />
              
              {/* Scan line animation */}
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
      </div>
    </section>
  )
}
