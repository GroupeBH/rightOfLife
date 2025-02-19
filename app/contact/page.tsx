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
import { Mail, MapPin, Phone, Check } from 'lucide-react'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Notre adresse',
    content: 'Avenue Ngafani N°102, Quartier Masanga mbila Commune de Kinshasa, ville de Kinshasa RDC 243 Kinshasa, Democratic Republic of the Congo',
  },
  {
    icon: Phone,
    title: 'Téléphone',
    content: '+243855762421',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@rightoflife.org',
  },
]

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Ici, vous ajouteriez la logique d'envoi du formulaire
    setIsModalOpen(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
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
            <DialogTitle className="text-center">Message envoyé !</DialogTitle>
            <DialogDescription className="text-center">
              Merci de nous avoir contacté. Nous vous répondrons dans les plus brefs délais.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 h-[400px]">
          <Image
            src="https://res.cloudinary.com/dblzafklq/image/upload/v1739956665/h6hhcj6nanrykupwlxlv.jpg"
            alt="Contact hero"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Contactez-nous
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200 max-w-xl">
            Une question ? Un projet ? N{"'"}hésitez pas à nous contacter. Notre équipe est là pour vous répondre.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Envoyez-nous un message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nom complet</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Votre nom"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre@email.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Sujet</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Le sujet de votre message"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Votre message"
                  className="h-32"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-800">
                Envoyer le message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Informations de contact
            </h2>
            <div className="grid gap-8">
              {contactInfo.map((info) => (
                <Card key={info.title}>
                  <CardContent className="flex items-start gap-4 p-6">
                    <div className="rounded-lg bg-pink-50 p-3">
                      <info.icon className="h-6 w-6 text-pink-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{info.title}</h3>
                      <p className="mt-2 text-gray-600 whitespace-pre-line">{info.content}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map */}
            {/* <div className="mt-8">
              <Card>
                <CardContent className="p-0">
                  <div className="relative h-[300px]">
                    <Image
                      src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                      alt="Map"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}