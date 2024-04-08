interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const Sub = ({ size = 24, onClick, className = '' }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      onClick={onClick}
      className={`${onClick ? 'cursor-pointer ' : ''}${className}`}
    >
      <path d="M5 11.0001V13.0001H19V11.0001H5Z" fill="currentColor" />
    </svg>
  )
}
