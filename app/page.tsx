import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { HumanAI } from "@/components/human-ai"
import { TrustBar } from "@/components/trust-bar"
import { Services } from "@/components/services"
import { Results } from "@/components/results"
import { CaseStudies } from "@/components/case-studies"
import { ContactCTA } from "@/components/contact-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative">
        <Hero />
        <HumanAI />
        <Services />
        <TrustBar />
        <Results />
        <CaseStudies />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
