"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

export default function MerciPage() {
    useEffect(() => {
        // Fire Schedule event on mount
        // @ts-ignore
        if (typeof window.fbq === "function") {
            // @ts-ignore
            window.fbq("track", "Schedule")
        }
    }, [])

    return (
        <main className="min-h-screen bg-[#06101F] text-[#EAF0FF] flex items-center justify-center p-6">
            <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in duration-500">
                <div className="flex justify-center">
                    <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20">
                        <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight text-white">
                        Rendez-vous confirmé.
                    </h1>
                    <p className="text-lg text-[#EAF0FF]/70 leading-relaxed">
                        Vous allez être rappelé automatiquement pour préparer l’activation (entreprise, horaires, zone, voix).
                    </p>
                </div>

                <div className="pt-4">
                    <Button
                        asChild
                        size="lg"
                        className="w-full bg-[#2D6BFF] hover:bg-[#2D6BFF]/90 text-white font-medium h-12 rounded-xl"
                    >
                        <Link href="/reservation">Retour</Link>
                    </Button>
                </div>
            </div>
        </main>
    )
}
