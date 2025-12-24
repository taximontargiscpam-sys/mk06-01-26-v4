"use client"

import { useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedCounter } from "@/components/animated-counter"
import { Target, CheckCircle2, ArrowRight, Star, Clock, DollarSign, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FloatingCTA } from "@/components/floating-cta"
import { PowerCTA } from "@/components/power-cta"

const CTA_URL = "/reservation"

const metrics = [
  { icon: Star, value: "1 Agent IA", label: "Remplace une équipe entière pour gérer votre entreprise", color: "text-primary" },
  { icon: Target, value: "19 compétences", label: "Modulables : ajoutez appels, relances, suivi, devis, qualification…", color: "text-chart-3" },
  { icon: Clock, value: "24/7", label: "Votre entreprise reste joignable en continu, même la nuit et le week-end.", color: "text-chart-2" },
  { icon: DollarSign, value: "x2 à x3", label: "Augmentation du nombre de rendez-vous entrants grâce au taux de décroché.", color: "text-chart-4" },
]

const caseStudies = [
  {
    company: "Chauffeur Taxi",
    industry: "Transport & VTC",
    size: "Chauffeur indépendant",
    challenge: "Perdait 4 courses sur 10 car impossible de répondre au volant. Note Google bloquée à 4.2.",
    solution: "Installation Standard IA (N1) + Module Avis Google Automatique.",
    results: [
      "Agenda rempli à 100%",
      "Note passée à 4.9/5 en une semaine",
      "Chiffre d'affaires en hausse immédiate",
      "Zéro appel manqué pendant les courses",
    ],
    roi: "Installation Standard IA (N1) + Module Avis Google Automatique.",
  },
  {
    company: "Garage Auto",
    industry: "Automobile & Réparation",
    size: "Garage indépendant",
    challenge: "Le téléphone sonne pendant les réparations. Interrompre la mécanique coûte de l'argent.",
    solution: "Installation Secrétariat IA (N2) connecté à l'agenda.",
    results: [
      "L'IA gère les RDV seule",
      "Le patron ne touche plus au téléphone",
      "Zéro interruption à l'atelier",
      "Productivité en hausse immédiate",
    ],
    roi: "Installation Secrétariat IA (N2) connecté à l'agenda.",
  },
]

const globalStats = [
  { label: "Des appels pris en charge (vs 20-30% perdus habituellement).", value: "100%" },
  { label: "Heures économisées/semaine sur la qualification. Votre équipe se concentre sur la production.", value: "+10" },
  { label: "Appels gérés en simultané. Fini la tonalité occupée.", value: "+100" },
  { label: "Dépensés en salaire & charges pour ce standard (vs ~2800€/mois pour une humaine).", value: "0€" },
]

// --- NOUVEAUX COMPOSANTS CTA "HIGH CONVERSION" ---

// Le bouton principal version "POWER"


// FloatingCTA component is imported.

export default function ResultatsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Effet de fond subtil */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-10">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 bg-primary/5 shadow-[0_0_40px_rgba(37,99,235,0.3)]">
                <Image
                  src="/images/avatars/avatar-gold.png"
                  alt="Résultats MKDigital"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
            <h1 className="md:text-6xl font-black tracking-tight text-balance text-4xl text-white">
              Performance & <span className="text-white">Actifs</span>
            </h1>
            <p className="md:text-2xl text-muted-foreground text-pretty leading-relaxed text-lg font-light max-w-3xl mx-auto">
              Ne dépensez plus. Investissez dans une structure qui valorise votre entreprise et génère des résultats mesurables.
            </p>

            {/* GROS CTA HERO */}
            <div className="mt-12 scale-110">
              <PowerCTA text="Obtenir ces résultats" subtext="Capturez, Qualifiez, Convertissez" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="relative py-0">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {metrics.map((metric, index) => (
              <Card
                key={index}
                className="p-8 bg-card/40 backdrop-blur-md border-white/5 text-center group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <metric.icon className={`w-8 h-8 ${metric.color}`} />
                </div>
                <div className="text-4xl font-bold mb-2 text-foreground">{metric.value}</div>
                <div className="text-foreground/60">{metric.label}</div>
              </Card>
            ))}
          </div>

          {/* Global Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {globalStats.map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-lg hover:bg-white/5 transition-colors">
                <AnimatedCounter value={stat.value} className="text-3xl font-bold text-primary mb-2 drop-shadow-sm" />
                <div className="text-foreground/60 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA INTERMÉDIAIRE (Plus discret pour ceux qui veulent lire) */}
          <div className="flex justify-center mb-20">
            <Link href="/services">
              <Button variant="ghost" size="lg" className="gap-2 text-muted-foreground hover:text-foreground">
                Comprendre la méthode technique <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 relative bg-muted/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Cas Clients Détaillés</h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Des transformations réelles, des résultats mesurables
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <Card key={index} className="p-8 md:p-12 bg-card/60 backdrop-blur-sm border-white/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl">
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Company Info */}
                  <div className="md:col-span-1 space-y-4 border-r border-white/5 pr-4">
                    <div>
                      <div className="text-3xl font-bold text-foreground mb-2">{study.company}</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                        {study.industry}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground mt-4 italic">
                      &quot;{study.challenge.substring(0, 50)}...&quot;
                    </div>
                  </div>

                  {/* Details */}
                  <div className="md:col-span-2 space-y-8">
                    {/* Challenge & Solution Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-red-500/5 p-4 rounded-lg border border-red-500/10">
                        <h4 className="text-base font-bold text-red-400 mb-2 flex items-center gap-2">
                          <Target className="w-4 h-4" /> Le Problème
                        </h4>
                        <p className="text-sm text-foreground/80">{study.challenge}</p>
                      </div>
                      <div className="bg-green-500/5 p-4 rounded-lg border border-green-500/10">
                        <h4 className="text-base font-bold text-green-400 mb-2 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4" /> La Solution
                        </h4>
                        <p className="text-sm text-foreground/80">{study.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" /> Résultats Constatés
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-center gap-3 bg-white/5 p-3 rounded-md">
                            <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-foreground/90 font-medium text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA APRÈS CAS CLIENTS */}
          <div className="mt-20 flex justify-center">
            <PowerCTA text="Je veux les mêmes résultats" subtext="Prendre RDV avant que l'agenda ne soit plein" />
          </div>
        </div>
      </section>

      {/* Why These Results */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <Card className="p-12 bg-gradient-to-br from-slate-900 to-slate-950 border-white/10 shadow-2xl text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <h2 className="md:text-4xl font-bold mb-8 text-foreground relative z-10">Pourquoi c'est 100% fiable ?</h2>
            <div className="max-w-3xl mx-auto relative z-10">
              <p className="text-xl text-foreground/80 leading-relaxed font-light">
                <span className="text-primary font-semibold">Parce que ce n'est pas humain.</span> <br />
                L'IA ne dort pas, ne prend pas de pause café, n'a jamais de "mauvaise journée" et est toujours de bonne humeur. C'est une mécanique de précision suisse, appliquée à votre business.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section Finale */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="md:text-5xl font-bold text-foreground text-3xl">Prêt à transformer vos résultats ?</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
              L'installation prend 24h. Les résultats sont immédiats. L'audit est gratuit. <br />
              Vous n'avez littéralement rien à perdre à tester.
            </p>
            <div className="flex justify-center pt-8">
              <PowerCTA text="Lancer mon test gratuit maintenant" subtext="Gratuit & Sans engagement" />
            </div>
          </div>
        </div>
      </section>

      {/* Bouton flottant */}
      <FloatingCTA />
    </main>
  )
}
