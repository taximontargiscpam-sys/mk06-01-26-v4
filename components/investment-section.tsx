"use client"

import { TrendingUp, Database, RefreshCcw } from "lucide-react"

export function InvestmentSection() {
    return (
        <section className="py-24 bg-card border-y border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                            Transformez vos dépenses en <span className="text-primary">actif.</span>
                        </h2>
                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                Quand une action marketing s’arrête, les résultats s’arrêtent souvent avec elle.
                                Notre objectif est de mettre en place un système qui améliore votre performance au fil du temps.
                            </p>
                            <p>
                                Vous n’achetez pas un service isolé.
                                Vous installez une base commerciale structurée, mesurable, et optimisable.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        <div className="flex gap-4 p-6 rounded-2xl bg-background border border-white/5 hover:border-primary/20 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <TrendingUp className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Structure le traitement</h3>
                                <p className="text-muted-foreground text-sm">Ne laissez plus aucune demande sans réponse immédiate.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 p-6 rounded-2xl bg-background border border-white/5 hover:border-primary/20 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0">
                                <Database className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Exploite la donnée</h3>
                                <p className="text-muted-foreground text-sm">Conserve et active intelligemment votre base client.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 p-6 rounded-2xl bg-background border border-white/5 hover:border-primary/20 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
                                <RefreshCcw className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg mb-1">Améliore la conversion</h3>
                                <p className="text-muted-foreground text-sm">Une optimisation continue basée sur des résultats mesurables.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
