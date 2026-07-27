"use client"

import { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const industryData = [
  { name: "Banking & Finance", value: 60, color: "oklch(0.7395 0.1828 55.13)" },
  { name: "Retail & Mfg", value: 14, color: "oklch(0.6048 0.2166 257.21)" },
  { name: "Insurance", value: 7, color: "oklch(0.65 0.15 200)" },
  { name: "IT Services", value: 5, color: "oklch(0.72 0.08 85)" },
  { name: "Healthcare", value: 5, color: "oklch(0.60 0.10 150)" },
  { name: "Other", value: 9, color: "oklch(0.75 0.05 85)" },
]

const fortuneData = [
  { name: "Fortune 500", value: 45, color: "oklch(0.7395 0.1828 55.13)" },
  { name: "Fortune 1000", value: 30, color: "oklch(0.6048 0.2166 257.21)" },
  { name: "Mid-Market", value: 25, color: "oklch(0.72 0.08 85)" },
]

const sizeData = [
  { name: "Enterprise", value: 55, color: "oklch(0.7395 0.1828 55.13)" },
  { name: "Mid-Market", value: 30, color: "oklch(0.6048 0.2166 257.21)" },
  { name: "Growth", value: 15, color: "oklch(0.72 0.08 85)" },
]

const views = {
  fortune: {
    label: "Fortune Ranking",
    title: "Client base by Fortune ranking",
    caption: "Share of our clients by Fortune classification",
    centerLabel: "Fortune mix",
    data: fortuneData,
  },
  size: {
    label: "Company Size",
    title: "Client base by company size",
    caption: "Share of our clients by organization size",
    centerLabel: "Size mix",
    data: sizeData,
  },
  industry: {
    label: "Industry",
    title: "Client base by industry",
    caption: "Share of our clients across sectors",
    centerLabel: "Industry mix",
    data: industryData,
  },
} as const

type ViewKey = keyof typeof views
const order: ViewKey[] = ["fortune", "size", "industry"]
const ROTATE_MS = 5000

function DonutChart({ data }: { data: typeof industryData }) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={110}
          paddingAngle={2}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
          isAnimationActive
          animationBegin={100}
          animationDuration={850}
          animationEasing="ease-out"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value: number, name: string) => [`${value}%`, name]}
          contentStyle={{
            backgroundColor: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}

/** Mounts the donut only once it scrolls into view so the sweep-in animation is always perceivable. */
function AnimatedDonut({ data }: { data: typeof industryData }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  return (
    <div ref={ref} className="h-full">
      {inView && <DonutChart data={data} />}
    </div>
  )
}

export function EnterpriseSection() {
  const [activeTab, setActiveTab] = useState<ViewKey>("fortune")
  const [autoRotate, setAutoRotate] = useState(true)

  useEffect(() => {
    if (!autoRotate) return
    const id = setInterval(() => {
      setActiveTab((prev) => order[(order.indexOf(prev) + 1) % order.length])
    }, ROTATE_MS)
    return () => clearInterval(id)
  }, [autoRotate])

  const handleSelect = (value: string) => {
    setAutoRotate(false)
    setActiveTab(value as ViewKey)
  }

  const view = views[activeTab]

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-left max-w-3xl mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-foreground font-medium leading-tight mb-6">
            Built for enterprise-grade complexity and scale
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our client base is deliberately weighted toward organizations where performance marketing demands the most precision, accountability, and scale.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <Tabs value={activeTab} onValueChange={handleSelect} className="w-full">
            {/* Pill segment tabs */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <TabsList className="inline-flex gap-1 p-1 rounded-full bg-secondary border border-border h-auto">
                {order.map((value) => (
                  <TabsTrigger
                    key={value}
                    value={value}
                    className="relative rounded-full px-5 py-2 text-sm font-medium transition-all cursor-pointer
                               text-muted-foreground hover:text-foreground
                               data-[state=active]:bg-foreground data-[state=active]:text-background
                               data-[state=active]:shadow-sm data-[state=active]:font-semibold"
                  >
                    {views[value].label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <div className="rounded-xl border border-border bg-card shadow-sm">
              {order.map((tab) => (
                <TabsContent key={tab} value={tab} className="p-8 lg:p-12 mt-0">
                  {/* Clear identifier of the represented visual */}
                  <div className="mb-8" aria-live="polite">
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
                      {views[tab].label}
                    </p>
                    <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-medium text-foreground">
                      {views[tab].title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{views[tab].caption}</p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[280px]">
                      <AnimatedDonut key={tab} data={views[tab].data} />
                      {/* Center identifier inside donut */}
                      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={tab}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.3 }}
                            className="font-[family-name:var(--font-display)] text-base font-medium text-foreground max-w-[120px] leading-tight"
                          >
                            {views[tab].centerLabel}
                          </motion.span>
                        </AnimatePresence>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {views[tab].data.map((item, index) => (
                        <motion.div
                          key={item.name}
                          className="flex items-center justify-between gap-4 rounded-lg px-3 py-3 -mx-3 transition-colors hover:bg-secondary/50"
                          whileHover={{ x: 4, transition: { duration: 0.2 } }}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <div className="flex items-center gap-3.5">
                            <div
                              className="w-5 h-5 rounded-sm shrink-0 transition-transform duration-300 hover:scale-125"
                              style={{ backgroundColor: item.color }}
                            />
                            <span className="text-lg md:text-xl text-foreground font-medium">{item.name}</span>
                          </div>
                          <span className="text-xl md:text-2xl text-foreground font-semibold tabular-nums">{item.value}%</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        </ScrollReveal>
      </div>
    </section>
  )
}
