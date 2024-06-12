import { BackButton, TipBox } from '@/components'
import { getMe, recommendTip } from '@/services'
import { TipBoxType } from '@/types'

export default async function MyTipPage() {
  const { oauth_id } = await getMe()
  const tipData: TipBoxType[] = await recommendTip()
    .then((value: TipBoxType[]) =>
      value
        .filter(({ writer_id }) => oauth_id === writer_id)
        .sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
        ),
    )
    .catch(() => [])

  return (
    <main className="min-h-[100dvh] p-[60px_0_120px] flex justify-center">
      <section className="flex flex-col gap-10 px-10 sm:px-6 max-w-[1280px] w-full">
        <div className="flex flex-col gap-8">
          <BackButton />
          <div className="flex flex-col gap-2">
            <h3 className="text-titleLarge">공유한 지원서 팁</h3>
            <p className="text-bodySmall text-gray600">8개 내 지원서 팁</p>
          </div>
        </div>
        <article className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3">
          {tipData.map((value, index) => (
            <TipBox
              name={value.writer_id}
              date={`${value.created_at}`}
              key={index}
              {...value}
            />
          ))}
        </article>
      </section>
    </main>
  )
}
