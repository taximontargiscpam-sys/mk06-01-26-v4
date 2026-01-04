"use client"

import { useEffect, useState } from "react"
import { Phone, X, Loader2 } from "lucide-react"

export function RoundedWidget() {
  useEffect(() => {
    // ------------------------------------------------------------------
    // TODO: PASTE YOUR CALLROUNDED WIDGET EMBED CODE HERE
    // 1. Go to https://app.callrounded.com/
    // 2. Select your agent
    // 3. Go to "Integrations" or "Embed"
    // 4. Copy the script tag (e.g., <script src="..." ...></script>)
    // 5. Convert it to the format below:
    // ------------------------------------------------------------------

    // Example of what the code might look like (uncomment and replace with yours):

    /*
    const script = document.createElement("script")
    script.src = "https://embed.callrounded.com/widget.js" // REPLACE THIS with actual URL
    script.async = true
    script.setAttribute("data-agent-id", "1ccc4043-9b52-4e36-bddc-386bd4b0f589") // Your Agent ID
    document.body.appendChild(script)

    return () => {
      // Cleanup if necessary
      document.body.removeChild(script)
    }
    */

    // NOTE: If the embed code is just a simple <script> tag, you can paste it directly 
    // into layout.tsx instead, but keeping it here is cleaner for React.
  }, [])

  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true)
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 2000) // 2s delay to ensure masking is ready
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  const toggleWidget = () => setIsOpen(!isOpen)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Widget Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 flex h-[70vh] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 animate-in slide-in-from-bottom-10 fade-in sm:absolute sm:bottom-0 sm:right-0 sm:h-[600px] sm:w-[400px]">
          <div className="flex items-center justify-between bg-blue-600 px-4 py-3 text-white">
            <span className="font-medium">Discuter avec Victoria</span>
            <button
              onClick={toggleWidget}
              className="rounded-full p-1 hover:bg-white/20 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
          </div>
          <div className="relative h-[calc(100%-52px)] w-full">
            {/* Mask branding only (Powered by Rounded) - Responsive adjustment */}
            <div className="absolute left-0 z-10 w-full bg-[#F9FAFB] top-[110px] h-32 sm:top-[128px] sm:h-14 pointer-events-none" />

            {/* Loading Overlay */}
            {isLoading && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-[#F9FAFB]">
                <div className="flex flex-col items-center gap-2">
                  <div className="relative">
                    <div className="h-12 w-12 rounded-full border-4 border-primary/20"></div>
                    <div className="absolute top-0 left-0 h-12 w-12 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
                  </div>
                  <p className="text-sm text-muted-foreground font-medium animate-pulse">Connexion à Victoria...</p>
                </div>
              </div>
            )}

            <iframe
              src="https://app.callrounded.com/demo/1b04e680-6e15-4333-93c7-a73481361d8e"
              className="h-full w-full bg-[#F9FAFB] border-0"
              allow="microphone"
              title="Agent Victoria"
            />
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        className={`group flex h-14 items-center gap-3 rounded-full pl-4 pr-6 text-white shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 ${isOpen ? "bg-gray-800 hover:bg-gray-900 focus:ring-gray-800" : "bg-blue-600 hover:bg-blue-700 hover:scale-105 focus:ring-blue-500"
          }`}
        onClick={toggleWidget}
      >
        <div className={`relative flex h-8 w-8 items-center justify-center rounded-full ${isOpen ? "bg-white/20" : "bg-white/20"}`}>
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="animate-pulse"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          )}
        </div>
        <span className="font-semibold">{isOpen ? "Fermer" : "Discuter avec Victoria"}</span>
      </button>
    </div>
  )
}
