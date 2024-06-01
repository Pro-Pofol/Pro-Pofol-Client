'use server'

import { cookies } from 'next/headers'
import { instance } from './interceptor'

export const getApplicationDetail = async (postId: number) => {
  const token = cookies().get('access_token')

  return await instance({
    method: 'GET',
    url: `/post/read/${postId}`,
    headers: {
      Authorization: token?.value,
    },
  }).then((response) => {
    return response.data
  })
}
