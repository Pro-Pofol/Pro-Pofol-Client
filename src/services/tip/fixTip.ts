'use server'

import { cookies } from 'next/headers'
import { instance } from '../interceptor'

export const fixTip = async (
  postId: number,
  title: string,
  content: string,
) => {
  const token = cookies().get('access_token')

  return await instance({
    method: 'PATCH',
    url: `/tip/${postId}`,
    headers: {
      Authorization: token?.value,
    },
    data: {
      title: title,
      content: content,
    },
  })
}
