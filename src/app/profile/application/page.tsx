import { ApplicationBox, BackButton } from '@/components'
import { getMe, getRecommend } from '@/services'

export default async function MyApplicationPage() {
  const { oauth_id } = await getMe()
  const applicationData = await getRecommend()
    .then((value) =>
      value.data.posts
        .filter(({ post_writer_id }) => oauth_id === post_writer_id)
        .sort(
          (a, b) =>
            new Date(b.post_created_at).getTime() -
            new Date(a.post_created_at).getTime(),
        ),
    )
    .catch(() => [])

  return (
    <main className="min-h-[100dvh] p-[60px_0_120px] flex justify-center">
      <section className="flex flex-col gap-10 px-10 sm:px-6 max-w-[1280px] w-full">
        <div className="flex flex-col gap-8">
          <BackButton />
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
