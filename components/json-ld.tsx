export default function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "LocalBusiness",
                "@id": "https://mkdigitalparis.com/#organization",
                "name": "MKDigital",
                "url": "https://mkdigitalparis.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://mkdigitalparis.com/logo.png",
                    "width": 800,
                    "height": 600
                },
                "image": "https://mkdigitalparis.com/logo.png",
                "description": "Leader Français de l'Intégration d'Agents IA Vocaux pour TPE & PME. Automatisation de standard et qualification de prospects.",
                "priceRange": "€€",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Asnières-sur-Seine",
                    "postalCode": "92600",
                    "streetAddress": "2 Quai Aulagnier",
                    "addressCountry": "FR"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 48.9138,
                    "longitude": 2.2838
                },
                "openingHoursSpecification": {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday"
                    ],
                    "opens": "09:00",
                    "closes": "18:00"
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+33-9-39-03-01-76",
                    "contactType": "sales",
                    "areaServed": [
                        "FR",
                        "Île-de-France",
                        "Auvergne-Rhône-Alpes",
                        "Nouvelle-Aquitaine",
                        "Provence-Alpes-Côte d'Azur",
                        "Hauts-de-France",
                        "Grand Est",
                        "Occitanie",
                        "Pays de la Loire",
                        "Bretagne",
                        "Paris",
                        "Lyon",
                        "Marseille",
                        "Bordeaux",
                        "Lille",
                        "Nantes",
                        "Strasbourg",
                        "Nice"
                    ],
                    "availableLanguage": "French"
                },
                "sameAs": [
                    "https://www.instagram.com/mkdigital.paris",
                    "https://www.linkedin.com/in/mk-digital-655218332/"
                ]
            },
            {
                "@type": "Service",
                "name": "Intégration d'Agents IA Vocaux",
                "provider": {
                    "@id": "https://mkdigitalparis.com/#organization"
                },
                "description": "Solution complète d'automatisation téléphonique par IA : décrochage 24/7, qualification, prise de RDV dans Calendly/Doctolib.",
                "areaServed": "FR",
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Services d'Automatisation IA",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Agent Vocal de Protection (Niveau 1)"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Agent Vocal de Transformation (Niveau 2)"
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Agent Vocal d'Expansion (Niveau 3)"
                            }
                        }
                    ]
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Accueil",
                        "item": "https://mkdigitalparis.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Réservation",
                        "item": "https://mkdigitalparis.com/reservation"
                    }
                ]
            }
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}
