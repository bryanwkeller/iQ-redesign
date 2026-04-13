"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const leaders = [
  {
    name: "Leadership Team",
    title: "Strategic Direction",
    image: "https://www.iquanti.com/wp-content/uploads/2025/08/LEADERSHIP-TEAM-PIC_04-AUG_01.jpg",
  },
  {
    name: "Leadership Team",
    title: "Client Partnerships",
    image: "https://www.iquanti.com/wp-content/uploads/2025/08/LEADERSHIP-TEAM-PIC_04-AUG_02.jpg",
  },
  {
    name: "Leadership Team",
    title: "Innovation & AI",
    image: "https://www.iquanti.com/wp-content/uploads/2025/08/LEADERSHIP-TEAM-PIC_04-AUG_03.jpg",
  },
]

export function TeamGlimpse() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" })

  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            The iQuantians
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our team brings together performance marketers, data scientists, engineers, and strategists — united by a shared commitment to measurable outcomes for our clients.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.image}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-xl overflow-hidden mb-4 shadow-md">
                <Image
                  src={leader.image}
                  alt={`${leader.name} - ${leader.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{leader.name}</h3>
              <p className="text-sm text-muted-foreground">{leader.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Team photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="aspect-[21/9] rounded-2xl overflow-hidden shadow-lg relative">
            <Image
              src="https://www.iquanti.com/wp-content/uploads/2026/01/IMG_9391.jpg"
              alt="iQuanti team"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
