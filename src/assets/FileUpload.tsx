interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const FileUpload = ({ size = 24, onClick, className = '' }: PropsType) => {
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
      <path d="M15 4.00012H5V20.0001H19V8.00012H15V4.00012ZM3 2.99192C3 2.44417 3.44749 2.00012 3.9985 2.00012H16L20.9997 7.00012L21 20.9926C21 21.549 20.5551 22.0001 20.0066 22.0001H3.9934C3.44476 22.0001 3 21.5448 3 21.0083V2.99192ZM13 12.0001V16.0001H11V12.0001H8L12 8.00012L16 12.0001H13Z" fill="currentColor" />
    </svg>
  )
}
