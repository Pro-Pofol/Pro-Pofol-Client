import { Suspense } from 'react'
import { ProfileInfo } from './ProfileInfo'

export default async function ProfilePage() {
  return (
    <main className="flex flex-col items-center">
      <Suspense fallback={<>loading profile...</>}>
        <ProfileInfo />
      </Suspense>
    </main>
  )
}
