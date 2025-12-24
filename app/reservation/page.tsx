"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Check, Phone, Mail, User, Briefcase, ArrowRight, TrendingUp, Users, Star, X, AlertTriangle, Lock, ShieldCheck, Zap, ChevronDown, CheckCircle2 } from "lucide-react"
import { supabase } from "@/lib/supabaseClient"



export default function ReservationPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [openFaq, setOpenFaq] = useState<number | null>(0)
    const [showStickyCta, setShowStickyCta] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Show sticky CTA when form is NOT visible
                setShowStickyCta(!entry.isIntersecting)
            },
            { threshold: 0.1 }
        )

        const formElement = document.getElementById('reservation-form')
        if (formElement) {
            observer.observe(formElement)
        }

        return () => {
            if (formElement) observer.unobserve(formElement)
        }
    }, [])

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Collect form data
        const formData = new FormData(e.target as HTMLFormElement)

        // Format Phone
        let formattedPhone = formData.get('phone') as string
        formattedPhone = formattedPhone.replace(/\D/g, '') // Remove spaces
        if (formattedPhone.startsWith('0')) {
            formattedPhone = '33' + formattedPhone.substring(1)
        }
        if (!formattedPhone.startsWith('+')) {
            formattedPhone = '+' + formattedPhone
        }

        const lead = {
            client_email: formData.get('email'),
            client_name: formData.get('firstName'),
            last_name: formData.get('lastName'),
            to_number: formattedPhone,
            created_at: new Date().toISOString(),
        }

        try {
            console.log('Sending lead to Supabase:', lead)
            const { error } = await supabase.from('leads').insert([lead])

            if (error) {
                console.error('Supabase Error:', error)
                throw error
            }

            // Simulate slight delay for UX
            setTimeout(() => {
                router.push('/merci')
            }, 500)

        } catch (error: any) {
            console.error('Error submitting lead:', error)
            alert(`Erreur: ${error.message || "Une erreur est survenue"}`)
        } finally {
            setIsLoading(false)
        }
    }

    const scrollToForm = (e: React.MouseEvent) => {
        e.preventDefault()
        document.getElementById('reservation-form')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 pb-20 md:pb-0 overflow-x-hidden">

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link href="/" className="flex items-center">
                            <img src="/logo.png" alt="MKDigital" className="h-8 md:h-10 w-auto invert" />
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
                        <div className="flex items-center gap-1 text-green-600 bg-green-50 px-3 py-1 rounded-full">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Disponibilité immédiate
                        </div>
                    </div>
                </div>
            </header>


            <main className="pt-28 pb-12 md:pt-32 md:pb-20">

                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">

                        {/* Left Column: Content */}
                        <div className="space-y-8 animate-in slide-in-from-bottom-10 lg:slide-in-from-left duration-700 fade-in flex flex-col items-center md:items-start text-center md:text-left">

                            {/* Warning Badge */}
                            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wide">
                                <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                                Agent ia vocal Niveau 1 offert — Jusqu'au 31/12/2025
                            </div>

                            <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
                                Ne ratez plus aucun appel client.<br />
                                <span className="text-blue-600">Numéro 09 dédié.</span>
                            </h1>

                            <p className="text-lg text-slate-600 leading-relaxed max-w-lg animate-in slide-in-from-bottom-5 duration-700 delay-100 fade-in">
                                L'Agent IA Vocal Niveau 1 est la première brique de votre infrastructure. Il décroche instantanément, qualifie chaque demande et vous transmet un compte-rendu structuré par email. Il devient votre standardiste dédié pour le traitement de vos appels entrants.
                            </p>

                            {/* Features */}
                            <div className="flex flex-col gap-3.5 mb-8 animate-in slide-in-from-bottom-6 duration-700 delay-200 fade-in">
                                {[
                                    "Numéro 09 professionnel dédié à votre structure",
                                    "80 minutes de crédit incluses (20€ de crédit initial)",
                                    "Personnalisation complète selon votre activité"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3 text-[0.95rem] text-slate-600">
                                        <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-5 flex flex-wrap justify-start gap-x-5 gap-y-2 text-xs font-medium text-slate-400">
                                <span className="flex items-center gap-1.5">📞 Démonstration instantanée</span>
                                <span className="flex items-center gap-1.5">🔒 Sans carte bancaire</span>
                                <span className="flex items-center gap-1.5">❌ Sans engagement</span>
                            </div>

                        </div>

                        {/* Right Column: Form */}
                        <div id="reservation-form" className="relative animate-in slide-in-from-right duration-700 fade-in delay-200">
                            {/* Decorative blob */}
                            <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>

                            <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl shadow-slate-200/10 border border-white/10 overflow-hidden text-white">
                                <div className="p-6 md:p-8 bg-transparent border-b border-white/10">
                                    <h3 className="text-xl font-bold text-slate-900 mb-2">Demande d'activation</h3>
                                    <p className="text-slate-500 text-sm">Complétez ce formulaire pour recevoir votre appel de démonstration</p>
                                </div>

                                <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">

                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Professionnel</label>
                                            <div className="relative">
                                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                                <input
                                                    required
                                                    type="email"
                                                    name="email"
                                                    placeholder="contact@votre-entreprise.com"
                                                    className="w-full pl-10 pr-4 h-12 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-400 font-medium"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Prénom</label>
                                                <div className="relative">
                                                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                                    <input
                                                        required
                                                        type="text"
                                                        name="firstName"
                                                        placeholder="Jean"
                                                        className="w-full pl-10 pr-4 h-12 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-400 font-medium"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Nom</label>
                                                <input
                                                    required
                                                    type="text"
                                                    name="lastName"
                                                    placeholder="Dupont"
                                                    className="w-full px-4 h-12 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-400 font-medium"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-1.5">Téléphone</label>
                                            <div className="relative">
                                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                                                <input
                                                    required
                                                    type="tel"
                                                    name="phone"
                                                    placeholder="06 12 34 56 78"
                                                    className="w-full pl-10 pr-4 h-12 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all placeholder:text-slate-400 font-medium"
                                                />
                                            </div>
                                        </div>

                                    </div>

                                    {/* Call Expectation Message */}
                                    <div className="bg-[#FEF3C7] border border-[#FCD34D] rounded-md p-3.5 flex items-center gap-3">
                                        <span className="text-xl">📞</span>
                                        <div>
                                            <div className="text-[0.85rem] font-bold text-[#92400E]">Notre Agent IA vous appelle immédiatement</div>
                                            <div className="text-[0.8rem] text-[#A16207]">Appel entrant depuis le 09 39 03 01 76</div>
                                        </div>
                                    </div>

                                    <button
                                        disabled={isLoading}
                                        type="submit"
                                        className="relative w-full h-14 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-lg shadow-lg transition-all transform hover:-translate-y-0.5 disabled:opacity-70 disabled:pointer-events-none overflow-hidden group"
                                    >
                                        {isLoading && (
                                            <div className="absolute inset-0 bg-white/20 animate-pulse" />
                                        )}
                                        <span className="relative flex items-center justify-center gap-2">
                                            {isLoading ? 'Redirection...' : "Valider et recevoir l'appel"}
                                            {!isLoading && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                                        </span>
                                    </button>

                                    <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                                        <div className="flex items-center gap-1">
                                            <Lock className="w-3 h-3" /> Données 100% Sécurisées
                                        </div>
                                        <span>•</span>
                                        <div className="flex items-center gap-1">
                                            <ShieldCheck className="w-3 h-3" /> RGPD Compliant
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

            {/* Metrics Section */}
            <section className="py-16 bg-white border-b border-slate-200">
                <div className="container mx-auto px-6 max-w-[1140px]">
                    <p className="text-center text-[0.7rem] font-semibold text-slate-400 uppercase tracking-[0.15em] mb-7">Performance de l'infrastructure</p>
                    <div className="flex flex-wrap justify-center gap-10 md:gap-20">
                        {[
                            { value: "<2s", label: "Temps de décrochage" },
                            { value: "24/7", label: "Disponibilité" },
                            { value: "100%", label: "Taux de réponse" },
                            { value: "0.25€", label: "Par minute" }
                        ].map((metric, i) => (
                            <div key={i} className="text-center w-[120px]">
                                <div className="text-[2.25rem] font-extrabold text-slate-900 leading-none mb-1.5">{metric.value}</div>
                                <div className="text-[0.85rem] text-slate-500">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Problem / Solution Grid */}
            <section className="py-16 md:py-24 bg-slate-50 animate-in slide-in-from-bottom-8 duration-700 fade-in delay-100">
                <div className="container mx-auto px-6 max-w-[1140px]">
                    <div className="text-center max-w-[680px] mx-auto mb-16">
                        <p className="text-[0.7rem] font-bold text-blue-600 uppercase tracking-[0.15em] mb-4">Le constat</p>
                        <h2 className="text-[2.25rem] font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">Le problème n'est pas le trafic. C'est le traitement.</h2>
                        <p className="text-[1.05rem] text-slate-600 leading-relaxed">
                            La plupart des structures ne perdent pas de clients par manque de visibilité, mais par manque de réactivité dans le traitement des demandes entrantes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: "📵", val: "67%", text: "des appelants ne renouvellent pas leur tentative après un appel non décroché", source: "Étude BVA 2024" },
                            { icon: "⏰", val: "23h", text: "délai moyen de traitement des demandes entrantes — vos concurrents répondent plus vite", source: "HubSpot Research" },
                            { icon: "📊", val: "78%", text: "des contrats sont attribués au premier interlocuteur disponible, pas au plus qualifié", source: "InsideSales.com" }
                        ].map((card, i) => (
                            <div key={i} className="bg-white border border-slate-200 rounded-2xl p-9 text-center">
                                <div className="w-14 h-14 bg-red-100 rounded-md flex items-center justify-center mx-auto mb-6 text-2xl">
                                    {card.icon}
                                </div>
                                <h3 className="text-[2.5rem] font-extrabold text-slate-900 mb-2.5">{card.val}</h3>
                                <p className="text-[0.95rem] text-slate-700 mb-2 leading-relaxed">{card.text}</p>
                                <span className="text-[0.7rem] text-slate-400 uppercase tracking-widest">{card.source}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Detailed Offer */}
            <section className="py-16 md:py-24 bg-white animate-in slide-in-from-bottom-8 duration-700 fade-in delay-200">
                <div className="container mx-auto px-6 max-w-[1140px]">
                    <div className="text-center max-w-[680px] mx-auto mb-16">
                        <p className="text-[0.7rem] font-bold text-blue-600 uppercase tracking-[0.15em] mb-4">L'infrastructure</p>
                        <h2 className="text-[2.25rem] font-extrabold text-slate-900 mb-4 tracking-tight">Ce que comprend votre Agent Niveau 1</h2>
                        <p className="text-[1.05rem] text-slate-600">Une architecture de traitement complète, opérationnelle dès la remise des accès.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            { icon: "📞", title: "Ligne 09 dédiée", text: "Un numéro professionnel attribué à votre structure. Vous pouvez rediriger vos appels existants ou le communiquer directement à vos prospects.", tag: "Inclus sans frais" },
                            { icon: "⚡", title: "Décrochage instantané", text: "L'Agent répond en moins de 2 secondes, 24 heures sur 24, 7 jours sur 7. Aucune demande entrante n'est laissée sans traitement.", tag: "Disponibilité totale" },
                            { icon: "📋", title: "Qualification automatisée", text: "L'Agent identifie le besoin, pose les questions pertinentes selon votre activité et vous transmet un compte-rendu structuré par email.", tag: "Transmission instantanée" },
                            { icon: "🎯", title: "Personnalisation intégrale", text: "Ton, discours, questions de qualification, horaires : chaque paramètre est configuré selon les spécificités de votre structure.", tag: "Sur-mesure" }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 border border-slate-200 rounded-2xl p-9 hover:border-slate-300 transition-colors">
                                <div className="w-12 h-12 bg-white border border-slate-200 rounded-md flex items-center justify-center mb-6 text-xl">
                                    {item.icon}
                                </div>
                                <h3 className="text-[1.125rem] font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-[0.95rem] text-slate-600 mb-5 leading-relaxed">{item.text}</p>
                                <span className="inline-block bg-[#ECFDF5] text-[#047857] px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
                                    {item.tag}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 md:py-24 bg-slate-50 animate-in slide-in-from-bottom-8 duration-700 fade-in delay-200">
                <div className="container mx-auto px-4 max-w-[1140px]">
                    <div className="text-center max-w-[680px] mx-auto mb-12">
                        <p className="text-[0.7rem] font-bold text-blue-600 uppercase tracking-[0.15em] mb-4">Clarification</p>
                        <h2 className="text-[2.25rem] font-extrabold text-slate-900 tracking-tight">Questions fréquentes</h2>
                    </div>

                    <div className="max-w-[740px] mx-auto border-t border-slate-200">
                        {[
                            { q: "L'infrastructure est-elle réellement offerte ?", a: "Oui. L'Agent Niveau 1 est activé sans frais : numéro 09 dédié + 80 minutes de crédit incluses (20€ à 0.25€/min). Aucune carte bancaire n'est requise. Les niveaux supérieurs débloquent des compétences avancées (relance no-show, nurturing, collecte d'avis, etc.) mais n'ajoutent pas de crédit — celui-ci se recharge séparément selon votre consommation." },
                            { q: "Comment fonctionne la qualification des appels ?", a: "L'Agent décroche, se présente au nom de votre structure, puis applique le protocole de qualification défini ensemble (nature du besoin, urgence, budget, zone géographique, etc.). À l'issue de chaque appel, vous recevez un compte-rendu structuré par email contenant l'ensemble des informations collectées." },
                            { q: "Le discours de l'Agent est-il personnalisable ?", a: "Intégralement. Lors de l'entretien de remise, nous configurons ensemble : le nom de présentation, le ton adopté (formel ou décontracté), les questions de qualification, les plages horaires de disponibilité, et les réponses aux interrogations courantes de vos interlocuteurs." },
                            { q: "Y a-t-il un engagement contractuel ?", a: "Aucun engagement. Vous pouvez désactiver l'infrastructure à tout moment par simple notification. Pas de préavis, pas de frais de résiliation. Si le système ne correspond pas à vos attentes, nous procédons à la désactivation immédiate." },
                            { q: "Que se passe-t-il après la validation du formulaire ?", a: "Notre Agent IA vous contacte dans les secondes qui suivent depuis le 09 39 03 01 76. Il collecte 4 informations : nom de votre structure, zone géographique, horaires d'ouverture, et préférence vocale (homme ou femme). Ensuite, il vous propose un créneau pour l'entretien de remise où vous recevez votre numéro 09 et vos accès. Vous testez donc immédiatement le produit en étant vous-même appelé." },
                            { q: "Où sont hébergées les données ?", a: "L'intégralité de notre infrastructure est hébergée en France pour garantir la conformité RGPD. Vos données et celles de vos interlocuteurs ne quittent pas le territoire européen. MKDigital est une société française basée à Paris." }
                        ].map((item, i) => (
                            <div key={i} className="border-b border-slate-200">
                                <button
                                    onClick={() => toggleFaq(i)}
                                    className={`w-full py-7 flex justify-between items-center text-left text-base font-bold text-slate-900 hover:text-blue-600 transition-colors ${openFaq === i ? 'text-blue-600' : ''}`}
                                >
                                    <span>{item.q}</span>
                                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                                </button>
                                <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${openFaq === i ? 'max-h-[500px]' : 'max-h-0'}`}>
                                    <div className="pb-7 text-[0.95rem] text-slate-600 leading-relaxed">
                                        {item.a}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



            {/* Sticky Mobile CTA */}
            <div className={`fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-[0_-5px_15px_-5px_rgba(0,0,0,0.1)] z-40 md:hidden transition-transform duration-300 ${showStickyCta ? 'translate-y-0' : 'translate-y-full'}`}>
                <button
                    onClick={() => document.getElementById('reservation-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full h-12 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                >
                    ACTIVER MON INFRASTRUCTURE <CheckCircle2 className="w-4 h-4" />
                </button>
            </div>

            {/* Floating Callback Widget (Desktop) */}
            <div className="hidden md:flex fixed bottom-8 right-8 z-50 animate-in slide-in-from-bottom-10 fade-in duration-1000 delay-1000">
                <button
                    onClick={scrollToForm}
                    className="group flex items-center gap-3 bg-white pl-4 pr-6 py-3 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-blue-100 hover:shadow-blue-500/20 hover:-translate-y-1 transition-all"
                >
                    <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <div className="text-left">
                        <div className="text-[0.65rem] font-bold text-slate-400 uppercase tracking-wider">Démonstration</div>
                        <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                            L'IA vous rappelle en 10s
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}
