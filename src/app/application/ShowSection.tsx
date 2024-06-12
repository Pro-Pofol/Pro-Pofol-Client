'use client'
import { ApplicationBox } from "@/components"
import { getApplicationData, getRecommend } from "@/services"
import { ApplicationFileType, ApplicationPreviewType, ApplicationSearchPreviewType, MajorType, PostSearchType } from "@/types"
import { getCookie, toast } from "@/utils"
import { useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import EmptyDataSection from "./EmptyDataSection"

const ShowSection = () => {
    const [hasToken, setHasToken] = useState<boolean>(false)
    const [orderType, setOrderType] = useState<'ASC' | 'DESC'>('ASC')
    const [searchWord, setSearchWord] = useState<string>('')
    const [applicationRecommendData, setApplicationRecoomendData] = useState<ApplicationPreviewType[]>([])
    const [applicationSearchData, setApplicationSearchData] = useState<ApplicationSearchPreviewType[]>([])
    const searchParams = useSearchParams()

    const getRecommendData = useCallback(async (data: PostSearchType) => {
        const recommendData = await getRecommend()
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

        if (orderType === 'ASC') {
            recommendData.sort((a, b) =>
                new Date(b.post_created_at).getTime() - new Date(a.post_created_at).getTime()
            )
        } else {
            recommendData.sort((a, b) =>
                new Date(a.post_created_at).getTime() - new Date(b.post_created_at).getTime()
            )
        }

        setApplicationRecoomendData(recommendData.filter(v => (data.type === 'Everything' || data.type === v.post_post_type) && data.major === v.post_major))
    }, [orderType])

    const getSearchData = useCallback(async (data: PostSearchType) => {
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

        setApplicationSearchData(newData)
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
        } else {
            setSearchWord('')
        }
        if (searchParams.has('type') && ['Everything', 'Portfolio', 'PersonalStatement', 'Resume'].includes(searchParams.get('type') as string)) {
            data.type = searchParams.get('type') as ('Everything' | ApplicationFileType)
        }
        if (searchParams.has('major')) {
            data.major = searchParams.get('major') as MajorType
        }

        if (token && data.keyword.length) {
            getSearchData(data)
        } else {
            getRecommendData(data)
        }

        setHasToken(!!token)
    }, [searchParams, orderType])

    return (
        <section className="relative pb-[120px] w-full">
            <div className="py-6 px-10 flex justify-between items-center sticky bg-white top-0 left-0 w-full h-fit flex-wrap gap-2">
                <div className="flex gap-x-3 gap-y-2 flex-wrap break-keep">
                    {hasToken && searchWord && <span className="text-bodyLarge text-blue500">“{searchWord}”에 대한</span>}
                    <span className="text-bodyLarge text-black">
                        {
                            (hasToken && searchWord) ?
                                applicationSearchData.length
                                :
                                applicationRecommendData.length
                        }
                        개의 지원서 자료
                    </span>
                </div>
                <div className="p-1 gap-0.5 flex rounded-full border h-12 border-gray200 bg-gray50 text-bodySmall relative text-gray600 ml-auto">
                    <div className={`absolute top-[2px] ${orderType === 'ASC' ? 'left-[3px]' : 'left-[80px]'} border border-gray100 bg-white py-2 px-4 text-transparent rounded-full transition-all`}>{orderType === 'ASC' ? '최신순' : '오래된순'}</div>
                    <span className={`transition-all py-2 px-4 z-10 cursor-pointer ${orderType === 'ASC' ? 'text-blue500' : 'text-gray600'}`} onClick={() => setOrderType('ASC')}>최신순</span>
                    <span className={`transition-all py-2 px-4 z-10 cursor-pointer ${orderType === 'DESC' ? 'text-blue500' : 'text-gray600'}`} onClick={() => setOrderType('DESC')}>오래된순</span>
                </div>
            </div>
            <section className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-3 gap-y-6 px-10">
                {
                    (hasToken && searchWord) ?
                        applicationSearchData.map((item, index) =>
                            <ApplicationBox
                                key={index}
                                post_id={item.id}
                                post_major={item.major}
                                post_created_at={item.created_at}
                                post_post_type={item.post_type}
                                post_title={item.title}
                                post_writer_name={item.writer_name}
                            />
                        )
                        :
                        applicationRecommendData.map((item, index) =>
                            <ApplicationBox
                                key={index}
                                {...item}
                            />
                        )
                }
            </section>
            {/* 열심히 했는데 없애기는 아까워서 주석 처리함 */}
            {/* {
                hasToken ?
                    searchWord ?
                        <section className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-3 gap-y-6 px-10">
                            {
                                applicationSearchData.map((item, index) =>
                                    <ApplicationBox
                                        key={index}
                                        post_id={item.id}
                                        post_major={item.major}
                                        post_created_at={item.created_at}
                                        post_post_type={item.post_type}
                                        post_title={item.title}
                                        post_writer_name={item.writer_name}
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
            } */}
        </section>
    )
}

export default ShowSection