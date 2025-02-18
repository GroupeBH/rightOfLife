"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Check, Users } from 'lucide-react'

const membershipTypes = [
  {
    name: 'Membre actif',
    price: '0$/an',
    benefits: [
      'Participation aux assemblées générales',
      'Newsletter mensuelle',
      'Participation aux événements',
    ],
  },
  {
    name: 'Membre bienfaiteur',
    price: '10$/an',
    benefits: [
      'Tous les avantages membre actif',
      'Invitation aux événements VIP',
      'Rapport d\'impact personnalisé',
      'Badge de membre bienfaiteur',
    ],
  },
]

export default function Join() {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    motivation: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici, vous ajouteriez la logique d'adhésion
    setIsModalOpen(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Success Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
              <Check className="h-6 w-6 text-green-700" aria-hidden="true" />
            </div>
            <DialogTitle className="text-center">Bienvenue !</DialogTitle>
            <DialogDescription className="text-center">
              Votre demande d{"'"}adhésion a été enregistrée. Vous recevrez un email de confirmation sous peu.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Membership hero"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Devenir membre
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200 max-w-xl">
            Rejoignez notre communauté et participez activement à nos actions pour un monde meilleur.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Membership Types */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Types d{"'"}adhésion
            </h2>
            <div className="grid gap-8">
              {membershipTypes.map((type) => (
                <Card
                  key={type.name}
                  className={`cursor-pointer transition-colors ${
                    selectedType === type.name ? 'border-green-700 bg-green-50' : ''
                  }`}
                  onClick={() => setSelectedType(type.name)}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-gray-900">{type.name}</h3>
                      <div className="text-xl font-bold text-green-700">{type.price}</div>
                    </div>
                    <ul className="space-y-3">
                      {type.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-green-700 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Formulaire d{"'"}adhésion
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Adresse</Label>
                <Textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="motivation">Motivation</Label>
                <Textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  placeholder="Pourquoi souhaitez-vous rejoindre Right of Life ?"
                  className="h-32"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800"
                disabled={!selectedType}
              >
                <Users className="mr-2 h-4 w-4" /> Soumettre ma demande
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}