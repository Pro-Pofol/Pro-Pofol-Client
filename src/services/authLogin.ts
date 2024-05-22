import { AuthKindType } from '@/types'
import { instance } from './interceptor'

export const authLogin = async (kind: AuthKindType, token: string) => {
  return await instance({
    method: 'GET',
    url: `/auth/${kind}/login`,
    headers: {
      'OA-TOKEN': token,
    },
  })
}
