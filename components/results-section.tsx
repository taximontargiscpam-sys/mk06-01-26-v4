"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Target, Zap } from "lucide-react"

const metrics = [
  { icon: TrendingUp, value: "+143", label: "RDV qualifiés/mois", color: "text-primary" },
  { icon: Target, value: "+27%", label: "Taux de conversion", color: "text-chart-3" },
  { icon: Users, value: "89%", label: "Satisfaction client", color: "text-chart-2" },
  { icon: Zap, value: "-65%", label: "Temps opérationnel", color: "text-chart-4" },
]

export function ResultsSection() {
  return (
    <section id="resultats" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Résultats Mesurables</h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto text-pretty">
            Des performances concrètes pour nos clients
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur-sm border-border text-center group hover:border-primary/50 transition-all duration-300"
            >
              <div className="mb-4 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
              </div>
              <div className="text-4xl font-bold mb-2 text-foreground">{metric.value}</div>
              <div className="text-foreground/60">{metric.label}</div>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
            <blockquote className="text-xl text-foreground/80 leading-relaxed text-center italic text-pretty">
              "MKDigital™ a transformé notre approche commerciale. Leurs agents IA ont multiplié par 3 notre génération
              de leads qualifiés tout en libérant nos équipes pour se concentrer sur la stratégie."
            </blockquote>
            <div className="mt-6 text-center">
              <div className="font-semibold text-foreground">Sophie Martin</div>
              <div className="text-sm text-foreground/60">Directrice Commerciale, TechCorp</div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
