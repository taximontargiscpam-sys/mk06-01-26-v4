"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, CheckCircle2 } from "lucide-react"

// Theme Configuration
const THEME = {
    bg: "#ffffff",
    text: "#0f172a",
}

export default function MerciPage() {
    useEffect(() => {
        // Fire Lead event on mount for conversion tracking
        // @ts-ignore
        if (typeof window.fbq === "function") {
            // @ts-ignore
            window.fbq("track", "Lead")
        }
    }, [])

    return (
        <main className="min-h-screen font-sans flex items-center justify-center p-6 relative overflow-hidden" style={{ backgroundColor: THEME.bg, color: THEME.text }}>

            {/* Background - Clean White */}
            <div className="fixed inset-0 bg-white -z-10" />

            <div className="max-w-lg w-full text-center space-y-8 animate-in fade-in zoom-in duration-500 relative z-10">
                <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-xl shadow-slate-200/50">
                    <div className="flex justify-center mb-8">
                        <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center border border-green-100 shadow-sm">
                            <Check className="w-12 h-12" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                            Demande Validée !
                        </h1>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            Votre accès "Agent Niveau 1" est réservé.
                            <span className="text-blue-600 font-medium block mt-2">
                                Vous allez recevoir un appel dans quelques secondes de notre agent IA via le 09 39 03 01 76.
                            </span>
                        </p>
                    </div>

                    <Button
                        asChild
                        size="lg"
                        className="w-full bg-[#2D6BFF] hover:bg-[#2D6BFF]/90 text-white font-bold h-12 rounded-xl shadow-lg mt-4"
                    >
                        <Link href="/">Retour à l'accueil</Link>
                    </Button>
                </div>
            </div>
        </main>
    )
}
