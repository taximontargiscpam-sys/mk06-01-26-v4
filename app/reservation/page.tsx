"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Cal, { getCalApi } from "@calcom/embed-react"
import { Check, Calendar } from "lucide-react"

// Theme Configuration
const THEME = {
    bg: "#06101F",
    text: "#EAF0FF",
    accent: "#2D6BFF",
    border: "rgba(255,255,255,0.12)",
    muted: "rgba(234,240,255,0.72)",
    ctaMobile: "#2D6BFF"
}

export default function ReservationPage() {
    const [showStickyBar, setShowStickyBar] = useState(false)

    useEffect(() => {
        (async function () {
            const cal = await getCalApi()
            cal("ui", {
                theme: "dark",
                styles: { branding: { brandColor: "#000000" } },
                hideEventTypeDetails: false,
                layout: "month_view"
            })
        })()

        const handleScroll = () => {
            // Show sticky bar after scrolling past user defined threshold (e.g. 100px)
            setShowStickyBar(window.scrollY > 100)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToCalendar = () => {
        const calendarElement = document.getElementById("calendar")
        if (calendarElement) {
            calendarElement.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div className="min-h-screen font-sans selection:bg-blue-500/30" style={{ backgroundColor: THEME.bg, color: THEME.text }}>

            {/* 1. Header Sticky Custom */}
            <header className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md bg-[#06101F]/80" style={{ borderColor: THEME.border }}>
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="font-bold tracking-tight text-xl">MK DIGITAL</div>
                    <Button
                        onClick={scrollToCalendar}
                        className="font-medium bg-[#2D6BFF] hover:bg-[#2D6BFF]/90 text-white rounded-full px-6"
                    >
                        Réserver
                    </Button>
                </div>
            </header>

            <main className="pt-24 pb-32 space-y-20 container mx-auto px-6 md:max-w-4xl">

                {/* 2. Hero Section */}
                <section id="hero" className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        Session d’activation offerte
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                        On vous livre votre Agent IA vocal.<br />
                        <span className="text-blue-400">Avec votre numéro 09.</span>
                    </h1>

                    <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: THEME.muted }}>
                        Une seule étape : réservez un créneau. Après réservation, vous êtes rappelé automatiquement pour préparer l’activation. Ensuite : activation + test en direct.
                    </p>

                    <div className="flex flex-col items-center gap-3 py-4">
                        {["Agent IA vocal Niveau 1 activé", "Numéro 09 dédié inclus", "Rappel automatique après réservation"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-green-400" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <div className="text-sm space-y-1 opacity-60">
                        <p>Réservé aux entreprises (dirigeants / équipes).</p>
                        <p>Offre valable jusqu’au 31/12/2025.</p>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            onClick={scrollToCalendar}
                            size="lg"
                            className="w-full sm:w-auto bg-[#2D6BFF] hover:bg-[#2D6BFF]/90 text-white h-14 rounded-full text-lg font-bold px-8 shadow-lg shadow-blue-900/20"
                        >
                            Réserver un créneau d’activation
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto h-14 rounded-full text-lg border-white/10 bg-white/5 hover:bg-white/10 text-white"
                        >
                            <a href="https://cal.com/mkdigital/30min" target="_blank" rel="noopener noreferrer">
                                Ouvrir le calendrier
                            </a>
                        </Button>
                    </div>
                </section>

                {/* 3. Calendar Section */}
                <section id="calendar" className="scroll-mt-24 space-y-8">
                    <div className="text-center space-y-4">
                        <h2 className="text-3xl font-bold">Réserver votre créneau d’activation</h2>
                        <p className="text-sm text-yellow-500/90 font-medium bg-yellow-500/10 p-3 rounded-lg inline-block border border-yellow-500/20">
                            ⚠️ En réservant, vous acceptez d’être rappelé automatiquement pour préparer l’activation.
                        </p>
                    </div>

                    <div className="bg-white rounded-xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-white/5 min-h-[600px]">
                        <Cal
                            namespace="30min"
                            calLink="mkdigital/30min"
                            style={{ width: "100%", height: "100%", overflow: "scroll" }}
                            config={{ layout: 'month_view' }}
                        />
                    </div>

                    {/* Fallback */}
                    <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center space-y-4">
                        <h3 className="font-semibold">Si le calendrier ne s’affiche pas</h3>
                        <div className="text-sm opacity-70">
                            <p>Cliquez sur “Ouvrir le calendrier” ou copiez le lien ci-dessous.</p>
                        </div>
                        <code className="block bg-black/30 p-2 rounded text-xs break-all selection:bg-blue-500/50">
                            https://cal.com/mkdigital/30min
                        </code>
                        <Button
                            asChild
                            className="bg-white text-black hover:bg-gray-100 w-full md:w-auto"
                        >
                            <a href="https://cal.com/mkdigital/30min" target="_blank" rel="noopener noreferrer">
                                Ouvrir le calendrier
                            </a>
                        </Button>
                    </div>

                    <div className="flex justify-center gap-6 text-sm opacity-50">
                        <span>🔒 Sans carte bancaire</span>
                        <span>✨ Sans engagement</span>
                    </div>
                </section>

                {/* 4. Deliverables */}
                <section id="deliverables" className="space-y-8">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold">Ce qui est livré pendant la session</h2>
                        <p className="text-muted-foreground mt-2">Simple. Propre. Utilisable immédiatement.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { title: "Votre numéro 09", text: "Une ligne dédiée prête à être utilisée sur votre site, Google Business, pubs, ou en redirection." },
                            { title: "Agent IA vocal Niveau 1", text: "Accueil, présentation claire, compréhension de la demande, orientation simple." },
                            { title: "Discours calibré", text: "Une présentation courte et crédible (zone, horaires, activité) — sans blabla." },
                            { title: "Test en direct", text: "On teste et on ajuste immédiatement pour valider le comportement." }
                        ].map((item, i) => (
                            <div key={i} className="p-6 rounded-xl border border-white/10 bg-white/5 hover:border-blue-500/30 transition-colors">
                                <h3 className="font-bold text-lg mb-2 text-white">{item.title}</h3>
                                <p className="text-sm leading-relaxed" style={{ color: THEME.muted }}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 5. Fit (Two Columns) */}
                <section id="fit" className="grid md:grid-cols-2 gap-12 py-8 border-y border-white/5">
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-red-400">Si aujourd’hui…</h3>
                        <ul className="space-y-3">
                            {[
                                "Vous perdez des demandes quand vous êtes occupé",
                                "Vous répondez trop tard (même avec la meilleure volonté)",
                                "Votre accueil varie selon la charge",
                                "Vous perdez du temps sur des appels non utiles"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm opacity-80">
                                    <span className="text-red-400 font-bold">•</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold text-green-400">Alors cette activation…</h3>
                        <ul className="space-y-3">
                            {[
                                "Stabilise votre accueil immédiatement",
                                "Rend le premier contact plus propre et crédible",
                                "Crée une base sur laquelle on peut ajouter des compétences",
                                "Réduit la perte liée au traitement"
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-sm opacity-80">
                                    <span className="text-green-400 font-bold">•</span> {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* 6. Next Steps */}
                <section className="bg-gradient-to-br from-blue-900/20 to-transparent p-8 rounded-2xl border border-blue-500/20 text-center space-y-6">
                    <h2 className="text-2xl font-bold">Après l’activation</h2>
                    <p className="opacity-80 max-w-lg mx-auto">Ce que vous activez ici est la brique de base. Ensuite, si vous le souhaitez :</p>
                    <ul className="text-left max-w-md mx-auto space-y-2 text-sm opacity-70 list-disc pl-5">
                        <li>Ajouter des compétences (qualification, RDV, relances…) selon vos besoins</li>
                        <li>Ou raccorder l’agent à une infrastructure complète (acquisition → conversion → suivi)</li>
                    </ul>
                    <Button onClick={scrollToCalendar} className="bg-[#2D6BFF] hover:bg-[#2D6BFF]/90 text-white rounded-full px-8">
                        Réserver un créneau
                    </Button>
                </section>

                {/* 7. FAQ */}
                <section id="faq" className="space-y-8">
                    <h2 className="text-2xl font-bold text-center">Questions rapides</h2>
                    <div className="space-y-4">
                        {[
                            { q: "C’est une démo ?", a: "Non. C’est une activation technique : configuration, connexion du 09, test, livraison." },
                            { q: "Vous travaillez partout en France ?", a: "Oui." },
                            { q: "Vous êtes basés où ?", a: "À Asnières." },
                            { q: "Je peux réserver si je suis un particulier ?", a: "Non. Cette session est réservée aux entreprises." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors">
                                <h3 className="font-bold text-white mb-2">{item.q}</h3>
                                <p className="text-sm opacity-70">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* 8. Final CTA */}
                <section className="text-center space-y-6 pt-12 pb-24">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">Réservez. On active. On livre.</h2>
                    <p className="text-xl opacity-60">Une session courte. Un résultat clair.</p>
                    <Button
                        onClick={scrollToCalendar}
                        size="lg"
                        className="bg-[#2D6BFF] hover:bg-[#2D6BFF]/90 text-white h-16 rounded-full text-xl font-bold px-12 shadow-2xl shadow-blue-500/20 scale-105 hover:scale-110 transition-transform"
                    >
                        Réserver maintenant
                    </Button>
                </section>

                {/* Footer */}
                <footer className="text-center text-xs opacity-40 space-y-2 pb-24 border-t border-white/5 pt-12">
                    <p className="font-bold">MK DIGITAL</p>
                    <p>Réservé aux entreprises.</p>
                    <p>En réservant, vous acceptez d’être rappelé automatiquement pour préparer l’activation.</p>
                </footer>

            </main>

            {/* Sticky Mobile Bar */}
            <div className={`fixed bottom-0 left-0 right-0 p-4 bg-[#06101F] border-t border-white/10 flex gap-3 md:hidden transition-transform duration-300 z-50 ${showStickyBar ? 'translate-y-0' : 'translate-y-full'}`}>
                <Button
                    asChild
                    variant="outline"
                    className="flex-1 border-white/10 bg-white/5 text-white"
                >
                    <a href="https://cal.com/mkdigital/30min" target="_blank" rel="noopener noreferrer">
                        Ouvrir
                    </a>
                </Button>
                <Button
                    onClick={scrollToCalendar}
                    className="flex-[2] bg-[#2D6BFF] text-white font-bold"
                >
                    Réserver
                </Button>
            </div>

        </div>
    )
}
