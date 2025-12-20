"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import { useLeadModal } from "@/components/lead-modal-context"

const CTA_URL = "/reservation"

interface PowerCTAProps {
    text?: string
    subtext?: string
    url?: string
}

export function PowerCTA({
    text = "Réserver mon Audit Offert",
    subtext = "Accès réservé aux décideurs ambitieux",
    // url prop no longer used for main action but kept for interface compat if needed
    url = CTA_URL
}: PowerCTAProps) {
    const { openModal } = useLeadModal()

    return (
        <div className="flex flex-col items-center gap-3">
            <div className="group relative inline-flex items-center justify-center">
                <Button
                    onClick={openModal}
                    className="relative h-auto py-3 px-6 md:py-5 md:px-10 text-base md:text-lg font-medium text-white bg-transparent hover:bg-white/10 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300 border border-white/20 hover:border-white/40"
                >
                    <Calendar className="w-5 h-5 mr-3" />
                    {text}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
            </div>
            {/* Le petit texte de réassurance - Plus discret */}
            <p className="text-xs text-muted-foreground flex items-center gap-2 opacity-60 font-light tracking-wide">
                <span className="relative flex h-2 w-2">
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                {subtext}
            </p>
        </div>
    )
}
