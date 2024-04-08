interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const Search = ({ size = 24, onClick, className = '' }: PropsType) => {
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
      <path d="M18.031 16.6169L22.3137 20.8996L20.8995 22.3138L16.6168 18.0311C15.0769 19.2631 13.124 20.0001 11 20.0001C6.032 20.0001 2 15.9681 2 11.0001C2 6.03212 6.032 2.00012 11 2.00012C15.968 2.00012 20 6.03212 20 11.0001C20 13.1241 19.263 15.077 18.031 16.6169ZM16.0247 15.8749C17.2475 14.6147 18 12.8957 18 11.0001C18 7.13262 14.8675 4.00012 11 4.00012C7.1325 4.00012 4 7.13262 4 11.0001C4 14.8676 7.1325 18.0001 11 18.0001C12.8956 18.0001 14.6146 17.2476 15.8748 16.0248L16.0247 15.8749Z" fill="currentColor" />
    </svg>
  )
}
