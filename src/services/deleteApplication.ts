'use server'

import { cookies } from 'next/headers'
import { instance } from './interceptor'

export const deleteApplication = async (postId: number | undefined) => {
  const token = cookies().get('access_token')

  return await instance({
    method: 'DELETE',
    url: `/post/${postId}`,
    headers: {
      Authorization: token?.value,
    },
  }).then((response)=>{
    return response.data
  })
}
