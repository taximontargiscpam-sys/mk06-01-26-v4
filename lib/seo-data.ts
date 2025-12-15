export const SEO_DATA = {
    metiers: [
        // Secteur Juridique & Chiffre
        {
            slug: "avocat",
            label: "Avocats",
            singular: "Avocat",
            accroche: "Ne manquez plus aucun client potentiel au cabinet.",
            benefice: "Filtrage des appels juridiques et prise de RDV automatique.",
        },
        {
            slug: "expert-comptable",
            label: "Experts Comptables",
            singular: "Expert Comptable",
            accroche: "Libérez-vous de la saisie des RDV fiscaux.",
            benefice: "Qualification des prospects entreprises et gestion d'agenda.",
        },
        {
            slug: "gestionnaire-patrimoine",
            label: "Gestionnaires de Patrimoine",
            singular: "Gestionnaire de Patrimoine",
            accroche: "Vos prospects fortunés exigent une réponse immédiate.",
            benefice: "Prise en charge VIP 24/7 et qualification des investisseurs.",
        },
        {
            slug: "conseil",
            label: "Cabinets de Conseil",
            singular: "Consultant",
            accroche: "Automatisez la prise de RDV de vos consultants.",
            benefice: "Filtrage B2B et organisation des appels de découverte.",
        },

        // Secteur BTP & Énergie (High Ticket)
        {
            slug: "pompe-a-chaleur",
            label: "Installateurs Pompe à Chaleur",
            singular: "Installateur PAC",
            accroche: "Qualifiez vos leads PAC avant même de décrocher.",
            benefice: "Vérification éligibilité MaPrimeRénov' automatique.",
        },
        {
            slug: "renovation",
            label: "Entreprises de Rénovation",
            singular: "Expert Rénovation",
            accroche: "Ne laissez plus filer de chantiers à 50k€.",
            benefice: "Devis express et qualification des propriétaires.",
        },
        {
            slug: "panneaux-solaires",
            label: "Installateurs Solaire / CEE",
            singular: "Installateur Solaire",
            accroche: "Maximisez vos conversions de leads solaires.",
            benefice: "Qualification technique et prise de RDV terrain.",
        },
        {
            slug: "plombier",
            label: "Plombiers",
            singular: "Plombier",
            accroche: "Intervenez rapidement sans gérer le standard.",
            benefice: "Devis instantané et dispatching des urgences.",
        },

        // Secteur Luxe & Services VIP
        {
            slug: "bodyguard",
            label: "Services de Bodyguard / Protection",
            singular: "Bodyguard",
            accroche: "Discrétion et réactivité absolue pour vos clients VIP.",
            benefice: "Filtrage sécurisé et réponse immédiate 24/7.",
        },
        {
            slug: "conciergerie-luxe",
            label: "Conciergeries de Luxe",
            singular: "Concierge de Luxe",
            accroche: "L'excellence du service ne dort jamais.",
            benefice: "Gestion des requêtes clients jour et nuit en multilingue.",
        },
        {
            slug: "personal-shopper",
            label: "Personal Shoppers",
            singular: "Personal Shopper",
            accroche: "Gérez votre clientèle exclusive sans interruption.",
            benefice: "Prise de RDV shopping et gestion VIP.",
        },
        {
            slug: "wedding-planner",
            label: "Wedding Planners",
            singular: "Wedding Planner",
            accroche: "Rassurez les futurs mariés instantanément.",
            benefice: "Gestion des premiers contacts et qualification budget.",
        },
        {
            slug: "agent-immobilier",
            label: "Agents Immobiliers",
            singular: "Agent Immobilier",
            accroche: "Vendez plus de biens, passez moins de temps au téléphone.",
            benefice: "Qualification des acheteurs et plannification des visites 24/7.",
        },

        // Formation & Éducation
        {
            slug: "centre-formation",
            label: "Centres de Formation / OPCO",
            singular: "Centre de Formation",
            accroche: "Remplissez vos sessions CPF sans effort commercial.",
            benefice: "Vérification solde CPF et inscription automatique.",
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
