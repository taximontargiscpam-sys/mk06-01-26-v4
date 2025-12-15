import { SEO_DATA } from "@/lib/seo-data"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, Phone, Star, MapPin, Sparkles } from "lucide-react"

// Génération statique des routes à la compilation (SSG)
export async function generateStaticParams() {
    const params = []
    for (const metier of SEO_DATA.metiers) {
        for (const ville of SEO_DATA.villes) {
            params.push({ metier: metier.slug, ville: ville.slug })
        }
    }
    return params
}

// Génération des métadonnées SEO
export async function generateMetadata({ params }: { params: { metier: string; ville: string } }): Promise<Metadata> {
    const metier = SEO_DATA.metiers.find((m) => m.slug === params.metier)
    const ville = SEO_DATA.villes.find((v) => v.slug === params.ville)

    if (!metier || !ville) return {}

    return {
        title: `Agent IA pour ${metier.label} à ${ville.label} | Standard Automatisé 24/7`,
        description: `Solution d'Agent IA Vocal pour ${metier.label} à ${ville.label}. ${metier.accroche} Automatisez votre standard et encaissez plus de revenus. Audit Gratuit.`,
    }
}

export default function SeoLandingPage({ params }: { params: { metier: string; ville: string } }) {
    const metier = SEO_DATA.metiers.find((m) => m.slug === params.metier)
    const ville = SEO_DATA.villes.find((v) => v.slug === params.ville)

    if (!metier || !ville) return null

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero Section Localisé */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full opacity-20 transform -translate-y-1/2" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm md:text-base text-primary mb-6">
                        <MapPin className="w-4 h-4" />
                        <span className="font-medium">Disponible pour les {metier.label} à {ville.label} ({ville.dept})</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                        L'Agent IA Vocal pour <br />
                        <span className="text-primary">{metier.label} à {ville.label}</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
                        {metier.accroche}
                        <br />
                        <span className="text-white mt-2 block">Ne perdez plus un seul appel à {ville.label}.</span>
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg h-14 px-8" asChild>
                            <Link href="/reservation">Essayer mon Agent {metier.singular} (Gratuit)</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10 text-lg h-14 px-8" asChild>
                            <Link href="/reservation">Écouter une démo</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Problem / Solution Specifique */}
            <section className="py-20 bg-white/5">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Le problème des {metier.label} à {ville.label}</h2>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                                        <span className="text-red-500 text-sm">✕</span>
                                    </div>
                                    <p className="text-muted-foreground">Standard saturé aux heures de pointe.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                                        <span className="text-red-500 text-sm">✕</span>
                                    </div>
                                    <p className="text-muted-foreground">Clients frustrés qui partent chez le concurrent.</p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-1">
                                        <span className="text-red-500 text-sm">✕</span>
                                    </div>
                                    <p className="text-muted-foreground">Perte de chiffre d'affaires quotidien.</p>
                                </li>
                            </ul>
                        </div>

                        <div className="p-8 rounded-2xl bg-black border border-white/10 relative">
                            <div className="absolute -top-4 -right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                Solution MKDigital
                            </div>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Sparkles className="w-6 h-6 text-primary" />
                                Votre Assistant {metier.singular} 2.0
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                {metier.benefice}
                                <br />
                                Notre IA répond instantanément, qualifie la demande et prend le rendez-vous.
                            </p>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-2 text-sm">
                                    <Check className="w-4 h-4 text-primary" /> 24/7 sans pause ni vacances
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <Check className="w-4 h-4 text-primary" /> Intégration agenda (Doctolib, Google...)
                                </li>
                                <li className="flex items-center gap-2 text-sm">
                                    <Check className="w-4 h-4 text-primary" /> Numéro local {ville.dept} inclus
                                </li>
                            </ul>
                            <Button className="w-full" asChild>
                                <Link href="/reservation">Lancer l'installation à {ville.label}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Final */}
            <section className="py-20 text-center">
                <h2 className="text-3xl font-bold mb-6">Prêt à dominer le marché à {ville.label} ?</h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                    Rejoignez les {metier.label} innovants qui ont déjà automatisé leur standard.
                </p>
                <Button size="lg" className="bg-white text-black hover:bg-gray-200" asChild>
                    <Link href="/reservation">Audit Gratuit pour {metier.singular}</Link>
                </Button>
            </section>
        </div>
    )
}
