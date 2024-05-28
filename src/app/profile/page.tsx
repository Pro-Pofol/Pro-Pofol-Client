import { Arrow, Bag, DecorationImg_1, GradientImg, User } from '@/assets'
import { ApplicationBox, Button, TipBox } from '@/components'
import { applicationData, tipData } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'

export default function ProfilePage() {
  return (
    <main className="flex flex-col items-center">
      <div className="flex justify-center h-[180px] w-full relative">
        <Image
          src={GradientImg}
          alt="Profile Banner"
          width={1920}
          height={180}
          className="w-full h-full object-cover border-b-2 border-gray100"
          priority
        />
        <Image
          src={DecorationImg_1}
          alt="User Profile"
          width={240}
          height={240}
          className="size-[120px] absolute -bottom-[60px] rounded-full border border-gray100"
          priority
        />
      </div>
      <section className="flex flex-col items-center gap-10 p-[60px_40px_120px] sm:px-6 max-w-[880px] w-full">
        <div className="flex flex-col items-center gap-1 py-6">
          <p className="text-titleMedium">마이클</p>
          <p className="text-bodySmall text-gray600">팔로잉 24 | 팔로워 40</p>
        </div>
        <div className="flex gap-3">
          <Button kind="gray" size="small">
            로그아웃
          </Button>
          <Link href="/profile/edit">
            <Button kind="blue" size="small">
              정보 수정하기
            </Button>
          </Link>
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
                <p className="text-labelMedium text-gray600">8기</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-3 rounded-xl border border-blue100 bg-blue50">
                <Bag size={28} className="text-blue500" />
              </div>
              <div className="flex flex-col items-center gap-[2px]">
                <p className="text-bodySmall">전공</p>
                <p className="text-labelMedium text-gray600">Frontend</p>
              </div>
            </div>
          </div>
        </article>
        <div className="w-full h-[1px] bg-gray200"></div>
        <article className="flex flex-col gap-6 w-full">
          <div className="flex items-center justify-between w-full">
            <h5 className="text-titleSmall">공유한 지원서 자료</h5>
            <Link
              href="/profile/application"
              className="flex items-center text-gray600 group"
            >
              <p className="text-labelLarge">더보기</p>
              <Arrow
                direction="right"
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-1">
            {applicationData.map((value, index) => (
              <ApplicationBox key={index} {...value} />
            ))}
          </div>
        </article>
        <div className="w-full h-[1px] bg-gray200"></div>
        <article className="flex flex-col gap-6 w-full">
          <div className="flex items-center justify-between w-full">
            <h5 className="text-titleSmall">공유한 지원서 팁</h5>
            <Link
              href="/profile/tip"
              className="flex items-center text-gray600 group"
            >
              <p className="text-labelLarge">더보기</p>
              <Arrow
                direction="right"
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-1">
            {tipData.map((value, index) => (
              <TipBox key={index} {...value} />
            ))}
          </div>
        </article>
      </section>
    </main>
  )
}
