'use client'

import { Arrow, Check } from "@/assets"
import React, { useState } from "react"

interface SideSelectProps {
    kind: 'radio' | 'checkbox'
    icon: React.ReactNode
    title: string
    display: string[]
    value: string | { [key: string]: boolean }
    setValue: (value: string) => void
    open?: boolean
}

export const SideSelect = ({ kind, icon, title, display, value, setValue, open = false }: SideSelectProps) => {
    const [isOpneKind, setIsOpenKind] = useState<boolean>(open)

    return (
        <div className="flex flex-col gap-1 h-fit transition-all">
            <div className="flex flex-col gap-1 cursor-pointer" onClick={() => setIsOpenKind(prev => !prev)}>
                <div className="flex py-3 px-1 justify-between items-center cursor-pointer hover:bg-blue50 rounded-lg">
                    <div className="flex gap-2 items-center">
                        {icon}
                        <span className="text-bodySmall text-black">{title}</span>
                    </div>
                    <Arrow direction={isOpneKind ? 'top' : 'bottom'} className="transition-all" />
                </div>
            </div>
            <div className={`flex flex-col gap-1 text-labelLarge text-gray800 transition-all overflow-hidden ${isOpneKind ? 'h-[100%] pb-3' : 'h-0 pb-0'}`}>
                {
                    display.map(v => (
                        <div className='p-2 flex gap-2 cursor-pointer rounded-xl hover:bg-blue50 transition-all' key={v} onClick={() => setValue(v)}>
                            {
                                (typeof value === 'string' ? value === v : value[v]) ?
                                    <div className={`border border-blue500 ${kind === 'radio' ? 'p-[3px] rounded-full w-5 h-5' : 'text-blue500 rounded-[4px] w-[18px] h-[18px]'}`}>
                                        {
                                            kind === 'radio' ?
                                                <div className="bg-blue500 w-full h-full rounded-full" />
                                                :
                                                <Check size={16} />
                                        }
                                    </div>
                                    :
                                    <div className={`border border-gray300 ${kind === 'radio' ? 'p-[3px] rounded-full w-5 h-5' : 'rounded-[4px] w-[18px] h-[18px]'}`} />
                            }
                            <span>{v}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}