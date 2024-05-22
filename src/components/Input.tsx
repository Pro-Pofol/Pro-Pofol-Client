'use client'

import React, { useRef, useState } from 'react'

interface InputType {
  label?: string
  placeholder: string
  value?: string
  name?: string
  change?: (e: React.ChangeEvent<HTMLInputElement>) => void
  err?: boolean
}

const inputColor = {
  input: {
    enable:
      'transition-all bg-gray50 border border-gray200 placeholder: text-gray500',
    selected:
      'transition-all bg-blue50 border border-blue400 text-black outline-none',
    input: 'transition-all bg-gray50 border border-gray200 text-black',
    error:
      'transition-all bg-criticalBackground border border-critical text-critical',
  },
  label: {
    enable: 'transition-all text-black',
    selected: 'transition-all text-blue500',
    input: 'transition-all text-black',
    error: 'transition-all text-critical',
  },
}

/**
 * Input컴포넌트 사용법
 *
 * ??: 선택 입력 / **: 필수 입력
 *
 * ```
 * <Input placeholder={**} label={??} value={??} name={??} change={(e)=>{??(e.target.value)}} error={**}/>
 * ```
 *
 * 상태관리는 알잘딱! ^^
 *
 */
export const Input = ({
  label,
  placeholder,
  name,
  value,
  change,
  err = false,
}: InputType) => {
  const [focused, setFocsed] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      className={`flex flex-col w-full gap-[8px] 
                ${focused ? inputColor.label.selected : err ? inputColor.label.error : value ? inputColor.label.input : inputColor.label.enable}`}
    >
      {label ?? <label className={`text-bodySmall`}>{label}</label>}
      <input
        className={`text-bodyMedium p-[15px] rounded-xl 
                    ${focused ? inputColor.input.selected : err ? inputColor.input.error : value ? inputColor.input.input : inputColor.input.enable}`}
        placeholder={placeholder}
        ref={inputRef}
        type="text"
        name={name}
        value={value}
        onChange={change}
        onFocus={() => setFocsed(true)}
        onBlur={() => setFocsed(false)}
      />
    </div>
  )
}
