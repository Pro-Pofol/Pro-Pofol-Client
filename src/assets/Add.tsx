interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const Add = ({ size = 24, onClick, className = '' }: PropsType) => {
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
      <path d="M11 11.0001V5.00012H13V11.0001H19V13.0001H13V19.0001H11V13.0001H5V11.0001H11Z" fill="currentColor" />
    </svg>
  )
}
