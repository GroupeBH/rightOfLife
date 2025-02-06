import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const partners = [
  {
    name: 'Green Earth Foundation',
    logo: 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Partenaire majeur dans nos projets d\'éco-éducation et de sensibilisation environnementale.',
    type: 'ONG',
  },
  {
    name: 'Health For All',
    logo: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Collaboration étroite dans la lutte contre le paludisme et les maladies vectorielles.',
    type: 'Organisation de santé',
  },
  {
    name: 'AgriTech Solutions',
    logo: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    description: 'Support technique et formation pour nos programmes d\'agriculture durable.',
    type: 'Entreprise',
  },
]

export default function Partners() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <div className="bg-green-700 text-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Nos Partenaires
            </h1>
            <p className="mt-6 text-lg leading-8">
              Ensemble, nous créons un impact positif durable. Découvrez les organisations qui nous accompagnent dans notre mission.
            </p>
          </div>
        </div>
      </div>

      {/* Current Partners */}
      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Ils nous font confiance
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Des partenaires engagés qui partagent nos valeurs et notre vision.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {partners.map((partner) => (
              <Card key={partner.name} className="flex flex-col overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-x-4 text-xs">
                    <span className="relative z-10 rounded-full bg-green-50 px-3 py-1.5 font-medium text-green-700">
                      {partner.type}
                    </span>
                  </div>
                  <CardTitle className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                    {partner.name}
                  </CardTitle>
                  <CardDescription>
                    {partner.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Become a Partner */}
      <div className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Devenir partenaire
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Rejoignez-nous dans notre mission pour un monde meilleur.
            </p>
            <div className="mt-10">
              <Button size="lg" className="bg-green-700 hover:bg-green-800">
                Nous contacter
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}