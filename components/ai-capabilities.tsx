"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Sparkles, Zap, Target } from "lucide-react"
import { useRef } from "react"

const capabilities = [
  {
    icon: Sparkles,
    title: "AI for Transformation",
    description:
      "Elevating strategic impact with tools like ALPS for predictive SEO and LEAP for landing page experience optimization.",
    features: [
      "ALPS: Predictive SEO platform that identifies content opportunities before competitors",
      "LEAP: AI-driven conversion optimization that personalizes experiences in real-time",
    ],
  },
  {
    icon: Zap,
    title: "AI for Efficiency",
    description:
      "Automating complex, manual tasks such as content review, chat-based search, dashboard insights, and keyword classification.",
    features: [
      "Automated campaign builds and optimization at scale",
      "AI-powered reporting that surfaces insights, not just data",
    ],
  },
  {
    icon: Target,
    title: "AI for Effectiveness",
    description:
      "Improving results with smarter decision-making from media allocation modeling to CRO test recommendations.",
    features: [
      "Predictive performance modeling for proactive optimization",
      "AI-driven media allocation that responds to market signals",
    ],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export function AICapabilities() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(contentRef, { once: true, margin: "-10% 0px -10% 0px" })

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])

  return (
    <section
      ref={sectionRef}
      id="ai-approach"
      className="py-24 lg:py-32 bg-white/[0.02] border-y border-white/5 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      </motion.div>

      <div ref={contentRef} className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 text-primary" />
            </motion.div>
            <span className="text-sm text-primary font-medium">AI Center of Excellence</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How We Put AI to Work in Marketing
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI Center of Excellence is reimagining how marketing works—by transforming 
            strategy, driving operational efficiency, and maximizing performance across channels.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {capabilities.map((capability) => {
            const Icon = capability.icon
            return (
              <motion.div
                key={capability.title}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="p-8 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-primary/30 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-6"
                >
                  <Icon className="h-6 w-6" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {capability.description}
                </p>
                <ul className="space-y-3">
                  {capability.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.8 + featureIndex * 0.1 }}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
