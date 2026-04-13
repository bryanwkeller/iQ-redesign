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
      "UniFirst's paid search program underwent a strategic transformation to support performance goals during a key business cycle.",
  },
  {
    category: "Digital Banking",
    title: "Laurel Road AI Optimization",
    stat: "152% uplift in form fills",
    description:
      "Laurel Road partnered with iQuanti to improve conversion performance using the AI-led LEAP optimization framework.",
  },
  {
    category: "Healthcare Finance",
    title: "Laurel Road Digital Experience",
    stat: "Reimagined banking UX",
    description:
      "A digital banking platform tailored for healthcare professionals with an experience custom-built for their unique needs.",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export function CaseStudies() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" })

  return (
    <section id="insights" className="py-24 lg:py-32 bg-white/[0.02] border-y border-white/5">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Success Stories
          </h2>
          <p className="text-lg text-muted-foreground">
            See how we&apos;ve helped our clients win at digital marketing.
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
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group p-8 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-primary/50 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              style={{ perspective: "1000px" }}
            >
              {/* Category Tag */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.3 }}
                className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4"
              >
                {study.category}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {study.title}
              </h3>

              {/* Stat */}
              <div className="text-2xl font-bold text-primary mb-4">
                {study.stat}
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {study.description}
              </p>

              {/* Link */}
              <Link
                href="#"
                className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors group/link"
              >
                Read More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
