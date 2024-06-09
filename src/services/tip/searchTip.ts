import { instance } from '../interceptor'

export const searchTip = async (keyword: string, sort: 'first' | 'last') => {
  return await instance({
    method: 'GET',
    url: '/tip/search',
    params: {
      keyword: keyword,
      sort: sort === 'first' ? 'ASC' : 'DESC',
    },
  }).then((response) => {
    return response.data
  })
}
