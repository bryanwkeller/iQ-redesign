"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] tracking-tight mb-6 text-balance"
            >
              The financial services brands that outperform their category work with iQuanti.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed text-pretty"
            >
              We combine deep financial services expertise with proprietary AI to drive measurable acquisition growth for the world&apos;s leading banks, insurers, and fintechs.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6"
            >
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 group">
                {"Let's Talk"}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <a 
                href="#insights" 
                className="text-foreground font-medium hover:text-primary transition-colors inline-flex items-center gap-2"
              >
                See Our Work
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-foreground/5">
              <Image
                src="https://www.iquanti.com/wp-content/uploads/2026/01/iQuanti-group-photo.jpg"
                alt="iQuanti team collaborating together"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Subtle warm overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/5 to-transparent" />
            </div>
            
            {/* Decorative element */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-lg border border-border hidden lg:block"
            >
              <div className="text-3xl font-bold text-primary mb-1">18+</div>
              <div className="text-sm text-muted-foreground">Years in Financial Services</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
