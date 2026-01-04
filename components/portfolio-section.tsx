"use client"

import { ExternalLink, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
    {
        title: "Taxi Montargis",
        category: "Transport & VTC",
        description: "Site vitrine et de réservation pour service de taxi.",
        url: "https://taximontargiscpam.mkdigitalparis.com",
        color: "bg-amber-500",
    },
    {
        title: "Auto Reparis",
        category: "Automobile",
        description: "Plateforme pour garage automobile avec prise de RDV.",
        url: "https://autoreparis.mkdigitalparis.com",
        color: "bg-red-500",
    },
    {
        title: "Maison d'Orient",
        category: "E-commerce",
        description: "Boutique en ligne élégante pour parfumerie de niche.",
        url: "https://parfum-maisondorient.vercel.app",
        color: "bg-purple-500",
    },
    {
        title: "MK Conciergerie",
        category: "Services",
        description: "Site corporate pour services de conciergerie de luxe.",
        url: "https://mk-conciergerie.vercel.app/",
        color: "bg-blue-500",
    },
    {
        title: "Pompe à Chaleur",
        category: "Énergie & Rénovation",
        description: "Landing page haute conversion pour installation de PAC.",
        url: "https://pompeachaleur.mkdigitalparis.com",
        color: "bg-green-500",
    },
    {
        title: "Expert SEA",
        category: "Marketing Digital",
        description: "Site dédié aux services d'acquisition Google Ads.",
        url: "https://sea-expert.mkdigitalparis.com",
        color: "bg-orange-500",
    },
]

export function PortfolioSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Réalisations <span className="text-white">Concrètes</span>
                    </h2>
                    <p className="text-xl text-white max-w-2xl mx-auto">
                        Découvrez les écosystèmes digitaux que nous avons déployés pour nos clients.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            className="group relative overflow-hidden border-white/10 bg-card/40 backdrop-blur-sm p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                <Globe className="w-24 h-24 text-primary/5 -mr-4 -mt-4 transform group-hover:scale-110 transition-transform duration-500" />
                            </div>

                            <div className="relative z-10 space-y-6">
                                <div className="space-y-2">
                                    <div className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-white ${project.color} bg-opacity-20 border border-white/10`}>
                                        {project.category}
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="pt-4">
                                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                                        <Button variant="outline" className="w-full gap-2 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                                            Voir le site en direct <ExternalLink className="w-4 h-4" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
