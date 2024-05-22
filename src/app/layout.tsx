import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Footer, Header } from '@/components'
import ReduxProvider from '@/utils/store/Provider'
import Toaster from '@/utils/toast/Toaster'

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
      <body className={Pretendard.className}>
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  )
}
