import { Post } from '@/types/post'

export const posts: Post[] = [
  {
    id: '1',
    title: 'Impact de nos actions en 2023',
    slug: 'impact-de-nos-actions-en-2023',
    description: 'Découvrez les résultats de nos projets et leur impact sur les communautés.',
    category: {
      name: 'Rapport',
      color: 'bg-blue-100 text-blue-800',
    },
    date: '10 Mars 2024',
    author: {
      name: 'Marie Dubois',
      role: 'Directrice Générale',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    mainImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        alt: 'Formation éco-éducation',
        caption: 'Sessions de formation en éco-éducation',
      },
      {
        url: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        alt: 'Distribution de moustiquaires',
        caption: 'Distribution de moustiquaires dans les villages',
      },
    ],
    content: `
## Une année d'actions concrètes

2023 a été une année charnière pour notre organisation, marquée par des avancées significatives dans nos quatre domaines d'action principaux.

### Éco-éducation
- Formation de 1 200 jeunes aux enjeux environnementaux
- Création de 15 jardins pédagogiques dans des écoles
- Organisation de 50 ateliers de sensibilisation

### Lutte contre le paludisme
- Distribution de 5 000 moustiquaires imprégnées
- Formation de 200 agents de santé communautaire
- Réduction de 30% des cas dans les zones ciblées

### Droits humains
- Accompagnement juridique de 300 personnes
- Création de 3 centres d'accueil
- Organisation de 20 sessions de formation aux droits fondamentaux

### Agriculture durable
- Formation de 500 agriculteurs aux pratiques agroécologiques
- Création de 10 coopératives agricoles
- Mise en place de 5 systèmes d'irrigation durables

## Perspectives 2024

Pour l'année à venir, nous prévoyons d'étendre nos actions avec :
- Le lancement d'un programme d'éducation numérique
- L'ouverture de deux nouveaux centres de santé
- Le développement de projets d'agriculture urbaine
- Le renforcement de notre réseau de partenaires

Nous remercions chaleureusement tous nos donateurs, bénévoles et partenaires qui rendent ces actions possibles.`,
    tags: ['Rapport annuel', 'Impact social', 'Développement durable'],
    relatedPosts: ['nouveau-programme-dagriculture-durable', 'victoire-pour-les-droits-humains'],
  },
  {
    id: '2',
    title: "Nouveau programme d'agriculture durable",
    slug: "nouveau-programme-d'agriculture-durable",
    description: 'Lancement de notre initiative pour soutenir les agriculteurs locaux.',
    category: {
      name: 'Agriculture',
      color: 'bg-green-100 text-green-800',
    },
    date: '5 Mars 2024',
    author: {
      name: 'Thomas Martin',
      role: 'Responsable Projets Environnementaux',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    mainImage: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        alt: 'Formation agricole',
        caption: 'Formation aux techniques agroécologiques',
      },
      {
        url: 'https://images.unsplash.com/photo-1595475207225-428b62bda831?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        alt: 'Maraîchage bio',
        caption: 'Culture maraîchère biologique',
      },
    ],
    content: `
## Un nouveau programme ambitieux

Nous sommes fiers d'annoncer le lancement de notre nouveau programme d'agriculture durable, conçu pour accompagner les agriculteurs locaux dans leur transition vers des pratiques plus respectueuses de l'environnement.

### Objectifs du programme
- Former 1 000 agriculteurs aux techniques agroécologiques
- Créer 20 fermes pilotes démonstratives
- Développer des circuits courts de distribution
- Préserver la biodiversité locale

### Les composantes du programme
1. Formation technique
2. Accompagnement personnalisé
3. Soutien matériel
4. Mise en réseau

## Impact attendu

Ce programme vise à avoir un impact significatif sur :
- La qualité des sols
- La biodiversité
- Les revenus des agriculteurs
- La sécurité alimentaire locale

Rejoignez-nous dans cette initiative pour une agriculture plus durable !`,
    tags: ['Agriculture durable', 'Formation', 'Environnement'],
    relatedPosts: ['impact-de-nos-actions-en-2023'],
  },
  {
    id: '3',
    title: 'Victoire pour les droits humains',
    slug: 'victoire-pour-les-droits-humains',
    description: 'Une avancée majeure dans la protection des droits des personnes vulnérables.',
    category: {
      name: 'Droits Humains',
      color: 'bg-purple-100 text-purple-800',
    },
    date: '1 Mars 2024',
    author: {
      name: 'Sarah Ndiaye',
      role: 'Coordinatrice Santé',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    mainImage: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1591522811280-a8759970b03f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        alt: 'Aide juridique',
        caption: 'Consultation juridique gratuite',
      },
      {
        url: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        alt: 'Formation droits',
        caption: 'Formation sur les droits fondamentaux',
      },
    ],
    content: `
## Une avancée historique

Nous sommes heureux d'annoncer une victoire majeure dans notre combat pour les droits humains, avec l'adoption d'une nouvelle législation protégeant les droits des personnes vulnérables.

### Les points clés de cette avancée
- Renforcement de la protection juridique
- Accès facilité à la justice
- Création de centres d'accueil
- Formation des acteurs sociaux

### Impact immédiat
Cette victoire permettra :
- Une meilleure protection des droits fondamentaux
- Un accès plus rapide à l'aide juridique
- Une prise en charge plus efficace des personnes vulnérables

## Prochaines étapes

Nous continuons notre combat avec :
- Le déploiement de nouveaux programmes d'aide
- Le renforcement de notre réseau d'assistance
- La sensibilisation du grand public

Ensemble, continuons à défendre les droits humains !`,
    tags: ['Droits humains', 'Justice', 'Protection sociale'],
    relatedPosts: ['impact-de-nos-actions-en-2023'],
  },
]

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find(post => post.slug === slug)
}

export const getRelatedPosts = (post: Post): Post[] => {
  if (!post.relatedPosts) return []
  return posts.filter(p => post.relatedPosts?.includes(p.slug))
}