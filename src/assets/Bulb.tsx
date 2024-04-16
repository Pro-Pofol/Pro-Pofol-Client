interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const Bulb = ({ size = 24, onClick, className = '' }: PropsType) => {
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
      <path d="M9.97308 18.0001H11V13.0001H13V18.0001H14.0269C14.1589 16.7985 14.7721 15.8066 15.7676 14.7227C15.8797 14.6007 16.5988 13.8565 16.6841 13.7502C17.5318 12.6932 18 11.3851 18 10.0001C18 6.68641 15.3137 4.00012 12 4.00012C8.68629 4.00012 6 6.68641 6 10.0001C6 11.3844 6.46774 12.6918 7.31462 13.7485C7.40004 13.8551 8.12081 14.6013 8.23154 14.7219C9.22766 15.8065 9.84103 16.7985 9.97308 18.0001ZM10 20.0001V21.0001H14V20.0001H10ZM5.75395 14.9993C4.65645 13.6298 4 11.8916 4 10.0001C4 5.58184 7.58172 2.00012 12 2.00012C16.4183 2.00012 20 5.58184 20 10.0001C20 11.8926 19.3428 13.6316 18.2443 15.0015C17.624 15.7749 16 17.0001 16 18.5001V21.0001C16 22.1047 15.1046 23.0001 14 23.0001H10C8.89543 23.0001 8 22.1047 8 21.0001V18.5001C8 17.0001 6.37458 15.7737 5.75395 14.9993Z" fill="currentColor" />
    </svg>
  )
}
