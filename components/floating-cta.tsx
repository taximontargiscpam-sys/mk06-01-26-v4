"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

const CTA_URL = "https://cal.com/mkdigital/30min"

export function FloatingCTA() {
    return (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Link href={CTA_URL} target="_blank" rel="noopener noreferrer">
                <Button className="h-12 md:h-16 px-6 md:px-8 rounded-full shadow-lg bg-white hover:bg-gray-100 text-primary font-bold text-sm md:text-lg border-2 border-primary/10 transition-transform hover:scale-105">
                    Mon Agent Vocal Offert
                </Button>
            </Link>
        </div>
    )
}
