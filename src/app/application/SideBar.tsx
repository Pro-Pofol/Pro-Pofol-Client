'use client'
import { Bag, Portfolio, Search } from "@/assets"
import { useCallback, useEffect, useState } from "react"
import { SideSelect } from "./SideSelect"
import { useParams, usePathname, useRouter, useSearchParams } from "next/navigation"
import { ApplicationFileType, MajorType } from "@/types"

type KindType = '모든 종류' | '포트폴리오' | '자기소개서' | '이력서'
type KindEnglish = 'Everything' | ApplicationFileType
const kindData: KindType[] = ['모든 종류', '포트폴리오', '자기소개서', '이력서']
const tagToKorean: Record<KindEnglish, KindType> = {
    Everything: '모든 종류',
    Portfolio: '포트폴리오',
    PersonalStatement: '자기소개서',
    Resume: '이력서',
}

const tagToEnglish: Record<KindType, KindEnglish> = {
    '모든 종류': 'Everything',
    포트폴리오: 'Portfolio',
    자기소개서: 'PersonalStatement',
    이력서: 'Resume',
}

const majorData: MajorType[] = ['Frontend', 'Backend', 'Android', 'iOS', 'CrossPlatform', 'AI', 'DevOps', 'Design', 'Game', 'Blockchain']

interface ApplicationDataModal {
    type: KindType
    major: MajorType,
    searchWord: string
}

const SideBar = () => {
    const [data, setData] = useState<ApplicationDataModal>({
        type: '모든 종류',
        major: 'Frontend',
        searchWord: ''
    })
    const router = useRouter()
    const searchParams = useSearchParams()

    const changeData = useCallback((name: 'type' | 'major' | 'searchWord') => (value: string) => {
        setData(prev => ({ ...prev, [name]: value }))
    }, [])

    const changeParams = useCallback(() => {
        const param = new URLSearchParams(searchParams.toString())

        param.set('major', data.major)
        param.set('type', tagToEnglish[data.type as KindType])
        param.set('word', data.searchWord)

        router.push(`application?${param}`)
    }, [searchParams, data])

    useEffect(() => {
        if (searchParams.has('word')) {
            changeData('searchWord')(searchParams.get('word') || '')
        }
        if (searchParams.has('type') && ['Everything', 'Portfolio', 'PersonalStatement', 'Resume'].includes(searchParams.get('type') as string)) {
            changeData('type')(tagToKorean[searchParams.get('type') as ('Everything' | ApplicationFileType)])
        }
        if (searchParams.has('major')) {
            changeData('major')(searchParams.get('major') as MajorType)
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
                    defaultValue={data.searchWord}
                    onChange={(e) => changeData('searchWord')(e.currentTarget.value)}
                    onKeyDown={(e) => e.key === 'Enter' && changeParams()}
                />
            </div>
            <div className="gap-2 flex flex-col flex-2 w-full">
                <div className="w-full h-px bg-gray200" />
                <SideSelect
                    kind="radio"
                    icon={<Portfolio size={16} />}
                    title='지원서 종류'
                    display={kindData}
                    value={data.type}
                    setValue={changeData('type')}
                    open
                />
                <div className="w-full h-px bg-gray200" />
                <SideSelect
                    kind="checkbox"
                    icon={<Bag size={16} />}
                    title='작성자 종류'
                    display={majorData}
                    value={data.major}
                    setValue={changeData('major')}
                />
            </div>
        </section>
    )
}

export default SideBar