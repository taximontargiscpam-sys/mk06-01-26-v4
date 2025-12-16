"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2, ShieldCheck, Zap, PhoneCall, Lock, Cpu, TrendingUp, DollarSign, Timer, Mail, FileText, Database, Facebook, Megaphone } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { FAQSection } from "@/components/faq-section"

function CountdownTimer() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

    useEffect(() => {
        const targetDate = new Date("2025-12-31T23:59:59")

        const interval = setInterval(() => {
            const now = new Date()
            const difference = targetDate.getTime() - now.getTime()

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24))
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24)
                const minutes = Math.floor((difference / 1000 / 60) % 60)
                const seconds = Math.floor((difference / 1000) % 60)
                setTimeLeft({ days, hours, minutes, seconds })
            } else {
                clearInterval(interval)
            }
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 bg-gradient-to-r from-blue-900/60 to-indigo-950/60 backdrop-blur-md px-6 py-3 rounded-xl border border-blue-500/30 shadow-[0_0_20px_rgba(37,99,235,0.2)] animate-in slide-in-from-top duration-500">
            <div className="flex items-center gap-2 text-indigo-300 font-bold uppercase tracking-widest text-xs md:text-sm">
                <Timer className="w-5 h-5 animate-pulse text-indigo-400" />
                <span>Offre Agent Vocal Valable jusqu'au 31/12/2025 :</span>
            </div>
            <div className="flex gap-3 font-black text-white text-lg md:text-xl font-sans tracking-tight">
                <div className="bg-black/40 px-2 rounded backdrop-blur-sm border border-white/10">{timeLeft.days}J</div>
                <span className="opacity-50">:</span>
                <div className="bg-black/40 px-2 rounded backdrop-blur-sm border border-white/10">{timeLeft.hours.toString().padStart(2, '0')}H</div>
                <span className="opacity-50">:</span>
                <div className="bg-black/40 px-2 rounded backdrop-blur-sm border border-white/10">{timeLeft.minutes.toString().padStart(2, '0')}M</div>
                <span className="opacity-50">:</span>
                <div className="bg-black/40 px-2 rounded backdrop-blur-sm border border-white/10 text-indigo-400">{timeLeft.seconds.toString().padStart(2, '0')}S</div>
            </div>
        </div>
    )
}

