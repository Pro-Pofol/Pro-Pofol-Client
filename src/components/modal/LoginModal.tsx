'use client'

import { Close, Facebook, Google, Kakaotalk } from '@/assets'
import { loginRedirect } from '@/utils'
import { Dispatch, SetStateAction, useRef } from 'react'

interface LoginModalType {
  click: Dispatch<SetStateAction<boolean>>
}

export const LoginModal = ({ click }: LoginModalType) => {
  const modalRef = useRef<HTMLDivElement>(null)

  return (
    <section className="w-screen h-screen bg-modalBackground backdrop-blur-sm top-0 z-40 fixed">
      <article
        ref={modalRef}
        onClick={(e) => (e.target === modalRef.current ? click(false) : '')}
        className="w-full h-full flex justify-center items-center"
      >
        <div className="flex flex-col p-10 rounded-3xl bg-white gap-10">
          {/* 로그인 설명 및 닫기 버튼 */}
          <div className="w-[440px] flex flex-col gap-2">
            <div className="w-full flex justify-end">
              <Close size={24} onClick={() => click(false)} />
            </div>
            <div>
              <p className="text-headlineSmall text-black">로그인</p>
            </div>
            <div>
              <p className="text-BodyMedium text-gray600">
                소셜 로그인으로 간편하게 서비스를 이용해 보세요.
              </p>
            </div>
          </div>
          {/* 로그인 버튼 들들 */}
          <form className="w-[440px] flex flex-col gap-4 text-BodyMedium">
            <button
              type="submit"
              formAction={() => loginRedirect('google')}
              className="flex justify-between items-center gap px-8 py-4 bg-white border border-gray200 rounded-xl text-black"
            >
              <Google size={28} />
              구글 로그인
              <div className="size-7" />
            </button>
            <button
              type="submit"
              formAction={() => loginRedirect('facebook')}
              className="flex justify-between items-center px-8 py-4 bg-[#1877F2] rounded-xl text-white"
            >
              <Facebook size={28} />
              페이스북 로그인
              <div className="size-7" />
            </button>
            <button
              type="submit"
              formAction={() => loginRedirect('kakao')}
              className="flex justify-between items-center px-8 py-4 bg-[#FEE500] rounded-xl text-black"
            >
              <Kakaotalk size={28} />
              카카오 로그인
              <div className="size-7" />
            </button>
          </form>
        </div>
      </article>
    </section>
  )
}
