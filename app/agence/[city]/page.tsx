import { cities } from "@/lib/cities"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Phone, Building2 } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

// --- GENERATE STATIC PARAMS (SSG) ---
export async function generateStaticParams() {
    return cities.map((city) => ({
        city: city.slug,
    }))
}

// --- METADATA ---
export async function generateMetadata({ params }: { params: { city: string } }): Promise<Metadata> {
    const city = cities.find((c) => c.slug === params.city)
    if (!city) return {}

    return {
        title: `Agence IA ${city.name} : Automatisation & Standard Vocal | MKDigital`,
        description: `Expert en Intelligence Artificielle à ${city.name} (${city.zip}). Automatisez votre standard téléphonique et votre prospection. Intervention sur toute la région ${city.region}.`,
        keywords: [`Agence IA ${city.name}`, `Standardiste IA ${city.name}`, `Automatisation ${city.department}`, `Consulting IA ${city.region}`]
    }
}

export default function CityPage({ params }: { params: { city: string } }) {
    const city = cities.find((c) => c.slug === params.city)

    if (!city) {
        notFound()
    }

    // Schema.org - LocalBusiness
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `MKDigital ${city.name}`,
        "description": `Agence d'intégration d'Agents IA Vocaux intervenant à ${city.name} et dans le département ${city.department}.`,
        "url": `https://mkdigitalparis.com/agence/${city.slug}`,
        "areaServed": {
            "@type": "City",
            "name": city.name
        },
        "parentOrganization": {
            "@type": "Organization",
            "name": "MKDigital",
            "url": "https://mkdigitalparis.com"
        }
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* HERO LOCAL */}
            <section className="pt-32 pb-20 container mx-auto px-6 text-center relative overflow-hidden">
                {/* Background blobs */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-semibold border-primary/20 bg-primary/5 text-primary mb-6">
                        <MapPin className="w-4 h-4" /> Intervention immédiate à {city.name} ({city.zip})
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                        L'Agence d'Automatisation IA <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                            Leader à {city.name}
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 text-balance">
                        Entreprises du {city.department} : ne perdez plus aucun appel. <br />
                        Déployez votre agent IA vocal en 24h et dominez votre marché local.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="/reservation">
                            <Button size="lg" className="text-lg px-8 py-6 h-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/20 transition-all">
                                Réserver un Audit à {city.name} <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                        <Link href="/agents">
                            <Button variant="outline" size="lg" className="text-lg px-8 py-6 h-auto border-white/10 hover:bg-white/5">
                                Voir les Démos
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* POURQUOI UNE AGENCE LOCALE ? */}
            <section className="py-20 bg-white/5 border-y border-white/5">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold mb-12 text-center">Pourquoi choisir MKDigital pour votre entreprise à {city.name} ?</h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="p-8 rounded-xl bg-background border border-border/50 hover:border-primary/50 transition-colors">
                            <Building2 className="w-10 h-10 text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-3">Expertise Régionale {city.region}</h3>
                            <p className="text-muted-foreground">
                                Nous comprenons le tissu économique local du {city.department}. Que vous soyez dans l'hyper-centre de {city.name} ou en périphérie, notre infrastructure s'adapte.
                            </p>
                        </div>
                        <div className="p-8 rounded-xl bg-background border border-border/50 hover:border-primary/50 transition-colors">
                            <Phone className="w-10 h-10 text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-3">Numéro Local (01, 04, 05...)</h3>
                            <p className="text-muted-foreground">
                                Nous vous attribuons un numéro local ou national (09) pour rassurer vos clients à {city.name}. L'IA répond avec l'accent standard ou personnalisé.
                            </p>
                        </div>
                        <div className="p-8 rounded-xl bg-background border border-border/50 hover:border-primary/50 transition-colors">
                            <MapPin className="w-10 h-10 text-primary mb-4" />
                            <h3 className="text-xl font-bold mb-3">Proximité Numérique</h3>
                            <p className="text-muted-foreground">
                                Pas besoin de nous rencontrer physiquement. Toute l'installation se fait à distance en 24h. Votre standard est opérationnel demain matin.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="py-24 relative overflow-hidden text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">
                        Rejoignez les entreprises innovantes de {city.region}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                        Votre concurrent à {city.name} a peut-être déjà automatisé son standard.
                        Ne prenez pas de retard.
                    </p>
                    <Link href="/reservation">
                        <Button size="lg" className="text-lg px-10 py-6 h-auto rounded-full bg-white text-black hover:bg-gray-100">
                            Lancer l'installation <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    )
}
