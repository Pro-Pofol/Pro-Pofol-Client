'use client'

import { SignupModal } from '@/components'
import { useSearchParams } from 'next/navigation'

export const Signup = () => {
  const params = useSearchParams().get('kind')

  return <SignupModal kind={params || 'google'} />
}
