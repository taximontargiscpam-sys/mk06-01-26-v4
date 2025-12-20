"use client"

import { useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PowerCTA } from "@/components/power-cta"
import { Brain, Rocket, Target, Zap, Globe, Shield, TrendingUp, ArrowRight, Calendar, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FloatingCTA } from "@/components/floating-cta"

const CTA_URL = "/reservation"

const visionPillars = [
  {
    icon: Brain,
    title: "Pragmatisme",
    description: "Une action = Un résultat. Si ça ne rapporte pas d'argent ou de temps, on ne le fait pas.",
  },
  {
    icon: Rocket,
    title: "Volume",
    description:
      "Nos systèmes sont conçus comme de la logistique lourde. Ils peuvent encaisser 10 ou 1000 appels par jour sans broncher.",
  },
  {
    icon: Target,
    title: "Simplicité",
    description: "Pas de jargon technique. Pas d'usine à gaz. On branche, ça marche.",
  },
  {
    icon: Shield,
    title: "Sur-Mesure",
    description: "Pas de solution générique. Nous adaptons l'infrastructure à votre niveau de maturité digitale pour une efficacité maximale.",
  },
]

const whyNow = [
  {
    icon: TrendingUp,
    title: "Le Coût de l'Inaction",
    stat: "Les entreprises qui n'adoptent pas l'IA perdent en moyenne 23% de parts de marché en 3 ans",
    description:
      "Chaque mois sans IA, c'est du CA perdu, des clients perdus, des opportunités manquées. Le coût de l'inaction dépasse largement le coût de l'investissement.",
  },
  {
    icon: Zap,
    title: "La Fenêtre d'Opportunité",
    stat: "Seulement 14% des PME ont déployé l'IA de manière significative",
    description:
      "Vous avez une fenêtre d'opportunité unique pour prendre de l'avance sur vos concurrents. Dans 2 ans, tout le monde aura l'IA. Aujourd'hui, vous pouvez être pionnier.",
  },
  {
    icon: Globe,
    title: "L'Accélération Technologique",
    stat: "L'IA progresse 10x plus vite que prévu par les experts",
    description:
      "Ce qui était impossible il y a 6 mois est maintenant standard. Ce qui est impossible aujourd'hui sera standard dans 6 mois. L'accélération est exponentielle.",
  },
]

// --- COMPOSANTS CTA PREMIUM ---



// FloatingCTA component is imported.

