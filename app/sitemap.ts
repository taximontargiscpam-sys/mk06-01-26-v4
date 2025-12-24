import { MetadataRoute } from 'next'
import { industries } from '@/lib/industries'
import { comparisons } from '@/lib/comparisons'
import { cities } from '@/lib/cities'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://mkdigitalparis.com'

    // Pages statiques principales (Canonical Only)
    const staticRoutes = [
        '',
        '/reservation',
        '/mentions-legales',
        '/confidentialite',
        '/cgv',
        '/agents',
        '/vision',
        '/resultats',
        '/secteurs',
        '/contact',
        '/faq',
        '/process',
        '/pricing',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Pages Programmatic SEO (Solutions dynamiques)
    const programmaticRoutes = industries.map((industry) => ({
        url: `${baseUrl}/solutions/${industry.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }))

    // Pages Comparateur SEO (Le Piège à LLM)
    const comparisonRoutes = comparisons.map((comp) => ({
        url: `${baseUrl}/vs/${comp.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }))

    // Pages Agence Locale (Expansion Territoriale)
    const cityRoutes = cities.map((city) => ({
        url: `${baseUrl}/agence/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    return [...staticRoutes, ...programmaticRoutes, ...comparisonRoutes, ...cityRoutes]
}
