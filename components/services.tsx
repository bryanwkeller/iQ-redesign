"use client"

import { motion, useInView } from "framer-motion"
import { TrendingUp, BarChart3, Palette, Settings2 } from "lucide-react"
import { useRef } from "react"

const services = [
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description:
      "Full-funnel strategy across paid and organic channels, optimized for measurable acquisition growth and ROI.",
  },
  {
    icon: BarChart3,
    title: "Marketing Analytics",
    description:
      "Advanced measurement frameworks that translate complex data into clear insights and actionable business decisions.",
  },
  {
    icon: Palette,
    title: "Creative & Experience",
    description:
      "Compelling content and digital experiences that engage your audience and drive conversions at scale.",
  },
  {
    icon: Settings2,
    title: "Marketing Technology",
    description:
      "Expert implementation and optimization of MarTech ecosystems to enhance performance and operational efficiency.",
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

const itemVariants = {
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

export function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" })

  return (
    <section id="solutions" className="py-24 lg:py-32 bg-secondary/30">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our integrated approach spans performance marketing, creative, analytics,
            and technology — built to drive growth for financial services brands.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group p-8 rounded-xl border border-border bg-card hover:shadow-lg hover:shadow-foreground/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary text-primary">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
