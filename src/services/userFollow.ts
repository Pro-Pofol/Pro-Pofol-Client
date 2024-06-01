'use server'

import { instance } from './interceptor'
import { cookies } from 'next/headers'

export const userFollow = async (oauthId: string) => {
  const token = cookies().get('access_token')

  return await instance({
    method: 'POST',
    url: `/users/follow/${oauthId}`,
    headers: {
      Authorization: token?.value,
    },
  }).then((response) => {
    return response.data
  })
}
