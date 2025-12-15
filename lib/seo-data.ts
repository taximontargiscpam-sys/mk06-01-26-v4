export const SEO_DATA = {
    metiers: [
        {
            slug: "avocat",
            label: "Avocats",
            singular: "Avocat",
            accroche: "Ne manquez plus aucun client potentiel au cabinet.",
            benefice: "Filtrage des appels juridiques et prise de RDV automatique.",
        },
        {
            slug: "dentiste",
            label: "Dentistes",
            singular: "Dentiste",
            accroche: "Optimisez le remplissage de votre fauteuil.",
            benefice: "Gestion des urgences et annulations de dernière minute par IA.",
        },
        {
            slug: "agent-immobilier",
            label: "Agents Immobiliers",
            singular: "Agent Immobilier",
            accroche: "Vendez plus de biens, passez moins de temps au téléphone.",
            benefice: "Qualification des acheteurs et plannification des visites 24/7.",
        },
        {
            slug: "plombier",
            label: "Plombiers",
            singular: "Plombier",
            accroche: "Intervenez rapidement sans gérer le standard.",
            benefice: "Devis instantané et dispatching des urgences.",
        },
        {
            slug: "restaurant",
            label: "Restaurateurs",
            singular: "Restaurateur",
            accroche: "Remplissez vos tables, même en plein service.",
            benefice: "Prise de réservation automatique pendant que vous cuisinez.",
        },
        {
            slug: "institut-beaute",
            label: "Instituts de Beauté",
            singular: "Institut de Beauté",
            accroche: "Focalisez-vous sur vos soins, l'IA gère l'agenda.",
            benefice: "Réservation de soins et rappels automatiques anti-no-show.",
        },
        {
            slug: "entreprise-btp",
            label: "Entreprises BTP",
            singular: "Entrepreneur BTP",
            accroche: "Gérez vos chantiers, pas votre téléphone.",
            benefice: "Filtrage des démarchages et prise de RDV devis.",
        },
    ],
    villes: [
        { slug: "paris", label: "Paris", dept: "75" },
        { slug: "lyon", label: "Lyon", dept: "69" },
        { slug: "marseille", label: "Marseille", dept: "13" },
        { slug: "bordeaux", label: "Bordeaux", dept: "33" },
        { slug: "lille", label: "Lille", dept: "59" },
        { slug: "toulouse", label: "Toulouse", dept: "31" },
        { slug: "nice", label: "Nice", dept: "06" },
        { slug: "nantes", label: "Nantes", dept: "44" },
        { slug: "strasbourg", label: "Strasbourg", dept: "67" },
        { slug: "montpellier", label: "Montpellier", dept: "34" },
        // Extension massive possible ici
    ]
}

export type SeoMetier = typeof SEO_DATA.metiers[number]
export type SeoVille = typeof SEO_DATA.villes[number]
