import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function MentionsLegales() {
    return (
        <div className="min-h-screen bg-transparent text-slate-100 font-sans selection:bg-blue-500/30 pt-32 pb-20">
            <div className="container mx-auto px-6 max-w-4xl">
                <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-blue-400 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
                </Link>

                <h1 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                    Mentions Légales
                </h1>

                <div className="space-y-12 text-slate-300 leading-relaxed text-lg font-light">

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">1. Éditeur du Site</h2>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                            <p>Le site <strong>MKDigital</strong> (ci-après "le Site"), accessible à l’adresse mkdigitalparis.com, est édité par :</p>
                            <ul className="mt-4 space-y-2 list-disc list-inside text-slate-400">
                                <li><strong>Raison sociale :</strong> MKDigital (Micro-entreprise)</li>
                                <li><strong>Siège social :</strong> 2 Quai Aulagnier, 92600 Asnières-sur-Seine</li>
                                <li><strong>Email :</strong> contact@mkdigitalparis.com</li>
                                <li><strong>Téléphone :</strong> 09 39 03 01 76</li>
                                <li><strong>Directeur de la publication :</strong> Mohamed Amir</li>
                            </ul>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">2. Hébergement</h2>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
                            <p>Le Site est hébergé par :</p>
                            <ul className="mt-4 space-y-2 text-slate-400">
                                <li><strong>Société :</strong> Vercel Inc.</li>
                                <li><strong>Adresse :</strong> 340 S Lemon Ave #4133 Walnut, CA 91789, USA</li>
                                <li><strong>Site web :</strong> https://vercel.com</li>
                            </ul>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">3. Propriété Intellectuelle</h2>
                        <p>
                            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
                            Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                        </p>
                        <p>
                            La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">4. Limitation de Responsabilité</h2>
                        <p>
                            Les informations contenues sur ce site sont aussi précises que possible et le site est périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions ou des lacunes.
                            Si vous constatez une lacune, erreur ou ce qui parait être un dysfonctionnement, merci de bien vouloir le signaler par email.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    )
}
