import { AuthKindType, AuthSignupType } from '@/types'
import { instance } from './interceptor'

export const authSignup = async (
  kind: AuthKindType,
  token: string,
  data: AuthSignupType,
) => {
  return await instance({
    method: 'POST',
    url: `/auth/${kind}/signup`,
    headers: {
      'OA-TOKEN': token,
    },
    data: data,
  })
    .then((response) => {
      console.log(response.headers)
      return response.data
    })
    .catch((error) => console.log(error))
}
