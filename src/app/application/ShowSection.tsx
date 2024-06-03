'use client'
import { ApplicationBox } from "@/components"
import { getApplicationData } from "@/services"
import { ApplicationFileType, ApplicationPreviewType, MajorType } from "@/types"
import { getCookie, toast } from "@/utils"
import { useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"

interface ApplicationDataModal {
    kind: 'everything' | ApplicationFileType
    major: MajorType,
    keyword: string
    sort: 'ASC' | 'DESC'
}

const ShowSection = () => {
    const [hasToken, setHasToken] = useState<boolean>(false)
    const [orderType, setOrderType] = useState<'ASC' | 'DESC'>('ASC')
    const [searchWord, setSearchWord] = useState<string>('')
    const [applicationData, setApplicationData] = useState<ApplicationPreviewType[]>([])
    const searchParams = useSearchParams()

    const getData = useCallback(async (data: ApplicationDataModal) => {
        const token = getCookie('access_token')
        if (!token) {
            toast.error('토큰이 없습니다!')
            return
        }

        const newData = await getApplicationData(token, data)
            .then(res => {
                toast.success('데이터를 성공적으로 불러왔습니다.')
                return res.data.posts
            }).catch(() => {
                toast.error('데이터를 불러오는데 문제가 생겼습니다.')
                return []
            })

        setApplicationData(newData)
    }, [orderType])

    useEffect(() => {
        const token = getCookie('access_token')
        const data: ApplicationDataModal = {
            kind: 'everything',
            major: 'Frontend',
            keyword: '',
            sort: orderType
        }

        if (searchParams.has('word')) {
            setSearchWord(searchParams.get('word') || '')
            data.keyword = searchParams.get('word') || ''
        }
        if (searchParams.has('kind') && ['everything', 'Portfolio', 'PersonalStatement', 'Resume'].includes(searchParams.get('kind') as string)) {
            data.kind = searchParams.get('kind') as ('everything' | ApplicationFileType)
        }
        if (searchParams.has('major')) {
            data.major = searchParams.get('major') as MajorType
        }

        if (token && data.keyword.length) {
            getData(data)
        }
        setHasToken(!!token)
    }, [searchParams, orderType])

    return (
        <section className="relative pb-[120px] w-full">
            <div className="py-6 px-10 flex justify-between items-center sticky bg-white top-0 left-0 w-full h-fit flex-wrap gap-2">
                <div className="flex gap-x-3 gap-y-2 flex-wrap break-keep">
                    {searchWord && <span className="text-bodyLarge text-blue500">“{searchWord}”에 대한</span>}
                    <span className="text-bodyLarge text-black">{applicationData.length}개의 지원서 자료</span>
                </div>
                <div className="p-1 gap-0.5 flex rounded-full border h-12 border-gray200 bg-gray50 text-bodySmall relative text-gray600 ml-auto">
                    <div className={`absolute top-[2px] ${orderType === 'ASC' ? 'left-[3px]' : 'left-[80px]'} border border-gray100 bg-white py-2 px-4 text-transparent rounded-full transition-all`}>{orderType === 'ASC' ? '최신순' : '오래된순'}</div>
                    <span className={`transition-all py-2 px-4 z-10 cursor-pointer ${orderType === 'ASC' ? 'text-blue500' : 'text-gray600'}`} onClick={() => setOrderType('ASC')}>최신순</span>
                    <span className={`transition-all py-2 px-4 z-10 cursor-pointer ${orderType === 'DESC' ? 'text-blue500' : 'text-gray600'}`} onClick={() => setOrderType('DESC')}>오래된순</span>
                </div>
            </div>
            {
                hasToken ?
                    searchWord ?
                        <section className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-3 gap-y-6 px-10">
                            {
                                applicationData.map((item, index) =>
                                    <ApplicationBox
                                        key={index}
                                        {...item}
                                    />
                                )
                            }
                        </section>
                        :
                        <section className="px-10">
                            <div className="border border-gray200 bg-gray50 w-full h-[360px] rounded-xl flex flex-col items-center justify-center gap-2 break-keep px-5">
                                <span className="text-titleMedium sm:text-titleSmall"><span className="text-blue500">검색어</span>를 입력해주세요.</span>
                                <span className="text-bodyMedium sm:text-bodySmall text-gray600">그 후 Enter를 누르거나 검색 버튼을 클릭해주세요.</span>
                            </div>
                        </section>
                    :
                    <section className="px-10">
                        <div className="border border-gray200 bg-gray50 w-full h-[360px] rounded-xl flex flex-col items-center justify-center gap-2 break-keep px-5">
                            <span className="text-titleMedium sm:text-titleSmall"><span className="text-blue500">로그인</span>이 필요한 서비스입니다.</span>
                            <span className="text-bodyMedium sm:text-bodySmall text-gray600">먼저 로그인 후 이용해주세요.</span>
                        </div>
                    </section>
            }
        </section>
    )
}

export default ShowSection