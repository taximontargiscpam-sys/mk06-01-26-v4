"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useLeadModal } from "@/components/lead-modal-context"
import { supabase } from "@/lib/supabaseClient"
import { Loader2, CheckCircle2, Phone, Mail, User, ShieldCheck, Lock } from "lucide-react"

export function LeadCaptureModal() {
    const { isOpen, closeModal } = useLeadModal()
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        const formData = new FormData(e.currentTarget)
        let formattedPhone = formData.get('phone') as string
        // Remove styling characters
        formattedPhone = formattedPhone.replace(/\D/g, '')
        // Transform 0X to +33X
        if (formattedPhone.startsWith('0')) {
            formattedPhone = '33' + formattedPhone.substring(1)
        }
        // Ensure it starts with +
        if (!formattedPhone.startsWith('+')) {
            formattedPhone = '+' + formattedPhone
        }

        const lead = {
            client_name: formData.get('firstName'),
            last_name: formData.get('lastName'),
            client_email: formData.get('email'),
            to_number: formattedPhone,
            created_at: new Date().toISOString(),
        }

        try {
            console.log("Submitting to Supabase:", lead)

            // Create a race between the fetch and a timeout
            const insertPromise = supabase.from('leads').insert([lead])
            const timeoutPromise = new Promise((_, reject) =>
                setTimeout(() => reject(new Error('Timeout: Vérifiez votre connexion internet')), 10000)
            )

            const { error } = await Promise.race([insertPromise, timeoutPromise]) as any

            if (error) {
                console.error("Supabase returned error:", error)
                throw error
            }

            console.log("Success!")
            setIsSuccess(true)

            setTimeout(() => {
                closeModal()
                setTimeout(() => setIsSuccess(false), 300)
            }, 3000)

        } catch (error: any) {
            console.error('Error submitting lead:', error)
            alert(`Erreur: ${error.message || "Une erreur est survenue"}`)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={closeModal}>
            <DialogContent className="sm:max-w-[480px] p-0 bg-transparent/90 backdrop-blur-xl border border-white/10 text-white shadow-2xl shadow-black/50 overflow-hidden">

                {/* Close Button Override */}
                <button
                    onClick={closeModal}
                    className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-50"
                >
                    <div className="p-1 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                        <span className="sr-only">Close</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-white/50"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </div>
                </button>

                {/* Ambient Glows */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-blue-500/20 blur-[100px] -z-10" />

                <div className="p-8 pb-6">
                    {/* Header */}
                    <div className="text-center mb-8 space-y-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-wider mb-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            Accès Immédiat
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 tracking-tight">
                            Déployez Votre Agent IA
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                            Rejoignez les entreprises qui automatisent leur croissance. Configuration en 30 secondes.
                        </p>
                    </div>

                    {isSuccess ? (
                        <div className="flex flex-col items-center justify-center py-12 text-center space-y-6 animate-in fade-in zoom-in duration-300">
                            <div className="relative">
                                <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full" />
                                <div className="relative w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg shadow-green-500/25">
                                    <CheckCircle2 className="w-10 h-10 text-white" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-2xl font-bold text-white">C'est validé !</h4>
                                <p className="text-slate-400 max-w-[260px] mx-auto text-sm">
                                    Votre téléphone va sonner dans quelques instants. C'est notre Agent qui vous appelle. 🚀
                                </p>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <Label htmlFor="firstName" className="text-xs font-semibold uppercase text-slate-500 tracking-wider pl-1">Prénom</Label>
                                    <div className="relative group">
                                        <User className="absolute left-3 top-3 h-4 w-4 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                                        <Input
                                            id="firstName"
                                            name="firstName"
                                            required
                                            placeholder="Jean"
                                            className="pl-10 h-11 bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-blue-500/50 focus:bg-white/10 focus:ring-2 focus:ring-blue-500/20 transition-all rounded-xl"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <Label htmlFor="lastName" className="text-xs font-semibold uppercase text-slate-500 tracking-wider pl-1">Nom</Label>
                                    <Input
                                        id="lastName"
                                        name="lastName"
                                        required
                                        placeholder="Dupont"
                                        className="h-11 bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-blue-500/50 focus:bg-white/10 focus:ring-2 focus:ring-blue-500/20 transition-all rounded-xl"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="email" className="text-xs font-semibold uppercase text-slate-500 tracking-wider pl-1">Email Professionnel</Label>
                                <div className="relative group">
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="jean@entreprise.com"
                                        className="pl-10 h-11 bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-blue-500/50 focus:bg-white/10 focus:ring-2 focus:ring-blue-500/20 transition-all rounded-xl"
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <Label htmlFor="phone" className="text-xs font-semibold uppercase text-slate-500 tracking-wider pl-1">Mobile</Label>
                                <div className="relative group">
                                    <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                                    <Input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        required
                                        placeholder="06 12 34 56 78"
                                        className="pl-10 h-11 bg-white/5 border-white/10 text-white placeholder:text-slate-600 focus:border-blue-500/50 focus:bg-white/10 focus:ring-2 focus:ring-blue-500/20 transition-all rounded-xl"
                                    />
                                </div>
                            </div>

                            <div className="pt-4">
                                <Button
                                    type="submit"
                                    className="relative w-full h-14 text-base font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] border-t border-white/20 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 overflow-hidden group"
                                    disabled={isLoading}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                            Traitement en cours...
                                        </>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            Obtenir mon accès gratuit <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
                                        </span>
                                    )}
                                </Button>
                                <p className="text-center text-[10px] text-slate-500 mt-4 px-4 leading-relaxed">
                                    En cliquant, vous acceptez de recevoir votre démonstration par IA. Vos données sont <span className="text-slate-400">cryptées et sécurisées</span>.
                                </p>
                            </div>
                        </form>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}
