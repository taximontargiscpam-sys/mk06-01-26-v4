"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Building2, Stethoscope, Scale, Hammer, Car, UtensilsCrossed, GraduationCap, ShoppingBag } from "lucide-react"

const industries = [
  {
    icon: Stethoscope,
    name: "Santé & Médical",
    image: "/images/vv.png",
    problem: "Gestion des rendez-vous chronophage et erreurs de suivi patient",
    solution: "Compétence Réceptionniste + Support pour automatiser la prise de RDV et le suivi",
    benefit: "Gain de 15h/semaine et satisfaction patient +40%",
  },
  {
    icon: Scale,
    name: "Juridique & Avocats",
    image: "/images/vvv.png",
    problem: "Rédaction de contrats répétitifs et recherche jurisprudentielle",
    solution: "Compétence Juridique + Analyse pour automatiser la documentation",
    benefit: "Réduction de 60% du temps administratif",
  },
  {
    icon: Hammer,
    name: "BTP & Construction",
    image: "/images/vvvvv.png",
    problem: "Devis complexes et suivi de chantiers multiples",
    solution: "Compétence Devis + Logistique pour optimiser la gestion",
    benefit: "Devis instantanés et suivi temps réel",
  },
  {
    icon: Building2,
    name: "Corporate & Entreprises",
    image: "/images/v.png",
    problem: "Processus RH lents et communication interne inefficace",
    solution: "Compétence RH + Communication pour fluidifier les opérations",
    benefit: "Onboarding 3x plus rapide",
  },
  {
    icon: Car,
    name: "Automobile & Garages",
    image: "/images/vvvvv.png",
    problem: "Gestion des rendez-vous atelier et suivi client",
    solution: "Compétence Réceptionniste + Support pour automatiser",
    benefit: "Taux de remplissage +35%",
  },
  {
    icon: UtensilsCrossed,
    name: "Restauration & Hôtellerie",
    image: "/images/vv.png",
    problem: "Réservations et gestion des avis clients",
    solution: "Compétence Réceptionniste + Communication",
    benefit: "Note moyenne +0.8 étoiles",
  },
  {
    icon: GraduationCap,
    name: "Éducation & Formation",
    image: "/images/vvv.png",
    problem: "Suivi personnalisé des apprenants difficile à grande échelle",
    solution: "Compétence Formation + Analyse pour l'apprentissage adaptatif",
    benefit: "Taux de complétion +45%",
  },
  {
    icon: ShoppingBag,
    name: "E-commerce & Retail",
    image: "/images/v.png",
    problem: "Support client 24/7 et gestion des retours",
    solution: "Compétence Support + Logistique pour automatiser",
    benefit: "Temps de réponse divisé par 10",
  },
]

export function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<(typeof industries)[0] | null>(null)

  return (
    <section id="secteurs" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Métiers & Secteurs</h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto text-pretty">
            Des solutions IA adaptées à votre industrie
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="group p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
              onClick={() => setSelectedIndustry(industry)}
            >
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <industry.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground">{industry.name}</h3>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedIndustry} onOpenChange={() => setSelectedIndustry(null)}>
        <DialogContent className="bg-card border-border max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl text-foreground">{selectedIndustry?.name}</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Problématique</h4>
              <p className="text-foreground/70">{selectedIndustry?.problem}</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Solution IA</h4>
              <p className="text-foreground/70">{selectedIndustry?.solution}</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Bénéfice</h4>
              <p className="text-primary font-medium">{selectedIndustry?.benefit}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
