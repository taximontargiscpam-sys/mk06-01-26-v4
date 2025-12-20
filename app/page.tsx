import { InlineLeadForm } from "@/components/inline-lead-form"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { GrowthSystemSection } from "@/components/growth-system-section"
import { LevelsSection } from "@/components/levels-section"
import { VisionFooterSection } from "@/components/vision-footer-section"
import { FAQSection } from "@/components/faq-section"
import { PowerCTA } from "@/components/power-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />

      <ProblemSection />
      <GrowthSystemSection />
      <LevelsSection />
      <div className="flex justify-center py-12 bg-background relative z-10">
        <PowerCTA text="Obtenir mon Agent Vocal Gratuit" subtext="Offre valable jusqu'au 31/12/2025" />
      </div>
      <VisionFooterSection />
      <FAQSection />
    </main>
  )
}
