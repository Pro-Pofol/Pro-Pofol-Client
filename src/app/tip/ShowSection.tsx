'use client'

import { Search } from '@/assets'
import { TipBox } from '@/components'
import { recommendTip, searchTip } from '@/services'
import { TipBoxType } from '@/types'
import React, { useEffect, useState } from 'react'

export const ShowSection = () => {
  const [orderType, setOrderType] = useState<'first' | 'last'>('first')
  const [search, setSearch] = useState<string>('')
  const [data, setData] = useState<TipBoxType[]>([])

  const handleKeyPress = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const res: TipBoxType[] = await searchTip(search, orderType)
      setData(res)
    }
  }

  const getData = async () => {
    const res: TipBoxType[] = await recommendTip() || []
    if (orderType === 'first') {
      const a = res
        .sort((a, b) => {
          return (
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
          )
        })
        .reverse()
      setData(a)
    } else {
      const a = res.sort((a, b) => {
        return (
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
        )
      })
      setData(a)
    }
  }

  useEffect(() => {
    getData()
  }, [orderType])

  return (
    <section className="flex flex-col items-center w-full relative mb-[120px]">
      <div className="w-[65.5%] mt-10 relative flex items-center">
        <label htmlFor="searchInput" className="absolute left-4 z-10">
          <Search size={20} className="text-gray800" />
        </label>
        <input
          id="searchInput"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="포트폴리오/자기소개서 검색"
          className="w-full outline-none py-3 px-10 text-bodySmall text-black placeholder:text-gray400 bg-gray50 border border-gray200 rounded-full"
        />
      </div>
      <div className="py-6 px-10 flex justify-between items-center sticky bg-white top-0 left-0 w-[70%] min-w-[800px] h-fit">
        <span className="text-bodyLarge text-black">
          {data.length}개의 지원서 자료
        </span>
        <div className="p-1 gap-0.5 flex rounded-full border h-12 border-gray200 bg-gray50 text-bodySmall relative text-gray600">
          <div
            className={`absolute top-[2px] ${orderType === 'first' ? 'left-[3px]' : 'left-[80px]'} border border-gray100 bg-white py-2 px-4 text-transparent rounded-full transition-all`}
          >
            {orderType === 'first' ? '최신순' : '오래된순'}
          </div>
          <span
            className={`transition-all py-2 px-4 z-10 cursor-pointer ${orderType === 'first' ? 'text-blue500' : 'text-gray600'}`}
            onClick={() => setOrderType('first')}
          >
            최신순
          </span>
          <span
            className={`transition-all py-2 px-4 z-10 cursor-pointer ${orderType === 'last' ? 'text-blue500' : 'text-gray600'}`}
            onClick={() => setOrderType('last')}
          >
            오래된순
          </span>
        </div>
      </div>
      <div className="grid grid-cols-3 w-[70%] min-w-[800px] h-fit gap-x-3 gap-y-6 px-10">
        {data.map(item => (
          <TipBox
            key={item.id}
            date={String(item.created_at)}
            name={item.writer_id}
            content={item.content}
            title={item.title}
            id={item.id}
          />
        ))}
      </div>
    </section>
  )
}
