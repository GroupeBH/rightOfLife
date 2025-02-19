import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, Leaf, Users, Wheat } from 'lucide-react'
import Link from 'next/link'

const activities = [
  {
    id: 'eco-education',
    title: 'Éco-éducation',
    description: 'Sensibilisation et éducation pour la protection de l\'environnement',
    icon: Leaf,
    color: 'text-green-600',
    image: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739891984/iqoxe4vdne9hqaixymzq.jpg',
    content: `Notre programme d'éco-éducation vise à sensibiliser les communautés aux enjeux environnementaux et à promouvoir des pratiques durables. Nous organisons des ateliers, des formations et des événements pour :

    • Sensibiliser à l'importance de la protection de l'environnement
    • Former aux pratiques écologiques du quotidien
    • Développer des projets environnementaux locaux
    • Créer une communauté engagée pour l'environnement`,
  },
  {
    id: 'lutte-paludisme',
    title: 'Lutte anti-vectorielle',
    description: 'Combat contre le paludisme et les maladies vectorielles',
    icon: Heart,
    color: 'text-red-600',
    image: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739891987/zrizcxjnork9zalm1msg.jpg',
    content: `Notre programme de lutte contre le paludisme combine prévention et traitement pour réduire l'impact de cette maladie mortelle. Nos actions incluent :

    • Distribution de moustiquaires imprégnées
    • Campagnes de sensibilisation et de prévention
    • Soutien aux centres de santé locaux
    • Recherche sur les solutions innovantes`,
  },
  {
    id: 'droits-humains',
    title: 'Droits humains',
    description: 'Assistance et soutien aux personnes vulnérables',
    icon: Users,
    color: 'text-blue-600',
    image: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739891986/wxbkog9ljnzzlf78ihno.jpg',
    content: `Notre programme de défense des droits humains offre assistance et soutien aux personnes vulnérables, notamment :

    • Aide juridique aux personnes en difficulté
    • Soutien psychosocial
    • Programmes de réinsertion
    • Plaidoyer pour les droits fondamentaux`,
  },
  {
    id: 'agriculture',
    title: 'Agriculture durable',
    description: 'Promotion de pratiques agricoles responsables',
    icon: Wheat,
    color: 'text-yellow-600',
    image: 'https://res.cloudinary.com/dblzafklq/image/upload/v1739954282/fi0qgyscmzvdemctbgdw.jpg',
    content: `Notre programme d'agriculture durable vise à développer des pratiques agricoles respectueuses de l'environnement et économiquement viables :

    • Formation aux techniques agroécologiques
    • Soutien aux petits producteurs
    • Développement de circuits courts
    • Innovation en agriculture durable`,
  },
]

export default function Activities() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 h-[400px]">
          <Image
            src="https://res.cloudinary.com/dblzafklq/image/upload/v1739955665/xrxmlqfi9ecyh6sptlwk.jpg"
            alt="Activities hero"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Nos Activités
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200 max-w-xl">
            Découvrez nos différents programmes et initiatives pour un impact durable sur les communautés et l{"'"}environnement.
          </p>
        </div>
      </div>

      {/* Activities Section */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nos domaines d{"'"}action
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Chaque programme est conçu pour maximiser notre impact positif sur la société et l{"'"}environnement.
            </p>
          </div>

          <div className="mx-auto mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                className={`flex flex-col gap-8 lg:flex-row ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="relative w-full lg:w-1/2">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    width={960}
                    height={540}
                    className="rounded-lg object-cover aspect-video"
                  />
                </div>

                <div className="flex flex-col justify-center w-full lg:w-1/2">
                  <div className="flex items-center gap-x-3">
                    <activity.icon
                      className={`h-6 w-6 ${activity.color}`}
                      aria-hidden="true"
                    />
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                      {activity.title}
                    </h3>
                  </div>
                  <p className="mt-6 text-lg leading-8 text-gray-600 whitespace-pre-line">
                    {activity.content}
                  </p>
                  <div className="mt-8">
                    <Button className="bg-pink-700 hover:bg-pink-800">
                      <Link href="/contact">Soutenir ce projet</Link>                     
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-500">
        <div className="px-6 py-20 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Prêt à nous rejoindre ?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-200">
              Votre soutien fait la différence. Rejoignez-nous dans notre mission pour un monde meilleur.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Devenir bénévole
              </Button> */}
              <Button size="lg" className="bg-white text-pink-700 hover:bg-gray-100">
                <Link href={`/contact`}>Faire un don</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}