export default function VisionPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-10">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 bg-primary/5 shadow-[0_0_40px_rgba(37,99,235,0.3)]">
                <Image
                  src="/images/final-black-avatar.png"
                  alt="Vision MKDigital"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
            <h1 className="md:text-6xl font-black tracking-tight text-balance text-4xl text-white">
              Notre <span className="text-white">Vision</span>
            </h1>
            <p className="md:text-2xl text-muted-foreground text-pretty leading-relaxed text-lg font-light max-w-3xl mx-auto">
              Ne voyez pas cela comme un achat de service, mais comme l'acquisition d'un actif. Nous construisons votre capital technologique pour un retour sur investissement durable.
            </p>

            <div className="mt-8 flex justify-center">
              <PowerCTA text="Discuter de votre projet" subtext="Sans engagement" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative py-0">
        <div className="container mx-auto px-6">
          <Card className="p-12 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 shadow-lg">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex p-4 rounded-xl bg-primary/20 mb-4 animate-bounce-slow">
                <Target className="w-12 h-12 text-primary" />
              </div>
              <h2 className="md:text-4xl font-bold text-foreground text-2xl">Notre mission</h2>
              <p className="text-foreground/80 leading-relaxed text-lg font-light">
                Nous croyons que l'IA n'est pas faite pour faire des slides PowerPoint dans des bureaux à la Défense.
                Elle est faite pour <span className="font-bold text-foreground">décrocher le standard d'un avocat</span>, remplir l'agenda d'un médecin, ou encaisser pour
                un artisan. Nous démocratisons l'arme atomique pour les TPE et PME.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Vision Pillars */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Les 4 Piliers</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
              Quatre principes fondamentaux qui guident chacune de nos décisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {visionPillars.map((pillar, index) => (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                      <pillar.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-foreground">{pillar.title}</h3>
                    <p className="text-foreground/70 leading-relaxed text-sm">{pillar.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Intermédiaire */}
          <div className="flex justify-center">
            <Link href="/services">
              <Button variant="outline" size="lg" className="gap-2 border-primary/30 hover:border-primary">
                Voir comment on applique ça <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 relative bg-muted/5">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-bold mb-4 text-foreground text-4xl">
              L&#39;avenir appartient à ceux qui décrochent.
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto text-xl">
              En 2026, celui qui répond le plus vite gagne le client. Ne laissez plus votre concurrent prendre votre
              place parce que vous étiez occupé.
            </p>
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="py-20 relative pt-0">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-bold mb-4 text-foreground text-3xl">Pourquoi Agir Maintenant ?</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto text-base">
              Le moment d'adopter l'IA n'est pas demain, c'est aujourd'hui
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {whyNow.map((reason, index) => (
              <Card key={index} className="p-8 bg-card/50 backdrop-blur-sm border-border text-center hover:bg-card/80 transition-colors">
                <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-6">
                  <reason.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{reason.title}</h3>
                <div className="font-bold text-primary mb-4 text-base">{reason.stat}</div>
                <p className="text-foreground/70 leading-relaxed text-sm">{reason.description}</p>
              </Card>
            ))}
          </div>

          {/* CTA Urgence */}
          <div className="flex justify-center">
            <PowerCTA text="Prendre de l'avance (Audit Offert)" subtext="Ne perdez plus de parts de marché" />
          </div>
        </div>
      </section>

      {/* The MKDigital Difference */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <Card className="p-12 bg-gradient-to-br from-slate-900 to-slate-950 border-primary/20 shadow-2xl">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="text-center">
                <h2 className="md:text-4xl font-bold mb-4 text-foreground text-2xl">La Différence MKDigital</h2>
                <p className="text-foreground/70 text-sm">Ce qui nous distingue dans l'univers de l'IA</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Liste des points forts */}
                {[
                  { title: "Déploiement en 48h", desc: "Pas de projet IT de 6 mois. Vous êtes opérationnel en 2 jours." },
                  { title: "ROI garanti sous 60 jours", desc: "Si vous n'êtes pas rentable en 2 mois, nous travaillons gratuitement." },
                  { title: "Zéro complexité technique", desc: "Pas besoin d'équipe IT. Nos agents s'intègrent à vos outils existants." },
                  { title: "Amélioration continue", desc: "Votre agent IA s'améliore chaque jour sans intervention." },
                  { title: "Support expert dédié", desc: "Une équipe d'experts IA disponible pour vous accompagner." },
                  { title: "Conformité garantie", desc: "RGPD, ISO 27001, hébergement en Europe. Vos données sont protégées." },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2.5 shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
                    <div>
                      <div className="font-bold text-foreground mb-1 text-lg">{item.title}</div>
                      <div className="text-foreground/70 text-sm">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-6 relative text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Prêt à Rejoindre la Révolution IA ?
          </h2>
          <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
            Ne laissez pas vos concurrents prendre de l'avance. Réservez votre entretien stratégique et découvrez
            comment MKDigital peut transformer votre business dès aujourd'hui.
          </p>
          <div className="flex justify-center">
            <PowerCTA text="Réserver mon entretien stratégique" />
          </div>
          <p className="mt-6 text-sm text-foreground/50">
            Entretien de 30 minutes • Sans engagement • Analyse personnalisée offerte
          </p>
        </div>
      </section>

      {/* Floating CTA */}
      <FloatingCTA />
    </main >
  )
}
