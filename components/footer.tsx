"use client"

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLeadModal } from "@/components/lead-modal-context"

export function Footer() {
    const { openModal } = useLeadModal()
    return (
        <footer className="bg-background border-t border-white/5 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="text-2xl font-bold text-white tracking-tight">MKDigital</span>
                        </Link>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            Infrastructure d’acquisition & d’intelligence artificielle pour entreprises ambitieuses.
                            Transformez votre visibilité en actif.
                        </p>
                        <div className="space-y-3 pt-2">
                            <a href="tel:0939030176" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                                <Phone className="w-4 h-4 text-primary" />
                                <span>0939030176</span>
                            </a>
                            <a href="mailto:contact@mkdigitalparis.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                                <Mail className="w-4 h-4 text-primary" />
                                <span>contact@mkdigitalparis.com</span>
                            </a>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span>2 Quai Aulagnier, 92600 Asnières-sur-Seine</span>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <Link href="https://www.instagram.com/mkdigital.paris" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-all shadow-[0_0_10px_rgba(0,38,255,0.5)]">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                </svg>
                            </Link>
                            <Link href="https://www.linkedin.com/in/mk-digital-655218332/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all">
                                <Linkedin className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Navigation Column (Main Menu) */}
                    <div className="space-y-6">
                        <h3 className="font-bold text-white">Navigation</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/agents" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Agent IA
                                </Link>
                            </li>
                            <li>
                                <Link href="/secteurs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Secteurs
                                </Link>
                            </li>
                            <li>
                                <Link href="/resultats" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Résultats
                                </Link>
                            </li>
                            <li>
                                <Link href="/vision" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Vision
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/reservation" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Réservation
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Solutions Column (Restored) */}
                    <div className="space-y-6">
                        <h3 className="font-bold text-white">Solutions</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/#growth-system" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Growth System
                                </Link>
                            </li>
                            <li>
                                <Link href="/#levels" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Agent IA (Niveaux)
                                </Link>
                            </li>
                            <li>
                                <Link href="/reservation" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Audit 360°
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Comparatifs (SEO Bait) */}
                    <div className="space-y-6">
                        <h3 className="font-bold text-white">Comparatifs</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/vs/secretaire-humaine" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    vs Secrétaire
                                </Link>
                            </li>
                            <li>
                                <Link href="/vs/centre-appel" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    vs Call Center
                                </Link>
                            </li>
                            <li>
                                <Link href="/vs/formulaire-web" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    vs Formulaire
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Solutions Métiers (Programmatic SEO) */}
                    <div className="space-y-6">
                        <h3 className="font-bold text-white">Métiers</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/solutions/avocat" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Secrétariat Avocat
                                </Link>
                            </li>
                            <li>
                                <Link href="/solutions/dentiste" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Standard Dentiste
                                </Link>
                            </li>
                            <li>
                                <Link href="/solutions/immobilier" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Agence Immo
                                </Link>
                            </li>
                            <li>
                                <Link href="/solutions/plombier" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Artisans BTP
                                </Link>
                            </li>
                            <li>
                                <Link href="/solutions/restaurant" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Restaurants
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Entreprise Column (Restored) */}
                    <div className="space-y-6">
                        <h3 className="font-bold text-white">Entreprise</h3>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/vision" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    À propos
                                </Link>
                            </li>
                            <li>
                                <Link href="/reservation" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Carrières
                                </Link>
                            </li>
                            <li>
                                <Link href="/reservation" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                    Contact Support
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Agences Locales (SEO Wall) */}
                    <div className="space-y-6">
                        <h3 className="font-bold text-white">Agences Locales</h3>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                            <li><Link href="/agence/paris" className="text-sm text-muted-foreground hover:text-primary transition-colors">Paris</Link></li>
                            <li><Link href="/agence/lyon" className="text-sm text-muted-foreground hover:text-primary transition-colors">Lyon</Link></li>
                            <li><Link href="/agence/marseille" className="text-sm text-muted-foreground hover:text-primary transition-colors">Marseille</Link></li>
                            <li><Link href="/agence/bordeaux" className="text-sm text-muted-foreground hover:text-primary transition-colors">Bordeaux</Link></li>
                            <li><Link href="/agence/toulouse" className="text-sm text-muted-foreground hover:text-primary transition-colors">Toulouse</Link></li>
                            <li><Link href="/agence/nantes" className="text-sm text-muted-foreground hover:text-primary transition-colors">Nantes</Link></li>
                            <li><Link href="/agence/lille" className="text-sm text-muted-foreground hover:text-primary transition-colors">Lille</Link></li>
                            <li><Link href="/agence/strasbourg" className="text-sm text-muted-foreground hover:text-primary transition-colors">Strasbourg</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter / CTA Column */}
                    <div className="space-y-6">
                        <h3 className="font-bold text-white">Passez à l'action</h3>
                        <p className="text-sm text-muted-foreground">
                            Vérifiez votre éligibilité à l'installation de notre infrastructure.
                        </p>
                        <Button onClick={openModal} className="w-full bg-white text-primary hover:bg-white/90">
                            Réserver un audit
                        </Button>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-muted-foreground">
                        © 2025 MKDigital Group. Tous droits réservés.
                    </p>

                    <div className="flex gap-6 pr-24 md:pr-0">
                        <Link href="/mentions-legales" className="text-xs text-muted-foreground hover:text-white transition-colors">
                            Mentions légales
                        </Link>
                        <Link href="/confidentialite" className="text-xs text-muted-foreground hover:text-white transition-colors">
                            Confidentialité
                        </Link>
                        <Link href="/cgv" className="text-xs text-muted-foreground hover:text-white transition-colors">
                            CGV
                        </Link>
                    </div>
                </div>
            </div >
        </footer >
    )
}
