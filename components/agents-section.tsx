"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Bot } from "lucide-react"

const competencies = [
  {
    name: "Réceptionniste",
    role: "Accueil et qualification",
    description: "Gère l'accueil téléphonique 24/7, qualifie les prospects et prend les rendez-vous automatiquement.",
  },
  {
    name: "Prospection",
    role: "Génération de leads",
    description:
      "Identifie et contacte les prospects qualifiés avec des messages personnalisés et un suivi automatisé.",
  },
  {
    name: "Closer",
    role: "Conversion commerciale",
    description: "Accompagne les prospects jusqu'à la signature avec des arguments personnalisés et un suivi optimal.",
  },
  {
    name: "Devis",
    role: "Génération automatique",
    description: "Crée des devis professionnels instantanément basés sur vos critères et votre catalogue.",
  },
  {
    name: "Support",
    role: "Service client IA",
    description: "Répond aux questions clients 24/7 avec précision et escalade les cas complexes.",
  },
  {
    name: "Onboarding",
    role: "Intégration client",
    description: "Guide les nouveaux clients étape par étape pour une adoption réussie de vos services.",
  },
  {
    name: "Facturation",
    role: "Gestion financière",
    description: "Automatise la facturation, les relances et le suivi des paiements.",
  },
  {
    name: "Marketing",
    role: "Campagnes intelligentes",
    description: "Crée et optimise vos campagnes marketing avec analyse prédictive des performances.",
  },
  {
    name: "RH",
    role: "Recrutement & gestion",
    description: "Filtre les candidatures, planifie les entretiens et gère l'onboarding des employés.",
  },
  {
    name: "Analyse",
    role: "Business Intelligence",
    description: "Analyse vos données en temps réel et génère des insights actionnables.",
  },
  {
    name: "Formation",
    role: "E-learning adaptatif",
    description: "Forme vos équipes avec du contenu personnalisé selon leur niveau et progression.",
  },
  {
    name: "Juridique",
    role: "Conformité & contrats",
    description: "Vérifie la conformité légale et génère des contrats adaptés à votre activité.",
  },
  {
    name: "Logistique",
    role: "Optimisation supply chain",
    description: "Optimise vos stocks, livraisons et prévisions de demande.",
  },
  {
    name: "Qualité",
    role: "Contrôle & amélioration",
    description: "Surveille la qualité de vos processus et propose des améliorations continues.",
  },
  {
    name: "Communication",
    role: "Relations publiques",
    description: "Gère votre présence en ligne, réseaux sociaux et relations presse.",
  },
  {
    name: "Innovation",
    role: "R&D augmentée",
    description: "Identifie les opportunités d'innovation et accélère votre développement produit.",
  },
]

export function AgentsSection() {
  const [selectedCompetency, setSelectedCompetency] = useState<(typeof competencies)[0] | null>(null)

  return (
    <section id="agents" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">16 Compétences Modulaires</h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto text-pretty">
            Votre Agent IA installe uniquement les compétences dont vous avez besoin pour générer du chiffre d'affaires
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {competencies.map((competency, index) => (
            <Card
              key={index}
              className="group p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedCompetency(competency)}
            >
              <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Bot className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{competency.name}</h3>
              <p className="text-sm text-foreground/60">{competency.role}</p>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedCompetency} onOpenChange={() => setSelectedCompetency(null)}>
        <DialogContent className="bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-2xl text-foreground">{selectedCompetency?.name}</DialogTitle>
            <DialogDescription className="text-foreground/60">{selectedCompetency?.role}</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-foreground/80 leading-relaxed">{selectedCompetency?.description}</p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
