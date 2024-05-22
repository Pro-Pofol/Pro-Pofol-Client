'use client'

import { dateToString } from "@/utils"
import { useRouter } from "next/navigation"

interface ApplicationBoxProps {
    tag: keyof typeof tagColor
    title: string
    name: string
    date: string
    mainMajor?: string
    subMajor?: string
}

const tagColor = {
    이력서: 'bg-gray100 text-gray500',
    포트폴리오: 'bg-attentionBackground text-attention',
    자기소개서: 'bg-coutionBackground text-coution',
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
export const ApplicationBox = ({ tag, title, name, date, mainMajor, subMajor }: ApplicationBoxProps) => {
    
    const router = useRouter();

    return (
        <div onClick={()=>router.push('/application/1')} className="flex flex-col w-full p-8 gap-3 border border-gray100 bg-white rounded-3xl cursor-pointer">
            <div className={`px-[11px] w-fit h-fit py-1 rounded-full text-labelLarge ${tagColor[tag]}`}>{tag}</div>
            <div className="flex flex-col gap-2">
                <span className="text-titleMedium text-black truncate">{title}</span>
                <div className="flex justify-between items-center flex-wrap text-nowrap">
                    <div className="text-bodySmall text-gray600 flex items-center gap-2">
                        <span>{name}</span>
                        <div className="w-0.5 h-0.5 bg-gray600 rounded-full" />
                        <span>{dateToString(date)}</span>
                    </div>
                    {tag !== '이력서' && (
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
                    )}
                </div>
            </div>
        </div>
    )
}
