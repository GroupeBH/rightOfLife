"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function NewsletterButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // Logique d'inscription à la newsletter
    setIsOpen(false)
    setEmail('')
  }

  return (
    <>
      <Button className="bg-green-700 hover:bg-green-800" onClick={() => setIsOpen(true)}>
        S{"'"}abonner à la newsletter
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>S{"'"}abonner à la newsletter</DialogTitle>
            <DialogDescription>
              Recevez nos dernières actualités directement dans votre boîte mail.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubscribe} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                required
              />
            </div>
            <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">
              S{"'"}abonner
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}