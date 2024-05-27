'use client'
import { ApplicationBox } from "@/components"
import { ApplicationFileType, ApplicationPreviewType, MajorType } from "@/types"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const ApplyData: ApplicationPreviewType[] = [
    {
        "post_id": 1,
        "post_post_type": "Portfolio",
        "post_title": "엄청나고 위대한 포트폴리오 자료",
        "post_major": "Backend",
        "post_created_at": "2024-05-27T02:48:52.347Z",
        "user_oauth_id": "110159413387878573726"
    },
    {
        "post_id": 2,
        "post_post_type": "Portfolio",
        "post_title": "야호",
        "post_major": "Frontend",
        "post_created_at": "2024-05-27T04:26:28.899Z",
        "user_oauth_id": "107359038156703139645"
    },
    {
        "post_id": 3,
        "post_post_type": "Portfolio",
        "post_title": "테스트...",
        "post_major": "Frontend",
        "post_created_at": "2024-05-27T04:47:00.694Z",
        "user_oauth_id": "107359038156703139645"
    }
]

const majorData: MajorType[] = ['Frontend', 'Backend', 'Android', 'iOS', 'CrossPlatform', 'AI', 'DevOps', 'Design', 'Game', 'Blockchain']

const ShowSection = () => {
    const [orderType, setOrderType] = useState<'first' | 'last'>('first')
    const [selectedKind, setSelectedKind] = useState<'everything' | ApplicationFileType>('everything')
    const [selectedMajor, setSelectedMajor] = useState<Partial<Record<MajorType, boolean>>>({})
    const [searchWord, setSearchWord] = useState<string>('')
    const searchParams = useSearchParams()

    useEffect(() => {
        if (searchParams.has('word')) {
            setSearchWord(searchParams.get('word') || '')
        }
        if (searchParams.has('kind') && ['everything', 'Portfolio', 'PersonalStatement', 'Resume'].includes(searchParams.get('kind') as string)) {
            setSelectedKind(searchParams.get('kind') as ('everything' | ApplicationFileType))
        }
        if (searchParams.has('major') && majorData.some(v => searchParams.getAll('major').includes(v))) {
            setSelectedMajor(majorData.filter(v => searchParams.getAll('major').includes(v)).reduce((acc, v) => ({ ...acc, [v]: true }), {}))
        }
    }, [searchParams])

    return (
        <section className="relative pb-[120px] w-full">
            <div className="py-6 px-10 flex justify-between items-center sticky bg-white top-0 left-0 w-full h-fit flex-wrap gap-2">
                <div className="flex gap-x-3 gap-y-2 flex-wrap break-keep">
                    {searchWord && <span className="text-bodyLarge text-blue500">“{searchWord}”에 대한</span>}
                    <span className="text-bodyLarge text-black">182개의 지원서 자료</span>
                </div>
                <div className="p-1 gap-0.5 flex rounded-full border h-12 border-gray200 bg-gray50 text-bodySmall relative text-gray600 ml-auto">
                    <div className={`absolute top-[2px] ${orderType === 'first' ? 'left-[3px]' : 'left-[80px]'} border border-gray100 bg-white py-2 px-4 text-transparent rounded-full transition-all`}>{orderType === 'first' ? '최신순' : '오래된순'}</div>
                    <span className={`transition-all py-2 px-4 z-10 cursor-pointer ${orderType === 'first' ? 'text-blue500' : 'text-gray600'}`} onClick={() => setOrderType('first')}>최신순</span>
                    <span className={`transition-all py-2 px-4 z-10 cursor-pointer ${orderType === 'last' ? 'text-blue500' : 'text-gray600'}`} onClick={() => setOrderType('last')}>오래된순</span>
                </div>
            </div>
            <section className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-3 gap-y-6 px-10">
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