import { Bulb, Portfolio } from '@/assets'
import { MainBanner } from './main'
import { Button, SubTitleSection, ApplicationBox, TipBox } from '@/components'
import { getRecommend, recommendTip } from '@/services'
import { TipBoxType } from '@/types'

export default async function Home() {
  const applicationData =
    (await getRecommend().then((res) => res.data.posts)) || []
  const tipData: TipBoxType[] = await recommendTip()

  return (
    <main>
      <MainBanner />
      <section className="pt-16 pb-[120px] flex justify-center">
        <div className="flex flex-col gap-16 px-[40px] min-w-0 w-[1280px] box-border">
          <section className="gap-6 flex flex-col w-full">
            <div className="flex items-end justify-between break-keep">
              <SubTitleSection
                title="새로운 지원서"
                subTitle="최근 사용자 분들이 공유한 지원서에요."
                icon={<Portfolio size={28} />}
              />
              <Button route="/application" kind="blue" size="small">
                지원서 더보기
              </Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
              {applicationData.slice(0, 4).map((item, index) => (
                <ApplicationBox key={index} {...item} />
              ))}
            </div>
          </section>
          <section className="gap-6 flex flex-col w-full">
            <div className="flex items-end justify-between break-keep">
              <SubTitleSection
                title="새로운 팁"
                subTitle="최근 사용자 분들이 공유한 지원서 작성 팁이에요."
                icon={<Bulb size={28} />}
              />
              <Button route="/tip" kind="blue" size="small">
                지원서 더보기
              </Button>
            </div>
            <div className="flex flex-col gap-4">
              {tipData.map((item, index) => (
                <TipBox
                  key={index}
                  date={String(item.created_at)}
                  name={item.writer_id}
                  title={item.title}
                  id={item.id}
                />
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
