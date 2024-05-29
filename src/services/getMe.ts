'use server'

import { cookies } from 'next/headers'
import { instance } from './interceptor'

export const getMe = async () => {
  const token = cookies().get('access_token')

  return await instance({
    method: 'GET',
    url: '/users/me',
    headers: {
      Authorization: token?.value,
    },
  }).then((response) => {
    return response.data
  })
}
