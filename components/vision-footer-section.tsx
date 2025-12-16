"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function VisionFooterSection() {
    return (
        <>
            {/* Vision Section */}
            <section className="py-32 bg-background relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-5xl mx-auto text-center space-y-12"
                    >
                        <h2 className="text-sm font-bold tracking-[0.3em] text-white uppercase">La Vision / L’Investissement</h2>
                        <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                            Transformez vos Dépenses <br />
                            <span className="text-white">En Actif.</span>
                        </h3>

                        <div className="space-y-8 text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto font-light">
                            <p>
                                Quand une action marketing s’arrête, les résultats s’arrêtent souvent avec elle.
                            </p>
                            <p>
                                Notre objectif est de mettre en place un système qui améliore votre performance au fil du temps.
                            </p>

                            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 text-left space-y-6 backdrop-blur-sm">
                                <p className="font-bold text-white text-lg">Une infrastructure qui :</p>
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span>structure votre traitement de la demande,</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span>conserve et exploite la donnée utile,</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                        <span>améliore votre conversion de façon mesurable.</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="text-2xl font-bold text-white pt-4">
                                <p>Vous n’achetez pas un service isolé.</p>
                                <p className="text-primary mt-2">Vous installez une base commerciale structurée, mesurable, et optimisable.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer / Last Call */}
            <section className="py-32 bg-background relative overflow-hidden border-t border-white/10">
                {/* Abstract background shapes */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-60" />
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" />

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto space-y-12"
                    >
                        {/* Removed FOOTER / DERNIER APPEL label as requested */}
                        <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-none">
                            Votre Démonstration <br />
                            <span className="text-white">Commence dans 60 Secondes.</span>
                        </h3>

                        <div className="space-y-8 text-xl text-gray-300 leading-relaxed font-light">
                            <p>Ne nous croyez pas sur parole. Testez le système.</p>
                            <p className="text-white font-medium">
                                Activez votre Agent d’Accueil (Niveau 1) : c’est offert, immédiat, et vous voyez l’impact dès aujourd’hui.
                            </p>

                            <div className="bg-primary/10 backdrop-blur-md p-8 rounded-2xl border border-primary/20 my-12 text-left max-w-2xl mx-auto shadow-[0_0_50px_rgba(var(--primary),0.2)]">
                                <h4 className="font-bold mb-3 text-primary flex items-center gap-2">
                                    <span className="text-2xl">⚠️</span> Attention :
                                </h4>
                                <p className="text-base text-gray-300">
                                    Dès que votre rendez-vous est validé, notre Agent IA vous appelle automatiquement.
                                    Il collecte les informations essentielles pour préconfigurer votre installation.
                                    Le jour du rendez-vous, votre Agent est prêt à l’emploi, personnalisé selon votre entreprise avec votre numéro dédié.
                                </p>
                            </div>
                        </div>

                        <Button
                            asChild
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-white font-bold text-xl px-12 py-8 h-auto rounded-full shadow-xl hover:scale-105 transition-all duration-300 border border-white/10"
                        >
                            <a
                                href="https://cal.com/mkdigital/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Réserver mon créneau
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
