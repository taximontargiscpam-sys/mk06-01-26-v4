"use client"

import { Card } from "@/components/ui/card"
import { Shield, Brain, Diamond } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PowerCTA } from "@/components/power-cta"

export function GrowthSystemSection() {
    return (
        <section id="growth-system" className="py-32 relative overflow-hidden bg-background">
            {/* Background Ambience */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-20 space-y-6"
                >
                    <h2 className="text-sm font-bold tracking-[0.3em] text-white uppercase">L’Offre Starter</h2>
                    <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                        Le “Growth System” <br />
                        <span className="text-white">Votre Avantage Concurrentiel Immédiat</span>
                    </h3>
                    <p className="text-xl text-muted-foreground font-light">
                        Pourquoi attendre, alors qu’on peut valider un système en quelques jours ?
                    </p>
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="grid md:grid-cols-3 gap-8 perspective-1000"
                >
                    {/* Card 1 */}
                    <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0 } }}>
                        <Card className="group h-full relative p-8 bg-white/5 border-white/5 backdrop-blur-3xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-primary/50 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Diamond className="w-7 h-7 text-primary" />
                            </div>
                            <h4 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors">Acquisition Pré-Lancée</h4>
                            <div className="space-y-4 text-gray-400 group-hover:text-gray-300 transition-colors">
                                <p>
                                    Une infrastructure sans demandes ne produit pas de résultats.
                                </p>
                                <p>
                                    Nous lançons le système avec un budget média initial intégré, injecté dès le départ dans vos campagnes.
                                </p>
                                <div className="text-sm font-semibold text-primary bg-primary/10 p-4 rounded-xl border border-primary/20 mt-4">
                                    Objectif : générer des demandes, couvrir votre zone, et mesurer ce qui convertit immédiatement.
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0 } }}>
                        <Card className="group h-full relative p-8 bg-white/5 border-white/5 backdrop-blur-3xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-primary/50 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Brain className="w-7 h-7 text-primary" />
                            </div>
                            <h4 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors">Architecture de Conversion Digitale</h4>
                            <div className="space-y-4 text-gray-400 group-hover:text-gray-300 transition-colors">
                                <p>
                                    Nous refondons votre présence digitale avec un objectif unique : la performance commerciale.
                                </p>
                                <p>
                                    Chaque visite est suivie, chaque demande est centralisée, chaque interaction déclenche un traitement clair.
                                </p>
                                <div className="text-sm font-semibold text-primary bg-primary/10 p-4 rounded-xl border border-primary/20 mt-4">
                                    Objectif : Transformer le trafic froid en prospects qualifiés via des funnels de conversion optimisés.
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div variants={{ hidden: { opacity: 0, y: 50 }, show: { opacity: 1, y: 0 } }}>
                        <Card className="group h-full relative p-8 bg-white/5 border-white/5 backdrop-blur-3xl hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-primary/50 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Shield className="w-7 h-7 text-primary" />
                            </div>
                            <h4 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors">Automatisation de l’E-Réputation</h4>
                            <div className="space-y-4 text-gray-400 group-hover:text-gray-300 transition-colors">
                                <p>
                                    Le système identifie les clients satisfaits et automatise la collecte d’avis.
                                </p>
                                <p>
                                    Résultat : plus d’avis, plus de confiance, plus de demandes, avec moins d’effort.
                                </p>
                                <div className="text-sm font-semibold text-primary bg-primary/10 p-4 rounded-xl border border-primary/20 mt-4">
                                    Objectif : Générer un cercle vertueux organique qui s’auto-alimente et croît comme une boule de neige.
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </motion.div>

                <div className="mt-16 text-center flex flex-col items-center gap-12">
                    <Button asChild size="lg" className="rounded-full px-8 bg-transparent hover:bg-white/5 text-white border border-white/20">
                        <Link href="/services">Explorer le Growth System</Link>
                    </Button>

                    {/* Embedded Lead Form / CTA */}
                    <div className="flex justify-center w-full">
                        <PowerCTA text="Obtenir mon Agent Vocal Gratuit" subtext="Offre valable jusqu'au 31/12/2025" />
                    </div>
                </div>
            </div>
        </section>
    )
}
