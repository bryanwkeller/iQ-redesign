import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { Services } from "@/components/services"
import { AICapabilities } from "@/components/ai-capabilities"
import { Results } from "@/components/results"
import { CaseStudies } from "@/components/case-studies"
import { ContactCTA } from "@/components/contact-cta"
import { Footer } from "@/components/footer"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <main className="relative">
        <Hero />
        <TrustBar />
        <Services />
        <AICapabilities />
        <Results />
        <CaseStudies />
        <ContactCTA />
      </main>
      <Footer />
    </>
  )
}
