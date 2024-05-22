import { instance } from './interceptor'

export const getKakaoToken = async (code: string) => {
  return await instance({
    method: 'GET',
    url: 'https://kauth.kakao.com/oauth/token',
    params: {
      grant_type: 'authorization_code',
      client_id: process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID,
      redirect_uri: process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI,
      code: code,
    },
  })
    .then((res) => {
      console.log(`[[[data is ${res}]]]`)
      return res.data
    })
    .catch((error) => console.log(error))
}
