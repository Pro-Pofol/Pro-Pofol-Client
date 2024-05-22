import { Suspense } from 'react'
import { Signup } from './Signup'

export default function SignupPage() {
  return (
    <main className="w-full">
      <Suspense fallback={<p>loading..</p>}>
        <Signup />
      </Suspense>
    </main>
  )
}
