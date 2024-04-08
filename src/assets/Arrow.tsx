interface PropsType {
  direction?: 'left' | 'top' | 'right' | 'bottom'
  size?: number
  onClick?: () => void
  className?: string
}

const rotate = {
  left: 'rotate-[0deg] ',
  top: 'rotate-[90deg] ',
  right: 'rotate-[180deg] ',
  bottom: 'rotate-[270deg] ',
}

export const Arrow = ({ size = 24, onClick, className = '', direction = 'left' }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      onClick={onClick}
      className={`${rotate[direction]}${onClick ? 'cursor-pointer ' : ''}${className}`}
    >
      <path d="M10.8284 12.0008L15.7782 16.9505L14.364 18.3647L8 12.0008L14.364 5.63684L15.7782 7.05105L10.8284 12.0008Z" fill="currentColor" />
    </svg>
  )
}
