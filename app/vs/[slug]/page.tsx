import { comparisons } from "@/lib/comparisons"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

// --- GENERATE STATIC PARAMS (SSG) ---
export async function generateStaticParams() {
    return comparisons.map((comp) => ({
        slug: comp.slug,
    }))
}

// --- METADATA ---
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const comparison = comparisons.find((c) => c.slug === params.slug)
    if (!comparison) return {}

    return {
        title: comparison.metaTitle,
        description: comparison.metaDescription,
    }
}

export default function ComparisonPage({ params }: { params: { slug: string } }) {
    const comparison = comparisons.find((c) => c.slug === params.slug)

    if (!comparison) {
        notFound()
    }

    // Schema.org - Table
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Table",
        "about": comparison.title,
        "description": comparison.metaDescription
        // Note: Schema.org 'Table' is limited, but having structured data on page helps. 
        // We stick to simple structure for bots.
    }

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* HERO */}
            <section className="pt-32 pb-16 container mx-auto px-6 text-center">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 mb-6">
                    Comparatif Technique 2025
                </div>
                <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                    {comparison.competitorName} <span className="text-muted-foreground">vs</span> <span className="text-primary">Agent IA</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10">
                    {comparison.heroSubtitle}
                </p>
            </section>

            {/* COMPARISON TABLE */}
            <section className="pb-20 container mx-auto px-4 md:px-6">
                <div className="rounded-2xl border border-white/10 bg-card overflow-hidden shadow-2xl">
                    {/* Table Header */}
                    <div className="grid grid-cols-3 bg-white/5 p-6 border-b border-white/10 text-sm md:text-lg font-bold">
                        <div className="text-muted-foreground self-center">Critère</div>
                        <div className="text-center text-primary self-center">MKDigital AI</div>
                        <div className="text-center text-muted-foreground self-center">{comparison.competitorName}</div>
                    </div>

                    {/* Rows */}
                    <div className="divide-y divide-white/5">
                        {comparison.comparisonPoints.map((point, idx) => (
                            <div key={idx} className="grid grid-cols-3 p-6 hover:bg-white/[0.02] transition-colors items-center">
                                <div className="font-medium text-sm md:text-base pr-4">
                                    {point.feature}
                                </div>

                                {/* MKDigital Column */}
                                <div className={`text-center font-bold text-sm md:text-base px-2 ${point.strongPoint ? 'text-green-400' : 'text-foreground'}`}>
                                    {point.strongPoint && <CheckCircle2 className="w-5 h-5 inline-block mr-2 mb-1" />}
                                    {point.mkdigital}
                                </div>

                                {/* Competitor Column */}
                                <div className="text-center text-muted-foreground text-sm md:text-base px-2 border-l border-white/5">
                                    {!point.strongPoint ?
                                        <span>{point.competitor}</span> :
                                        <span className="text-red-400/80">
                                            <XCircle className="w-4 h-4 inline-block mr-2 mb-1 opacity-70" />
                                            {point.competitor}
                                        </span>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CONCLUSION */}
                <div className="mt-12 max-w-4xl mx-auto text-center p-8 rounded-xl bg-primary/5 border border-primary/20">
                    <h3 className="text-2xl font-bold mb-4">Verdict</h3>
                    <p className="text-lg leading-relaxed text-foreground/90">
                        {comparison.conclusion}
                    </p>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <Link href="/reservation">
                        <Button size="lg" className="text-lg px-8 py-6 h-auto bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_30px_rgba(37,99,235,0.4)]">
                            Passer à l'IA maintenant <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <p className="mt-4 text-sm text-muted-foreground">Migration possible en 24h. Sans interruption de service.</p>
                </div>
            </section>

            <Footer />
        </main>
    )
}
