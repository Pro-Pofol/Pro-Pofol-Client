'use client'

import { getUser } from '@/services'
import { dateToString } from '@/utils'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

interface TipBoxProps {
  title: string
  content?: string
  name: string
  date: string
  id?: number
}

/**
 * TIP을 간략하게 표시해주는 컴포넌트입니다.
 * 
 * 사용 예시
 * ```
    <TipBox title="제목" content="미리보기 내용" name="유저 이름" date="날짜" />
```
 */
export const TipBox = ({ title, content, name, date, id }: TipBoxProps) => {
  const [user, setUser] = useState<string>()
  const router = useRouter()

  const getData = async () => {
    const res = await getUser(name)
    setUser(res.name)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      {content === undefined ? (
        <div
          onClick={() => router.push(`/tip/${id}`)}
          className="p-8 flex sm:flex-col w-full min-w-[240px] gap-2.5 justify-between items-center sm:items-start border border-gray100 bg-white rounded-3xl cursor-pointer group"
        >
          <span className="text-titleSmall text-black truncate w-full group-hover:text-blue500">
            {title}
          </span>
          <div className="text-bodySmall text-gray600 flex justify-end items-center gap-2 w-fit sm:w-full text-nowrap">
            <span>{user}</span>
            <div className="w-0.5 h-0.5 bg-gray600 rounded-full" />
            <span>{dateToString(date)}</span>
          </div>
        </div>
      ) : (
        <div
          onClick={() => router.push(`/tip/${id}`)}
          className="p-8 sm:p-6 flex flex-col w-full min-w-[240px] gap-2 items-start border border-gray100 bg-white rounded-3xl cursor-pointer group"
        >
          <span className="text-titleSmall text-black group-hover:text-blue500 transition-colors truncate w-full">
            {title}
          </span>
          <span className="text-bodySmall sm:text-labelMedium text-gray500 line-clamp-2 w-full flex-1">
            {content}
          </span>
          <div className="text-bodySmall sm:text-labelMedium text-gray600 flex items-center gap-2 w-fit sm:w-full text-nowrap pt-3">
            <span>{user}</span>
            <div className="w-0.5 h-0.5 bg-gray600 rounded-full" />
            <span>{dateToString(date)}</span>
          </div>
        </div>
      )}
    </>
  )
}
