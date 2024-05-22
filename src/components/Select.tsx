'use client'

import { Arrow } from '@/assets'
import React, {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react'

interface DropdownItemsType {
  value: string
  name: string
}

interface DropdownType {
  label?: string
  placeholder: string
  value: string
  name?: string
  change: Dispatch<SetStateAction<string>> | ((value: string) => void)
  options: DropdownItemsType[]
  err?: boolean
}

const dropdownColor = {
  dropdown: {
    enable:
      'transition-all bg-gray50 border border-gray200 placeholder: text-gray500',
    selected:
      'transition-all bg-blue50 border border-blue400 text-black outline-none',
    dropdown: 'transition-all bg-gray50 border border-gray200 text-black',
    error:
      'transition-all bg-criticalBackground border border-critical text-critical',
  },
  label: {
    enable: 'transition-all text-black',
    selected: 'transition-all text-blue500',
    dropdown: 'transition-all text-black',
    error: 'transition-all text-critical',
  },
  icon: {
    enable: 'transition-all bg-gray500',
    selected: 'transition-all bg-blue500',
    dropdown: 'transition-all bg-black',
    error: 'transition-all bg-critical',
  },
}

// Select컴포넌트 사용법

// <Select options={?? value, name값} change={?? 상태값}/>
//const [isShowOption, setShowOptions] = useState<boolean>(false);

/**
 * Select컴포넌트 사용법
 *
 * ??: 선택 입력 / **: 필수 입력
 *
 * ```
 * <Select label={??} placeholder={**} change={**: setState 넣기} value={**: state에 value 넣기} options={**: 객체 선언후 value: ??, name: ?? 추가} err />
 * ```
 */

export const Select = ({
  label,
  placeholder,
  change,
  value,
  options,
  err = false,
}: DropdownType) => {
  const SelectContainer = useRef<HTMLDivElement | null>(null)
  const [isShowOption, setShowOptions] = useState<boolean>(false)
  const [focused, setFocused] = useState<boolean>(false)

  useEffect(() => {
    const clickEvent = (event: globalThis.MouseEvent) => {
      if (!SelectContainer.current?.contains(event.target as HTMLElement)) {
        setShowOptions(false)
      }
    }

    document.addEventListener('click', clickEvent)

    return () => document.removeEventListener('mouseup', clickEvent)
  }, [])

  return (
    <div
      ref={SelectContainer}
      className={`flex flex-col w-full gap-[8px] relative`}
    >
      {label && (
        <label
          className={`transition-all text-bodyMedium
                    ${
                      focused
                        ? dropdownColor.label.selected
                        : err
                          ? dropdownColor.label.error
                          : value
                            ? dropdownColor.label.dropdown
                            : dropdownColor.label.enable
                    }
                    `}
        >
          {label}
        </label>
      )}
      <button
        className={`
                    transition-all p-[15px] text-bodyMedium rounded-xl
                    flex justify-between
                    ${
                      focused
                        ? dropdownColor.dropdown.selected
                        : err
                          ? dropdownColor.dropdown.error
                          : value
                            ? dropdownColor.dropdown.dropdown
                            : dropdownColor.dropdown.enable
                    }`}
        onClick={() => setShowOptions((prev) => !prev)}
        onFocus={() => setFocused(!focused)}
        onBlur={() => setFocused(!focused)}
      >
        {value ? value : placeholder}
        <Arrow
          className={`
                    ${
                      focused
                        ? dropdownColor.label.selected
                        : err
                          ? dropdownColor.label.error
                          : value
                            ? dropdownColor.label.dropdown
                            : dropdownColor.label.enable
                    }`}
          direction={isShowOption ? 'top' : 'bottom'}
        />
      </button>
      <ul
        className={`
                transition-all w-full rounded-xl absolute ${label ? 'top-[100px]' : 'top-[64px]'} border border-gray200 p-1 bg-white overflow-y-auto
                ${isShowOption ? 'max-h-[200px]' : 'hidden'}`}
      >
        {options.map((option) => {
          return (
            <li
              onClick={() => {
                change(option.name)
                setShowOptions(false)
              }}
              key={option.value}
              value={option.name}
              className="w-full px-4 py-3 border-b border-gray100 text-bodySmall"
            >
              {option.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
