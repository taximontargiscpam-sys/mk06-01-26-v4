export type Industry = {
    slug: string
    title: string
    metaDescription: string
    heroTitle: string
    heroSubtitle: string
    painPoint: string
    benefit1: string
    benefit2: string
    benefit3: string
    keywords: string[]
}

export const industries: Industry[] = [
    {
        slug: "avocat",
        title: "Secrétariat Téléphonique IA pour Avocats | MKDigital",
        metaDescription: "Ne manquez plus aucun dossier urgent. Notre Agent IA filtre les urgences juridiques, prend les RDV cabinet et gère votre agenda 24/7. Solution pour avocats.",
        heroTitle: "L'Agent IA Dédié aux Avocats & Cabinets",
        heroSubtitle: "Libérez-vous des interruptions. Laissez l'IA qualifier les dossiers et gérer vos audiences.",
        painPoint: "Vous perdez des heures facturables à répondre à des appels non qualifiés.",
        benefit1: "Filtrage Urgent/Non-Urgent juridique",
        benefit2: "Prise de RDV synchronisée (Barreau/Calendly)",
        benefit3: "Confidentialité & Secret Pro Garanti",
        keywords: ["secrétariat avocat ia", "standard cabinet avocat", "agent ia juridique"]
    },
    {
        slug: "dentiste",
        title: "Standard Automatique IA pour Dentistes et Cabinets Dentaires",
        metaDescription: "Gérez les urgences dentaires et remplissez votre fauteuil automatiquement. L'IA MKDigital s'occupe de la prise de RDV patient.",
        heroTitle: "Standard Dentaire Nouvelle Génération",
        heroSubtitle: "Concentrez-vous sur vos patients, pas sur le téléphone. L'IA remplit votre agenda.",
        painPoint: "Le standard sonne pendant vos soins, interrompant votre concentration.",
        benefit1: "Gestion des urgences dentaires",
        benefit2: "Remplissage des créneaux vides",
        benefit3: "Rappel automatique des RDV",
        keywords: ["secrétariat dentiste ia", "télésecrétariat dentaire", "standard médical automatique"]
    },
    {
        slug: "immobilier",
        title: "Agent IA pour Agence Immobilière | Qualification Vendeur",
        metaDescription: "Captez plus de mandats. Notre Agent IA qualifie les vendeurs et les acheteurs 24/7. Ne ratez plus aucune commission.",
        heroTitle: "L'IA qui Multiplie vos Mandats",
        heroSubtitle: "Réactivité immédiate sur chaque appel entrant. Ne laissez plus partir un vendeur à la concurrence.",
        painPoint: "Vous ratez des appels en visite, et donc des commissions potentielles.",
        benefit1: "Qualification Vendeur / Acquéreur",
        benefit2: "Prise de RDV visite automatique",
        benefit3: "Réactivité 24/7 (même le dimanche)",
        keywords: ["agent ia immobilier", "standard agence immo", "prospection pige ia"]
    },
    {
        slug: "plombier",
        title: "Secrétariat IA pour Plombiers & Artisans du BTP",
        metaDescription: "Ne ratez plus de chantiers. L'IA MKDigital décroche pendant que vous êtes sous l'évier. Devis et urgences gérés 24/7.",
        heroTitle: "Ne Ratez Plus Aucun Chantier",
        heroSubtitle: "Vous avez les mains prises ? L'IA décroche, qualifie l'urgence et note l'adresse.",
        painPoint: "Répondre au téléphone sous un évier ou sur un toit est impossible.",
        benefit1: "Décrochage immédiat 24/7",
        benefit2: "Filtrage Dépannage vs Devis",
        benefit3: "Envoi SMS automatique de confirmation",
        keywords: ["secrétariat plombier", "standard artisan ia", "gestion appels btp"]
    },
    {
        slug: "kine",
        title: "Télésecrétariat IA pour Kinésithérapeutes",
        metaDescription: "Optimisez votre temps médical. L'IA gère les prises de RDV kiné, les annulations et la liste d'attente.",
        heroTitle: "Libérez vos Mains pour Soigner",
        heroSubtitle: "Un secrétariat médical ouvert 24h/24 pour vos patients, sans surcoût de personnel.",
        painPoint: "Les appels incessants perturbent vos séances de rééducation.",
        benefit1: "Connexion Doctolib / Agenda",
        benefit2: "Gestion liste d'attente",
        benefit3: "Réduction des lapins (No-Show)",
        keywords: ["secrétariat kiné ia", "standard kinésithérapeute", "agenda médical ia"]
    },
    {
        slug: "notaire",
        title: "Standard IA pour Études Notariales",
        metaDescription: "Modernisez votre étude. L'IA accueille vos clients, renseigne sur les dossiers en cours et filtre les appels.",
        heroTitle: "L'Excellence Notariale, l'Innovation en Plus",
        heroSubtitle: "Un accueil téléphonique digne de votre étude, disponible à tout instant.",
        painPoint: "L'accueil téléphonique est souvent saturé, frustrant les clients.",
        benefit1: "Accueil prestige 24/7",
        benefit2: "Renseignement statu dossier (basique)",
        benefit3: "Prise de message qualifiée",
        keywords: ["standard notaire ia", "accueil téléphonique notarial", "ia juridique"]
    },
    {
        slug: "restaurant",
        title: "Agent IA de Réservation pour Restaurants",
        metaDescription: "Remplissez vos tables sans répondre au téléphone. L'IA prend les réservations 24/7 pendant que vous êtes en cuisine.",
        heroTitle: "Plus de Couverts, Moins d'Appels",
        heroSubtitle: "L'IA gère les réservations, les questions sur le menu et les horaires.",
        painPoint: "Le téléphone sonne pendant le coup de feu en cuisine ou en salle.",
        benefit1: "Prise de réservation autonome",
        benefit2: "Gestion des annulations",
        benefit3: "Réponse sur le menu/allergies",
        keywords: ["réservation restaurant ia", "standard restaurant automatique", "agent vocal resto"]
    }
]
