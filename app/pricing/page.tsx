import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Metadata } from 'next'
import { Check, X } from "lucide-react"

export const metadata: Metadata = {
    title: "Modèle de Tarification | MKDigital",
    description: "Structure des coûts : Setup, Abonnement, Consommation. Pas de frais cachés.",
}

export default function PricingPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navigation />

            <section className="pt-32 pb-20 container mx-auto px-6 max-w-5xl">
                <h1 className="text-4xl font-bold mb-6">Structure de Tarification</h1>
                <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
                    MKDigital opère sur un modèle hybride : Infrastructure (Setup) + Utilisation (Usage).
                    Nous ne communiquons pas de prix fixe sans audit préalable car chaque volumétrie est unique.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Setup */}
                    <div className="p-8 border border-white/10 rounded-xl bg-card">
                        <h2 className="text-2xl font-bold mb-4">1. Frais de Setup (Unique)</h2>
                        <p className="text-muted-foreground mb-6">Coût pour configurer l'infrastructure, scripter l'IA et connecter vos logiciels.</p>
                        <ul className="space-y-3">
                            <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary" /> Audit de l'existant</li>
                            <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary" /> Création du Prompt System</li>
                            <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary" /> Connexion API (Calendly/CRM)</li>
                            <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary" /> Achat du numéro dédié</li>
                        </ul>
                    </div>

                    {/* Usage */}
                    <div className="p-8 border border-white/10 rounded-xl bg-card">
                        <h2 className="text-2xl font-bold mb-4">2. Consommation (Mensuel)</h2>
                        <p className="text-muted-foreground mb-6">Facturation à la minute de conversation réelle. Vous ne payez que si l'IA travaille.</p>
                        <ul className="space-y-3">
                            <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary" /> Coût Télécom</li>
                            <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary" /> Coût LLM (Intelligence)</li>
                            <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary" /> Coût Voix (Synthèse Neuronal)</li>
                            <li className="flex gap-2 text-sm"><Check className="w-4 h-4 text-primary" /> Maintenance technique</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 p-6 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <h3 className="font-bold text-yellow-500 mb-2">Note sur les tarifs publics</h3>
                    <p className="text-sm text-foreground/80">
                        En raison de la variabilité des coûts techniques (LLM tokens, Telephony trunks), nous fournissons un devis précis uniquement après analyse de votre volume d'appels mensuel.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    )
}
