'use client'

import { ComponentProps, MouseEvent, ReactNode } from 'react'

type ButtonProps = ComponentProps<'button'> & {
  className?: string
  kind?: keyof typeof ButtonColor
  disabled?: boolean
  children?: ReactNode
  size?: keyof typeof Size
  onClick?: (
    event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => void
}

const ButtonColor = {
  primary: {
    enabled: 'transition-all bg-blue500 text-white rounded-xl hover:bg-blue600',
    disabled: 'bg-gray300 text-gray200 rounded-xl',
  },
  blue: {
    enabled:
      'transition-all bg-blue50 text-blue500 rounded-xl border border-blue100 hover:bg-blue100 text-blue500 border border-blue200',
    disabled: 'bg-gray100 text-gray300 rounded-xl',
  },
  red: {
    enabled:
      'transition-all bg-criticalBackground text-critical rounded-xl border border-criticalMiddle hover:bg-critical hover:border-critical hover:text-criticalBackground',
    disabled: 'bg-gray100 text-gray300 rounded-xl',
  },
  gray: {
    enabled:
      'transition-all bg-gray100 text-gray900 rounded-xl hover:bg-gray200',
    disabled: 'bg-gray100 text-gray300 rounded-xl',
  },
  white: {
    enabled:
      'transition-all bg-white text-gray800 rounded-xl hover:bg-gray100 text-blue500',
    disabled: 'bg-white text-gray300 rounded-xl',
  },
  outline: {
    enabled:
      'transition-all bg-white text-gray800 border border-gray500 rounded-xl hover:bg-blue50 text-blue500 border border-blue400',
    disabled: 'bg-white text-gray300 border border-gray300',
  },
}

const Size = {
  large: 'text-bodyMedium px-8 py-4',
  medium: 'text-bodySmall px-6 py-3',
  small: 'text-bodySmall px-4 py-2',
}

export const Button = ({
  className,
  kind = 'primary',
  disabled,
  children,
  size,
  onClick = () => {},
  ...props
}: ButtonProps) => {
  const color = ButtonColor[kind][disabled ? 'disabled' : 'enabled']
  const font = Size[size ?? 'medium']

  return (
    <button
      className={`select-none w-fit ${color} ${font} ${className ?? ''}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
