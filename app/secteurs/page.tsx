"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { PowerCTA } from "@/components/power-cta"
import {
  Building2,
  Stethoscope,
  Scale,
  Hammer,
  Car,
  UtensilsCrossed,
  GraduationCap,
  ShoppingBag,
  CheckCircle2,
  ArrowRight,
  Home,
  Plane,
  Briefcase,
  Landmark,
  Truck,
  Calendar,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FloatingCTA } from "@/components/floating-cta"

const CTA_URL = "/reservation"

const industries = [
  {
    icon: Stethoscope,
    name: "Santé & Médical",
    image: "/sante-medical.png",
    tagline: "L'IA au service du soin et de l'efficacité médicale",
    problem:
      "Les cabinets médicaux et établissements de santé font face à une surcharge administrative qui impacte directement le temps consacré aux patients. Gestion des rendez-vous, dossiers patients, relances, facturation : autant de tâches chronophages qui épuisent les équipes soignantes.",
    challenges: [
      "Appels manqués = patients perdus et urgences non traitées",
      "Erreurs de planification causant des conflits de RDV",
      "Suivi patient incomplet par manque de temps",
      "Facturation complexe avec retards de paiement",
      "Conformité RGPD et traçabilité des données sensibles",
    ],
    solution:
      "MKDigital déploie votre Agent IA santé qui automatise l'intégralité de votre gestion administrative tout en respectant scrupuleusement les normes médicales et la confidentialité des données.",
    agents: [
      "Réceptionniste : Gestion 24/7 des RDV avec synchronisation agenda médecin",
      "Support : Réponses aux questions patients et rappels de RDV automatiques",
      "Facturation : Génération et suivi des factures avec tiers-payant",
      "Juridique : Conformité RGPD et gestion des consentements patients",
    ],
  },
  {
    icon: Scale,
    name: "Juridique & Avocats",
    image: "/juridique-avocats.png",
    tagline: "L'intelligence artificielle au service du droit",
    problem:
      "Les cabinets d'avocats croulent sous les tâches administratives répétitives : rédaction de contrats standards, recherche jurisprudentielle, gestion des dossiers clients, facturation. Ce temps perdu représente un manque à gagner considérable.",
    challenges: [
      "Rédaction de contrats répétitifs chronophage",
      "Recherche jurisprudentielle longue et fastidieuse",
      "Gestion des délais et échéances critiques",
      "Facturation complexe avec suivi des honoraires",
      "Qualification et suivi des prospects",
    ],
    solution:
      "MKDigital met à votre disposition un Agent IA spécialisé en droit qui automatise les tâches répétitives tout en garantissant la rigueur juridique et la confidentialité absolue.",
    agents: [
      "Juridique : Génération de contrats et vérification de conformité",
      "Réceptionniste : Qualification des prospects et prise de RDV",
      "Analyse : Recherche jurisprudentielle et analyse de dossiers",
      "Facturation : Gestion des honoraires et suivi des paiements",
    ],
  },
  {
    icon: Hammer,
    name: "BTP & Construction",
    image: "/btp-construction.png",
    tagline: "Automatisation et optimisation de vos chantiers",
    problem:
      "Le secteur du BTP fait face à une complexité croissante : devis détaillés, gestion de multiples chantiers simultanés, coordination des corps de métier, suivi des approvisionnements. Les erreurs de devis et les retards coûtent cher.",
    challenges: [
      "Devis complexes nécessitant 4-6h de travail",
      "Gestion simultanée de 10+ chantiers",
      "Coordination difficile des sous-traitants",
      "Suivi des approvisionnements et stocks",
      "Facturation et suivi des paiements clients",
    ],
    solution:
      "MKDigital équipe les entreprises du BTP d'un Agent IA spécialisé construction qui automatise la gestion administrative, optimise la logistique et garantit la rentabilité de chaque chantier.",
    agents: [
      "Devis : Génération instantanée de devis détaillés avec calculs précis",
      "Logistique : Optimisation des approvisionnements et planning chantiers",
      "Réceptionniste : Qualification des prospects et prise de RDV chantier",
      "Facturation : Gestion des situations de travaux et relances",
    ],
  },
  {
    icon: Building2,
    name: "Corporate & Entreprises",
    image: "/corporate-entreprises.png",
    tagline: "Transformation digitale et optimisation opérationnelle",
    problem:
      "Les entreprises corporate font face à des processus lents et cloisonnés : recrutement chronophage, communication interne inefficace, gestion RH administrative, reporting manuel. Cette inefficacité freine la croissance et démotive les équipes.",
    challenges: [
      "Recrutement lent (45+ jours en moyenne)",
      "Onboarding des employés incomplet",
      "Communication interne fragmentée",
      "Reporting manuel chronophage",
      "Gestion administrative RH répétitive",
    ],
    solution:
      "MKDigital déploie un Agent IA corporate qui fluidifie tous les processus internes, de la gestion RH à la communication, en passant par l'analyse de performance.",
    agents: [
      "RH : Recrutement automatisé et onboarding intelligent",
      "Communication : Gestion de la communication interne et externe",
      "Analyse : Dashboards temps réel et reporting automatique",
      "Formation : E-learning adaptatif pour montée en compétences",
    ],
  },
  {
    icon: Car,
    name: "Automobile & Garages",
    image: "/automobile-garages.png",
    tagline: "Optimisation de votre atelier et satisfaction client",
    problem:
      "Les garages et concessions automobiles perdent des clients faute de disponibilité pour répondre aux appels. La gestion des rendez-vous atelier, le suivi client et la facturation mobilisent un temps précieux qui pourrait être consacré aux réparations.",
    challenges: [
      "Appels manqués = clients perdus à la concurrence",
      "Planning atelier sous-optimisé",
      "Suivi client et relances manuels",
      "Devis et facturation chronophages",
      "Fidélisation client difficile",
    ],
    solution:
      "MKDigital équipe les professionnels de l'automobile d'un Agent IA spécialisé qui automatise la gestion client, optimise le planning atelier et maximise le taux de remplissage.",
    agents: [
      "Réceptionniste : Prise de RDV atelier 24/7 avec disponibilité temps réel",
      "Support : Suivi client et rappels d'entretien automatiques",
      "Devis : Génération instantanée de devis réparation",
      "Marketing : Campagnes de fidélisation et promotions ciblées",
    ],
  },
  {
    icon: UtensilsCrossed,
    name: "Restauration & Hôtellerie",
    image: "/restauration-hotellerie.png",
    tagline: "Excellence du service et optimisation opérationnelle",
    problem:
      "Le secteur de la restauration et de l'hôtellerie fait face à une pression constante : gestion des réservations, service client 24/7, gestion des avis en ligne, optimisation du taux de remplissage. Chaque client insatisfait peut impacter durablement votre réputation.",
    challenges: [
      "Gestion des réservations chronophage",
      "Service client 24/7 impossible à assurer",
      "Gestion des avis clients et e-réputation",
      "Optimisation du taux de remplissage",
      "Communication multilingue pour clientèle internationale",
    ],
    solution:
      "MKDigital met à disposition des professionnels de l'hôtellerie-restauration un Agent IA spécialisé qui automatise la gestion des réservations, assure un service client premium 24/7 et optimise votre réputation en ligne.",
    agents: [
      "Réceptionniste : Gestion des réservations 24/7 multilingue",
      "Support : Service client instantané et gestion des demandes",
      "Communication : Gestion des avis et e-réputation",
      "Marketing : Campagnes de fidélisation et promotions ciblées",
    ],
  },
  {
    icon: GraduationCap,
    name: "Éducation & Formation",
    image: "/education-formation.png",
    tagline: "Apprentissage personnalisé et suivi individualisé",
    problem:
      "Les organismes de formation font face à un défi majeur : comment offrir un suivi personnalisé à grande échelle ? Les taux d'abandon sont élevés (65% en moyenne), le suivi des apprenants est chronophage, et la création de contenu pédagogique est coûteuse.",
    challenges: [
      "Taux d'abandon élevé (65% en moyenne)",
      "Suivi personnalisé impossible à grande échelle",
      "Création de contenu pédagogique chronophage",
      "Évaluation et feedback manuels",
      "Gestion administrative des inscriptions",
    ],
    solution:
      "MKDigital révolutionne la formation avec un Agent IA pédagogique qui personnalise l'apprentissage, assure un suivi individualisé de chaque apprenant et maximise les taux de complétion.",
    agents: [
      "Formation : E-learning adaptatif avec parcours personnalisés",
      "Support : Assistance pédagogique 24/7 pour les apprenants",
      "Analyse : Suivi de progression et détection des décrocheurs",
      "Réceptionniste : Gestion des inscriptions et onboarding",
    ],
  },
  {
    icon: ShoppingBag,
    name: "E-commerce & Retail",
    image: "/ecommerce-retail.png",
    tagline: "Conversion maximale et expérience client premium",
    problem:
      "Le e-commerce est ultra-compétitif : chaque visiteur compte, chaque panier abandonné est une perte, et le support client 24/7 est devenu indispensable. Les retailers doivent optimiser chaque étape du parcours client tout en maîtrisant leurs coûts.",
    challenges: [
      "Taux de conversion faible (2-3% en moyenne)",
      "Paniers abandonnés (70% en moyenne)",
      "Support client 24/7 coûteux",
      "Gestion des retours chronophage",
      "Personnalisation à grande échelle impossible",
    ],
    solution:
      "MKDigital équipe les e-commerçants d'un Agent IA spécialisé retail qui optimise chaque étape du parcours client, du premier clic jusqu'à la fidélisation, en passant par la conversion et le support.",
    agents: [
      "Support : Service client 24/7 avec résolution instantanée",
      "Marketing : Personnalisation et recommandations produits IA",
      "Closer : Récupération des paniers abandonnés",
      "Logistique : Optimisation des stocks et livraisons",
    ],
  },
  {
    icon: Truck,
    name: "Mobilité & Transport",
    image: "/mobilite-transport.png",
    tagline: "Optimisation logistique et gestion de flotte intelligente",
    problem:
      "Le secteur du transport et de la logistique fait face à des défis majeurs : optimisation des tournées, gestion de flotte, suivi des livraisons en temps réel, gestion des imprévus. Chaque retard coûte cher et impacte la satisfaction client.",
    challenges: [
      "Optimisation des tournées complexe et chronophage",
      "Gestion de flotte et maintenance préventive",
      "Suivi des livraisons et communication client",
      "Gestion des imprévus et réaffectation en temps réel",
      "Facturation et gestion administrative",
    ],
    solution:
      "MKDigital équipe les entreprises de transport d'un Agent IA spécialisé qui optimise les tournées, automatise la gestion de flotte et garantit une satisfaction client maximale.",
    agents: [
      "Logistique : Optimisation des tournées et planification intelligente",
      "Support : Suivi des livraisons et communication client automatisée",
      "Réceptionniste : Prise de commandes et gestion des demandes",
      "Analyse : Prédiction de la maintenance et optimisation de flotte",
    ],
  },
  {
    icon: Home,
    name: "Immobilier",
    image: "/immobilier.png",
    tagline: "Gestion locative et transaction immobilière automatisées",
    problem:
      "Les agences immobilières et gestionnaires de biens font face à une charge administrative énorme : gestion des visites, qualification des prospects, suivi des dossiers, gestion locative. Chaque prospect non traité est une opportunité perdue.",
    challenges: [
      "Gestion des visites et disponibilité 24/7",
      "Qualification des prospects chronophage",
      "Suivi des dossiers et relances manuels",
      "Gestion locative administrative lourde",
      "Communication multicanale avec propriétaires et locataires",
    ],
    solution:
      "MKDigital équipe les professionnels de l'immobilier d'un Agent IA spécialisé qui automatise la gestion des visites, qualifie les prospects et optimise la gestion locative.",
    agents: [
      "Réceptionniste : Organisation des visites 24/7 et qualification prospects",
      "Support : Gestion des demandes locataires et propriétaires",
      "Juridique : Génération de baux et suivi des obligations légales",
      "Marketing : Diffusion multi-plateformes et campagnes ciblées",
    ],
  },
  {
    icon: Plane,
    name: "Voyage & Conciergerie",
    image: "/images/voyage-20-26-20tourisme.png",
    tagline: "Expérience client personnalisée et gestion optimisée",
    problem:
      "Le secteur du voyage fait face à des attentes clients toujours plus élevées : personnalisation, réactivité 24/7, gestion des imprévus, communication multilingue. Chaque client insatisfait est une perte et un risque réputationnel.",
    challenges: [
      "Service client 24/7 en plusieurs langues",
      "Personnalisation des séjours chronophage",
      "Gestion des imprévus et modifications",
      "Optimisation du taux de remplissage",
      "Fidélisation dans un marché ultra-compétitif",
    ],
    solution:
      "MKDigital équipe les professionnels du voyage d'un Agent IA spécialisé qui automatise le service client multilingue, personnalise les séjours et optimise la gestion des réservations.",
    agents: [
      "Réceptionniste : Réservations et modifications 24/7 multilingue",
      "Support : Assistance voyage et gestion des imprévus",
      "Marketing : Recommandations personnalisées et upsells",
      "Analyse : Optimisation des prix et prédiction de la demande",
    ],
  },
  {
    icon: Briefcase,
    name: "B2B & Freelance",
    image: "/images/services-20b2b-20.png",
    tagline: "Prospection automatisée et closing optimisé",
    problem:
      "Les entreprises de services B2B font face à un défi majeur : comment scaler la prospection et le closing sans multiplier les commerciaux ? La qualification, le nurturing et le suivi des prospects sont chronophages et coûteux.",
    challenges: [
      "Prospection manuelle chronophage",
      "Qualification des leads inefficace",
      "Nurturing des prospects incomplet",
      "Suivi des opportunités fastidieux",
      "Taux de conversion faible",
    ],
    solution:
      "MKDigital équipe les entreprises B2B d'un Agent IA commercial qui automatise la prospection, qualifie les leads, nurture les prospects et optimise le closing.",
    agents: [
      "Prospection : Identification et enrichissement automatique des leads",
      "Qualification : Scoring et priorisation des opportunités",
      "Nurturing : Séquences personnalisées et suivi automatisé",
      "Closer : Optimisation du closing et gestion des objections",
    ],
  },
  {
    icon: Landmark,
    name: "Finance & Assurance",
    image: "/images/finance-20-26-20assurance.jpeg",
    tagline: "Conformité garantie et service client premium",
    problem:
      "Le secteur financier fait face à une double contrainte : offrir un service client irréprochable tout en respectant des contraintes réglementaires strictes. La gestion des dossiers, la conformité et le conseil personnalisé sont chronophages.",
    challenges: [
      "Réglementations strictes et contraintes de conformité",
      "Gestion des dossiers clients complexe",
      "Conseil personnalisé chronophage",
      "Service client premium attendu",
      "Optimisation du cross-selling",
    ],
    solution:
      "MKDigital équipe les professionnels de la finance d'un Agent IA spécialisé qui garantit la conformité, automatise la gestion des dossiers et optimise le conseil client.",
    agents: [
      "Juridique : Vérification de conformité et gestion réglementaire",
      "Support : Service client premium et gestion des dossiers",
      "Analyse : Profiling clients et recommandations personnalisées",
      "Marketing : Cross-selling intelligent et campagnes ciblées",
    ],
  },
]

