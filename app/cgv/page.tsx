import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CGV() {
    return (
        <div className="min-h-screen bg-transparent text-slate-100 font-sans selection:bg-blue-500/30 pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
                </Link>

                <h1 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                    Conditions Générales de Vente (CGV)
                </h1>

                <div className="space-y-12 text-slate-300 leading-relaxed text-lg font-light">

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">1. Objet</h2>
                        <p>
                            Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre MKDigital (le "Prestataire") et toute personne physique ou morale (le "Client") souhaitant bénéficier des services d'automatisation et d'intégration d'agents IA vocaux proposés par le Prestataire.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">2. Description des Services</h2>
                        <p>
                            MKDigital propose des solutions d'infrastructure téléphonique augmentée par Intelligence Artificielle :
                        </p>
                        <ul className="list-disc list-inside space-y-2 mt-4 text-slate-400">
                            <li>Agent Niveau 1 : Décrochage, filtrage et prise de message.</li>
                            <li>Agent Niveau 2 : Prise de rendez-vous synchronisée (Calendly, Doctolib, etc.).</li>
                            <li>Agent Niveau 3 : Intégrations CRM sur mesure et appels sortants.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">3. Tarifs et Modalités de Paiement</h2>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl space-y-4">
                            <p>
                                <strong>Infrastructure Offerte :</strong> L'accès à la technologie (Niveau 1) et l'attribution du numéro 09 sont gratuits.
                            </p>
                            <p>
                                <strong>Consommation :</strong> Les communications sont facturées selon le volume de minutes consommées (crédit prépayé ou facturation mensuelle selon l'offre souscrite).
                            </p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">4. Durée et Résiliation</h2>
                        <p>
                            Les services sont sans engagement de durée. Le Client peut demander l'arrêt du service à tout moment par simple email. La désactivation de la ligne est effective sous 24h ouvrées.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">5. Responsabilité et Force Majeure</h2>
                        <p>
                            MKDigital s'engage à une obligation de moyens pour assurer la disponibilité du service 24/7. Sa responsabilité ne saurait être engagée en cas de dysfonctionnement du réseau opérateur, de panne d'électricité générale, ou de tout autre cas de force majeure.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">6. Litiges</h2>
                        <p>
                            Tout litige relatif à l'interprétation et à l'exécution des présentes CGV est soumis au droit français. À défaut de résolution amiable, le litige sera porté devant le Tribunal de Commerce de Paris.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    )
}
