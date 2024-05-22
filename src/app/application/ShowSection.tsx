'use client'
import { ApplicationBox } from "@/components"
import { useState } from "react"

interface ApplicationBoxProps {
    tag: "포트폴리오" | "자기소개서" | "이력서"
    title: string
    name: string
    date: string
    mainMajor?: string
    subMajor?: string
}

const ApplyData: ApplicationBoxProps[] = [
    {
        tag: '포트폴리오',
        title: '개인적으로 완벽한 포트폴리오',
        name: '이강혁',
        date: '2024-04-16',
        mainMajor: 'Frontend',
        subMajor: 'Backend'
    },
    {
        tag: '자기소개서',
        title: '자기소개의 참된 예를 잘 보여주는 글',
        name: '강진현',
        date: '2023-04-16',
        mainMajor: 'Frontend'
    },
    {
        tag: '이력서',
        title: '올바른 형식의 이력서 예시',
        name: '임태곤',
        date: '2024-04-06'
    },
    {
        tag: '포트폴리오',
        title: '개인적으로 완벽한 포트폴리오',
        name: '이강혁',
        date: '2023-04-18',
        mainMajor: 'Frontend',
        subMajor: 'Backend'
    }
]

const ShowSection = () => {
    const [orderType, setOrderType] = useState<'first' | 'last'>('first')
    return (
        <section className="relative pb-[120px] w-full">
            <div className="py-6 px-10 flex justify-between items-center sticky bg-white top-0 left-0 w-full h-fit">
                <span className="text-bodyLarge text-black">182개의 지원서 자료</span>
                <div className="p-1 gap-0.5 flex rounded-full border h-12 border-gray200 bg-gray50 text-bodySmall relative text-gray600">
                    <div className={`absolute top-[2px] ${orderType === 'first' ? 'left-[3px]' : 'left-[80px]'} border border-gray100 bg-white py-2 px-4 text-transparent rounded-full transition-all`}>{orderType === 'first' ? '최신순' : '오래된순'}</div>
                    <span className={`transition-all py-2 px-4 z-10 cursor-pointer ${orderType === 'first' ? 'text-blue500' : 'text-gray600'}`} onClick={() => setOrderType('first')}>최신순</span>
                    <span className={`transition-all py-2 px-4 z-10 cursor-pointer ${orderType === 'last' ? 'text-blue500' : 'text-gray600'}`} onClick={() => setOrderType('last')}>오래된순</span>
                </div>
            </div>
            <section className="grid grid-cols-3 gap-x-3 gap-y-6 px-10">
                {
                    ApplyData.map((item, index) =>
                        <ApplicationBox
                            key={index}
                            {...item}
                        />
                    )
                }
            </section>
        </section>
    )
}

export default ShowSection