"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqItems = [
    {
        question: "L'Agent IA vocal est-il vraiment gratuit ?",
        answer: "OUI. En prenant rendez-vous pour votre audit, vous repartez avec votre Agent IA Vocal de Niveau 1, entièrement personnalisé pour votre entreprise. Nous incluons également un numéro de téléphone dédié (09) et du crédit de communication pour démarrer immédiatement. C'est notre investissement pour vous prouver la valeur du système."
    },
    {
        question: "Puis-je arrêter quand je veux ?",
        answer: "Absolument. Il n'y a aucun engagement de durée. Nous sommes convaincus que les résultats (appels traités, CA généré) vous feront rester, mais vous gardez le contrôle total."
    },
    {
        question: "Est-ce compliqué à installer ?",
        answer: "Zéro technique pour vous. Notre équipe s'occupe de toute la configuration technique lors de l'appel de mise en place. Vous n'avez qu'à nous décrire votre offre, nous programmons l'intelligence de l'agent pour vous."
    },
    {
        question: "L'IA va-t-elle remplacer mes équipes actuelles ?",
        answer: "Non. Notre infrastructure est conçue pour augmenter la productivité de vos équipes, pas pour les remplacer. Votre Agent IA gère les tâches répétitives et chronophages (réception d'appels, qualification initiale, prises de RDV), permettant à vos collaborateurs de se concentrer sur les tâches à haute valeur ajoutée et la relation client complexe."
    },
    {
        question: "Est-ce compatible avec mes outils existants ?",
        answer: "Absolument. Nos systèmes s'intègrent nativement à la plupart des CRM, agendas (Google Calendar, Outlook, Calendly...) et outils de téléphonie du marché. De plus, nous fournissons un numéro dédié (09) qui peut transférer les appels vers vos lignes actuelles sans aucune interruption de service."
    },
    {
        question: "Quand verrai-je les premiers résultats ?",
        answer: "Immédiatement. Dès l'activation de votre Agent d'Accueil (Niveau 1), 100% de vos appels entrants sont décrochés et qualifiés. Vous stoppez l'hémorragie de perte de prospects dès le premier jour. L'infrastructure complète de croissance (Niveau 2 & 3) monte en puissance sur les premières semaines."
    },
    {
        question: "Qu'est-ce qu'une 'Infrastructure de Revenus Autonome' ?",
        answer: "C'est un écosystème complet qui allie l'acquisition de trafic à son traitement automatique (Agents IA). Contrairement à une agence classique qui vous envoie juste des leads, nous construisons la machine qui les capture, les qualifie et les convertit en rendez-vous ou ventes, 24h/24 et 7j/7."
    },
    {
        question: "Pourquoi l'audit est-il gratuit ?",
        answer: "Nous croyons à la preuve par la valeur. Cet audit nous permet d'identifier précisément vos points de friction actuels (appels manqués, taux de conversion bas). C'est un investissement de notre part : nous savons que lorsque vous verrez le potentiel de gain chiffré, vous voudrez activer nos solutions."
    }
]

export function FAQSection() {
    return (
        <section className="py-24 bg-background border-t border-white/5 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase">Clarification</h2>
                    <h3 className="text-3xl md:text-4xl font-black text-white">
                        Questions Fréquentes
                    </h3>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqItems.map((item, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border border-white/10 bg-white/5 rounded-lg px-6 data-[state=open]:bg-white/10 transition-colors">
                            <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-primary transition-colors py-6">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
