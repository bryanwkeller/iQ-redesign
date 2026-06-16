import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { StatsBar } from "@/components/stats-bar"
import { EnterpriseSection } from "@/components/enterprise-section"
import { LatestNews } from "@/components/latest-news"
import { IntegratedSolutions } from "@/components/integrated-solutions"
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
        <IntegratedSolutions />
        <AiNative />
        <RecognitionTrust />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
