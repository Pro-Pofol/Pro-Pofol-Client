'use client'

import { Button } from '@/components'
import { removeCookie } from '@/utils'
import { useRouter } from 'next/navigation'

export const LogoutButton = () => {
  const router = useRouter()

  const logout = () => {
    console.log('logout!!')
    removeCookie('RF-TOKEN')
    removeCookie('access_token')
    removeCookie('Access_Token')
    router.replace('/')
  }
  return (
    <Button kind="gray" size="small" onClick={logout}>
      로그아웃
    </Button>
  )
}
