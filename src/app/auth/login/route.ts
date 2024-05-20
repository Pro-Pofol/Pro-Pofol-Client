import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  const kind = requestUrl.searchParams.get('kind')
  console.log(`login with ${kind}`)

  if (kind === 'google') {
    return NextResponse.redirect(
      `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile`,
    )
  }
  if (kind === 'facebook') {
    return NextResponse.redirect(
      `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&response_type=token&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&scope=https://www.googleapis.com/auth/userinfo.email+https://www.googleapis.com/auth/userinfo.profile`,
    )
  }
  if (kind === 'kakao') {
    return NextResponse.redirect(
      `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&response_type=code&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}`,
    )
  }
}
