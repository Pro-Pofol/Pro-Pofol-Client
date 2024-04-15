interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const Bag = ({ size = 24, onClick, className = '' }: PropsType) => {
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
      <path d="M7 5.00012V2.00012C7 1.44784 7.44772 1.00012 8 1.00012H16C16.5523 1.00012 17 1.44784 17 2.00012V5.00012H21C21.5523 5.00012 22 5.44784 22 6.00012V20.0001C22 20.5524 21.5523 21.0001 21 21.0001H3C2.44772 21.0001 2 20.5524 2 20.0001V6.00012C2 5.44784 2.44772 5.00012 3 5.00012H7ZM4 16.0001V19.0001H20V16.0001H4ZM4 14.0001H20V7.00012H4V14.0001ZM9 3.00012V5.00012H15V3.00012H9ZM11 11.0001H13V13.0001H11V11.0001Z" fill="currentColor" />
    </svg>
  )
}
