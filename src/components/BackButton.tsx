'use client'

import { Arrow } from '@/assets'
import { useRouter } from 'next/navigation'

export const BackButton = () => {
  const router = useRouter()
  return (
    <button
      onClick={() => router.back()}
      className="p-2 rounded-lg border border-gray200 group hover:bg-gray50 transition-colors w-fit"
    >
      <Arrow className="group-hover:-translate-x-1 transition-transform" />
    </button>
  )
}
