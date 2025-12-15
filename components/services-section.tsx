"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Calendar, Rocket } from "lucide-react"
import Link from "next/link"

const tiers = [
  {
    icon: Phone,
    title: "Niveau 1 : Standard IA",
    badge: "Point de départ",
    description:
      "Au niveau 1, votre agent IA fait office de standard unique : il décroche en 3 secondes 24/7, filtre les appels indésirables, prend les messages et vous les envoie par mail/SMS. Numéro dédié inclus.",
    price: "Gratuit (0€ / mois)",
    cta: "Activer le Standard IA",
  },
  {
    icon: Calendar,
    title: "Niveau 2 : Secrétariat",
    badge: "Offre recommandée",
    description:
      "Au niveau 2, c’est toujours le même agent IA. On lui ajoute la compétence Agenda & Qualification : il comprend le motif d’appel, qualifie la demande, vérifie vos disponibilités, pose le rendez-vous et relance automatiquement pour éviter les no-show.",
    price: "Offre pilote : 4 497 €",
    cta: "Découvrir le Secrétariat IA",
  },
  {
    icon: Rocket,
    title: "Pack Starter : Empire",
    badge: "Infrastructure complète",
    description:
      "Au niveau Empire, vous gardez le même agent IA, mais connecté à une infrastructure complète : campagnes Ads, récolte d’avis Google 5★, site de conversion et CRM relié. Une seule machine qui alimente tout votre pipeline.",
    price: "Pack complet : 9 997 €",
    cta: "Voir l’infrastructure Empire",
  },
]

export const ServicesSection = () => {
  return (
    <section className="relative py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12 space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-primary/80">
            Trois niveaux, un seul agent IA
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Faites monter votre agent IA en compétences
          </h2>
          <p className="text-foreground/70 text-lg">
            Vous démarrez avec le Standard, puis vous ajoutez le secrétariat et enfin l&apos;infrastructure Empire
            quand votre activité le nécessite.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <Card
              key={tier.title}
              className="relative flex flex-col h-full bg-card/60 backdrop-blur-sm border-border hover:border-primary/60 transition-all duration-300"
            >
              <div className="p-6 pb-4 flex-1 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <tier.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-semibold text-primary/80 uppercase tracking-wide">
                      {tier.badge}
                    </p>
                    <h3 className="text-lg font-bold text-foreground">{tier.title}</h3>
                  </div>
                </div>

                <p className="text-sm text-foreground/70 leading-relaxed">
                  {tier.description}
                </p>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-border flex flex-col gap-3">
                <div className="text-primary font-semibold text-base">{tier.price}</div>
                <Button
                  asChild
                  size="sm"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Link href="/services">{tier.cta}</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Pour v0 : export par défaut
export default ServicesSection
