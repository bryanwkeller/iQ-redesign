"use client"

import { motion, useInView } from "framer-motion"
import { TrendingUp, BarChart3, Palette, Settings2 } from "lucide-react"
import { useRef } from "react"

const services = [
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description:
      "Full-funnel strategy across owned and paid channels, with predictive AI models optimizing every touchpoint for maximum ROI.",
  },
  {
    icon: BarChart3,
    title: "Marketing Analytics",
    description:
      "Advanced measurement frameworks and modeling capabilities that translate data into clear, actionable insights and business impact.",
  },
  {
    icon: Palette,
    title: "Creative & Experience",
    description:
      "AI-enabled content and design that engages, converts, and scales across formats like video, graphics, social, and more.",
  },
  {
    icon: Settings2,
    title: "Marketing Technology",
    description:
      "Expert optimization and activation across MarTech ecosystems to enhance performance, personalization, and operational efficiency.",
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

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
}

export function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" })

  return (
    <section id="solutions" className="py-24 lg:py-32 relative">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Scroll-triggered line */}
        <div className="relative h-px mb-16 overflow-hidden">
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ originX: 0 }}
            className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/20 to-transparent"
          />
        </div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI-Powered Digital Marketing Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            Our integrated approach spans performance marketing, creative, analytics,
            and technology built to unleash growth, optimize ROI, and meet the demands
            of today&apos;s digital-first customer.
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
                className="group p-8 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-primary/50 hover:bg-white/[0.05] hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
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