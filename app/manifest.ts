import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'MKDigital AI',
        short_name: 'MKDigital',
        description: "Intégrateur d'Agents IA Vocaux & Solutions d'Automatisation",
        start_url: '/',
        display: 'standalone',
        background_color: '#000000',
        theme_color: '#2563eb',
        icons: [
            {
                src: '/icon.svg',
                sizes: 'any',
                type: 'image/svg+xml',
            },
            {
                src: '/logo.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/logo.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
