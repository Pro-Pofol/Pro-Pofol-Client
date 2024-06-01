import { getMe } from '@/services'
import { ProfileEdit } from './ProfileEdit'

export default async function ProfileEditPage() {
  const myData = await getMe()

  return (
    <main className="min-h-[100dvh] flex justify-center">
      <section className="flex flex-col gap-16 p-[60px_40px_120px] sm:px-6 max-w-[600px] w-full">
        <ProfileEdit myData={myData} />
      </section>
    </main>
  )
}
