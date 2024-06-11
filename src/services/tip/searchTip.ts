'use server'

import { cookies } from 'next/headers'
import { instance } from '../interceptor'

export const searchTip = async (keyword: string, sort: 'first' | 'last') => {
  const token = cookies().get('access_token')

  return await instance({
    method: 'GET',
    url: '/tip/search',
    headers: {
      Authorization: token?.value,
    },
    params: {
      keyword: keyword,
      sort: sort === 'first' ? 'ASC' : 'DESC',
    },
  }).then((response) => {
    return response.data.tips
  })
}
