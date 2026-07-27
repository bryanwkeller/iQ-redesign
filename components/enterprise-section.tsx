"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts"
import { ScrollReveal } from "@/components/scroll-reveal"

const fortuneData = [
  { name: "Mid-Market", value: 25, color: "oklch(0.6048 0.2166 257.21)" },
  { name: "Fortune 500", value: 45, color: "oklch(0.7395 0.1828 55.13)" },
  { name: "Fortune 100", value: 30, color: "oklch(0.72 0.08 85)" },
]

const sizeData = [
  { name: "Enterprise", value: 55, color: "oklch(0.7395 0.1828 55.13)" },
  { name: "Mid-Market", value: 30, color: "oklch(0.6048 0.2166 257.21)" },
  { name: "Growth", value: 15, color: "oklch(0.72 0.08 85)" },
]

const industryData = [
  { name: "Banking & Finance", value: 66, color: "oklch(0.7395 0.1828 55.13)" },
  { name: "Retail & Mfg", value: 15, color: "oklch(0.6048 0.2166 257.21)" },
  { name: "Insurance", value: 8, color: "oklch(0.65 0.15 200)" },
  { name: "IT Services", value: 5, color: "oklch(0.72 0.08 85)" },
  { name: "Healthcare", value: 6, color: "oklch(0.60 0.10 150)" },
]

/** Mounts children only once scrolled into view so entry animations are always perceivable. */
function AnimatedChart({ children, height = 260 }: { children: ReactNode; height?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  return (
    <div ref={ref} style={{ minHeight: height }} className="flex items-center w-full">
      {inView ? children : null}
    </div>
  )
}

function FortuneChart() {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <BarChart data={fortuneData} margin={{ top: 28, right: 8, left: -16, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
        <XAxis
          dataKey="name"
          tick={{ fill: "rgba(255,255,255,0.6)", fontSize: 12 }}
          tickLine={false}
          axisLine={{ stroke: "rgba(255,255,255,0.15)" }}
        />
        <YAxis
          domain={[0, 50]}
          ticks={[0, 10, 20, 30, 40, 50]}
          tick={{ fill: "rgba(255,255,255,0.35)", fontSize: 11 }}
          tickLine={false}
          axisLine={false}
        />
        <Bar dataKey="value" radius={[6, 6, 0, 0]} isAnimationActive animationDuration={800} animationEasing="ease-out" maxBarSize={64}>
          {fortuneData.map((entry, i) => (
            <Cell key={i} fill={entry.color} />
          ))}
          <LabelList
            dataKey="value"
            position="top"
            formatter={(v: number) => `${v}%`}
            fill="#fff"
            fontSize={13}
            fontWeight={600}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

function SizeChart() {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={sizeData} layout="vertical" margin={{ top: 8, right: 44, left: 8, bottom: 8 }}>
        <XAxis type="number" hide domain={[0, 60]} />
        <YAxis
          type="category"
          dataKey="name"
          tick={{ fill: "rgba(255,255,255,0.75)", fontSize: 14, fontWeight: 500 }}
          tickLine={false}
          axisLine={false}
          width={104}
        />
        <Bar
          dataKey="value"
          radius={[0, 6, 6, 0]}
          barSize={24}
          isAnimationActive
          animationDuration={800}
          animationEasing="ease-out"
        >
          {sizeData.map((entry, i) => (
            <Cell key={i} fill={entry.color} />
          ))}
          <LabelList
            dataKey="value"
            position="right"
            formatter={(v: number) => `${v}%`}
            fill="rgba(255,255,255,0.9)"
            fontSize={13}
            fontWeight={600}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

function IndustryList() {
  return (
    <div className="w-full space-y-5 py-1">
      {industryData.map((item, i) => (
        <div key={item.name}>
          <div className="flex items-center justify-between gap-3 mb-2">
            <span className="text-white font-medium">{item.name}</span>
            <span className="text-white font-semibold tabular-nums">{item.value}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ backgroundColor: item.color }}
              initial={{ width: 0 }}
              animate={{ width: `${item.value}%` }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

function DataCard({
  eyebrow,
  title,
  caption,
  height,
  children,
}: {
  eyebrow: string
  title: string
  caption: string
  height?: number
  children: ReactNode
}) {
  return (
    <div className="h-full rounded-xl border border-white/10 bg-white/[0.05] shadow-sm p-6 lg:p-7 flex flex-col">
      <p className="font-[family-name:var(--font-label)] text-xs font-normal uppercase tracking-widest text-primary mb-3">{eyebrow}</p>
      <h3 className="font-[family-name:var(--font-display)] text-lg md:text-xl font-bold text-white leading-snug mb-1">
        {title}
      </h3>
      <p className="text-sm text-white/50 mb-6">{caption}</p>
      <div className="flex-1 flex items-center">
        <AnimatedChart height={height}>{children}</AnimatedChart>
      </div>
    </div>
  )
}

export function EnterpriseSection() {
  return (
    <section className="py-16 lg:py-24 bg-[oklch(0.15_0.05_264)]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-left max-w-3xl mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight mb-6">
            Built for enterprise-grade complexity and scale
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Our client base is deliberately weighted toward organizations where performance marketing demands the most precision, accountability, and scale.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ScrollReveal delay={0.05}>
            <DataCard
              eyebrow="Fortune Ranking"
              title="Client Base By Fortune Ranking"
              caption="Share Of Our Clients By Fortune Classification"
            >
              <FortuneChart />
            </DataCard>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <DataCard
              eyebrow="Company Size"
              title="Client Base By Company Size"
              caption="Share Of Our Clients By Organization Size"
              height={220}
            >
              <SizeChart />
            </DataCard>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <DataCard
              eyebrow="Industry"
              title="Client Base By Industry"
              caption="Share Of Our Clients Across Sectors"
              height={220}
            >
              <IndustryList />
            </DataCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
