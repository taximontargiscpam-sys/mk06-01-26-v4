"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useLeadModal } from "@/components/lead-modal-context"

export function LevelsSection() {
    const { openModal } = useLeadModal()
    return (
        <section className="py-24 bg-background relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto mb-16 space-y-6"
                >
                    <h2 className="text-sm font-bold tracking-[0.3em] text-white uppercase">L'Intelligence Modulaire</h2>
                    <h3 className="text-3xl md:text-4xl font-black text-white">
                        Un Seul Agent. <span className="text-white">Une Évolution Permanente.</span>
                    </h3>
                    <p className="text-xl text-muted-foreground font-light">
                        Une intelligence centrale qui s'adapte à votre maturité stratégique.
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
                            transition: { staggerChildren: 0.25 }
                        }
                    }}
                    className="space-y-8"
                >
                    {/* Level 1 - Protection (Blue/Silver) */}
                    <motion.div variants={{ hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } } }}>
                        <Card className="group p-8 border border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)]">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="md:w-1/3">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm mb-4 border border-primary/20">
                                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                        NIVEAU 1
                                    </div>
                                    <h4 className="text-2xl font-bold mb-2 text-white">La Protection</h4>
                                    <p className="text-primary/60 text-sm">Votre Agent active sa Compétence Réceptionniste.</p>
                                </div>
                                <div className="md:w-2/3 space-y-4">
                                    <p className="text-gray-300 text-lg">
                                        Il veille sur vos lignes, intercepte les flux et protège votre concentration.
                                    </p>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="flex items-start gap-2 text-gray-400 group-hover:text-primary/90 transition-colors">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">Le gain : Une sérénité opérationnelle immédiate.</span>
                                        </div>
                                        <div className="flex items-start gap-2 text-gray-400 group-hover:text-primary/90 transition-colors">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">Inclus : Numéro dédié (09) pour préserver votre installation actuelle</span>
                                        </div>
                                        <div className="flex items-start gap-2 text-gray-400 group-hover:text-primary/90 transition-colors">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">Crédit inclus au démarrage</span>
                                        </div>
                                        <div className="flex items-start gap-2 text-gray-400 group-hover:text-primary/90 transition-colors">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <span className="text-sm">Personnalisé selon votre entreprise</span>
                                        </div>
                                    </div>
                                    <div className="pt-4">
                                        <Button onClick={openModal} variant="link" className="text-primary p-0 h-auto font-bold hover:text-primary/80 flex items-center gap-2">
                                            Prendre rendez-vous <span className="text-lg">→</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Level 2 - Transformation (Indigo/Gold Accent) */}
                    <motion.div variants={{ hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } } }}>
                        <Card className="group p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="md:w-1/3">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white font-bold text-sm mb-4 border border-white/20">
                                        <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                                        NIVEAU 2
                                    </div>
                                    <h4 className="text-2xl font-bold mb-2 text-white">La Transformation</h4>
                                    <p className="text-white/60 text-sm">De l'Audit à l'Automatisation.</p>
                                </div>
                                <div className="md:w-2/3 space-y-4">
                                    <p className="text-gray-300 text-lg">
                                        Nous ne nous contentons pas d'ajouter des outils et automatisations. Nous réalisons un Audit 360° pour définir la stratégie gagnante.
                                    </p>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Ensuite, nous déployons les infrastructures digitales nécessaires et activons les actions marketing cohérentes avec vos objectifs. L'Agent IA vient alors se greffer sur cette structure saine pour piloter la performance.
                                    </p>
                                    <div className="flex items-start gap-2 bg-white/5 p-4 rounded-lg border border-white/10 mt-2">
                                        <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                                        <span className="text-sm font-medium text-white/80">Résultat : Un écosystème cohérent, taillé sur-mesure pour votre marché.</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Level 3 - Expansion (Dark/Slate) */}
                    <motion.div variants={{ hidden: { opacity: 0, x: -50 }, show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 50 } } }}>
                        <Card className="group p-8 border border-slate-700 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800/50 hover:border-slate-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(148,163,184,0.1)]">
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                <div className="md:w-1/3">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-700/50 text-slate-300 font-bold text-sm mb-4 border border-slate-600">
                                        <div className="w-2 h-2 rounded-full bg-slate-400 animate-pulse" />
                                        NIVEAU 3
                                    </div>
                                    <h4 className="text-2xl font-bold mb-2 text-white">L'Expansion</h4>
                                    <p className="text-slate-400 text-sm">Votre Agent active ses Compétences Expertises.</p>
                                </div>
                                <div className="md:w-2/3 space-y-4">
                                    <p className="text-gray-300 text-lg">
                                        Pour les défis spécifiques, nous intégrons des protocoles avancés et l'hybridons avec nos équipes stratégiques.
                                    </p>
                                    <div className="flex items-start gap-2 text-gray-400 group-hover:text-white transition-colors">
                                        <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                                        <span className="text-sm font-medium">Fonctions : Délégation haute performance adaptée à votre industrie.</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </motion.div>

                <div className="mt-16 text-center">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base font-semibold shadow-lg shadow-primary/20">
                        <Link href="/agents">Explorer les détails</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
