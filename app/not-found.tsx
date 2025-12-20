import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#020617] text-white flex flex-col items-center justify-center relative overflow-hidden font-sans">

            {/* Background Ambience */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 text-center px-4">
                {/* Simple Robot Eye/Lens Graphic */}
                <div className="w-24 h-24 mx-auto mb-8 relative">
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-pulse blur-xl"></div>
                    <div className="relative w-full h-full border border-blue-500/30 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-md">
                        <div className="w-8 h-8 bg-red-500 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.6)] animate-pulse"></div>
                    </div>
                </div>

                <h1 className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/10 tracking-tighter mb-4">
                    404
                </h1>

                <h2 className="text-2xl font-medium text-slate-300 mb-6">
                    Signal Perdu.
                </h2>

                <p className="text-slate-500 max-w-md mx-auto mb-10 leading-relaxed">
                    Cette fréquence n'est pas attribuée. Notre Agent IA ne peut pas décrocher ici.
                </p>

                <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-200 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Retour à la base
                </Link>
            </div>

        </div>
    )
}
