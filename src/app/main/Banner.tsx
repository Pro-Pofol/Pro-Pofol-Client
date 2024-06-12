'use client'

import {
  DecorationImg_1,
  DecorationImg_2,
  DecorationImg_3,
  DecorationImg_4,
  DecorationImg_5,
  DecorationImg_6,
  DecorationImg_7,
} from '@/assets'
import { Button } from '@/components'
import Image from 'next/image'
import './main.css'
import Link from 'next/link'

export const MainBanner = () => {
  return (
    <section className="w-full h-[480px] relative border-b-2 border-gray100 bg-gray50 overflow-hidden">
      <Image
        src={DecorationImg_1}
        alt="Banner 이미지"
        width={164}
        height={240}
        className="absolute left-10 top-[-168px] object-cover rounded-3xl w-[164px] h-[240px] transition-all animate-[downToUp_1s]"
      />
      <Image
        src={DecorationImg_2}
        alt="Banner 이미지"
        width={240}
        height={164}
        className="absolute left-10 top-[88px] object-cover rounded-3xl w-[240px] h-[164px] transition-all animate-[rightToLeft_1s]"
      />
      <Image
        src={DecorationImg_3}
        alt="Banner 이미지"
        width={164}
        height={240}
        className="absolute left-[296px] top-[88px] object-cover rounded-3xl w-[164px] h-[240px] transition-all sm:hidden md:hidden animate-[upToDown_1s]"
      />
      <Image
        src={DecorationImg_4}
        alt="Banner 이미지"
        width={164}
        height={240}
        className="absolute left-[116px] top-[268px] object-cover rounded-3xl w-[164px] h-[240px] transition-all sm:hidden animate-[upToDown_1s]"
      />
      <Image
        src={DecorationImg_5}
        alt="Banner 이미지"
        width={164}
        height={240}
        className="absolute right-[296px] top-[159px] object-cover rounded-3xl w-[164px] h-[240px] transition-all sm:hidden md:hidden animate-[upToDown_1s]"
      />
      <Image
        src={DecorationImg_6}
        alt="Banner 이미지"
        width={164}
        height={240}
        className="absolute right-[116px] top-[40px] object-cover rounded-3xl w-[164px] h-[240px] transition-all sm:right-[40px] animate-[downToUp_1s]"
      />
      <Image
        src={DecorationImg_7}
        alt="Banner 이미지"
        width={164}
        height={240}
        className="absolute -right-10 top-[296px] object-cover rounded-3xl w-[320px] h-[240px] transition-all animate-[leftToRight_1s]"
      />
      <div className="w-[100vw] h-[480px] absolute bg-[rgba(255,255,255,0.52)] flex justify-center items-center px-4">
        <div className="flex flex-col gap-8 items-center">
          <div className="flex gap-3 flex-col items-center select-none sm:items-start">
            <div className="text-headlineMedium flex sm:flex-col sm:text-headlineSmall">
              <span className="mr-4">
                <span className="text-blue500">“</span>어떤
              </span>
              <div className="relative w-[208px] h-[52px] animate-[titleWidth_9s_infinite_6s] flex justify-center sm:justify-start items-center overflow-hidden text-nowrap">
                <span className="text-blue500 animate-[title_9s_infinite] absolute">
                  포트폴리오
                </span>
                <span className="text-blue500 animate-[title_9s_infinite_3s] opacity-0 absolute">
                  자기소개서
                </span>
                <span className="text-blue500 animate-[title_9s_infinite_6s] opacity-0 absolute">
                  이력서
                </span>
              </div>
              <span>
                를 원하시나요?<span className="text-blue500">”</span>
              </span>
            </div>
            <span className="text-bodyLarge sm:text-bodyMedium text-gray600 break-keep">
              PROPOFOL에서 수 많은 지원서를 살펴보고, 나만의 지원서를 만들어
              보세요.
            </span>
          </div>
          <div className="flex gap-3 break-keep">
            <Link href="/application">
              <Button kind="primary" size="small">
                더 많은 지원서
              </Button>
            </Link>
            <Button kind="blue" size="small">
              지원서 공유하기
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
