import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MKDigital | Intégrateur d'Agents IA Vocaux & Solutions d'Automatisation",
  description: "Le Leader Français de l'Intégration d'Agents IA Vocaux pour TPE & PME. Automatisez votre standard, qualifiez vos prospects et encaissez 24/7. Solutions sectorielles pour Médical, Juridique, BTP et Services. Audit Gratuit.",
  keywords: [
    "Agent Vocal IA",
    "Intelligence Artificielle",
    "Automatisation PME",
    "Secrétariat Médical IA",
    "Standardiste Avocat IA",
    "Agent Téléphonique IA",
    "Agence IA Paris",
    "Infrastructure de Revenus",
    "Prospection Automatique",
    "MKDigital",
    "Solution IA Entreprise"
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="my-0 py-[-0px] py-[-10px]" lang="fr">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
