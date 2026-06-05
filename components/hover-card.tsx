"use client"

import { motion } from "framer-motion"
import { useRef, useState, useEffect, type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface HoverCardProps {
  children: ReactNode
  className?: string
  /** Animated orange border stroke on hover — use sparingly */
  borderAnimation?: boolean
}

export function HoverCard({ children, className, borderAnimation = false }: HoverCardProps) {
  const [hovered, setHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState({ w: 0, h: 0 })

  useEffect(() => {
    if (!borderAnimation) return
    const el = cardRef.current
    if (!el) return
    const ro = new ResizeObserver(() => {
      setSize({ w: el.offsetWidth, h: el.offsetHeight })
    })
    ro.observe(el)
    setSize({ w: el.offsetWidth, h: el.offsetHeight })
    return () => ro.disconnect()
  }, [borderAnimation])

  return (
    <motion.div
      ref={cardRef}
      className={cn(
        "group relative rounded-xl border border-border bg-card cursor-default shadow-sm",
        "transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10",
        className
      )}
      whileHover={{
        scale: 1.025,
        y: -4,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {borderAnimation && size.w > 0 && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-20"
          style={{ overflow: "visible" }}
        >
          <motion.rect
            x="1"
            y="1"
            width={size.w - 2}
            height={size.h - 2}
            rx="11"
            fill="none"
            stroke="oklch(0.68 0.19 50)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: hovered ? 1 : 0 }}
            transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
          />
        </svg>
      )}
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  )
}
