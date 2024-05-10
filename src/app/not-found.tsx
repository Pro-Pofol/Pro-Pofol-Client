import { Button } from '@/components'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFoundPage() {
  return (
    <section className="h-[calc(100dvh-72px)] flex flex-col gap-4 justify-center items-center">
      <Image
        src="/images/Not.webp"
        alt="not found image"
        width={160}
        height={120}
      />
      <h1 className="text-headlineMedium mt-4">
        요청하신 페이지를 찾을 수 없어요
      </h1>
      <p className="text-bodyMedium mb-6">
        요청하신 페이지의 URL과 일치하는지 확인해 주세요.
      </p>
      <Link href="/">
        <Button size="small" className="mb-20" kind="blue">
          메인으로 돌아가기
        </Button>
      </Link>
    </section>
  )
}
