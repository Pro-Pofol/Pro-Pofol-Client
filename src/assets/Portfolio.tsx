interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const Portfolio = ({ size = 24, onClick, className = '' }: PropsType) => {
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
      <path d="M5 8.00012V20.0001H19V8.00012H5ZM5 6.00012H19V4.00012H5V6.00012ZM20 22.0001H4C3.44772 22.0001 3 21.5524 3 21.0001V3.00012C3 2.44784 3.44772 2.00012 4 2.00012H20C20.5523 2.00012 21 2.44784 21 3.00012V21.0001C21 21.5524 20.5523 22.0001 20 22.0001ZM7 10.0001H11V14.0001H7V10.0001ZM7 16.0001H17V18.0001H7V16.0001ZM13 11.0001H17V13.0001H13V11.0001Z" fill="currentColor" />
    </svg>
  )
}
