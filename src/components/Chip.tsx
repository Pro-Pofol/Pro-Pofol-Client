"use client"

import { Close } from "@/assets"
import React from "react"

interface ChipType {
    value: string
    deleteFn: (value: string) => void
}

/**
 * Chip 컴포넌트 사용법
 * 
 * ??: 선택 입력 / **: 필수 입력
 * 
 * ```
 * <Chip value={**} deleteFn={**: '(value) => {}' 이렇게 삭제하는 함수} />
 * ```
 * 
 */
export const Chip = ({ value, deleteFn }: ChipType) => {
    return (
        <div className="px-3 py-1.5 gap-1 items-center flex rounded-full bg-blue50 text-blue500">
            <span className="text-labelLarge">{value}</span>
            <Close size={20} onClick={() => deleteFn(value)} />
        </div>
    );
}