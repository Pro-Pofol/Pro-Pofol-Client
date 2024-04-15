import { PropofolFullLogo, PropofolLogo } from "@/assets"
import Image from "next/image"
import { Button } from "."
import { cookies } from "next/headers"
import Link from "next/link"

export const Header = () => {
    const cookie = cookies()
    return (
        <header className="py-4 px-10 bg-white w-full h-fit flex justify-between items-center">
            <section className="flex gap-6 items-center">
                <Link href="/">
                    <Image src={PropofolFullLogo} alt="프로포폴 로고" height={32} className="h-8 w-auto" />
                </Link>
                <div className="flex gap-1">
                    <Link href="/portfolio">
                        <Button kind="white" size="small">지원서 자료</Button>
                    </Link>
                    <Link href="/tip">
                        <Button kind="white" size="small">지원서 작성 팁</Button>
                    </Link>
                </div>
            </section>
            {
                cookie.get('access_token') ?
                    <Image src={PropofolLogo} width={36} height={36} alt="유저 프로필 이미지" className="rounded-full cursor-pointer" />
                    :
                    <Link href="/signin">
                        <Button kind="primary" size="small">로그인</Button>
                    </Link>
            }
        </header>
    )
}