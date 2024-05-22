'use client'

import { TipBox } from "@/components";
import { useState } from "react";

interface TipBoxProps {
    title: string;
    content: string;
    name: string;
    date: string;
}

const TipData: TipBoxProps[] = [
    {
        title: "오늘 저녁 머 먹지...?",
        content: "맛있는 피자! 맛있는 치킨! 맛있는 도넛! 냠냠!! 맛있는 피자! 맛있는 치킨! 맛있는 도넛! 냠냠!! 맛있는 피자! 맛있는 치킨! 맛있는 도넛! 냠냠!! 맛있는 피자! 맛있는 치킨! 맛있는 도넛! 냠냠!!",
        name: "홍길동이",
        date: "2024-05-22"
    },
    {
        title: "1오늘 저녁 머 먹지...?",
        content: "맛있는 피자! 맛있는 치킨! 맛있는 도넛! 냠냠!! 맛있는 피자! 맛있는 치킨! 맛있는 도넛! 냠냠!! 맛있는 피자! 맛있는 치킨! 맛있는 도넛! 냠냠!! 맛있는 피자! 맛있는 치킨! 맛있는 도넛! 냠냠!!",
        name: "홍길동이",
        date: "2024-05-22"
    },
    {
        title: "2오늘 저녁 머 먹지...?",
        content: "맛있는 피자! 맛있는 치킨! 맛있는 도넛! 냠냠!! 맛있는 피자! 맛있는 치킨! 맛있는 도넛! 냠냠!! 맛있는 피자! 맛있는 치킨! 맛있는 도넛! 냠냠!! 맛있는 피자! 맛있는 치킨! 맛있는 도넛! 냠냠!!",
        name: "홍길동이",
        date: "2024-05-22"
    },
    {
        title: "2오늘 저녁 머 먹지...?",
        content: "맛있는 피자! 맛있는 치킨! 맛있는 도넛! 냠냠!! 맛있는 피자! 맛있는 치킨! 맛있는 도넛! 냠냠!! 맛있는 피자! 맛있는 치킨! 맛있는 도넛! 냠냠!! 맛있는 피자! 맛있는 치킨! 맛있는 도넛! 냠냠!!",
        name: "홍길동이",
        date: "2024-05-22"
    },
]

export const ShowSection = () =>{

    const [orderType, setOrderType] = useState<'first' | 'last'>('first')

    return(
        <section className="flex flex-col items-center w-full relative mb-[120px]">
            <div className="py-6 px-10 flex justify-between items-center sticky bg-white top-0 left-0 w-[70%] min-w-[800px] h-fit">
                <span className="text-bodyLarge text-black">182개의 지원서 자료</span>
                <div className="p-1 gap-0.5 flex rounded-full border h-12 border-gray200 bg-gray50 text-bodySmall relative text-gray600">
                    <div className={`absolute top-[2px] ${orderType === 'first' ? 'left-[3px]' : 'left-[80px]'} border border-gray100 bg-white py-2 px-4 text-transparent rounded-full transition-all`}>{orderType === 'first' ? '최신순' : '오래된순'}</div>
                    <span className={`transition-all py-2 px-4 z-10 cursor-pointer ${orderType === 'first' ? 'text-blue500' : 'text-gray600'}`} onClick={() => setOrderType('first')}>최신순</span>
                    <span className={`transition-all py-2 px-4 z-10 cursor-pointer ${orderType === 'last' ? 'text-blue500' : 'text-gray600'}`} onClick={() => setOrderType('last')}>오래된순</span>
                </div>
            </div>
            <div className="grid grid-cols-3 w-[70%] min-w-[800px] h-fit gap-x-3 gap-y-6 px-10">
                {
                    TipData.map((item, index)=>
                        <TipBox {...item} key={index} />
                    )
                }
            </div>
        </section>
    );
}