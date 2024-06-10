import { instance } from '../interceptor'

export const editProfile = async (
  token: string,
  editedData: {
    profile_image: string
    generation: number
    user_major: string
  },
) => {
  return await instance({
    method: 'PATCH',
    url: '/users/me',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: editedData,
  })
}
