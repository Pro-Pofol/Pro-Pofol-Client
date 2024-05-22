interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const Download = ({ size = 24, onClick, className = '' }: PropsType) => {
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
      <path d="M13 10.0001H18L12 16.0001L6 10.0001H11V3.00012H13V10.0001ZM4 19.0001H20V12.0001H22V20.0001C22 20.5524 21.5523 21.0001 21 21.0001H3C2.44772 21.0001 2 20.5524 2 20.0001V12.0001H4V19.0001Z" fill="currentColor" />
    </svg>
  )
}
