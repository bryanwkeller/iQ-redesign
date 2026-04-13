import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { Services } from "@/components/services"
import { HumanAI } from "@/components/human-ai"
import { Results } from "@/components/results"
import { CaseStudies } from "@/components/case-studies"
import { TeamGlimpse } from "@/components/team-glimpse"
import { ContactCTA } from "@/components/contact-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="relative">
        <Hero />
        <TrustBar />
        <Services />
        <HumanAI />
        <Results />
        <CaseStudies />
        <TeamGlimpse />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
