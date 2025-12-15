"use client"

import { useState, useEffect } from "react"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
// J'ai ajouté Instagram ici dans les imports
import { Mail, Phone, MapPin, Send, CheckCircle2, Instagram } from "lucide-react"
import Image from "next/image"
import { PhoneCallModal } from "@/components/phone-call-modal"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    botField: "", // honeypot
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (loading) return // prevent double submit
    if (formData.botField !== "") return // bot detected

    setLoading(true)

    const payload = {
      fullName: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      project: formData.message,
      pageUrl: window.location.href,
      utm_source: new URLSearchParams(window.location.search).get("utm_source") || undefined,
      utm_medium: new URLSearchParams(window.location.search).get("utm_medium") || undefined,
      utm_campaign: new URLSearchParams(window.location.search).get("utm_campaign") || undefined,
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      const data = await res.json()
      if (!data.ok) {
        console.error("❌ Erreur Supabase:", data.message)
        alert("Une erreur est survenue. Merci de réessayer.")
        setLoading(false)
        return
      }

      setSubmitted(true)

      // Redirection après 2 sec
      setTimeout(() => {
        window.location.href =
          "https://cal.com/mkdigital/30min"
      }, 2000)
    } catch (error) {
      console.error("❌ SERVER ERROR:", error)
      alert("Erreur serveur. Vérifiez votre connexion internet.")
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-8">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 bg-primary/5 shadow-[0_0_40px_rgba(37,99,235,0.3)]">
                <Image
                  src="/images/final-contact-v2.png"
                  alt="Contact MKDigital"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
            <h1 className="md:text-5xl font-black tracking-tight text-balance text-3xl text-white">
              Démarrez Votre <span className="text-white">Transformation</span>
            </h1>
            <p className="md:text-2xl text-muted-foreground text-pretty leading-relaxed text-lg font-light">
              L'Infrastructure de Revenus commence ici. Parlez-nous de vos objectifs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Envoyez-nous un message
              </h2>

              {/* SUCCESS MESSAGE */}
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Message envoyé !
                  </h3>
                  <p className="text-foreground/70">
                    Redirection vers notre calendrier de réservation...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot anti-spam */}
                  <input
                    type="text"
                    name="botField"
                    className="hidden"
                    value={formData.botField}
                    onChange={handleChange}
                    autoComplete="off"
                    tabIndex={-1}
                  />

                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      Nom complet *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background border-border text-foreground"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email professionnel *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background border-border text-foreground"
                      placeholder="jean.dupont@entreprise.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground">
                      Téléphone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background border-border text-foreground"
                      placeholder="+33 6 12 34 56 78"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground">
                      Entreprise *
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-background border-border text-foreground"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Votre projet *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-background border-border text-foreground min-h-32"
                      placeholder="Décrivez-nous votre projet et vos objectifs..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span className="animate-spin border-2 border-white/30 border-t-white rounded-full w-5 h-5"></span>
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {loading ? "Envoi en cours..." : "Envoyer le message"}
                  </Button>
                </form>
              )}
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Informations de contact
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                  Notre équipe d&apos;experts en IA est à votre disposition pour discuter de votre projet et vous
                  proposer une solution sur-mesure.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                  <div className="flex gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 h-fit">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a
                        href="mailto:contact@mkdigital.ai"
                        className="text-foreground/70 hover:text-primary transition-colors"
                      >
                        contact@mkdigital.ai
                      </a>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                  <div className="flex gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 h-fit">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Téléphone</h3>
                      <PhoneCallModal
                        phoneNumber="+33939030176"
                        displayNumber="+33 (0)9 39 03 01 76"
                      />
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                  <div className="flex gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 h-fit">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Adresse</h3>
                      <p className="text-foreground/70">
                        2 Quai Aulagnier
                        <br />
                        92600 Asnières-sur-Seine, France
                      </p>
                    </div>
                  </div>
                </Card>

                {/* --- NOUVEAU BLOC INSTAGRAM AJOUTÉ ICI --- */}
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                  <div className="flex gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 h-fit">
                      <Instagram className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Instagram</h3>
                      <a
                        href="https://www.instagram.com/mkdigital.paris"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/70 hover:text-[#E1306C] transition-colors font-medium"
                      >
                        @mkdigital.paris
                      </a>
                    </div>
                  </div>
                </Card>
                {/* ----------------------------------------- */}

              </div>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-chart-3/10 border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Réservez un entretien stratégique
                </h3>
                <p className="text-foreground/70 mb-4">
                  Vous préférez un créneau direct ?<br />
                  Réservez un entretien stratégique de 30 minutes avec nos experts.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <a
                    href="https://cal.com/mkdigital/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Choisir mon créneau
                  </a>
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
