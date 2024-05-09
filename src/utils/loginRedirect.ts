'use server'

import { AuthKindType } from '@/types'
import { redirect } from 'next/navigation'

export async function loginRedirect(kind: AuthKindType) {
  return redirect(`/auth/login?kind=${kind}`)
}