// --- COMPOSANTS CTA PREMIUM ---



// FloatingCTA component is imported.

export default function SectorsPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<(typeof industries)[0] | null>(null)

  useEffect(() => {
    if (selectedIndustry) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedIndustry])

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
                  src="/images/final-secteurs-v2.png"
                  alt="Secteurs d'activité"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
            <h1 className="md:text-5xl font-black tracking-tight text-balance text-3xl text-white">
              Solutions <span className="text-white">Sectorielles</span>
            </h1>
            <p className="md:text-2xl text-muted-foreground text-pretty leading-relaxed text-lg font-light max-w-3xl mx-auto">
              Chaque industrie a ses codes. Votre agent est configuré pour les maîtriser.
            </p>

            {/* HERO CTA */}
            <div className="mt-8 flex justify-center">
              <PowerCTA text="Trouver ma solution IA" subtext="Sans engagement" />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid with Robot Images */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="group relative p-0 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden shadow-lg hover:shadow-primary/20"
                onClick={() => setSelectedIndustry(industry)}
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-b from-primary/5 to-transparent">
                  <Image
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.name}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <industry.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{industry.name}</h3>
                  <p className="text-sm text-foreground/60 mb-4 line-clamp-2">{industry.tagline}</p>
                  <div className="flex items-center text-primary text-sm font-bold group-hover:gap-2 transition-all">
                    Voir la solution <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Final */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <Card className="p-12 bg-gradient-to-br from-primary/10 to-indigo-900/40 border-primary/20 text-center shadow-2xl relative overflow-hidden">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground relative z-10">Votre secteur n'est pas listé ?</h2>
            <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto relative z-10">
              Nous créons des solutions IA sur-mesure pour tous les secteurs d'activité.
            </p>
            <div className="relative z-10 flex justify-center">
              <PowerCTA text="Discuter de mon besoin spécifique" />
            </div>
          </Card>
        </div>
      </section>

      {/* Detailed Industry Modal */}
      <Dialog open={!!selectedIndustry} onOpenChange={() => setSelectedIndustry(null)}>
        <DialogContent className="bg-card border-border max-w-5xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-lg bg-primary/10 flex-shrink-0">
                {selectedIndustry && <selectedIndustry.icon className="w-8 h-8 text-primary" />}
              </div>
              <div>
                <DialogTitle className="text-3xl text-foreground mb-2">{selectedIndustry?.name}</DialogTitle>
                <p className="text-lg text-primary font-medium">{selectedIndustry?.tagline}</p>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-8 py-6">
            {/* Problem */}
            <div>
              <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-chart-1 rounded-full" />
                La Problématique
              </h4>
              <p className="text-foreground/80 leading-relaxed text-lg mb-4">{selectedIndustry?.problem}</p>
              <div className="grid md:grid-cols-2 gap-3">
                {selectedIndustry?.challenges.map((challenge, idx) => (
                  <div key={idx} className="flex gap-3 text-foreground/70 bg-white/5 p-3 rounded-md">
                    <div className="w-2 h-2 bg-chart-1 rounded-full flex-shrink-0 mt-2" />
                    <span>{challenge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Solution */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 border border-primary/10">
              <h4 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <div className="w-1 h-6 bg-primary rounded-full" />
                La Solution MKDigital
              </h4>
              <p className="text-foreground/80 leading-relaxed mb-6 text-lg">{selectedIndustry?.solution}</p>
              <div className="space-y-4">
                <div className="font-bold text-foreground mb-2 text-lg">Compétences Déployées :</div>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedIndustry?.agents.map((agent, idx) => (
                    <div key={idx} className="flex gap-3 items-center bg-card/60 p-3 rounded-lg border border-primary/10">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground/90 font-medium">{agent}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Modal */}
            <div className="pt-6 flex justify-center border-t border-border">
              <PowerCTA text="Transformer mon entreprise" subtext="Audit gratuit & Sans engagement" />
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Floating CTA */}
      <FloatingCTA />
    </main>
  )
}
