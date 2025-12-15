import { MetadataRoute } from 'next'
import { SEO_DATA } from '@/lib/seo-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://mkdigitalparis.com'

    // Pages statiques principales
    const routes = [
        '',
        '/reservation',
        '/mentions-legales',
        '/confidentialite',
        '/cgv',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Pages Programmattic SEO (Solutions par Métier et Ville)
    const seoRoutes = SEO_DATA.metiers.flatMap((metier) =>
        SEO_DATA.villes.map((ville) => ({
            url: `${baseUrl}/solutions/${metier.slug}/${ville.slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        }))
    )

    return [...routes, ...seoRoutes]
}
