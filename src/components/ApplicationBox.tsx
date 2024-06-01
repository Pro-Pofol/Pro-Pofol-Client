'use client'

import { getUser } from "@/services"
import { ApplicationFileType, ApplicationPreviewType, UserType } from "@/types"
import { dateToString } from "@/utils"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCallback, useEffect, useState } from "react"

const tagToKorean: Record<ApplicationFileType, string> = {
    Portfolio: '포트폴리오',
    PersonalStatement: '자기소개서',
    Resume: '이력서',
}

const tagColor: Record<ApplicationFileType, string> = {
    Portfolio: 'bg-attentionBackground text-attention',
    PersonalStatement: 'bg-coutionBackground text-coution',
    Resume: 'bg-gray100 text-gray500',
}

/**
 * 지원서에 관한 정보를 간략하게 표시해주는 컴폰전트입니다.
 * 
 * `tag`가 '이력서'인 경우 `mainMajor`와 `subMajor`가 없습니다.
 * 
 * 사용 예시
 * ```
    <ApplicationBox tag="포트폴리오" title="제목" name="유저이름" mainMajor="Frontend" />
```
 */
export const ApplicationBox = ({ post_id, post_title, post_post_type, post_writer_id, post_major, post_created_at }: ApplicationPreviewType) => {
    const [user, setUser] = useState<UserType | null>(null)
    const router = useRouter()

    const getData = useCallback(async () => {
        if (!post_writer_id) return
        const userData = await getUser(post_writer_id).then(res => res.data)
        setUser(userData)
    }, [])

    useEffect(() => {
        getData()
    }, [])

    return (
        <Link
            href={`/application/${post_id}`}
            className="flex flex-col w-full p-8 sm:p-6 gap-3 border border-gray100 bg-white rounded-3xl cursor-pointer group"
        >
            <div className={`px-[11px] w-fit h-fit py-1 rounded-full text-labelLarge ${tagColor[post_post_type]}`}>{tagToKorean[post_post_type]}</div>
            <div className="flex flex-col gap-2">
                <span className="text-titleMedium sm:text-titleSmall text-black group-hover:text-blue500 truncate transition-colors">{post_title}</span>
                <div className="flex justify-between items-center flex-wrap text-nowrap">
                    <div className="text-bodySmall sm:text-labelMedium text-gray600 flex items-center gap-2">
                        <span>{user ? user.name : ''}</span>
                        <div className="w-0.5 h-0.5 bg-gray600 rounded-full" />
                        <span>{dateToString(post_created_at)}</span>
                    </div>
                    <span className="text-labelLarge text-gray500">{post_major}</span>
                    {/* {tag !== '이력서' && (
                        <div className="text-labelLarge text-gray500 flex items-center gap-2">
                            <span>{mainMajor}</span>
                            {
                                subMajor &&
                                <>
                                    <span className="text-gray200">|</span>
                                    <span>{subMajor}</span>
                                </>
                            }
                        </div>
                    )} */}
                </div>
            </div>
        </Link >
    )
}
