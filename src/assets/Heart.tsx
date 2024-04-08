interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const Heart = ({ size = 24, onClick, className = '' }: PropsType) => {
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
      <path d="M12.001 4.52865C14.35 2.42012 17.98 2.49012 20.2426 4.75748C22.5053 7.02484 22.583 10.6371 20.4786 12.9931L11.9999 21.4851L3.52138 12.9931C1.41705 10.6371 1.49571 7.01913 3.75736 4.75748C6.02157 2.49327 9.64519 2.41699 12.001 4.52865ZM18.827 6.17022C17.3279 4.66806 14.9076 4.60713 13.337 6.01699L12.0019 7.21536L10.6661 6.01793C9.09098 4.60609 6.67506 4.6682 5.17157 6.17169C3.68183 7.66143 3.60704 10.0474 4.97993 11.6233L11.9999 18.6544L19.0201 11.6233C20.3935 10.0468 20.319 7.66537 18.827 6.17022Z" fill="currentColor" />
    </svg>
  )
}
