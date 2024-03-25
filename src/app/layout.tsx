import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const Pretendard = localFont({
  src: './PretendardVariable.woff2',
})

export const metadata: Metadata = {
  title: 'Propofol',
  description: '프로~포폴~',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={Pretendard.className}>{children}</body>
    </html>
  )
}
