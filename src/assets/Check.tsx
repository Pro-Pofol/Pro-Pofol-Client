interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
  isFill?: boolean
}

export const Check = ({ size = 24, onClick, className = '', isFill }: PropsType) => {
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
      {
        isFill ? 
        <path d="M12 22.0001C6.47715 22.0001 2 17.5229 2 12.0001C2 6.47727 6.47715 2.00012 12 2.00012C17.5228 2.00012 22 6.47727 22 12.0001C22 17.5229 17.5228 22.0001 12 22.0001ZM11.0026 16.0001L18.0737 8.92905L16.6595 7.51484L11.0026 13.1717L8.17421 10.3432L6.75999 11.7575L11.0026 16.0001Z" fill="currentColor"/>
        :
        <path d="M9.9997 15.171L19.1921 5.97864L20.6063 7.39285L9.9997 17.9994L3.63574 11.6355L5.04996 10.2213L9.9997 15.171Z" fill="currentColor" />
      }
    </svg>
  )
}
