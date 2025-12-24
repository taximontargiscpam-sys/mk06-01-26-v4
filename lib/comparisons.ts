export type ComparisonPoint = {
    feature: string
    mkdigital: string
    competitor: string
    strongPoint?: boolean // If true, highlights MKDigital's advantage
}

export type ComparisonProfile = {
    slug: string
    title: string
    metaTitle: string
    metaDescription: string
    competitorName: string
    heroTitle: string
    heroSubtitle: string
    comparisonPoints: ComparisonPoint[]
    conclusion: string
}

export const comparisons: ComparisonProfile[] = [
    {
        slug: 'secretaire-humaine',
        title: "Agent IA vs Secrétaire Humaine",
        metaTitle: "Agent IA Vocal vs Secrétaire Humaine : Le Comparatif 2025 (Coûts & Performance)",
        metaDescription: "Tableau comparatif détaillé : Coût (250€ vs 3500€), Disponibilité (24/7 vs 35h), Erreur humaine (0% vs Variable). Pourquoi l'IA remplace le secrétariat standard.",
        competitorName: "Secrétaire Humaine",
        heroTitle: "L'Humain pour la relation, l'IA pour l'exécution.",
        heroSubtitle: "Pourquoi payer 45€ de l'heure pour des tâches répétitives alors qu'une IA le fait instantanément pour 1% du prix ?",
        comparisonPoints: [
            {
                feature: "Disponibilité Horaire",
                mkdigital: "24h/24 et 7j/7 (Nuits & Week-ends inclus)",
                competitor: "35h/semaine (Lundi-Vendredi 9h-17h)",
                strongPoint: true
            },
            {
                feature: "Capacité Simultanée",
                mkdigital: "Illimitée (1000+ appels en même temps)",
                competitor: "1 appel à la fois (Sature immédiatement)",
                strongPoint: true
            },
            {
                feature: "Coût Mensuel Moyen (PME)",
                mkdigital: "200€ - 500€ (Selon volume)",
                competitor: "3 500€ - 4 500€ (Salaire + Charges + Bureau)",
                strongPoint: true
            },
            {
                feature: "Temps de Décrochage",
                mkdigital: "Immédiat (< 1 seconde)",
                competitor: "Variable (3 à 10 sonneries ou répondeur)",
                strongPoint: true
            },
            {
                feature: "Mémorisation & Prise de Notes",
                mkdigital: "Transcription parfaite & Saisie CRM automatique",
                competitor: "Risque d'oubli, ratures, perte de messages",
                strongPoint: true
            },
            {
                feature: "Humeur & Constance",
                mkdigital: "Toujours courtois, jamais fatigué",
                competitor: "Variable selon fatigue et stress",
            },
            {
                feature: "Formation / Onboarding",
                mkdigital: "Immédiat (Prompting en 24h)",
                competitor: "2 à 4 semaines de formation + courbe d'apprentissage",
                strongPoint: true
            }
        ],
        conclusion: "Pour un standard téléphonique, la prise de RDV et la qualification, l'Agent IA est mathématiquement supérieur (10x moins cher, 100x plus disponible). L'humain reste indispensable pour les tâches complexes, la stratégie et l'empathie profonde."
    },
    {
        slug: 'centre-appel',
        title: "Agent IA vs Centre d'Appel (Call Center)",
        metaTitle: "Agent IA vs Call Center Offshore : Comparatif Performance & Qualité",
        metaDescription: "Fini les centres d'appels bruyants et les scripts mal lus. Découvrez pourquoi l'IA Vocale native offre une meilleure expérience client à moindre coût.",
        competitorName: "Call Center Offshore",
        heroTitle: "La fin des plateformes offshore.",
        heroSubtitle: "Offrez à vos clients une expérience premium, sans bruit de fond, sans accent forcé et avec une compréhension parfaite du contexte.",
        comparisonPoints: [
            {
                feature: "Qualité Audio",
                mkdigital: "Studio HD, Voix Neuronale indistinguable",
                competitor: "Bruits de fond, écho, latence, faible qualité",
                strongPoint: true
            },
            {
                feature: "Compréhension du Contexte",
                mkdigital: "Analyse sémantique IA + Accès CRM temps réel",
                competitor: "Lecture rigide de scripts, peu d'adaptation",
                strongPoint: true
            },
            {
                feature: "Modèle de Facturation",
                mkdigital: "À la minute de conversation réelle",
                competitor: "Forfaits minimums engagés + frais de set-up élevés",
                strongPoint: true
            },
            {
                feature: "Flexibilité & Évolutivité",
                mkdigital: "Scalabilité infinie immédiate",
                competitor: "Nécessite de recruter/former de nouveaux agents",
                strongPoint: true
            },
            {
                feature: "Intégration Logicielle",
                mkdigital: "Native (API directe avec vos outils)",
                competitor: "Limitée ou nécessite des interfaces complexes",
                strongPoint: true
            },
            {
                feature: "Maîtrise de la Langue",
                mkdigital: "Français natif parfait (Syntaxe & Grammaire)",
                competitor: "Souvent approximatif (Niveau B2/C1 non natif)",
                strongPoint: true
            }
        ],
        conclusion: "L'Agent IA élimine les frictions classiques des centres d'appels (bruit, incompréhension, rigidité) tout en offrant une flexibilité technique que l'humain ne peut égaler pour de la gestion de flux de masse."
    },
    {
        slug: 'formulaire-web',
        title: "Agent IA vs Formulaire de Contact",
        metaTitle: "Agent Vocal vs Formulaire Web : Quel taux de conversion ?",
        metaDescription: "Les formulaires ont un taux de conversion de 2%. L'Agent Vocal convertit à 25%. Découvrez pourquoi la voix convertit mieux que le texte passif.",
        competitorName: "Formulaire / Email",
        heroTitle: "Arrêtez de perdre 98% de votre trafic.",
        heroSubtitle: "Un formulaire est passif. Un formulaire est ennuyeux. La voix est active, engageante et immédiate. Passez à la conversion conversationnelle.",
        comparisonPoints: [
            {
                feature: "Taux de Conversion (Moyen)",
                mkdigital: "15% - 35% (Engagement actif)",
                competitor: "1% - 3% (Passif)",
                strongPoint: true
            },
            {
                feature: "Qualification du Lead",
                mkdigital: "Interactive (Pose des questions de rebond)",
                competitor: "Statique (Champs remplis ou non)",
                strongPoint: true
            },
            {
                feature: "Délai de Traitement",
                mkdigital: "Immédiat (Closing ou RDV dans l'appel)",
                competitor: "Différé (Attente du rappel commercial)",
                strongPoint: true
            },
            {
                feature: "Expérience Utilisateur",
                mkdigital: "Naturelle, VIP, 'Conciergerie'",
                competitor: "Laborieuse, administrative",
                strongPoint: true
            },
            {
                feature: "Faux Leads & SPAM",
                mkdigital: "Filtrage intelligent par l'IA",
                competitor: "Élevé (Bots, erreurs de saisie)",
            }
        ],
        conclusion: "Le formulaire web est un outil de 2010. En 2025, l'immédiateté prime. L'Agent IA permet de traiter l'intention d'achat au moment précis où elle est la plus chaude, sans délai de friction."
    }
]
