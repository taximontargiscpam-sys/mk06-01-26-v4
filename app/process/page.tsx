import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Processus d'Intégration | MKDigital",
    description: "Étapes de déploiement de l'infrastructure IA : Audit, Configuration, Test, Production.",
}

export default function ProcessPage() {
    const steps = [
        {
            title: "1. Audit Technique & Éligibilité",
            description: "Analyse de votre infrastructure téléphonique actuelle (VoIP, PABX) et de vos volumes d'appels. Vérification de la faisabilité technique."
        },
        {
            title: "2. Architecture & Scripting",
            description: "Définition de l'arbre décisionnel de l'IA (le 'Prompt System'). Configuration des intégrations API (Calendly, CRM)."
        },
        {
            title: "3. Phase de Test (Sandbox)",
            description: "Déploiement sur un numéro provisoire. Tests de charge et de cas limites (bruit de fond, interruptions, accents)."
        },
        {
            title: "4. Mise en Production (Go Live)",
            description: "Redirection de vos lignes vers le numéro IA. Surveillance active des permières 48h. Ajustement des seuils de sensibilité."
        }
    ]

    return (
        <main className="min-h-screen bg-background">
            <Navigation />

            <section className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl font-bold mb-4">Processus d'Intégration</h1>
                <p className="text-lg text-muted-foreground mb-16">
                    Protocole standard de déploiement d'une infrastructure vocale.
                </p>

                <div className="space-y-12 relative border-l border-primary/20 ml-4 pl-12">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            <div className="absolute -left-[54px] top-1 h-4 w-4 rounded-full bg-primary border-4 border-background" />
                            <h2 className="text-2xl font-semibold mb-4">{step.title}</h2>
                            <p className="text-muted-foreground leading-relaxed text-lg">{step.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 p-6 bg-secondary/20 rounded-lg border border-white/5">
                    <h3 className="font-bold mb-2">Délais Moyens</h3>
                    <p className="text-sm text-muted-foreground">Une intégration standard (Niveau 1) prend 48h ouvrées. Une intégration complexe (CRM sur mesure) nécessite 5 à 10 jours ouvrés.</p>
                </div>
            </section>

            <Footer />
        </main>
    )
}
