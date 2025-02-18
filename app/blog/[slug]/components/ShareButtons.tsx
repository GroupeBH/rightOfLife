"use client"

import { Button } from '@/components/ui/button'
import { Share } from 'lucide-react'

export function ShareButtons() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        url: window.location.href,
      })
    }
  }

  return (
    <Button variant="outline" onClick={handleShare}>
      <Share className="mr-2 h-4 w-4" />
      Partager
    </Button>
  )
}