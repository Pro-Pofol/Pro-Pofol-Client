'use client'
import { Bag, Portfolio, Search } from "@/assets"
import { useCallback, useEffect, useState } from "react"
import { SideSelect } from "./SideSelect"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { ApplicationFileType, MajorType } from "@/types"

type KindType = '모든 종류' | '포트폴리오' | '자기소개서' | '이력서'
const kindData: KindType[] = ['모든 종류', '포트폴리오', '자기소개서', '이력서']
const tagToKorean: Record<'everything' | ApplicationFileType, KindType> = {
    everything: '모든 종류',
    Portfolio: '포트폴리오',
    PersonalStatement: '자기소개서',
    Resume: '이력서',
}

const tagToEnglish: Record<KindType, 'everything' | ApplicationFileType> = {
    '모든 종류': 'everything',
    포트폴리오: 'Portfolio',
    자기소개서: 'PersonalStatement',
    이력서: 'Resume',
}

const majorData: MajorType[] = ['Frontend', 'Backend', 'Android', 'iOS', 'CrossPlatform', 'AI', 'DevOps', 'Design', 'Game', 'Blockchain']

const SideBar = () => {
    const [selectedKind, setSelectedKind] = useState<string>('모든 종류')
    // const [selectedMajor, setSelectedMajor] = useState<Partial<Record<MajorType, boolean>>>({})
    const [selectedMajor, setSelectedMajor] = useState<MajorType>('Frontend')
    const [searchWord, setSearchWord] = useState<string>('')
    const router = useRouter()
    const searchParams = useSearchParams()

    const changeParams = useCallback((name: 'kind' | 'major' | 'word') => (value: string) => {
        const param = new URLSearchParams(searchParams.toString())

        if (name == 'major') {
            // setSelectedMajor((prev) => ({ ...prev, [value as MajorType]: !prev[value as MajorType] }))
            // const majorParams = [...param.getAll('major')]
            setSelectedMajor(value as MajorType)
            param.set(name, value)
            // Object.entries(selectedMajor).forEach(v => v[1] && majorParams.includes(v[0]) && param.append(name, v[0]))
        } else if (name === 'kind') {
            setSelectedKind(value)
            param.set(name, tagToEnglish[value as KindType])
        } else {
            param.set(name, value)
        }

        router.push(`application?${param}`)
    }, [searchParams])

    useEffect(() => {
        if (searchParams.has('word')) {
            setSearchWord(searchParams.get('word') || '')
        }
        if (searchParams.has('kind') && ['everything', 'Portfolio', 'PersonalStatement', 'Resume'].includes(searchParams.get('kind') as string)) {
            setSelectedKind(tagToKorean[searchParams.get('kind') as ('everything' | ApplicationFileType)])
        }
        // if (searchParams.has('major') && majorData.some(v => searchParams.getAll('major').includes(v))) {
        //     setSelectedMajor(majorData.filter(v => searchParams.getAll('major').includes(v)).reduce((acc, v) => ({ ...acc, [v]: true }), {}))
        // }
        if (searchParams.has('major')) {
            setSelectedMajor(searchParams.get('major') as MajorType)
        }
    }, [searchParams])

    return (
        <section className="py-6 px-10 gap-6 flex flex-col border-r border-gray200 w-[400px] h-[1000px] sticky top-0 left-0">
            <div className="py-3 px-5 border border-gray200 rounded-full bg-gray50 flex gap-3 h-fit focus-within:bg-blue50 focus-within:border-blue400">
                <label htmlFor="searchInput"><Search /></label>
                <input
                    id="searchInput"
                    placeholder="포트폴리오/자기소개서 검색"
                    className="bg-transparent w-full border-none outline-none placeholder:text-gray500 text-black"
                    defaultValue={searchWord}
                    onChange={(e) => setSearchWord(e.currentTarget.value)}
                    onKeyDown={(e) => e.key === 'Enter' && changeParams('word')(searchWord)}
                />
            </div>
            <div className="gap-2 flex flex-col flex-2 w-full">
                <div className="w-full h-px bg-gray200" />
                <SideSelect
                    kind="radio"
                    icon={<Portfolio size={16} />}
                    title='지원서 종류'
                    display={kindData}
                    value={selectedKind}
                    setValue={changeParams('kind')}
                    open
                />
                <div className="w-full h-px bg-gray200" />
                <SideSelect
                    kind="checkbox"
                    icon={<Bag size={16} />}
                    title='작성자 종류'
                    display={majorData}
                    value={selectedMajor}
                    setValue={changeParams('major')}
                />
            </div>
        </section>
    )
}

export default SideBar