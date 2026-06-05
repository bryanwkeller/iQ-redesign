"use client"

import { useState } from "react"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const industryData = [
  { name: "Banking & Finance", value: 60, color: "oklch(0.68 0.19 50)" },
  { name: "Retail & Mfg", value: 14, color: "oklch(0.55 0.12 250)" },
  { name: "Insurance", value: 7, color: "oklch(0.65 0.15 200)" },
  { name: "IT Services", value: 5, color: "oklch(0.72 0.08 85)" },
  { name: "Healthcare", value: 5, color: "oklch(0.60 0.10 150)" },
  { name: "Other", value: 9, color: "oklch(0.75 0.05 85)" },
]

const fortuneData = [
  { name: "Fortune 500", value: 45, color: "oklch(0.68 0.19 50)" },
  { name: "Fortune 1000", value: 30, color: "oklch(0.55 0.12 250)" },
  { name: "Mid-Market", value: 25, color: "oklch(0.72 0.08 85)" },
]

const sizeData = [
  { name: "Enterprise", value: 55, color: "oklch(0.68 0.19 50)" },
  { name: "Mid-Market", value: 30, color: "oklch(0.55 0.12 250)" },
  { name: "Growth", value: 15, color: "oklch(0.72 0.08 85)" },
]

const datasets = {
  industry: industryData,
  fortune: fortuneData,
  size: sizeData,
}

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
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          formatter={(value: number) => [`${value}%`, "Share"]}
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

export function EnterpriseSection() {
  const [activeTab, setActiveTab] = useState("industry")

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl text-foreground font-medium leading-tight mb-6">
            Built for enterprise-grade complexity and scale
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our client base is deliberately weighted toward organizations where performance marketing demands the most precision, accountability, and scale.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full justify-start rounded-none border-b border-border bg-secondary/30 h-auto p-0">
                <TabsTrigger
                  value="fortune"
                  className="rounded-none px-6 py-4 data-[state=active]:bg-background data-[state=active]:shadow-none"
                >
                  Fortune Ranking
                </TabsTrigger>
                <TabsTrigger
                  value="size"
                  className="rounded-none px-6 py-4 data-[state=active]:bg-background data-[state=active]:shadow-none"
                >
                  Company Size
                </TabsTrigger>
                <TabsTrigger
                  value="industry"
                  className="rounded-none px-6 py-4 data-[state=active]:bg-background data-[state=active]:shadow-none"
                >
                  Industry
                </TabsTrigger>
              </TabsList>

              {(["fortune", "size", "industry"] as const).map((tab) => (
                <TabsContent key={tab} value={tab} className="p-8 lg:p-12 mt-0">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="h-[280px]">
                      <DonutChart data={datasets[tab]} />
                    </div>
                    <div className="space-y-4">
                      {datasets[tab].map((item) => (
                        <div key={item.name} className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-4 h-4 rounded-sm shrink-0"
                              style={{ backgroundColor: item.color }}
                            />
                            <span className="text-foreground font-medium">{item.name}</span>
                          </div>
                          <span className="text-muted-foreground font-semibold">{item.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
