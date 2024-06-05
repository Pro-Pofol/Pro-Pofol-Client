'use client'
import { ApplicationBox } from "@/components"
import { getApplicationData } from "@/services"
import { ApplicationFileType, ApplicationPreviewType, MajorType, PostSearchType } from "@/types"
import { getCookie, toast } from "@/utils"
import { useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import EmptyDataSection from "./EmptyDataSection"

const ShowSection = () => {
    const [hasToken, setHasToken] = useState<boolean>(false)
    const [orderType, setOrderType] = useState<'ASC' | 'DESC'>('ASC')
    const [searchWord, setSearchWord] = useState<string>('')
    const [applicationData, setApplicationData] = useState<ApplicationPreviewType[]>([])
    const searchParams = useSearchParams()
    const router = useRouter()

    const getData = useCallback(async (data: PostSearchType) => {
        const token = getCookie('access_token')
        if (!token) {
            toast.error('토큰이 없습니다!')
            return
        }

        const newData = await getApplicationData(token, data)
            .then(res => {
                toast.success('데이터를 성공적으로 불러왔습니다.')
                if (res.status === 204) {
                    return []
                }
                return res.data.posts
            }).catch(() => {
                toast.error('데이터를 불러오는데 문제가 생겼습니다.')
                return []
            })

        setApplicationData(newData)
    }, [orderType])

    useEffect(() => {
        const token = getCookie('access_token')
        const data: PostSearchType = {
            type: 'Everything',
            major: 'Frontend',
            keyword: '',
            sort: orderType
        }

        if (searchParams.has('word')) {
            setSearchWord(searchParams.get('word') || '')
            data.keyword = searchParams.get('word') || ''
        }
        if (searchParams.has('type') && ['Everything', 'Portfolio', 'PersonalStatement', 'Resume'].includes(searchParams.get('type') as string)) {
            data.type = searchParams.get('type') as ('Everything' | ApplicationFileType)
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
                        <EmptyDataSection
                            boldText="검색어"
                            boldTextAfter="를 입력해주세요."
                            description="그 후 Enter를 누르거나 검색 버튼을 클릭해주세요."
                        />
                    :
                    <EmptyDataSection
                        boldText="로그인"
                        boldTextAfter="이 필요한 서비스입니다."
                        description="먼저 로그인 후 이용해주세요."
                    />
            }
        </section>
    )
}

export default ShowSection