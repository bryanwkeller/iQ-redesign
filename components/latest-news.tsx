"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"

const articles = [
  {
    category: "Webinar",
    title: "Turn Your Financial Services Website into a Revenue Engine with AI",
    description: "Learn how AI-powered optimization transforms financial services websites into measurable growth engines.",
    href: "#",
  },
  {
    category: "Insights",
    title: "The Future of AI Search in Financial Services",
    description: "How GEO and LLM visibility are reshaping discovery for banks, insurers, and fintechs.",
    href: "#",
  },
  {
    category: "Case Study",
    title: "How a Top US Bank Achieved 152% Form-Fill Uplift",
    description: "A strategic AI-led optimization program delivered significant conversion growth.",
    href: "#",
  },
]

export function LatestNews() {
  return (
    <section id="insights" className="py-24 lg:py-32 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium tracking-wider uppercase text-primary">
              Latest at iQuanti
            </span>
          </div>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
            <StaggerItem key={article.title}>
              <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
                <CardHeader>
                  <Badge variant="secondary" className="w-fit mb-2">
                    {article.category}
                  </Badge>
                  <CardTitle className="font-[family-name:var(--font-display)] text-xl leading-snug">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={article.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
