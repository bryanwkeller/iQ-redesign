"use client"

import { motion, useInView } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"

const caseStudies = [
  {
    category: "Uniform Services",
    title: "UniFirst Paid Search Transformation",
    stat: "3.7x more leads",
    description:
      "A strategic transformation of UniFirst's paid search program delivered significant lead growth during a critical business cycle.",
  },
  {
    category: "Digital Banking",
    title: "Laurel Road AI Optimization",
    stat: "152% uplift in form fills",
    description:
      "Laurel Road partnered with iQuanti to improve conversion performance using our LEAP optimization framework.",
  },
  {
    category: "Healthcare Finance",
    title: "Laurel Road Digital Experience",
    stat: "Reimagined banking UX",
    description:
      "A digital banking platform tailored for healthcare professionals, built around their unique financial needs.",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export function CaseStudies() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" })

  return (
    <section id="insights" className="py-24 lg:py-32 border-y border-border">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Client Stories
          </h2>
          <p className="text-lg text-muted-foreground">
            How we help our clients achieve measurable growth.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.title}
              variants={cardVariants}
              className="group p-8 rounded-xl border border-border bg-card hover:shadow-lg hover:shadow-foreground/5 transition-all duration-300"
            >
              {/* Category Tag */}
              <div className="inline-flex px-3 py-1 rounded-full bg-secondary text-foreground text-xs font-medium mb-4">
                {study.category}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {study.title}
              </h3>

              {/* Stat */}
              <div className="text-2xl font-serif text-primary mb-4">
                {study.stat}
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {study.description}
              </p>

              {/* Link */}
              <Link
                href="#"
                className="inline-flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors group/link"
              >
                Read the story
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
