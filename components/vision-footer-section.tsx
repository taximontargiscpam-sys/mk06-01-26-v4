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

        </>
    )
}
