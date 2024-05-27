'use server'

import { AuthKindType } from '@/types'
import { redirect } from 'next/navigation'

export async function loginRedirect(kind: AuthKindType, signed?: boolean) {
  if (signed) {
    return redirect(`/auth/login?kind=${kind}&signed=${signed}`)
  }
  return redirect(`/auth/login?kind=${kind}`)
}
