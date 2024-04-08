interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const User = ({ size = 24, onClick, className = '' }: PropsType) => {
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
      <path d="M20 22.0001H18V20.0001C18 18.3432 16.6569 17.0001 15 17.0001H9C7.34315 17.0001 6 18.3432 6 20.0001V22.0001H4V20.0001C4 17.2387 6.23858 15.0001 9 15.0001H15C17.7614 15.0001 20 17.2387 20 20.0001V22.0001ZM12 13.0001C8.68629 13.0001 6 10.3138 6 7.00012C6 3.68641 8.68629 1.00012 12 1.00012C15.3137 1.00012 18 3.68641 18 7.00012C18 10.3138 15.3137 13.0001 12 13.0001ZM12 11.0001C14.2091 11.0001 16 9.20926 16 7.00012C16 4.79098 14.2091 3.00012 12 3.00012C9.79086 3.00012 8 4.79098 8 7.00012C8 9.20926 9.79086 11.0001 12 11.0001Z" fill="currentColor" />
    </svg>
  )
}
