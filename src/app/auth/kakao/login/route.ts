import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const requestUrl = new URL(request.url)
  console.log(`requestUrl is : ${requestUrl}`)
  return NextResponse.redirect(`${requestUrl.origin}`)
}
