interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
  isFill?: boolean
}

export const Facebook = ({ size = 28, onClick, className = '', isFill }: PropsType) => {
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
          <path d="M13.5 13.5H16L17 9.5H13.5V7.5C13.5 6.47062 13.5 5.5 15.5 5.5H17V2.1401C16.6743 2.09685 15.443 2 14.1429 2C11.4284 2 9.5 3.65686 9.5 6.69971V9.5H6.5V13.5H9.5V22H13.5V13.5Z" fill="currentColor" />
          :
          <path d="M12.001 2.00012C6.47813 2.00012 2.00098 6.47727 2.00098 12.0001C2.00098 16.9914 5.65783 21.1284 10.4385 21.8786V14.8907H7.89941V12.0001H10.4385V9.797C10.4385 7.29075 11.9314 5.90637 14.2156 5.90637C15.3097 5.90637 16.4541 6.10168 16.4541 6.10168V8.56262H15.1931C13.9509 8.56262 13.5635 9.33346 13.5635 10.1243V12.0001H16.3369L15.8936 14.8907H13.5635V21.8786C18.3441 21.1284 22.001 16.9914 22.001 12.0001C22.001 6.47727 17.5238 2.00012 12.001 2.00012Z" fill="currentColor" />
      }
    </svg>
  )
}
