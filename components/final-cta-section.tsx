"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Phone } from "lucide-react"
import Link from "next/link"

export function FinalCTASection() {
    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,0,0,0.2),transparent_50%)]" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
                        Votre démonstration commence dans 60 secondes.
                    </h2>

                    <div className="space-y-6 text-primary-foreground/90 text-xl leading-relaxed max-w-2xl mx-auto">
                        <p>
                            Ne nous croyez pas sur parole. Testez le système.
                        </p>
                        <p className="font-semibold">
                            Activez votre Agent d’Accueil (Niveau 1) : c’est offert, immédiat, et vous voyez l’impact dès aujourd’hui.
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mt-12 mb-8">
                        <h3 className="text-white font-bold mb-4 flex items-center justify-center gap-2">
                            <Phone className="w-5 h-5 animate-pulse" />
                            Ce qu'il va se passer :
                        </h3>
                        <ul className="text-left space-y-3 text-white/90 max-w-lg mx-auto text-sm">
                            <li className="flex gap-2">
                                <span className="font-bold">•</span> Attention : dès que votre rendez-vous est validé, notre Agent IA vous appelle automatiquement.
                            </li>
                            <li className="flex gap-2">
                                <span className="font-bold">•</span> Il collecte les informations essentielles pour préconfigurer votre installation.
                            </li>
                            <li className="flex gap-2">
                                <span className="font-bold">•</span> Le jour du rendez-vous, votre Agent est prêt à l’emploi, avec votre numéro dédié.
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-primary hover:bg-white/90 text-lg px-8 h-14 shadow-2xl rounded-full font-bold"
                        >
                            <Link href="https://cal.com/mkdigital/30min" target="_blank">
                                <Calendar className="mr-2 w-5 h-5" />
                                Réserver mon créneau
                            </Link>
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    )
}
