"use client"

import { Button } from "@/components/ui/button"
import { AnimatedRobot } from "@/components/animated-robot"
import { PowerCTA } from "@/components/power-cta"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background opacity-50" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-balance leading-tight text-white">
              Infrastructure d’Acquisition & d’Intelligence Artificielle
            </h1>

            <div className="space-y-6">
              <p className="text-2xl font-medium text-foreground leading-relaxed text-pretty">
                MKDigital installe dans votre entreprise une Infrastructure de Revenus Autonome.
              </p>
              <div className="space-y-2 text-lg text-muted-foreground leading-relaxed text-pretty border-l-2 border-primary/50 pl-4">
                <p>
                  Nous combinons <strong className="text-white">Capital Média</strong> et <strong className="text-white">Intelligence Artificielle</strong> pour transformer votre visibilité en chiffre d’affaires.
                </p>
                <p>
                  Une architecture sur-mesure, une exécution rapide, un système simple à piloter.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <div className="-mt-2">
                <PowerCTA text="Déployer Mon Agent" subtext="Audit 100% Gratuit" />
              </div>
              <div className="flex items-start pt-2">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-blue-700 hover:bg-blue-800 text-white border-none text-base md:text-lg py-4 md:py-6 px-6 md:px-8 rounded-full transition-all duration-300 h-auto md:h-[60px] shadow-lg hover:shadow-blue-900/50"
                >
                  <Link href="/vision">Comprendre la Vision</Link>
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[700px] flex items-center justify-center"
          >
            {/* Spotlight effect behind robot */}
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-75 animate-pulse" />
            <AnimatedRobot
              src="/images/design-mode/vvvv.png"
              alt="MKDigital AI Robot"
              className="w-full h-full object-contain drop-shadow-2xl relative z-10"
            />
          </motion.div>
        </div>

        {/* Mobile View - Optimized for Cinematic Impact */}
        <div className="lg:hidden relative min-h-[calc(100vh-8rem)] flex flex-col items-center justify-center pt-20">
          <div className="absolute inset-0 flex items-center justify-center -z-10 bg-gradient-to-b from-transparent to-background">
            <AnimatedRobot
              src="/images/design-mode/vvvv.png"
              alt="MKDigital AI Robot"
              className="w-full h-full object-contain opacity-60"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-center space-y-8 px-4"
          >
            <h1 className="text-3xl font-black tracking-tight text-white drop-shadow-md">
              Infrastructure d’Acquisition & d’Intelligence Artificielle
            </h1>

            <div className="space-y-4 text-base sm:text-lg">
              <p className="font-bold text-white leading-relaxed">
                MKDigital installe dans votre entreprise une Infrastructure de Revenus Autonome.
              </p>
              <p className="text-white/80 leading-relaxed max-w-sm mx-auto">
                Nous combinons <strong className="text-white">Capital Média</strong> et <strong className="text-white">Intelligence Artificielle</strong> pour transformer votre visibilité en chiffre d’affaires.
              </p>
            </div>

            <div className="flex flex-col gap-6 w-full max-w-sm mx-auto pt-8 items-center">
              <PowerCTA text="Déployer Mon Agent" subtext="Audit 100% Gratuit" />
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-blue-700 hover:bg-blue-800 text-white border-none w-full py-4 text-base rounded-full shadow-lg h-12"
              >
                <Link href="/vision">Comprendre la Vision</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
