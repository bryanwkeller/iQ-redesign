import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { StatsBar } from "@/components/stats-bar"
import { EnterpriseSection } from "@/components/enterprise-section"
import { LatestNews } from "@/components/latest-news"
import { AgenticSolutions } from "@/components/agentic-solutions"
import { Insights } from "@/components/insights"
import { AiNative } from "@/components/ai-native"
import { RecognitionTrust } from "@/components/recognition-trust"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative">
        <Hero />
        <EnterpriseSection />
        <StatsBar />
        <LatestNews />
        <AgenticSolutions />
        <AiNative />
        <Insights />
        <RecognitionTrust />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
