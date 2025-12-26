"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { LevelsSection } from "@/components/levels-section"
import { PowerCTA } from "@/components/power-cta"

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />

      {/* Header Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full mix-blend-screen opacity-50 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/20 blur-[120px] rounded-full mix-blend-screen opacity-50" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-primary/20 bg-primary/5 shadow-[0_0_40px_rgba(37,99,235,0.3)] mb-8">
              <Image
                src="/images/final-blue-avatar.png"
                alt="Service Robot"
                fill
                className="object-cover object-top"
              />
            </div>
            <h1 className="md:text-5xl font-black tracking-tight text-balance text-3xl text-white">
              L’Architecture de <span className="text-white">Croissance</span>
            </h1>
            <p className="md:text-2xl text-muted-foreground text-pretty leading-relaxed text-lg font-light max-w-3xl mx-auto">
              Découvrez comment notre Infrastructure de Revenus et notre Growth System transforment votre activité en actif valorisable.
            </p>
            <div className="pt-8">
              <PowerCTA text="Explorer les compétences (Audit)" subtext="Audit 100% Gratuit" />
            </div>
          </div>
        </div>
      </section>

      {/* Levels Section (Replaces the broken grid) */}
      <LevelsSection />

      {/* Why Choose Us */}
      <section className="relative py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="md:text-5xl font-bold mb-4 text-white text-3xl">Pourquoi ça marche ?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Une infrastructure rodée sur le terrain</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Savoir-Faire Métier", description: "Nous comprenons votre industrie car nous l'avons étudiée." },
              { title: "Rapidité d'Exécution", description: "Votre infrastructure est déployée en quelques jours." },
              { title: "Technologie Propriétaire", description: "Un agent IA entraîné sur des données exclusives." },
              { title: "ROI Mesurable", description: "Chaque action est trackée pour maximiser la rentabilité." }
            ].map((reason, index) => (
              <Card key={index} className="p-8 bg-card/30 backdrop-blur-sm border-border text-center hover:bg-card/50 transition-colors group">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <Card className="p-16 bg-gradient-to-br from-primary/20 to-indigo-900/40 border-primary/30 text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white relative z-10">
              Prêt à couper le répondeur ?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto relative z-10 font-light">
              Testez le niveau 1 gratuitement dès ce soir. Pas de carte bancaire requise pour l'audit.
            </p>

            <div className="relative z-10 flex justify-center">
              <Button asChild size="lg" className="h-16 px-8 rounded-full bg-white text-primary hover:bg-white/90 font-bold text-lg shadow-xl shadow-white/10 transition-all hover:scale-105">
                <Link href="https://api.leadconnectorhq.com/widget/bookings/expert-calendar-hb-ksoy5n" target="_blank">
                  Installer le standard maintenant
                </Link>
              </Button>
            </div>
          </Card>
        </div>
      </section>

    </main>
  )
}
