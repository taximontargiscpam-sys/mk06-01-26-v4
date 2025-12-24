import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "FAQ Technique & Commerciale | MKDigital",
    description: "Réponses factuelles sur l'intégration d'agents IA : Latence, RGPD, Coûts, Intégrations CRM.",
}

export default function FAQPage() {
    const faqs = [
        {
            question: "Quelle est la latence moyenne de l'agent IA ?",
            answer: "La latence moyenne mesurée est de 800ms à 1200ms entre la fin de la phrase de l'utilisateur et la réponse de l'IA. Cette latence inclut la transcription (STT), le traitement LLM et la synthèse vocale (TTS)."
        },
        {
            question: "Les données sont-elles hébergées en France ?",
            answer: "Oui. L'infrastructure serveurs est située à Paris (France). Les données transitent via des protocoles chiffrés. MKDigital est conforme au RGPD."
        },
        {
            question: "Quels CRM sont compatibles nativement ?",
            answer: "Les intégrations natives actuelles incluent : Hubspot, Salesforce, Pipedrive, et Zoho CRM. D'autres intégrations sont possibles via API REST ou Webhooks (Zapier/Make)."
        },
        {
            question: "Quel est le modèle de tarification ?",
            answer: "Le modèle économique repose sur deux composantes : des frais d'installation (Setup) uniques pour la configuration de l'infrastructure, et un coût à la minute pour la consommation téléphonique/IA."
        },
        {
            question: "L'IA peut-elle gérer les accents régionaux ?",
            answer: "Oui. Le moteur de transcription (Whisper v3) est entraîné sur un large corpus de dialectes et d'accents francophones, assurant un taux de compréhension supérieur à 95%."
        }
    ]

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    }

    return (
        <main className="min-h-screen bg-background">
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <section className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
                <h1 className="text-4xl font-bold mb-12">FAQ Technique & Commerciale</h1>

                <div className="space-y-8">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-white/10 pb-8">
                            <h2 className="text-xl font-semibold mb-3">{faq.question}</h2>
                            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    )
}
