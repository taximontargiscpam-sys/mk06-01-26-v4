export type CityProfile = {
    slug: string
    name: string
    department: string
    region: string
    zip: string
}

export const cities: CityProfile[] = [
    // Île-de-France
    { slug: 'paris', name: 'Paris', department: 'Paris', region: 'Île-de-France', zip: '75000' },
    { slug: 'asnieres-sur-seine', name: 'Asnières-sur-Seine', department: 'Hauts-de-Seine', region: 'Île-de-France', zip: '92600' },
    { slug: 'neuilly-sur-seine', name: 'Neuilly-sur-Seine', department: 'Hauts-de-Seine', region: 'Île-de-France', zip: '92200' },
    { slug: 'levallois-perret', name: 'Levallois-Perret', department: 'Hauts-de-Seine', region: 'Île-de-France', zip: '92300' },
    { slug: 'boulogne-billancourt', name: 'Boulogne-Billancourt', department: 'Hauts-de-Seine', region: 'Île-de-France', zip: '92100' },
    { slug: 'saint-denis', name: 'Saint-Denis', department: 'Seine-Saint-Denis', region: 'Île-de-France', zip: '93200' },
    { slug: 'versailles', name: 'Versailles', department: 'Yvelines', region: 'Île-de-France', zip: '78000' },

    // Auvergne-Rhône-Alpes
    { slug: 'lyon', name: 'Lyon', department: 'Rhône', region: 'Auvergne-Rhône-Alpes', zip: '69000' },
    { slug: 'grenoble', name: 'Grenoble', department: 'Isère', region: 'Auvergne-Rhône-Alpes', zip: '38000' },
    { slug: 'saint-etienne', name: 'Saint-Étienne', department: 'Loire', region: 'Auvergne-Rhône-Alpes', zip: '42000' },
    { slug: 'clermont-ferrand', name: 'Clermont-Ferrand', department: 'Puy-de-Dôme', region: 'Auvergne-Rhône-Alpes', zip: '63000' },
    { slug: 'annecy', name: 'Annecy', department: 'Haute-Savoie', region: 'Auvergne-Rhône-Alpes', zip: '74000' },

    // PACA
    { slug: 'marseille', name: 'Marseille', department: 'Bouches-du-Rhône', region: 'Provence-Alpes-Côte d\'Azur', zip: '13000' },
    { slug: 'nice', name: 'Nice', department: 'Alpes-Maritimes', region: 'Provence-Alpes-Côte d\'Azur', zip: '06000' },
    { slug: 'toulon', name: 'Toulon', department: 'Var', region: 'Provence-Alpes-Côte d\'Azur', zip: '83000' },
    { slug: 'aix-en-provence', name: 'Aix-en-Provence', department: 'Bouches-du-Rhône', region: 'Provence-Alpes-Côte d\'Azur', zip: '13100' },
    { slug: 'cannes', name: 'Cannes', department: 'Alpes-Maritimes', region: 'Provence-Alpes-Côte d\'Azur', zip: '06400' },

    // Occitanie
    { slug: 'toulouse', name: 'Toulouse', department: 'Haute-Garonne', region: 'Occitanie', zip: '31000' },
    { slug: 'montpellier', name: 'Montpellier', department: 'Hérault', region: 'Occitanie', zip: '34000' },
    { slug: 'nimes', name: 'Nîmes', department: 'Gard', region: 'Occitanie', zip: '30000' },
    { slug: 'perpignan', name: 'Perpignan', department: 'Pyrénées-Orientales', region: 'Occitanie', zip: '66000' },

    // Nouvelle-Aquitaine
    { slug: 'bordeaux', name: 'Bordeaux', department: 'Gironde', region: 'Nouvelle-Aquitaine', zip: '33000' },
    { slug: 'limoges', name: 'Limoges', department: 'Haute-Vienne', region: 'Nouvelle-Aquitaine', zip: '87000' },
    { slug: 'poitiers', name: 'Poitiers', department: 'Vienne', region: 'Nouvelle-Aquitaine', zip: '86000' },
    { slug: 'la-rochelle', name: 'La Rochelle', department: 'Charente-Maritime', region: 'Nouvelle-Aquitaine', zip: '17000' },

    // Hauts-de-France
    { slug: 'lille', name: 'Lille', department: 'Nord', region: 'Hauts-de-France', zip: '59000' },
    { slug: 'amiens', name: 'Amiens', department: 'Somme', region: 'Hauts-de-France', zip: '80000' },
    { slug: 'dunkerque', name: 'Dunkerque', department: 'Nord', region: 'Hauts-de-France', zip: '59140' },
    { slug: 'calais', name: 'Calais', department: 'Pas-de-Calais', region: 'Hauts-de-France', zip: '62100' },

    // Grand Est
    { slug: 'strasbourg', name: 'Strasbourg', department: 'Bas-Rhin', region: 'Grand Est', zip: '67000' },
    { slug: 'reims', name: 'Reims', department: 'Marne', region: 'Grand Est', zip: '51100' },
    { slug: 'metz', name: 'Metz', department: 'Moselle', region: 'Grand Est', zip: '57000' },
    { slug: 'nancy', name: 'Nancy', department: 'Meurthe-et-Moselle', region: 'Grand Est', zip: '54000' },

    // Pays de la Loire
    { slug: 'nantes', name: 'Nantes', department: 'Loire-Atlantique', region: 'Pays de la Loire', zip: '44000' },
    { slug: 'angers', name: 'Angers', department: 'Maine-et-Loire', region: 'Pays de la Loire', zip: '49000' },
    { slug: 'le-mans', name: 'Le Mans', department: 'Sarthe', region: 'Pays de la Loire', zip: '72000' },

    // Bretagne
    { slug: 'rennes', name: 'Rennes', department: 'Ille-et-Vilaine', region: 'Bretagne', zip: '35000' },
    { slug: 'brest', name: 'Brest', department: 'Finistère', region: 'Bretagne', zip: '29200' },

    // Normandie
    { slug: 'rouen', name: 'Rouen', department: 'Seine-Maritime', region: 'Normandie', zip: '76000' },
    { slug: 'caen', name: 'Caen', department: 'Calvados', region: 'Normandie', zip: '14000' },
    { slug: 'le-havre', name: 'Le Havre', department: 'Seine-Maritime', region: 'Normandie', zip: '76600' },

    // Centre-Val de Loire
    { slug: 'tours', name: 'Tours', department: 'Indre-et-Loire', region: 'Centre-Val de Loire', zip: '37000' },
    { slug: 'orleans', name: 'Orléans', department: 'Loiret', region: 'Centre-Val de Loire', zip: '45000' },

    // Bourgogne-Franche-Comté
    { slug: 'dijon', name: 'Dijon', department: 'Côte-d\'Or', region: 'Bourgogne-Franche-Comté', zip: '21000' },
    { slug: 'besancon', name: 'Besançon', department: 'Doubs', region: 'Bourgogne-Franche-Comté', zip: '25000' },
]
