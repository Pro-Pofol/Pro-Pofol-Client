'use client'
import { PropofolFullLogo, PropofolLogo } from "@/assets"
import Image from "next/image"
import { Button } from "."
import Link from "next/link"
import { useCallback, useLayoutEffect, useState } from "react"

export const Header = () => {
    const [hasToken, setHasToken] = useState<boolean>(true)
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <header className="py-4 px-10 bg-white w-full h-fit flex justify-between items-center relative border-b border-gray100">
            <section className="flex gap-6 items-center transition-all">
                <div className="relative hidden sm:block w-6 h-6 cursor-pointer" onClick={() => setIsOpen(prev => !prev)}>
                    <div className={`transition-all absolute left-0 w-6 h-0.5 bg-gray700 rounded-full ${isOpen ? 'rotate-45 top-[11px]' : 'rotate-0 top-0'}`} />
                    <div className={`transition-all absolute left-0 top-[11px] w-6 h-0.5 bg-gray700 rounded-full ${isOpen ? 'hidden' : 'block'}`} />
                    <div className={`transition-all absolute left-0 w-6 h-0.5 bg-gray700 rounded-full ${isOpen ? '-rotate-45 top-[11px]' : 'rotate-0 top-[22px]'}`} />
                </div>
                <Link href="/" onClick={() => setIsOpen(false)}>
                    <Image src={PropofolFullLogo} alt="프로포폴 로고" height={32} className="h-8 w-auto" />
                </Link>
                <div className={`flex gap-1 sm:absolute sm:top-[calc(100%+1px)] sm:left-0 sm:bg-white sm:w-full sm:flex-col sm:p-2.5 sm:border-b sm:border-gray100 ${isOpen ? 'sm:flex' : 'sm:hidden'}`}>
                    <Link href="/portfolio">
                        <Button kind="white" size="small" className="sm:w-full sm:flex sm:justify-start">지원서 자료</Button>
                    </Link>
                    <Link href="/tip">
                        <Button kind="white" size="small" className="sm:w-full sm:flex sm:justify-start">지원서 작성 팁</Button>
                    </Link>
                </div>
            </section>
            {
                hasToken ?
                    <section className="flex gap-6 items-center">
                        <Button kind="blue" size="small">내 지원서 ∙ 팁 공유</Button>
                        <Image src={PropofolLogo} width={36} height={36} alt="유저 프로필 이미지" className="w-9 h-9 object-cover rounded-full cursor-pointer" />
                    </section>
                    :
                    <Link href="/signin">
                        <Button kind="primary" size="small">로그인</Button>
                    </Link>
            }
        </header>
    )
}