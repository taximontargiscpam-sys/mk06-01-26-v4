"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function VisionSection() {
  return (
    <section id="vision" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,38,255,0.15),transparent_50%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">Notre Vision</h2>
          <p className="text-2xl md:text-3xl text-foreground/90 leading-relaxed text-balance font-light">
            Nous n'aimons pas remplacer l'humain — nous aimons l'augmenter.
          </p>
          <p className="text-xl text-foreground/70 leading-relaxed max-w-3xl mx-auto text-pretty">
            L'Intelligence Artificielle n'est pas une menace, c'est un levier de performance. Notre mission est de
            libérer le potentiel humain en automatisant les tâches répétitives pour que vos équipes se concentrent sur
            ce qui compte vraiment : la stratégie, la créativité et l'innovation.
          </p>

          <div className="relative h-96 my-12">
            <Image
              src="/images/design-mode/vvvvv.png"
              alt="MKDigital Team"
              fill
              className="object-contain animate-float"
            />
            <div className="absolute inset-0 bg-primary/10 blur-[120px] animate-glow" />
          </div>

          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
            <a href="#contact">Rejoindre le futur</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
