// import { Post } from '@/types/post'

export const posts: any = [
  {
    id: '1',
    title: 'Visite des prisoniers dans muanda',
    slug: 'visite-des-prisoniers-dans-muanda',
    description: "Visiter les prisonniers est une invitation au partage. Voici en image la visite rendue aux prisonniers de Moanda par l'ONG Right Of Life",
    category: {
      name: 'Action sociale',
      color: 'bg-blue-100 text-blue-800',
    },
    date: '28 Juin 2022',
    author: {
      name: 'Right of Life',
      role: 'Service presse',
      image: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739892623/hjmbuezp5wubhgtcatzr.jpg',
    },
    mainImage: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739892428/feu36eb3y2dc7qkbm27f.jpg',
    images: [
      {
        url: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739892428/feu36eb3y2dc7qkbm27f.jpg',
        alt: 'Formation éco-éducation',
        caption: 'Sessions de formation en éco-éducation',
      },
      {
        url: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739891985/nbpqnggr8pmw2x8cmjjr.jpg',
        alt: 'Distribution de moustiquaires',
        caption: 'Distribution de moustiquaires dans les villages',
      },
    ],
    content: "Visiter les prisonniers est une invitation au partage. Voici en image la visite rendue aux prisonniers de Moanda par l'ONG Right Of Life",
    tags: ['Impact social', 'Droits humains', 'Partage'],
    relatedPosts: ['cagnotte-en-ligne-pour-les-defavorisés', 'victoire-pour-les-droits-humains'],
  },
  {
    id: '2',
    title: "Cagnotte en ligne pour les gens dans le besoin",
    slug: "cagnotte-en-ligne-pour-les-gens-dans-le-besoin",
    description: "Une cagnotte en ligne a été lancée pour soutenir les personnes défavorisées en cette période de crise.",
    category: {
      name: 'Action sociale',
      color: 'bg-green-100 text-green-800',
    },
    date: '22 Juillet 2022',
    author: {
      name: 'Right of Life',
      role: 'Service presse',
      image: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739892623/hjmbuezp5wubhgtcatzr.jpg',
    },
    mainImage: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739893838/vwmcxziucvksmlah3lhx.jpg',
    images: [
      {
        url: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739893838/vwmcxziucvksmlah3lhx.jpg',
        alt: 'Formation agricole',
        caption: 'Formation aux techniques agroécologiques',
      },
      {
        url: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739891990/jriud7u05o0fs7yydjfy.jpg',
        alt: 'Formation agricole',
        caption: 'Formation aux techniques agroécologiques',
      },
      {
        url: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739891990/urvtmvarmbd2xmxe4ldl.jpg',
        alt: 'Maraîchage bio',
        caption: 'Culture maraîchère biologique',
      },
      {
        url: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739891990/tekmnyfqtj3tibzbcboj.jpg',
        alt: 'Maraîchage bio',
        caption: 'Culture maraîchère biologique',
      },
    ],
    content: "Nous avons créé cette Cagnotte en ligne enfin de  faciliter les collectes de fonds caritatives au profit de personnes malades ou défavorisées, financez des bourses et proposez des formations aux gens dans le besoin, organiser des évènements solidaires, appuyer le programme de la protection de l’environnement. Joignez-vous à nous  pour défendre les causes qui vous tiennent à cœur. Merci de nous soutenir. Voir https://www.kwendoo.com/",
    tags: ['Action sociale', 'Formation', 'Environnement'],
    relatedPosts: ['impact-de-nos-actions-en-2023'],
  },
  {
    id: '3',
    title: 'Dotation des uniformes aux prisonniers',
    slug: 'dotation-des-uniformes-aux-prisonniers',
    description: 'Dotation  des uniformes aux détenues du parquet de Muanda territoire du Kongo-central.',
    category: {
      name: 'Droits Humains',
      color: 'bg-purple-100 text-purple-800',
    },
    date: '19 Septembre 2022',
    author: {
      name: 'Right of Life',
      role: 'Service presse',
      image: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739892623/hjmbuezp5wubhgtcatzr.jpg',
    },
    mainImage: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739891986/wxbkog9ljnzzlf78ihno.jpg',
    images: [
      {
        url: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739891986/wxbkog9ljnzzlf78ihno.jpg',
        alt: 'Aide juridique',
        caption: 'Consultation juridique gratuite',
      },
      {
        url: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739891987/kavpqnk4vodramv4qr28.jpg',
        alt: 'Formation droits',
        caption: 'Formation sur les droits fondamentaux',
      },
      {
        url: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739891987/gzwfxpvr5saswwv9yfie.jpg',
        alt: 'Formation droits',
        caption: 'Formation sur les droits fondamentaux',
      },
      {
        url: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739891989/hs6zsj5e7cxfnbzkzr5j.jpg',
        alt: 'Formation droits',
        caption: 'Formation sur les droits fondamentaux',
      },
    ],
    content: "Dotation  des uniformes aux détenues du parquet de Muanda territoire du Kongo-central.",
    tags: ['Droits humains', 'Justice', 'Protection sociale'],
    relatedPosts: ['impact-de-nos-actions-en-2023'],
  },
  {
    id: '4',
    title: 'La remise des bequilles',
    slug: 'la-remise-des-bequilles',
    description: "La remise de Béquille à la tenue debout et à la marche d'une personne vivant avec Handicape par l'ONG Right of life toujours Droit à la vie",
    category: {
      name: 'Droits Humains',
      color: 'bg-purple-100 text-purple-800',
    },
    date: '27 Decembre 2022',
    author: {
      name: 'Right of Life',
      role: 'Service presse',
      image: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739892623/hjmbuezp5wubhgtcatzr.jpg',
    },
    mainImage: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739895368/ptm5thljkhbk7qjbgsko.jpg',
    images: [
      {
        url: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739895368/ptm5thljkhbk7qjbgsko.jpg',
        alt: 'Aide juridique',
        caption: 'Consultation juridique gratuite',
      },
      {
        url: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739895368/m0bfvgeeo0x4hqzavluo.jpg',
        alt: 'Formation droits',
        caption: 'Formation sur les droits fondamentaux',
      },
      {
        url: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739895368/b9cenjqlqwmjvshjxduc.jpg',
        alt: 'Formation droits',
        caption: 'Formation sur les droits fondamentaux',
      },
    ],
    content: "La remise de Béquille à la tenue debout et à la marche d'une personne vivant avec Handicape par l'ONG Right of life toujours Droit à la vie",
    tags: ['Action sociale'],
    relatedPosts: ['cagnotte-en-ligne-pour-les-gens-dans-le-besoin]', 'dotation-des-uniformes-aux-prisonniers'],
  },
  {
    id: '5',
    title: 'Don de Right of life pour la police nationale Congolaise',
    slug: 'don-de-right-of-life-pour-la-police-nationale-congolaise',
    description: "Inauguration et remise de Centre de santé à l'État Congolais via l'administrateur du Territoire de Muanda, Don de l'ONG Right of life à la police nationale Congolaise et aux détenus du territoire de Muanda.",
    category: {
      name: 'Droits Humains',
      color: 'bg-purple-100 text-purple-800',
    },
    date: '30 Novembre 2024',
    author: {
      name: 'Right of Life',
      role: 'Service presse',
      image: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739892623/hjmbuezp5wubhgtcatzr.jpg',
    },
    mainImage: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739891984/mecemei2d5af7s8oh9kj.jpg',
    images: [
      {
        url: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739891984/jwzzh4heo6hqyb46qkiw.jpg',
        alt: 'Aide juridique',
        caption: 'Consultation juridique gratuite',
      },
      {
        url: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739891984/mecemei2d5af7s8oh9kj.jpg',
        alt: 'Formation droits',
        caption: 'Formation sur les droits fondamentaux',
      },
      {
        url: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739891986/c9t2lr9gj4h8v2vxxred.jpg',
        alt: 'Formation droits',
        caption: 'Formation sur les droits fondamentaux',
      },
      {
        url: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739891985/hfgix6udwhlnueflcudi.jpg',
        alt: 'Formation droits',
        caption: 'Formation sur les droits fondamentaux',
      },
    ],
    content: "Inauguration et remise de Centre de santé à l'État Congolais via l'administrateur du Territoire de Muanda, Don de l'ONG Right of life à la police nationale Congolaise et aux détenus du territoire de Muanda.",
    tags: ['Droits humains', 'Justice', 'Protection sociale'],
    relatedPosts: ['dotation-des-uniformes-aux-prisonniers'],
  },
]

export const getPostBySlug = (slug: string): any | undefined => {
  return posts.find((post: any) => post.slug === slug)
}

export const getRelatedPosts = (post: any): any => {
  if (!post.relatedPosts) return []
  return posts.filter((p: any) => post.relatedPosts?.includes(p.slug))
}