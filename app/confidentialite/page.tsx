import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Confidentialite() {
    return (
        <div className="min-h-screen bg-transparent text-slate-100 font-sans selection:bg-blue-500/30 pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
                </Link>

                <h1 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                    Politique de Confidentialité (RGPD)
                </h1>

                <div className="space-y-12 text-slate-300 leading-relaxed text-lg font-light">

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">Introduction</h2>
                        <p>
                            MKDigital accorde une importance capitale à la confidentialité et à la sécurité de vos données. Cette politique explique comment nous collectons, utilisons et protégeons vos informations, conformément au Règlement Général sur la Protection des Données (RGPD).
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">1. Données Collectées</h2>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                            <p className="mb-4">Dans le cadre de l'utilisation de nos services (notamment les formulaires de réservation et les conversations avec l'Agent IA), nous pouvons collecter :</p>
                            <ul className="list-disc list-inside space-y-2 text-slate-400">
                                <li>Informations d'identité : Nom, Prénom.</li>
                                <li>Coordonnées : Adresse email professionnelle, Numéro de téléphone.</li>
                                <li>Données vocales : Transcriptions des interactions avec l'Agent IA (pour la fourniture du service et l'amélioration de la qualité).</li>
                            </ul>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">2. Finalité du Traitement</h2>
                        <p>Vos données sont utilisées uniquement pour :</p>
                        <ul className="list-disc list-inside space-y-2 mt-4 text-slate-400">
                            <li>La fourniture du service d'Agent Vocal (décrochage, qualification, compte-rendu).</li>
                            <li>La gestion de la relation client et du support.</li>
                            <li>L'amélioration continue de nos modèles d'IA (données anonymisées).</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">3. Sécurité des Données</h2>
                        <p>
                            Nous mettons en œuvre des mesures de sécurité techniques (chiffrement TLS/SSL) et organisationnelles pour protéger vos données contre tout accès non autorisé. Nos serveurs sont situés en Europe.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">4. Vos Droits</h2>
                        <p>
                            Conformément à la réglementation, vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données. Pour exercer ces droits, contactez-nous à : <strong>contact@mkdigitalparis.com</strong>.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">5. Cookies</h2>
                        <p>
                            Ce site utilise des cookies techniques nécessaires à son fonctionnement et des cookies de mesure d'audience (anonymisés) pour améliorer l'expérience utilisateur.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    )
}
