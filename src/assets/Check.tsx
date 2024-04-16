interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const Check = ({ size = 24, onClick, className = '' }: PropsType) => {
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
      <path d="M9.9997 15.171L19.1921 5.97864L20.6063 7.39285L9.9997 17.9994L3.63574 11.6355L5.04996 10.2213L9.9997 15.171Z" fill="currentColor" />
    </svg>
  )
}
