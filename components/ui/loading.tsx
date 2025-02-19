"use client"

import { Loader2 } from "lucide-react"

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-pink-700" />
    </div>
  )
}

export function LoadingPage() {
  return (
    <div className="flex h-[70vh] items-center justify-center">
      <Loader2 className="h-12 w-12 animate-spin text-pink-700" />
    </div>
  )
}

export function LoadingCard() {
  return (
    <div className="rounded-lg border bg-card p-8 animate-pulse">
      <div className="h-6 w-2/3 bg-gray-200 rounded mb-4"></div>
      <div className="space-y-3">
        <div className="h-4 w-full bg-gray-200 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
        <div className="h-4 w-4/6 bg-gray-200 rounded"></div>
      </div>
    </div>
  )
}