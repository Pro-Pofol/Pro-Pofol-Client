import { authLogin, getKakaoToken } from '@/services'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    return getKakaoToken(code).then(async (data) => {
      return await authLogin('kakao', data.access_token)
        .then((response) => {
          const setCookie = response.headers['set-cookie']
          cookies().set({
            name: 'RF-TOKEN',
            value: setCookie?.[0].split(';')[0].split('=')[1] as string,
            httpOnly: true,
            secure: true,
            path: '/',
            sameSite: 'strict',
          })
          return NextResponse.redirect(requestUrl.origin)
        })
        .catch((error) => {
          cookies().set('Access_Token', data.access_token)
          return NextResponse.redirect(`${requestUrl.origin}/signup?kind=kakao`)
        })
    })
  }

  return NextResponse.redirect(requestUrl.origin)
}
