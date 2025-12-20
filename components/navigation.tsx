"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, ArrowRight } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { useLeadModal } from "@/components/lead-modal-context"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { openModal } = useLeadModal()
  // ... imports need to be added separately or I can rewrite the import block too but replacing whole file is risky if large. I'll replace the distinct blocks.


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navLinks = [
    { href: "/", label: "Accueil" },
    { href: "/services", label: "Services" },
    { href: "/agents", label: "Agent IA" },
    { href: "/secteurs", label: "Secteurs" },
    { href: "/resultats", label: "Résultats" },
    { href: "/vision", label: "Vision" },
    { href: "/contact", label: "Contact" },
  ]

  if (pathname === "/reservation" || pathname === "/merci") return null

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="relative w-32 h-12 md:w-40 md:h-16 hover:opacity-80 transition-opacity"
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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${isActive(link.href) ? "text-foreground font-medium" : "text-foreground/80 hover:text-foreground"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Button onClick={openModal} className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Réserver un entretien
          </Button>
        </div>

        {/* Mobile Navigation (Sheet) */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                <Menu className="w-8 h-8" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-l border-white/10 bg-[#020617]/95 backdrop-blur-xl p-0">
              <SheetTitle className="sr-only">Menu de navigation</SheetTitle>
              <div className="flex flex-col h-full bg-gradient-to-b from-[#020617] to-[#0f172a]">
                <div className="p-6 border-b border-white/5">
                  <h2 className="text-xl font-bold text-white tracking-tight">Menu</h2>
                </div>
                <div className="flex flex-col gap-2 p-6 overflow-y-auto flex-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-lg py-4 px-4 rounded-xl transition-all duration-300 flex items-center justify-between group ${isActive(link.href) ? "bg-white/10 text-white font-semibold" : "text-gray-400 hover:text-white hover:bg-white/5"
                        }`}
                    >
                      {link.label}
                      <ArrowRight className={`w-4 h-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ${isActive(link.href) ? "opacity-100 translate-x-0" : ""}`} />
                    </Link>
                  ))}
                </div>
                <div className="p-6 border-t border-white/5 bg-black/20">
                  <Button onClick={openModal} className="bg-primary hover:bg-primary/90 text-primary-foreground w-full h-14 text-lg rounded-xl shadow-lg shadow-blue-900/20">
                    Réserver un entretien
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
