"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function HumanAI() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" })

  return (
    <section id="ai-approach" className="py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://www.iquanti.com/wp-content/uploads/2026/01/IMG_9221.jpg"
                alt="iQuanti team working together"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              AI is only as powerful as the people behind it.
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Every marketing agency talks about AI now. What they rarely mention is that AI without domain expertise is just expensive guesswork. Our team brings 18+ years of financial services marketing experience to every engagement — we know what works in banking, insurance, and fintech because we&apos;ve been doing it since before AI was a buzzword.
              </p>
              
              <p>
                That expertise is what powers our proprietary platforms. ALPS, our predictive SEO system, doesn&apos;t just identify content opportunities — it identifies the right opportunities for financial services brands, built on years of understanding what actually drives qualified traffic in regulated industries.
              </p>
              
              <p>
                LEAP, our conversion optimization framework, applies AI-driven testing to landing pages with a deep understanding of financial services customer behavior. The result? We drive card acquisition for top US banks, not because we have the best algorithms, but because we know how to deploy them.
              </p>
            </div>

            {/* Tool callouts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <div className="px-4 py-2 rounded-full bg-secondary border border-border">
                <span className="text-sm font-medium text-foreground">ALPS</span>
                <span className="text-sm text-muted-foreground ml-2">Predictive SEO</span>
              </div>
              <div className="px-4 py-2 rounded-full bg-secondary border border-border">
                <span className="text-sm font-medium text-foreground">LEAP</span>
                <span className="text-sm text-muted-foreground ml-2">Conversion Optimization</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
