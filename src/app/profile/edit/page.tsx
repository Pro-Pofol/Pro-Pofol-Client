'use client'

import { Add, Arrow, DecorationImg_1 } from '@/assets'
import { Button, Input, Select } from '@/components'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function ProfileEditPage() {
  const router = useRouter()

  return (
    <main className="min-h-[100dvh] flex justify-center">
      <section className="flex flex-col gap-16 p-[60px_40px_120px] sm:px-6 max-w-[600px] w-full">
        <div className="flex flex-col gap-8">
          <button
            onClick={() => router.back()}
            className="p-2 rounded-lg border border-gray200 group hover:bg-gray50 transition-colors w-fit"
          >
            <Arrow className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <h3 className="text-titleLarge">프로필 수정</h3>
        </div>
        <article className="flex gap-10 items-center">
          <Image
            src={DecorationImg_1}
            alt="Profile Image"
            width={240}
            height={240}
            priority
            className="size-[120px] rounded-full border border-gray100"
          />
          <button className="p-12 rounded-full border border-gray200 bg-gray100">
            <Add />
          </button>
        </article>
        <article className="flex flex-col gap-10">
          <Input label="기수" placeholder="기수를 입력해 주세요." value="8" />
          <Select
            label="전공"
            placeholder="전공 선택"
            value="Frontend"
            options={[{ value: 'Frontend', name: 'Frontend' }]}
            change={() => {}}
          />
        </article>
        <Button size="large" className="w-full">
          프로필 수정하기
        </Button>
      </section>
    </main>
  )
}
