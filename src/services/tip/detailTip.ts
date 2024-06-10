'use server'

import { cookies } from 'next/headers'
import { instance } from '../interceptor'

export const getTipDetail = async (postId: number) => {
  const token = cookies().get('access_token')

  return await instance({
    method: 'GET',
    url: `/tip/${postId}`,
    headers: {
      Authorization: token?.value,
    },
  }).then((response) => {
    return response.data
  })
}
