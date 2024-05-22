interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const Delete = ({ size = 16, onClick, className = '' }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      onClick={onClick}
      className={`${onClick ? 'cursor-pointer ' : ''}${className}`}
    >
      <path d="M4.66634 2.66666V1.33333H11.333V2.66666H14.6663V3.99999H13.333V14C13.333 14.3682 13.0345 14.6667 12.6663 14.6667H3.33301C2.96482 14.6667 2.66634 14.3682 2.66634 14V3.99999H1.33301V2.66666H4.66634ZM3.99967 3.99999V13.3333H11.9997V3.99999H3.99967ZM5.99967 6H7.33301V11.3333H5.99967V6ZM8.66634 6H9.99967V11.3333H8.66634V6Z" fill="currentColor"/>

    </svg>
  )
}
