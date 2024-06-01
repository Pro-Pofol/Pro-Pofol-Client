'use server'

import { AuthKindType } from '@/types'
import { instance } from './interceptor'
import { cookies } from 'next/headers'

export const authLogin = async (kind: AuthKindType, token: string) => {
  return await instance({
    method: 'GET',
    url: `/auth/${kind}/login`,
    headers: {
      'OA-TOKEN': token,
    },
  }).then((response) => {
    const access_token = response.headers['authorization']
    const setCookie = response.headers['set-cookie']
    cookies().set({
      name: 'RF-TOKEN',
      value: setCookie?.[0].split(';')[0].split('=')[1] as string,
      httpOnly: false,
      secure: false,
      path: '/',
      sameSite: 'strict',
    })
    cookies().set('access_token', access_token.split(' ')[1])
    return response
  })
}
