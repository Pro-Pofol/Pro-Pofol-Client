import { Suspense } from 'react'
import { ProfileInfo } from './ProfileInfo'
import { Button } from '@/components'
import { LogoutButton } from './LogoutButton'
import { Bag, User } from '@/assets'

export default async function ProfilePage() {
  return (
    <main className="flex flex-col items-center">
      <Suspense
        fallback={
          <>
            <div className="flex justify-center h-[180px] w-full relative animate-pulse">
              <div className="w-full h-full object-cover border-b-2 border-gray100 bg-gray50" />
              <div className="size-[120px] absolute -bottom-[60px] rounded-full border border-gray100 bg-gray100" />
            </div>
            <section className="flex flex-col items-center gap-10 p-[60px_40px_120px] sm:px-6 max-w-[880px] w-full">
              <div className="flex flex-col items-center gap-1 py-6">
                <div className="h-9 w-20 bg-gray100 rounded-lg"></div>
                <div className="h-6 w-32 bg-gray100 rounded-lg"></div>
              </div>
              <div className="flex gap-3">
                <LogoutButton />
                <Button kind="blue" size="small">
                  정보 수정하기
                </Button>
              </div>
              <article className="flex flex-col gap-6 w-full">
                <h5 className="text-titleSmall">기본 정보</h5>
                <div className="flex gap-10">
                  <div className="flex flex-col items-center gap-2">
                    <div className="p-3 rounded-xl border border-blue100 bg-blue50">
                      <User size={28} className="text-blue500" />
                    </div>
                    <div className="flex flex-col items-center gap-[2px]">
                      <p className="text-bodySmall">기수</p>
                      <div className="h-5 w-8 bg-gray100 rounded-lg"></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="p-3 rounded-xl border border-blue100 bg-blue50">
                      <Bag size={28} className="text-blue500" />
                    </div>
                    <div className="flex flex-col items-center gap-[2px]">
                      <p className="text-bodySmall">전공</p>
                      <div className="h-5 w-8 bg-gray100 rounded-lg"></div>
                    </div>
                  </div>
                </div>
              </article>
            </section>
          </>
        }
      >
        <ProfileInfo />
      </Suspense>
    </main>
  )
}
