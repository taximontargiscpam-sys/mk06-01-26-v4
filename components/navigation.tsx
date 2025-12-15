"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="relative w-40 h-16 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logo.png"
            alt="MKDigital Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm transition-colors ${isActive("/") ? "text-foreground font-medium" : "text-foreground/80 hover:text-foreground"}`}
          >
            Accueil
          </Link>
          <Link
            href="/services"
            className={`text-sm transition-colors ${isActive("/services") ? "text-foreground font-medium" : "text-foreground/80 hover:text-foreground"}`}
          >
            Services
          </Link>
          <Link
            href="/agents"
            className={`text-sm transition-colors ${isActive("/agents") ? "text-foreground font-medium" : "text-foreground/80 hover:text-foreground"}`}
          >
            Agent IA
          </Link>
          <Link
            href="/secteurs"
            className={`text-sm transition-colors ${isActive("/secteurs") ? "text-foreground font-medium" : "text-foreground/80 hover:text-foreground"}`}
          >
            Secteurs
          </Link>
          <Link
            href="/resultats"
            className={`text-sm transition-colors ${isActive("/resultats") ? "text-foreground font-medium" : "text-foreground/80 hover:text-foreground"}`}
          >
            Résultats
          </Link>
          <Link
            href="/vision"
            className={`text-sm transition-colors ${isActive("/vision") ? "text-foreground font-medium" : "text-foreground/80 hover:text-foreground"}`}
          >
            Vision
          </Link>
          <Link
            href="/contact"
            className={`text-sm transition-colors ${isActive("/contact") ? "text-foreground font-medium" : "text-foreground/80 hover:text-foreground"}`}
          >
            Contact
          </Link>
          <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a
              href="https://cal.com/mkdigital/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Réserver un entretien
            </a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
            <Link
              href="/"
              className={`text-sm py-2 transition-colors ${isActive("/") ? "text-foreground font-medium" : "text-foreground/80"}`}
            >
              Accueil
            </Link>
            <Link
              href="/services"
              className={`text-sm py-2 transition-colors ${isActive("/services") ? "text-foreground font-medium" : "text-foreground/80"}`}
            >
              Services
            </Link>
            <Link
              href="/agents"
              className={`text-sm py-2 transition-colors ${isActive("/agents") ? "text-foreground font-medium" : "text-foreground/80"}`}
            >
              Agents IA
            </Link>
            <Link
              href="/secteurs"
              className={`text-sm py-2 transition-colors ${isActive("/secteurs") ? "text-foreground font-medium" : "text-foreground/80"}`}
            >
              Secteurs
            </Link>
            <Link
              href="/resultats"
              className={`text-sm py-2 transition-colors ${isActive("/resultats") ? "text-foreground font-medium" : "text-foreground/80"}`}
            >
              Résultats
            </Link>
            <Link
              href="/vision"
              className={`text-sm py-2 transition-colors ${isActive("/vision") ? "text-foreground font-medium" : "text-foreground/80"}`}
            >
              Vision
            </Link>
            <Link
              href="/contact"
              className={`text-sm py-2 transition-colors ${isActive("/contact") ? "text-foreground font-medium" : "text-foreground/80"}`}
            >
              Contact
            </Link>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
              <a
                href="https://cal.com/mkdigital/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Réserver un entretien
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
