import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Heart, Leaf, Users, Wheat } from 'lucide-react'

const team = [
  {
    name: 'Marie Dubois',
    role: 'Directrice Générale',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: '15 ans d\'expérience dans le secteur humanitaire',
  },
  {
    name: 'Thomas Martin',
    role: 'Responsable Projets Environnementaux',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Expert en développement durable et éducation environnementale',
  },
  {
    name: 'Sarah Ndiaye',
    role: 'Coordinatrice Santé',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    bio: 'Médecin spécialisée dans la lutte contre le paludisme',
  },
]

const values = [
  {
    icon: Heart,
    title: 'Engagement',
    description: 'Un dévouement total envers nos bénéficiaires et notre mission sociale.',
  },
  {
    icon: Users,
    title: 'Solidarité',
    description: 'Agir ensemble pour un impact positif sur les communautés.',
  },
  {
    icon: Leaf,
    title: 'Durabilité',
    description: 'Des solutions pérennes respectueuses de l\'environnement.',
  },
  {
    icon: Wheat,
    title: 'Innovation',
    description: 'Des approches novatrices pour répondre aux défis actuels.',
  },
]

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="About hero"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Notre Histoire
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200 max-w-xl">
            Depuis 2010, EcoSolidaire œuvre pour un monde plus juste et durable à travers des actions concrètes et innovantes.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Notre Mission
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              EcoSolidaire s'engage à créer un impact positif durable à travers quatre piliers d'action : l'éco-éducation,
              la lutte contre le paludisme, la défense des droits humains et l'agriculture durable.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nos Valeurs
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Des principes qui guident chacune de nos actions.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="flex flex-col items-center text-center">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <value.icon className="h-8 w-8 text-green-700" aria-hidden="true" />
                    {value.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{value.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Notre Équipe
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Des professionnels passionnés et engagés.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name} className="flex flex-col overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="flex-1 p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-green-700">{member.role}</p>
                  <p className="mt-4 text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Rejoignez notre mission
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-200">
              Ensemble, nous pouvons faire la différence. Rejoignez-nous dans notre mission pour un monde meilleur.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Devenir bénévole
              </Button>
              <Button size="lg" className="bg-white text-green-700 hover:bg-gray-100">
                Faire un don
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}