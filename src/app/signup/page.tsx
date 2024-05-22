'use client'

import { SignupModal } from '@/components'
import { useSearchParams } from 'next/navigation'

export default function SignupPage() {
  const params = useSearchParams().get('kind')
  return (
    <main className="w-full">
      <SignupModal kind={params || 'google'} />
    </main>
  )
}
