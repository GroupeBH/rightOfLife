"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Check, Heart } from 'lucide-react'

const donationOptions = [
  { amount: 10, description: 'Distribution de 5 moustiquaires' },
  { amount: 25, description: 'Formation d\'un agriculteur aux pratiques durables' },
  { amount: 50, description: 'Soutien juridique pour une personne en difficulté' },
  { amount: 100, description: 'Programme complet d\'éco-éducation pour une école' },
]

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null)
  const [customAmount, setCustomAmount] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleDonation = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici, vous ajouteriez la logique de paiement
    setIsModalOpen(true)
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
            <DialogTitle className="text-center">Merci pour votre don !</DialogTitle>
            <DialogDescription className="text-center">
              Votre soutien est précieux pour nos actions. Vous recevrez un reçu fiscal par email.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Donation hero"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Faire un don
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200 max-w-xl">
            Votre générosité permet de soutenir nos actions et de créer un impact positif durable.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Donation Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Choisissez votre don
            </h2>
            <form onSubmit={handleDonation} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {donationOptions.map((option) => (
                  <Card
                    key={option.amount}
                    className={`cursor-pointer transition-colors ${
                      selectedAmount === option.amount ? 'border-green-700 bg-green-50' : ''
                    }`}
                    onClick={() => {
                      setSelectedAmount(option.amount)
                      setCustomAmount('')
                    }}
                  >
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold text-gray-900">{option.amount}€</div>
                      <p className="mt-2 text-sm text-gray-600">{option.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="space-y-2">
                <Label htmlFor="customAmount">Autre montant</Label>
                <div className="relative">
                  <Input
                    id="customAmount"
                    type="number"
                    min="1"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      setSelectedAmount(null)
                    }}
                    placeholder="Montant personnalisé"
                    className="pl-8"
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">€</span>
                </div>
              </div>

              <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">
                <Heart className="mr-2 h-4 w-4" /> Faire un don
              </Button>

              <p className="text-sm text-gray-600 text-center">
                66% de votre don est déductible de vos impôts dans la limite de 20% de votre revenu imposable.
              </p>
            </form>
          </div>

          {/* Impact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Votre impact
            </h2>
            <div className="prose prose-green">
              <p>
                Chaque don compte et contribue directement à nos actions sur le terrain :
              </p>
              <ul className="space-y-4 list-none pl-0">
                <li className="flex items-start gap-4">
                  <div className="rounded-lg bg-green-50 p-3">
                    <Check className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Santé</h3>
                    <p className="text-gray-600">Distribution de moustiquaires et accès aux soins</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="rounded-lg bg-green-50 p-3">
                    <Check className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Éducation</h3>
                    <p className="text-gray-600">Programmes de sensibilisation environnementale</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="rounded-lg bg-green-50 p-3">
                    <Check className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Agriculture</h3>
                    <p className="text-gray-600">Formation aux pratiques agricoles durables</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="rounded-lg bg-green-50 p-3">
                    <Check className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Droits humains</h3>
                    <p className="text-gray-600">Assistance juridique et soutien aux personnes vulnérables</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}