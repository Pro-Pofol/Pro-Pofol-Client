'use client'

import { Arrow, Bulb, Portfolio } from "@/assets"
import { Dispatch, SetStateAction, useEffect, useRef } from "react"

interface UploadSelectModalType {
    click: Dispatch<SetStateAction<boolean>>
    change: Dispatch<SetStateAction<string>>
}

export const UploadSelectModal = ({ click, change }: UploadSelectModalType) => {
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const body = document.querySelector('body')
        if (body) {
            body.style.overflow = 'hidden'
        }
        return () => {
            if (body) {
                body.style.overflow = ''
            }
        }
    }, [])

    return (
        <section className="w-screen h-screen fixed bg-modalBackground backdrop-blur-sm top-0 z-40">
            <article ref={modalRef} onClick={(e) => e.target === modalRef.current ? click(false) : ''} className="w-full h-full flex justify-center items-center overflow-y-auto">
                <div className='flex p-2 rounded-3xl bg-white gap-2 w-[640px]'>
                    {/* 지원서 자료 모달 선택 */}
                    <section
                        onClick={() => change('application')}
                        className='flex flex-col break-keep gap-4 flex-1 py-[39px] px-[31px] border border-transparent hover:border-gray200 hover:bg-gray50 rounded-2xl'
                    >
                        <div className="p-[11px] border border-blue100 bg-blue50 text-blue500 rounded-xl w-fit">
                            <Portfolio size={28} />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <span className='text-titleMedium'>지원서 자료 공유</span>
                            <div className="flex gap-1 items-center text-gray600">
                                <span className="text-bodySmall">지원서 자료 공유하기</span>
                                <Arrow direction="right" size={16} />
                            </div>
                        </div>
                    </section>
                    {/* 팁 모달 선택 */}
                    <section
                        onClick={() => change('tip')}
                        className='flex flex-col break-keep gap-4 flex-1 py-[39px] px-[31px] border border-transparent hover:border-gray200 hover:bg-gray50 rounded-2xl'
                    >
                        <div className="p-[11px] border border-blue100 bg-blue50 text-blue500 rounded-xl w-fit">
                            <Bulb size={28} />
                        </div>
                        <div className='flex flex-col gap-1'>
                            <span className='text-titleMedium'>지원서 작성 팁 공유</span>
                            <div className="flex gap-1 items-center text-gray600">
                                <span className="text-bodySmall">지원서 작성 팁 공유하기</span>
                                <Arrow direction="right" size={16} />
                            </div>
                        </div>
                    </section>
                </div>
            </article>
        </section >
    )
}
