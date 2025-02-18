import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Heart, Leaf, Users, Wheat } from 'lucide-react'
import {posts} from './blog/data'

const activities = [
  {
    title: 'Éco-éducation',
    description: 'Sensibilisation et éducation pour la protection de l\'environnement',
    icon: Leaf,
    color: 'text-green-600',
  },
  {
    title: 'Lutte anti-vectorielle',
    description: 'Combat contre le paludisme et les maladies vectorielles',
    icon: Heart,
    color: 'text-red-600',
  },
  {
    title: 'Droits humains',
    description: 'Assistance et soutien aux personnes vulnérables',
    icon: Users,
    color: 'text-blue-600',
  },
  {
    title: 'Agriculture durable',
    description: 'Promotion de pratiques agricoles responsables',
    icon: Wheat,
    color: 'text-yellow-600',
  },
]

const latestPosts = [
  {
    title: 'Impact de nos actions en 2023',
    description: 'Découvrez les résultats de nos projets et leur impact sur les communautés.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Rapport',
    date: '10 Mars 2024',
  },
  {
    title: 'Nouveau programme d\'agriculture durable',
    description: 'Lancement de notre initiative pour soutenir les agriculteurs locaux.',
    image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Agriculture',
    date: '5 Mars 2024',
  },
  {
    title: 'Victoire pour les droits humains',
    description: 'Une avancée majeure dans la protection des droits des personnes vulnérables.',
    image: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Droits Humains',
    date: '1 Mars 2024',
  },
]

const partners = [
  {
    name: 'Green Earth Foundation',
    logo: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    type: 'ONG',
  },
  {
    name: 'Health For All',
    logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    type: 'Organisation de santé',
  },
  {
    name: 'AgriTech Solutions',
    logo: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    type: 'Entreprise',
  },
  {
    name: 'EcoTech Institute',
    logo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    type: 'Institut de recherche',
  },
  {
    name: 'Sustainable Future',
    logo: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    type: 'Fondation',
  },
  {
    name: 'Global Health Initiative',
    logo: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    type: 'Organisation internationale',
  },
]

export default function Home() {
  // console.log(posts)
  return (
    <>
      {/* Hero Section */}
      <div className="relative pt-16">
        <div className="absolute inset-0 h-[500px] sm:h-[600px]">
          <Image
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Hero background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
          <div className="pt-16 pb-20 sm:pt-24 sm:pb-32">
            <div className="text-center">
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Ensemble, construisons<br className="hidden sm:block" /> un monde meilleur
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg md:text-xl text-gray-200 px-4 sm:px-0">
                Engagés dans l{"'"}éco-éducation, la santé, les droits humains et l{"'"}agriculture durable pour un impact positif sur notre société.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-4">
                <Button size="lg" className="w-full sm:w-auto bg-pink-700 hover:bg-pink-800" asChild>
                  <Link href="/contact">Faire un don</Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 text-white border-white hover:bg-white/20" asChild>
                  <Link href="/blog">Découvrir nos projets</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the components remain unchanged */}
      {/* Activities Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nos domaines d{"'"}action
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Découvrez nos différents programmes et initiatives pour un impact durable.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {activities.map((activity) => (
                <div key={activity.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <activity.icon className={`h-5 w-5 flex-none ${activity.color}`} aria-hidden="true" />
                    {activity.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{activity.description}</p>
                    <p className="mt-6">
                      <Link
                        href={`/activities#${activity.title.toLowerCase()}`}
                        className="text-sm font-semibold leading-6 text-pink-700"
                      >
                        En savoir plus <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Latest Blog Posts */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Dernières actualités
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Restez informés de nos actions et de leur impact sur le terrain.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post: any) => (
              <Card key={post.title} className="flex flex-col overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={post.images[0].url}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.date} className="text-gray-500">
                      {post.date}
                    </time>
                    <span className="relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600">
                      {post.category.name}
                    </span>
                  </div>
                  <CardTitle className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    {post.title}
                  </CardTitle>
                  <CardDescription>
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <Link
                    href={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`}
                    className="text-sm font-semibold leading-6 text-blue-500"
                  >
                    Lire la suite <span aria-hidden="true">→</span>
                  </Link>
                </CardContent>
              </Card>
            )).reverse()}
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nos partenaires
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ils nous font confiance et nous accompagnent dans notre mission.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center gap-4 rounded-lg bg-gray-50 p-8 transition-colors hover:bg-gray-100"
              >
                <div className="relative h-24 w-24 overflow-hidden rounded-full">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900">{partner.name}</h3>
                  <p className="mt-1 text-sm text-gray-600">{partner.type}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Button variant="outline" asChild>
              <Link href="/partners">
                Voir tous nos partenaires
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}