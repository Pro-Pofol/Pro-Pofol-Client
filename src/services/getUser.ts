import { UserType } from '@/types'
import { instance } from './interceptor'

export const getUser = async (oauthId: string) => {
  return await instance<UserType>({
    method: 'GET',
    url: `/users/${oauthId}`,
  }).then((response) => {
    return response.data
  })
}
