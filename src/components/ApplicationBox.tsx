'use client'

import { ApplicationFileType, ApplicationPreviewType } from '@/types'
import { dateToString } from '@/utils'
import Link from 'next/link'

interface ApplicationBoxProps {
  tag: keyof typeof tagColor
  title: string
  name: string
  date: string
  mainMajor?: string
  subMajor?: string
}

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
export const ApplicationBox = ({
  post_id,
  post_title,
  post_post_type,
  user_oauth_id,
  post_major,
  post_created_at,
}: ApplicationPreviewType) => {
  return (
    <Link
      href={`/application/${post_id}`}
      className="flex flex-col w-full p-8 gap-3 border border-gray100 bg-white rounded-3xl cursor-pointer"
    >
      <div
        className={`px-[11px] w-fit h-fit py-1 rounded-full text-labelLarge ${tagColor[post_post_type]}`}
      >
        {tagToKorean[post_post_type]}
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-titleMedium text-black truncate">
          {post_title}
        </span>
        <div className="flex justify-between items-center flex-wrap text-nowrap">
          <div className="text-bodySmall text-gray600 flex items-center gap-2">
            <span>{user_oauth_id}</span>
            <div className="w-0.5 h-0.5 bg-gray600 rounded-full" />
            <span>{dateToString(post_created_at)}</span>
          </div>
          {post_post_type !== 'Resume' && (
            <span className="text-labelLarge text-gray500">{post_major}</span>
          )}
          {/* {tag !== '이력서' && (
            <div className="text-labelLarge text-gray500 flex items-center gap-2">
              <span>{mainMajor}</span>
              {subMajor && (
                <>
                  <span className="text-gray200">|</span>
                  <span>{subMajor}</span>
                </>
              )}
            </div>
          )} */}
        </div>
      </div>
    </Link>
  )
}
