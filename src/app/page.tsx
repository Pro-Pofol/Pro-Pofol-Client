import { Bulb, Portfolio } from "@/assets";
import { MainBanner } from "./main";
import { Button, SubTitleSection, ApplicationBox, TipBox } from "@/components";
import { getRecommend } from "@/services";

interface TipBoxProps {
  title: string;
  content?: string;
  name: string;
  date: string;
}

const TipData: TipBoxProps[] = [
  {
    title: '포트폴리오 만들 때 주의할 점',
    name: '이강혁',
    date: '2024-04-16'
  },
  {
    title: '자기소개서는 이렇게',
    name: '강진현',
    date: '2024-04-10'
  },
  {
    title: '이럭서에 뭘 넣어야 할지 모르겠다면?',
    name: '임태곤',
    date: '2024-04-06'
  },
  {
    title: '합격하는 포트폴리오',
    name: '최승우',
    date: '2023-04-18',
  },
]

export default async function Home() {
  const applicationData = await getRecommend().then(res => res.data.posts) || []

  return (
    <main>
      <MainBanner />
      <section className="pt-16 pb-[120px] flex justify-center">
        <div className="flex flex-col gap-16 px-[40px] min-w-0 w-[1280px] box-border">
          <section className="gap-6 flex flex-col w-full">
            <div className="flex items-end justify-between break-keep">
              <SubTitleSection title="새로운 지원서" subTitle="최근 사용자 분들이 공유한 지원서에요." icon={<Portfolio size={28} />} />
              <Button kind="blue" size="small">지원서 더보기</Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
              {
                applicationData.slice(0, 4).map((item, index) =>
                  <ApplicationBox
                    key={index}
                    {...item}
                  />
                )
              }
            </div>
          </section>
          <section className="gap-6 flex flex-col w-full">
            <div className="flex items-end justify-between break-keep">
              <SubTitleSection title="새로운 팁" subTitle="최근 사용자 분들이 공유한 지원서 작성 팁이에요." icon={<Bulb size={28} />} />
              <Button kind="blue" size="small">지원서 더보기</Button>
            </div>
            <div className="flex flex-col gap-4">
              {
                TipData.map((item, index) =>
                  <TipBox
                    key={index}
                    {...item}
                  />
                )
              }
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
