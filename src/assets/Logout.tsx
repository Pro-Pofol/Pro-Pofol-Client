interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const Logout = ({ size = 24, onClick, className = '' }: PropsType) => {
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
      <path d="M4 18.0001H6V20.0001H18V4.00012H6V6.00012H4V3.00012C4 2.44784 4.44772 2.00012 5 2.00012H19C19.5523 2.00012 20 2.44784 20 3.00012V21.0001C20 21.5524 19.5523 22.0001 19 22.0001H5C4.44772 22.0001 4 21.5524 4 21.0001V18.0001ZM6 11.0001H13V13.0001H6V16.0001L1 12.0001L6 8.00012V11.0001Z" fill="currentColor" />
    </svg>
  )
}
