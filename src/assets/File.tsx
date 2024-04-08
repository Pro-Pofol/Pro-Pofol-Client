interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const File = ({ size = 24, onClick, className = '' }: PropsType) => {
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
      <path d="M20 22.0001H4C3.44772 22.0001 3 21.5524 3 21.0001V3.00012C3 2.44784 3.44772 2.00012 4 2.00012H20C20.5523 2.00012 21 2.44784 21 3.00012V21.0001C21 21.5524 20.5523 22.0001 20 22.0001ZM19 20.0001V4.00012H5V20.0001H19ZM8 7.00012H16V9.00012H8V7.00012ZM8 11.0001H16V13.0001H8V11.0001ZM8 15.0001H13V17.0001H8V15.0001Z" fill="currentColor" />
    </svg>
  )
}
