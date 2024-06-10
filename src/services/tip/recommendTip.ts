'use server'

import { instance } from '../interceptor'

export const recommendTip = async () => {
  return await instance({
    method: 'GET',
    url: '/tip/recommend',
  }).then((response) => {
    return response.data.posts
  })
}
