"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Calendar } from "lucide-react"
import Image from "next/image"

export function ContactSection() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <Card className="p-12 bg-card/50 backdrop-blur-sm border-border overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
                  Discutons de vos objectifs IA
                </h2>
                <p className="text-xl text-foreground/70 leading-relaxed text-pretty">
                  Réservez un entretien stratégique gratuit de 30 minutes avec nos experts pour découvrir comment l'IA
                  peut transformer votre entreprise.
                </p>

                <div className="space-y-4 pt-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <a
                      href="https://cal.com/mkdigital/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Calendar className="w-5 h-5" />
                      Réserver un entretien
                    </a>
                  </Button>

                  <div className="flex items-center gap-2 text-foreground/60">
                    <Mail className="w-5 h-5" />
                    <span>contact@mkdigital.ai</span>
                  </div>
                </div>
              </div>

              <div className="relative h-96 lg:h-full min-h-[400px]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/design-mode/v.png"
                    alt="MKDigital AI Assistant"
                    width={400}
                    height={400}
                    className="object-contain animate-float"
                  />
                  <div className="absolute inset-0 bg-primary/20 blur-[100px] animate-glow" />
                </div>
              </div>
            </div>
          </Card>
        </div>

        <footer className="mt-16 text-center text-foreground/50 text-sm">
          <p>© 2025 MKDigital — Cabinet de Conseil en Intelligence Artificielle</p>
        </footer>
      </div>
    </section>
  )
}