export default function ReservationPage() {
    const calendarSectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        (function (C: any, A: any, L: any) {
            let p = function (a: any, ar: any) { a.q.push(ar); };
            let d = C.document;
            C.Cal = C.Cal || function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                    cal.ns = {};
                    cal.q = cal.q || [];
                    d.head.appendChild(d.createElement("script")).src = A;
                    cal.loaded = true;
                }
                if (ar[0] === L) {
                    const api = function () { p(api, arguments); };
                    const namespace = ar[1];
                    api.q = api.q || [];
                    if (typeof namespace === "string") {
                        cal.ns[namespace] = cal.ns[namespace] || api;
                        p(cal.ns[namespace], ar);
                        p(cal, ["initNamespace", namespace]);
                    } else p(cal, ar);
                    return;
                }
                p(cal, ar);
            };
        })(window, "https://app.cal.com/embed/embed.js", "init");

        // @ts-ignore
        Cal("init", "30min", { origin: "https://app.cal.com" });

        // @ts-ignore
        Cal.ns["30min"]("inline", {
            elementOrSelector: "#my-cal-inline-30min",
            config: { "layout": "month_view" },
            calLink: "mkdigital/30min",
        });

        // @ts-ignore
        Cal.ns["30min"]("ui", { "cssVarsPerTheme": { "light": { "cal-brand": "#050a30" } }, "hideEventTypeDetails": false, "layout": "month_view" });
    }, [])

    const scrollToCalendar = () => {
        calendarSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <main className="min-h-screen bg-[#050a30] text-white selection:bg-indigo-500/30 font-sans overflow-x-hidden relative">

            {/* AI TEAM FOOTPRINT - Background Integration */}
            <div className="fixed bottom-0 right-0 z-0 w-full h-[80vh] pointer-events-none opacity-25 mix-blend-lighten">
                <div className="relative w-full h-full" style={{ maskImage: 'linear-gradient(to top, black 20%, transparent 100%)' }}>
                    <Image
                        src="/robot_team.png"
                        alt="AI Infrastructure Team"
                        fill
                        className="object-cover object-top animate-pulse-slow"
                        priority
                    />
                </div>
            </div>

            {/* Background Tech Grid */}
            <div className="fixed inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>

            {/* Header */}
            <header className="fixed top-0 w-full p-4 md:p-6 flex flex-col md:flex-row justify-between items-center z-50 bg-[#050a30]/80 backdrop-blur-xl border-b border-white/5 gap-4">
                <div className="flex w-full md:w-auto justify-between items-center">
                    <div className="relative w-32 h-10 md:w-36 md:h-12 opacity-100 hover:opacity-80 transition-opacity">
                        <Image
                            src="/logo.png"
                            alt="MKDigital Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                    <Button onClick={scrollToCalendar} size="sm" className="md:hidden bg-white text-black hover:bg-gray-200 font-bold text-xs rounded-full px-4 animate-in fade-in zoom-in duration-300">
                        Réserver
                    </Button>
                </div>

                <div className="w-full md:w-auto flex justify-center md:justify-end">
                    <CountdownTimer />
                </div>
            </header>

            <div className="container mx-auto px-4 pt-48 pb-32 max-w-7xl relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                    {/* LEFT COLUMN: THE SEDUCTION & CONTENT */}
                    <div className="lg:col-span-7 space-y-20 animate-in fade-in slide-in-from-left-8 duration-700 pb-20">

                        {/* HERO BLOCK */}
                        <div className="space-y-8 relative text-center flex flex-col items-center pt-8">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest animate-pulse mb-4">
                                <Zap className="w-3 h-3" />
                                Session de Configuration Offerte
                            </div>

                            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] text-white drop-shadow-2xl mx-auto">
                                VOTRE AGENT IA <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400">
                                    EST DÉJÀ PRÊT.
                                </span> <br />
                                VENEZ L'ACTIVER.
                            </h1>

                            <p className="text-lg md:text-xl text-indigo-100/90 leading-relaxed font-light max-w-2xl bg-[#050a30]/80 backdrop-blur-md p-6 rounded-2xl border border-white/10 mx-auto text-center shadow-2xl">
                                Ce n'est pas une simple "démo". C'est une session d'intégration technique. <br />
                                <strong className="text-white block mt-2 text-xl">Nous allons construire votre Agent Vocal de Niveau 1, le connecter à un numéro 09, et vous le livrer clé en main.</strong>
                                <span className="block mt-2 text-sm text-gray-400 italic">Sans carte bancaire. Sans engagement. Juste de la pure valeur.</span>
                            </p>
                        </div>

                        {/* SECTION 1: THE TANGIBLE GIFT (CONCRETE) */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1"></div>
                                <h3 className="text-2xl font-bold text-white uppercase tracking-widest text-center">Ce que vous obtenez</h3>
                                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent flex-1"></div>
                            </div>

                            <div className="grid gap-4">
                                <div className="bg-[#0B1238]/80 border border-blue-500/30 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center hover:border-blue-500/60 transition-colors group">
                                    <div className="w-16 h-16 rounded-full bg-blue-900/30 flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform">
                                        <Cpu className="w-8 h-8 text-blue-400" />
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <h4 className="text-xl font-bold text-white">1. Le Moteur IA Personnalisé</h4>
                                        <p className="text-gray-400 text-sm mt-1">
                                            Nous ne vous donnons pas un modèle générique. Durant l'appel, nous intégrons vos informations clés (horaires, adresse, site web) et vos règles de transfert. Il assure un accueil parfait, filtre les appels et prend les messages 24/7.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-[#0B1238]/80 border border-blue-500/30 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center hover:border-blue-500/60 transition-colors group">
                                    <div className="w-16 h-16 rounded-full bg-blue-900/30 flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform">
                                        <PhoneCall className="w-8 h-8 text-blue-400" />
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <h4 className="text-xl font-bold text-white">2. Votre Infrastructure Télécom</h4>
                                        <p className="text-gray-400 text-sm mt-1">
                                            Vous repartez avec un <strong>Numéro 09 dédié</strong>. Votre Agent répondra sur cette ligne. Vous pourrez rediriger vos appels ou l'utiliser en direct. Tout est inclus.
                                        </p>
                                    </div>
                                </div>

                                <div className="bg-[#0B1238]/80 border border-blue-500/30 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center hover:border-blue-500/60 transition-colors group">
                                    <div className="w-16 h-16 rounded-full bg-blue-900/30 flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform">
                                        <TrendingUp className="w-8 h-8 text-blue-400" />
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <h4 className="text-xl font-bold text-white">3. Le Crédit de Démarrage</h4>
                                        <p className="text-gray-400 text-sm mt-1">
                                            Activation + Crédit de démarrage inclus (minutes limitées). Une fois le crédit consommé, le fonctionnement passe à l'usage. Les conditions exactes vous seront présentées par l'expert pendant le rendez-vous.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SECTION 2: THE "CATCH" (TRANSPARENCY & TRUST) */}
                        <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-white/10 rounded-3xl p-8 backdrop-blur-md text-center space-y-6">
                            <h3 className="text-2xl font-bold text-white">"Pourquoi offrir une technologie si coûteuse ?"</h3>
                            <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">
                                Soyons transparents. L'infrastructure que nous vous offrons (Niveau 1) est une <strong>Protection</strong>. Elle filtre et accueille. <br /><br />
                                Notre pari est simple : une fois que vous verrez l'efficacité de l'IA pour gérer l'accueil, vous voudrez passer au <strong>Niveau 2 (Growth System)</strong> pour qu'elle fasse de la <strong>Vente Active</strong> (Relance, Closing, Prise de RDV sortante).
                                <br /><br />
                                <span className="text-white font-bold underline decoration-blue-500">Nous investissons sur vous aujourd'hui pour gagner votre confiance demain.</span>
                            </p>
                        </div>

                        {/* SECTION 3: THE PROCESS */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-white text-center flex items-center justify-center gap-3">
                                <Zap className="w-6 h-6 text-yellow-400" />
                                Comment récupérer votre Agent ?
                            </h3>
                            <div className="grid md:grid-cols-3 gap-6 text-center">
                                <div className="space-y-4 relative">
                                    <div className="w-12 h-12 mx-auto bg-white text-black font-black text-xl rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.5)]">1</div>
                                    <h5 className="font-bold text-white">Réservez</h5>
                                    <p className="text-xs text-gray-400">Choisissez un créneau dans le calendrier ci-contre.</p>
                                </div>
                                <div className="space-y-4 relative">
                                    <div className="w-12 h-12 mx-auto bg-white text-black font-black text-xl rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.5)]">2</div>
                                    <h5 className="font-bold text-white">Configurez</h5>
                                    <p className="text-xs text-gray-400">Notre expert personnalise l'IA avec les informations collectées lors de l'appel.</p>
                                </div>
                                <div className="space-y-4 relative">
                                    <div className="w-12 h-12 mx-auto bg-blue-600 text-white font-black text-xl rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.5)] animate-pulse">3</div>
                                    <h5 className="font-bold text-blue-400">Encaissez</h5>
                                    <p className="text-xs text-gray-400">Votre numéro est actif. L'Agent commence à travailler.</p>
                                </div>
                            </div>
                        </div>

                        {/* SOCIAL PROOF & URGENCY */}
                        <div className="flex flex-col items-center gap-4 pt-8 border-t border-white/10 opacity-90">
                            <div className="flex -space-x-4">
                                <div className="w-12 h-12 rounded-full bg-white border-2 border-indigo-50 border-opacity-10 flex items-center justify-center shadow-xl z-30 p-2 overflow-hidden">
                                    <Image src="/images/logos/gmail.png" alt="Gmail" width={40} height={40} className="object-contain w-full h-full" />
                                </div>
                                <div className="w-12 h-12 rounded-full bg-white border-2 border-indigo-50 border-opacity-10 flex items-center justify-center shadow-xl z-20 p-2 overflow-hidden">
                                    <Image src="/images/logos/notion.png" alt="Notion" width={40} height={40} className="object-contain w-full h-full" />
                                </div>
                                <div className="w-12 h-12 rounded-full bg-white border-2 border-indigo-50 border-opacity-10 flex items-center justify-center shadow-xl z-10 p-2 overflow-hidden">
                                    <Image src="/images/logos/google_ads.png" alt="Google Ads" width={40} height={40} className="object-contain w-full h-full" />
                                </div>
                                <div className="w-12 h-12 rounded-full bg-white border-2 border-indigo-50 border-opacity-10 flex items-center justify-center shadow-xl z-0 p-2 overflow-hidden">
                                    <Image src="/images/logos/whatsapp.png" alt="WhatsApp" width={40} height={40} className="object-contain w-full h-full" />
                                </div>
                                <div className="w-12 h-12 rounded-full bg-white border-2 border-indigo-50 border-opacity-10 flex items-center justify-center shadow-xl -z-10 p-2 overflow-hidden">
                                    <Image src="/images/logos/calendly.png" alt="Calendly" width={40} height={40} className="object-contain w-full h-full" />
                                </div>
                            </div>
                            <div className="text-center">
                                <span className="text-white font-bold block text-lg">Offre limitée jusqu'au 31 décembre 2025.</span>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT COLUMN: THE CLOSING (CALENDAR) */}
                    <div className="lg:col-span-5 relative mt-8 lg:mt-0" ref={calendarSectionRef}>
                        <div className="lg:sticky lg:top-32 space-y-6">

                            {/* PRE-CALENDAR INSTRUCTION - CRITICAL */}
                            <div className="bg-gradient-to-br from-amber-500/10 to-orange-600/10 border border-amber-500/40 rounded-2xl p-6 backdrop-blur-md relative overflow-hidden shadow-[0_0_40px_rgba(245,158,11,0.1)]">
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <PhoneCall className="w-20 h-20 text-amber-500" />
                                </div>
                                <div className="relative z-10 space-y-3">
                                    <div className="flex items-center gap-2 text-amber-500 font-bold uppercase tracking-wider text-xs mb-1">
                                        <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                                        Action Requise
                                    </div>
                                    <h4 className="text-white font-bold text-lg leading-tight">
                                        Initialisation de l'Agent Vocal
                                    </h4>
                                    <p className="text-sm font-medium text-gray-300 leading-relaxed">
                                        Pour activer votre Agent Gratuit, entrez votre <strong>VRAI numéro de mobile</strong> lors de la réservation.
                                    </p>
                                    <div className="bg-black/30 rounded-lg p-3 text-xs text-amber-200/80 border border-amber-500/20 flex gap-2">
                                        <Zap className="w-4 h-4 shrink-0" />
                                        Notre IA vous appellera automatiquement sous 60 secondes pour calibrer le système.
                                    </div>
                                    <p className="text-[10px] text-gray-400 mt-1 italic text-center">
                                        En réservant, vous acceptez d'être rappelé automatiquement pour préparer l'activation.
                                    </p>
                                </div>
                            </div>

                            {/* CALENDAR WRAPPER */}
                            <Card className="bg-[#0B1238]/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/10 w-full relative h-[720px]">
                                {/* Mobile Header for extra clarity */}
                                <div className="md:hidden bg-[#0A0F1E] p-4 text-center border-b border-gray-800">
                                    <h3 className="text-white font-bold text-sm">Zone de Réservation Sécurisée</h3>
                                </div>

                                <div className="h-full w-full bg-transparent relative">
                                    <div style={{ width: "100%", height: "100%", overflow: "scroll", WebkitOverflowScrolling: "touch" }} id="my-cal-inline-30min"></div>
                                </div>


                            </Card>

                            {/* SECURITY BADGES */}
                            <div className="grid grid-cols-2 gap-4 text-center">
                                <div className="bg-[#050a30] rounded-lg p-3 border border-indigo-500/20 shadow-lg relative z-20">
                                    <Lock className="w-4 h-4 text-blue-500 mx-auto mb-1" />
                                    <p className="text-[10px] text-gray-400 font-bold uppercase">SSL Encrypted</p>
                                </div>
                                <div className="bg-[#050a30] rounded-lg p-3 border border-indigo-500/20 shadow-lg relative z-20">
                                    <DollarSign className="w-4 h-4 text-blue-500 mx-auto mb-1" />
                                    <p className="text-[10px] text-gray-400 font-bold uppercase">0% Frais Cachés</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

            {/* FAQ Section */}
            <FAQSection />

            {/* Tech Decoration Footer */}
            <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 opacity-50 z-50 pointer-events-none"></div>
        </main>
    )
}
