'use client'

import { Arrow } from '@/assets'
import { ApplicationBox } from '@/components'
import { applicationData } from '@/constants'
import { useRouter } from 'next/navigation'

export default function MyApplicationPage() {
  const router = useRouter()

  return (
    <main className="min-h-[100dvh] p-[60px_0_120px] flex justify-center">
      <section className="flex flex-col gap-10 px-10 sm:px-6 max-w-[1280px] w-full">
        <div className="flex flex-col gap-8">
          <button
            onClick={() => router.back()}
            className="p-2 rounded-lg border border-gray200 group hover:bg-gray50 transition-colors w-fit"
          >
            <Arrow className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <div className="flex flex-col gap-2">
            <h3 className="text-titleLarge">공유한 지원서 자료</h3>
            <p className="text-bodySmall text-gray600">8개 내 지원서 자료</p>
          </div>
        </div>
        <article className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
          {applicationData.map((value, index) => (
            <ApplicationBox key={index} {...value} />
          ))}
        </article>
      </section>
    </main>
  )
}
