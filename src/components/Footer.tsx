import { Facebook, Github, Phone, PropofolFullLogo } from "@/assets"
import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
    return (
        <footer className="py-10 bg-white text-black flex justify-center">
            <section className="px-10 flex flex-col gap-10 max-w-[1280px] w-full">
                <section className="flex gap-4">
                    <div className="w-[180px] flex flex-col gap-3">
                        <span className="text-labelLarge">서비스</span>
                        <div className="flex flex-col gap-1.5 text-gray800">
                            <span className="text-labelMedium cursor-pointer">지원서 공유하기</span>
                            <span className="text-labelMedium cursor-pointer">문의하기</span>
                        </div>
                    </div>
                    <div className="w-[180px] flex flex-col gap-3">
                        <span className="text-labelLarge">지원</span>
                        <div className="flex flex-col gap-1.5 text-gray800">
                            <span className="text-labelMedium cursor-pointer">많이 묻는 질문</span>
                            <span className="text-labelMedium cursor-pointer">문의하기</span>
                        </div>
                    </div>
                </section>
                <section className="flex gap-10 flex-1 sm:flex-col">
                    <div className="flex flex-col w-full gap-3">
                        <div className="flex gap-3 items-center text-labelLarge text-gray700 sm:flex-col sm:items-start">
                            <Link href="/">
                                <Image src={PropofolFullLogo} alt="프로포폴 로고" height={32} className="h-8 w-auto" />
                            </Link>
                            <div className="w-px h-4 rounded bg-gray500 sm:hidden" />
                            <span className="cursor-pointer">이용약관</span>
                            <div className="w-px h-4 rounded bg-gray500 sm:hidden" />
                            <span className="cursor-pointer">개인정보처리방침</span>
                        </div>
                        <p className="text-labelMedium text-gray500 break-keep">대표자: 강혁리 | 개인정보보호책임자: 태곤임 | 이메일: gang@gang.com | 문의: 010-0000-0000</p>
                        <p className="text-labelMedium text-gray500 break-keep">© 2024 Backup All rights reserved.</p>
                    </div>
                    <div className="flex flex-1 gap-3 justify-end items-end text-gray800 sm:justify-start">
                        <div className="p-2 rounded-full border border-gray200 bg-gray50">
                            <Phone />
                        </div>
                        <div className="p-2 rounded-full border border-gray200 bg-gray50">
                            <Facebook />
                        </div>
                        <div className="p-2 rounded-full border border-gray200 bg-gray50">
                            <Github />
                        </div>
                    </div>
                </section>
            </section>
        </footer>
    )
}