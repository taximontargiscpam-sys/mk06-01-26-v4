
import { notFound } from "next/navigation"
import { industries } from "@/lib/industries"
import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Phone, ArrowRight, XCircle } from "lucide-react"

// Force static generation for these paths
export async function generateStaticParams() {
    return industries.map((industry) => ({
        slug: industry.slug,
    }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const industry = industries.find((i) => i.slug === params.slug)
    if (!industry) return {}

    return {
        title: industry.title,
        description: industry.metaDescription,
        keywords: industry.keywords,
    }
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
    const industry = industries.find((i) => i.slug === params.slug)

    if (!industry) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
            <Navigation />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-sm font-medium">Solution Spécialisée {industry.slug.charAt(0).toUpperCase() + industry.slug.slice(1)}</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 max-w-4xl mx-auto">
                        {industry.heroTitle}
                    </h1>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                        {industry.heroSubtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="h-12 px-8 text-base bg-primary hover:bg-primary/90 text-white rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)]" asChild>
                            <a href="/reservation">Réserver une Démo</a>
                        </Button>
                        <Button size="lg" variant="outline" className="h-12 px-8 text-base rounded-full border-white/10 hover:bg-white/5" asChild>
                            <a href="/contact">Parler à un Expert</a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Problem / Solution */}
            <section className="py-20 bg-card/30 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
                        {/* Pain */}
                        <Card className="p-8 bg-red-500/5 border-red-500/20 backdrop-blur-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <XCircle className="w-24 h-24 text-red-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-red-400 mb-4">Le Problème Actuel</h3>
                            <p className="text-lg text-foreground/80 leading-relaxed">
                                "{industry.painPoint}"
                            </p>
                            <ul className="mt-6 space-y-3">
                                <li className="flex items-center gap-3 text-red-300/80">
                                    <XCircle className="w-5 h-5 flex-shrink-0" />
                                    clients perdus vers la concurrence
                                </li>
                                <li className="flex items-center gap-3 text-red-300/80">
                                    <XCircle className="w-5 h-5 flex-shrink-0" />
                                    interruptions constantes
                                </li>
                            </ul>
                        </Card>

                        {/* Gain */}
                        <Card className="p-8 bg-green-500/5 border-green-500/20 backdrop-blur-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <CheckCircle2 className="w-24 h-24 text-green-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-green-400 mb-4">La Solution MKDigital</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <span className="font-bold block text-foreground">{industry.benefit1}</span>
                                        <span className="text-sm text-foreground/60">Automatisé à 100%</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <span className="font-bold block text-foreground">{industry.benefit2}</span>
                                        <span className="text-sm text-foreground/60">Sans intervention humaine</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <span className="font-bold block text-foreground">{industry.benefit3}</span>
                                        <span className="text-sm text-foreground/60">Gain de temps immédiat</span>
                                    </div>
                                </li>
                            </ul>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 relative">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-balance">
                        Prêt à moderniser votre activité de <span className="text-primary">{industry.slug}</span> ?
                    </h2>
                    <Button size="lg" className="h-14 px-10 text-lg bg-white text-black hover:bg-white/90 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all" asChild>
                        <a href="/reservation" className="flex items-center gap-2">
                            <Phone className="w-5 h-5" />
                            Réserver mon Audit Gratuit
                        </a>
                    </Button>
                    <p className="mt-6 text-muted-foreground">
                        Installation en 48h. Sans engagement de durée.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    )
}
