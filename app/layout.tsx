import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MKDigital | Intégrateur d'Agents IA Vocaux & Solutions d'Automatisation",
  description: "Le Leader Français de l'Intégration d'Agents IA Vocaux. Intervention partout en France (Paris, Lyon, Marseille, Bordeaux). Automatisez votre standard, qualifiez vos prospects et encaissez 24/7. Solutions pour Médical, Juridique, BTP et Services.",
  keywords: [
    "Agent Vocal IA",
    "Intelligence Artificielle France",
    "Meilleure Agence IA",
    "Agence Marketing Digital IA",
    "Automatisation PME France",
    "Secrétariat Médical IA",
    "Standardiste Avocat IA",
    "Agent Téléphonique IA",
    "Agence IA Paris",
    "Agence IA Lyon",
    "Agence IA Marseille",
    "Agence IA Bordeaux",
    "Infrastructure de Revenus",
    "Prospection Automatique",
    "MKDigital",
    "Solution IA Entreprise",
    "Standardiste IA Paris",
    "Automatisation Rétention Client",
    "Agent Vocal Immobilier",
    "Secrétariat Téléphonique 24/7",
    "Consulting IA France"
  ],
  authors: [{ name: "MKDigital" }],
  openGraph: {
    title: "MKDigital | Votre Agent IA Vocal Prêt en 24h",
    description: "Ne perdez plus aucun appel. Nos Agents IA décrochent, qualifient et prennent rendez-vous pour vous 24/7. Testez la technologie maintenant.",
    url: "https://mkdigitalparis.com",
    siteName: "MKDigital",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "MKDigital AI Infrastructure",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  metadataBase: new URL('https://mkdigitalparis.com'),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  other: {
    "geo.region": "FR-IDF",
    "geo.placename": "Asnières-sur-Seine",
    "geo.position": "48.9138;2.2838",
    "ICBM": "48.9138, 2.2838"
  },
}

import { Footer } from "@/components/footer"
import JsonLd from "@/components/json-ld"
import { Navigation } from "@/components/navigation"
import { FacebookPixel } from "@/components/facebook-pixel"
import { Clarity } from "@/components/clarity"
import { LeadModalProvider } from "@/components/lead-modal-context"
import { LeadCaptureModal } from "@/components/lead-capture-modal"
import { RoundedWidget } from "@/components/rounded-widget"

// ... (other imports)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="my-0 py-[-0px] py-[-10px]" lang="fr">
      <body className={`${inter.className} font-sans antialiased`}>
        <LeadModalProvider>
          <Navigation />
          {children}
          <LeadCaptureModal />
          <JsonLd />
          <FacebookPixel />
          <Clarity />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=1252843462475555&ev=PageView&noscript=1"
              alt=""
            />
          </noscript>
          <Footer />
        </LeadModalProvider>
        <RoundedWidget />
        <Analytics />
      </body>
    </html>
  )
}
