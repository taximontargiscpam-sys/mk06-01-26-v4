"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import {
  Bot,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Search,
  PenTool,
  ShoppingCart,
  TrendingUp,
  UserCog,
  Mail,
  Briefcase,
  Calendar,
  RefreshCcw,
  UserX,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { PowerCTA } from "@/components/power-cta"
import { FloatingCTA } from "@/components/floating-cta"

const CTA_URL = "https://cal.com/mkdigital/30min"

// Liste enrichie avec les compétences concurrentes + suppression du Closer
const agents = [
  {
    name: "Réceptionniste",
    role: "Accueil et qualification 24/7",
    icon: Bot,
    shortDesc: "Gère l'accueil téléphonique 24/7, qualifie les prospects et prend les rendez-vous automatiquement.",
    fullDescription:
      "La compétence Réceptionniste permet de décrocher chaque appel manqué, de qualifier le prospect à froid, et de synchroniser les rendez-vous, 24h/24.",
    capabilities: [
      "Réponse instantanée à tous les appels entrants",
      "Qualification intelligente des prospects",
      "Prise de rendez-vous automatique (Calendly, etc.)",
      "Transfert intelligent vers le bon interlocuteur",
      "Gestion multilingue immédiate",
      "Historique complet des appels",
    ],
  },
  {
    name: "Prospection",
    role: "Génération de leads qualifiés",
    icon: TrendingUp,
    shortDesc: "Identifie et contacte les prospects qualifiés avec des messages personnalisés.",
    fullDescription:
      "La compétence Prospection permet d'identifier, de contacter et de qualifier des centaines de prospects pour alimenter votre pipeline commercial.",
    capabilities: [
      "Identification automatique de l'ICP",
      "Enrichissement des données prospects",
      "Campagnes multicanal (Email, LinkedIn)",
      "Scoring prédictif des leads",
      "Relances intelligentes automatisées",
      "A/B testing des messages",
    ],
  },
  {
    name: "Community Manager",
    role: "Gestion réseaux sociaux & engagement",
    icon: MessageSquare,
    shortDesc: "Anime vos communautés, modère les commentaires et publie vos contenus sur tous les réseaux.",
    fullDescription:
      "Votre Community Manager IA gère votre présence sociale 24/7, répond aux commentaires instantanément et maintient l'engagement de votre audience sans pause.",
    capabilities: [
      "Réponses aux commentaires et messages privés 24/7",
      "Planification et publication multi-plateformes",
      "Modération automatique des contenus indésirables",
      "Engagement proactif avec votre audience",
      "Analyse de sentiment de la communauté",
      "Veille des mentions de votre marque",
    ],
  },
  {
    name: "Expert SEO",
    role: "Optimisation référencement naturel",
    icon: Search,
    shortDesc: "Audit votre site, optimise les mots-clés et génère du trafic organique qualifié.",
    fullDescription:
      "La compétence SEO analyse en permanence les algorithmes de recherche pour placer votre site en tête des résultats et attirer un trafic gratuit et qualifié.",
    capabilities: [
      "Audit technique et sémantique continu",
      "Recherche et optimisation de mots-clés",
      "Optimisation du maillage interne",
      "Suivi du positionnement (SERP)",
      "Recommandations de contenu SEO",
      "Analyse des backlinks concurrents",
    ],
  },
  {
    name: "Copywriter",
    role: "Rédaction de contenu persuasif",
    icon: PenTool,
    shortDesc: "Rédige vos articles de blog, newsletters et pages de vente avec une plume experte.",
    fullDescription:
      "Le module Copywriter produit des contenus captivants alignés sur votre ton de marque, optimisés pour la conversion et le référencement.",
    capabilities: [
      "Rédaction d'articles de blog SEO",
      "Création de newsletters engageantes",
      "Rédaction de scripts vidéo et posts sociaux",
      "Optimisation des pages de vente (Landing pages)",
      "Adaptation du ton (Tone of Voice)",
      "Correction et reformulation automatique",
    ],
  },
  {
    name: "E-Commerce",
    role: "Gestion boutique & fiches produits",
    icon: ShoppingCart,
    shortDesc: "Gère votre catalogue, optimise les fiches produits et suit les commandes clients.",
    fullDescription:
      "L'expert E-Commerce automatise la gestion de votre catalogue en ligne, de la rédaction des fiches produits à la gestion des stocks et du SAV commande.",
    capabilities: [
      "Rédaction et optimisation des fiches produits",
      "Gestion synchronisée des stocks",
      "Suivi automatique des commandes et livraisons",
      "Gestion des retours et remboursements",
      "Recommandations de produits (Cross-sell)",
      "Analyse des paniers abandonnés",
    ],
  },
  {
    name: "Stratégie de Vente",
    role: "Planification et analyse commerciale",
    icon: TrendingUp,
    shortDesc: "Analyse vos performances commerciales et définit les meilleures stratégies de croissance.",
    fullDescription:
      "Ce stratège IA analyse vos données de vente pour identifier les goulots d'étranglement, optimiser vos funnels et recommander les meilleures actions commerciales.",
    capabilities: [
      "Audit complet du pipeline de vente",
      "Prévisions de ventes (Forecasting)",
      "Identification des opportunités d'Upsell",
      "Analyse de la concurrence",
      "Optimisation des prix (Pricing strategy)",
      "Rapports de performance commerciale",
    ],
  },
  {
    name: "Assistant Virtuel",
    role: "Support administratif polyvalent",
    icon: UserCog,
    shortDesc: "Gère votre agenda, vos emails et vos tâches administratives quotidiennes.",
    fullDescription:
      "Votre Assistant Virtuel personnel vous libère de la charge mentale en gérant votre emploi du temps, vos emails prioritaires et l'organisation de vos réunions.",
    capabilities: [
      "Gestion intelligente de l'agenda et réunions",
      "Tri et réponse aux emails prioritaires",
      "Organisation de déplacements",
      "Recherches d'informations rapides",
      "Prise de notes et résumés de réunions",
      "Rappels des échéances importantes",
    ],
  },
  {
    name: "Emailing",
    role: "Marketing par email automatisé",
    icon: Mail,
    shortDesc: "Conçoit et envoie des campagnes d'emailing segmentées pour fidéliser votre base.",
    fullDescription:
      "Spécialiste de la délivrabilité et de la conversion, ce module gère vos newsletters et séquences d'emails pour maximiser le taux d'ouverture et de clic.",
    capabilities: [
      "Création de séquences d'emails (Drip campaigns)",
      "Segmentation dynamique de l'audience",
      "Optimisation des objets (A/B testing)",
      "Nettoyage des listes de contacts",
      "Analyse des taux d'ouverture et clics",
      "Personnalisation avancée des contenus",
    ],
  },
  {
    name: "Business Strategist",
    role: "Intelligence économique",
    icon: Briefcase,
    shortDesc: "Fournit des analyses de marché et des conseils stratégiques pour votre développement.",
    fullDescription:
      "Votre stratège business surveille votre marché, analyse les tendances macro-économiques et vous fournit des insights pour prendre les bonnes décisions.",
    capabilities: [
      "Veille concurrentielle approfondie",
      "Analyse SWOT automatique",
      "Détection de nouvelles tendances marché",
      "Modélisation de scénarios de croissance",
      "Analyse des risques",
      "Synthèse de rapports sectoriels",
    ],
  },
  {
    name: "Devis",
    role: "Génération automatique de devis",
    icon: Bot,
    shortDesc: "Crée des devis professionnels instantanément basés sur vos critères.",
    fullDescription:
      "La compétence Devis transforme les demandes en propositions commerciales précises en quelques secondes.",
    capabilities: [
      "Génération en < 30 secondes",
      "Calculs automatiques (TVA, marges)",
      "Design personnalisé",
      "Relances automatiques des devis",
      "Intégration catalogue prix",
      "Signature électronique intégrée",
    ],
  },
  {
    name: "Support",
    role: "Service client IA 24/7",
    icon: Bot,
    shortDesc: "Répond aux questions clients 24/7 avec précision et escalade les cas complexes.",
    fullDescription:
      "Assurez une satisfaction totale avec une réponse instantanée à 85% des demandes clients, jour et nuit.",
    capabilities: [
      "Réponses instantanées multicanal",
      "Base de connaissances auto-apprenante",
      "Escalade vers humain si nécessaire",
      "Support en 50+ langues",
      "Analyse de satisfaction client",
      "Traitement des réclamations",
    ],
  },
  {
    name: "RH & Recrutement",
    role: "Sourcing et gestion talents",
    icon: Bot,
    shortDesc: "Filtre les candidatures, planifie les entretiens et gère l'administratif RH.",
    fullDescription:
      "Automatisez le sourcing candidats et la gestion administrative pour vous concentrer sur l'humain.",
    capabilities: [
      "Sourcing automatique de candidats",
      "Screening et scoring de CV",
      "Planification d'entretiens",
      "Onboarding des nouveaux employés",
      "Gestion des congés et absences",
      "Réponses aux questions RH fréquentes",
    ],
  },
  {
    name: "Facturation",
    role: "Gestion financière",
    icon: Bot,
    shortDesc: "Automatise la facturation, les relances et le suivi des paiements.",
    fullDescription:
      "Sécurisez votre trésorerie avec une facturation sans erreur et des relances d'impayés automatiques.",
    capabilities: [
      "Émission automatique de factures",
      "Relances amiables et fermes",
      "Rapprochement bancaire",
      "Suivi de trésorerie temps réel",
      "Gestion des abonnements (MRR)",
      "Export comptable",
    ],
  },
  {
    name: "Juridique",
    role: "Conformité et contrats",
    icon: Bot,
    shortDesc: "Génère vos contrats et veille à votre conformité légale (RGPD, etc).",
    fullDescription:
      "Protégez votre entreprise avec une veille juridique constante et une génération de documents certifiés.",
    capabilities: [
      "Génération de contrats types",
      "Vérification conformité RGPD",
      "Veille réglementaire secteur",
      "Gestion des CGV/CGU",
      "Analyse de risques contractuels",
      "Archivage légal sécurisé",
    ],
  },
  {
    name: "Logistique",
    role: "Optimisation supply chain",
    icon: Bot,
    shortDesc: "Optimise vos stocks, livraisons et prévisions de demande.",
    fullDescription:
      "Réduisez vos coûts de stockage et améliorez vos délais de livraison grâce à l'IA prédictive.",
    capabilities: [
      "Prévision de la demande",
      "Optimisation des stocks",
      "Planification des livraisons",
      "Gestion fournisseurs",
      "Tracking des expéditions",
      "Calcul des coûts logistiques",
    ],
  },
  {
    name: "Réactivation (Nurturing)",
    role: "Réveil de base clients",
    icon: RefreshCcw,
    shortDesc: "Réveille votre base de données dormante pour générer de nouvelles opportunités.",
    fullDescription: "La compétence Réactivation Client transforme vos contacts inactifs en opportunités de vente sans dépense publicitaire supplémentaire.",
    capabilities: [
      "Segmentation intelligente",
      "Séquences personnalisées",
      "Détection d'intention d'achat",
      "Réactivation automatique",
      "Scoring comportemental",
      "Nettoyage de base données",
    ],
  },
  {
    name: "Anti-Lapin (No-Show)",
    role: "Sécurisation de RDV",
    icon: UserX,
    shortDesc: "Sécurise vos rendez-vous et réduit le taux d'absentéisme.",
    fullDescription: "La compétence Anti-Lapin garantit la présence de vos prospects grâce à des rappels multicanaux et une confirmation active.",
    capabilities: [
      "Rappels SMS/Email/WhatsApp",
      "Confirmation active requise",
      "Replanification autonome",
      "Détection des risques d'absence",
      "Optimisation du calendrier",
      "Suivi des taux de présence",
    ],
  },
  {
    name: "Suivi (Follow-up)",
    role: "Relance commerciale",
    icon: TrendingUp,
    shortDesc: "Relance vos prospects avec pertinence jusqu'à la conversion.",
    fullDescription: "Le Suivi Commercial assure qu'aucun prospect ne tombe dans l'oubli après un premier contact.",
    capabilities: [
      "Relances contextuelles",
      "Maintien du lien relationnel",
      "Alerte closing pour les sales",
      "Séquences post-RDV",
      "Nurturing long terme",
      "Réponse aux objections simples",
    ],
  }
]

