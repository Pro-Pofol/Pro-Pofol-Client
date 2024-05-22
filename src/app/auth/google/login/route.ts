import { authLogin } from '@/services'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')

  if (code) {
    const params = {
      code: code || 'code',
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || 'client_id',
      client_secret:
        process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET || 'client_secret',
      grant_type: 'authorization_code',
      redirect_uri:
        process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI || 'redirect_uri',
    }
    const queryString = new URLSearchParams(params).toString()

    return fetch(`https://oauth2.googleapis.com/token?${queryString}`, {
      method: 'POST',
    })
      .then((response) => response.json())
      .then(async (data) => {
        return await authLogin('google', data.access_token)
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
            return NextResponse.redirect(
              `${requestUrl.origin}/signup?kind=google`,
            )
          })
      })
  }

  return NextResponse.redirect(requestUrl.origin)
}
