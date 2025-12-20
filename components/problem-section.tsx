"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { InlineLeadForm } from "@/components/inline-lead-form"

export function ProblemSection() {
    return (
        <section className="py-32 bg-muted/20 border-y border-white/5 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-5xl mx-auto space-y-16">

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center space-y-6"
                    >
                        <h2 className="text-sm font-bold tracking-[0.3em] text-white uppercase">Le Constat</h2>
                        <h3 className="text-3xl md:text-4xl font-black text-white max-w-4xl mx-auto leading-tight">
                            Le Problème n’est pas le Trafic. <br className="hidden md:block" />
                            <span className="text-white">C’est le Traitement.</span>
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid md:grid-cols-2 gap-12 md:gap-24 items-center"
                    >
                        <div className="space-y-8 text-xl text-muted-foreground leading-relaxed font-light">
                            <p>
                                La plupart des entreprises ne perdent pas des clients par manque de visibilité, mais par manque de réactivité.
                            </p>
                            <p>
                                Les demandes entrantes s’accumulent, les rappels sont retardés, les rendez-vous ne sont pas sécurisés.
                            </p>
                            <div className="pl-6 border-l-2 border-primary">
                                <p className="font-bold text-foreground text-2xl">
                                    Avoir du trafic ne suffit plus. Avoir un site ne suffit plus.
                                </p>
                            </div>
                            <p>
                                Il faut une structure capable de <span className="font-bold text-white">capturer, qualifier et convertir</span> en continu, même quand vous êtes occupé.
                            </p>

                            <div className="pt-4">
                                <InlineLeadForm />
                            </div>
                        </div>

                        <Card className="p-10 bg-gradient-to-br from-card to-background border-white/10 shadow-2xl relative group overflow-hidden">
                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            <h4 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                                <span className="h-px flex-1 bg-white/50"></span>
                                Notre approche
                                <span className="h-px flex-1 bg-white/50"></span>
                            </h4>
                            <p className="text-foreground/90 text-lg mb-6 leading-relaxed">
                                Nous installons l’infrastructure technique complète.
                            </p>
                            <p className="text-foreground/90 text-lg leading-relaxed">
                                Ensuite, vous activez les modules de compétences nécessaires selon vos priorités opérationnelles.
                            </p>
                            <div className="pt-6">
                                <Button asChild variant="outline" className="rounded-full border-white/20 hover:bg-white/10 text-white hover:text-white bg-transparent">
                                    <Link href="/vision">Comprendre la Vision</Link>
                                </Button>
                            </div>
                        </Card>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
