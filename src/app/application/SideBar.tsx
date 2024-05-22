'use client'
import { Bag, Portfolio, Search } from "@/assets"
import { useState } from "react"
import { SideSelect } from "./SideSelect"

type KindType = '모든 종류' | '포트폴리오' | '자기소개서' | '이력서'
const kindData: KindType[] = ['모든 종류', '포트폴리오', '자기소개서', '이력서']

type MajorType = 'Frontend' | 'Backend' | 'Android' | 'iOS' | 'CrossPlatform' | 'Ai' | 'DevOps' | 'Embeded' | 'Design' | 'Game' | 'BlockChain'
const majorData: MajorType[] = ['Frontend', 'Backend', 'Android', 'iOS', 'CrossPlatform', 'Ai', 'DevOps', 'Embeded', 'Design', 'Game', 'BlockChain']

const SideBar = () => {
    const [selectedKind, setSelectedKind] = useState<string>('모든 종류')
    const [selectedMajor, setSelectedMajor] = useState<{ [key: string]: boolean }>({})

    return (
        <section className="py-6 px-10 gap-6 flex flex-col border-r border-gray200 w-[400px] h-[1000px] sticky top-0 left-0">
            <div className="py-3 px-5 border border-gray200 rounded-full bg-gray50 flex gap-3 h-fit focus-within:bg-blue50 focus-within:border-blue400">
                <label htmlFor="searchInput"><Search /></label>
                <input id="searchInput" placeholder="포트폴리오/자기소개서 검색" className="bg-transparent w-full border-none outline-none placeholder:text-gray500 text-black" />
            </div>
            <div className="gap-2 flex flex-col flex-2 w-full">
                <div className="w-full h-px bg-gray200" />
                <SideSelect
                    kind="radio"
                    icon={<Portfolio size={16} />}
                    title='지원서 종류'
                    display={kindData}
                    value={selectedKind}
                    setValue={(v) => setSelectedKind(v)}
                    open
                />
                <div className="w-full h-px bg-gray200" />
                <SideSelect
                    kind="checkbox"
                    icon={<Bag size={16} />}
                    title='작성자 종류'
                    display={majorData}
                    value={selectedMajor}
                    setValue={(v) => setSelectedMajor((prev) => ({ ...prev, [v]: !prev[v] }))}
                />
            </div>
        </section>
    )
}

export default SideBar