// --- COMPOSANTS CTA PREMIUM ---

// PowerCTA component is imported.

// FloatingCTA component is imported.

export default function AgentsPage() {
  const [selectedAgent, setSelectedAgent] = useState<(typeof agents)[0] | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/5 to-background" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="flex justify-center mb-10">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 bg-primary/5 shadow-[0_0_40px_rgba(37,99,235,0.3)]">
                <Image
                  src="/images/avatars/avatar-green.png"
                  alt="Nos Agents IA"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="md:text-5xl font-black tracking-tight text-balance text-3xl text-white">
                L'Intelligence <span className="text-white">Modulaire</span>
              </h1>

              <p className="md:text-2xl text-muted-foreground text-pretty leading-relaxed text-lg font-light max-w-3xl mx-auto">
                Vous activez les modules de compétences nécessaires selon vos priorités opérationnelles.
              </p>
            </div>

            <div className="flex justify-center pt-6">
              <PowerCTA text="Déployer Mon Agent" subtext="Audit 100% Gratuit" />
            </div>

            <div className="flex flex-wrap gap-4 justify-center pt-8 text-sm font-medium">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Disponibilité 24/7</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>ROI moyen 340%</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>Déploiement en 48h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agents Grid Section */}
      <section id="competences" className="py-20 relative bg-background/50">
        <div className="container mx-auto px-6">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Modules d'expertise</h2>
            <p className="text-xl text-foreground/70">
              Découvrez nos modules de compétences à la carte, conçus pour s'intégrer à votre agent IA et répondre précisément à vos objectifs de croissance, sans superflu.
            </p>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-6" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {agents.map((agent, index) => {
              const Icon = agent.icon || Bot;
              return (
                <Card
                  key={index}
                  className="group p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col h-full"
                  onClick={() => setSelectedAgent(agent)}
                >
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/5 group-hover:bg-primary/10 transition-colors w-fit">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 text-foreground">{agent.name}</h3>
                    <p className="text-sm text-foreground/60 mb-4 line-clamp-3">{agent.shortDesc}</p>
                  </div>

                  <div className="pt-4 mt-auto border-t border-border/50">
                    <div className="flex items-center text-primary text-sm font-semibold group-hover:gap-2 transition-all">
                      En savoir plus <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          {/* Middle CTA */}
          <div className="mt-16 text-center">
            <p className="text-foreground/60 mb-4">Vous ne trouvez pas la compétence exacte ?</p>
            <Button asChild variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/5 cursor-pointer">
              <a
                href="https://cal.com/mkdigital/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nous créons des modules sur mesure →
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -skew-y-3 transform origin-top-left scale-110" />
        <div className="container mx-auto px-6 relative">
          <Card className="relative overflow-hidden p-12 bg-background border-primary/20 text-center shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-xl text-foreground/70 mb-10 max-w-2xl mx-auto">
              Réservez un audit gratuit de 30 minutes. Nous identifierons ensemble les compétences prioritaires à activer pour votre activité.
            </p>

            <div className="flex justify-center">
              <PowerCTA text="Réserver mon audit stratégique" />
            </div>
            <p className="mt-6 text-sm text-foreground/50">Sans engagement. Démo en direct.</p>
          </Card>
        </div>
      </section>

      {/* Detailed Agent Modal */}
      <Dialog open={!!selectedAgent} onOpenChange={() => setSelectedAgent(null)}>
        <DialogContent className="bg-card border-border max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0">
          {/* Modal Header with Color Background */}
          <div className="bg-primary/5 p-8 border-b border-border">
            <DialogHeader>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 rounded-xl bg-background shadow-sm border border-border/50">
                  {selectedAgent && (
                    <selectedAgent.icon className="w-8 h-8 text-primary" />
                  )}
                </div>
                <div>
                  <DialogTitle className="text-3xl text-foreground">
                    {selectedAgent?.name}
                  </DialogTitle>
                  <DialogDescription className="text-lg text-primary font-medium mt-1">
                    {selectedAgent?.role}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>
          </div>

          <div className="p-8 space-y-8">
            {/* Description */}
            <div>
              <p className="text-foreground/80 leading-relaxed text-lg border-l-4 border-primary/20 pl-4">
                {selectedAgent?.fullDescription}
              </p>
            </div>

            {/* Capabilities */}
            <div>
              <h4 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                Capacités & Fonctionnalités
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {selectedAgent?.capabilities.map((capability, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-foreground/80 font-medium">{capability}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA in Modal */}
            <div className="pt-6 border-t border-border mt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="text-sm text-foreground/60">
                Cette compétence s'intègre en 24h à votre agent.
              </div>
              <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                <a
                  href="https://cal.com/mkdigital/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ajouter ce module
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Floating CTA */}
      <FloatingCTA />
    </main>
  )
}
