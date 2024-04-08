interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
  isCircle?: boolean
}

export const Close = ({ size = 24, onClick, className = '', isCircle }: PropsType) => {
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
        isCircle ?
          <path d="M12 22.0001C6.47715 22.0001 2 17.5229 2 12.0001C2 6.47727 6.47715 2.00012 12 2.00012C17.5228 2.00012 22 6.47727 22 12.0001C22 17.5229 17.5228 22.0001 12 22.0001ZM12 20.0001C16.4183 20.0001 20 16.4184 20 12.0001C20 7.58184 16.4183 4.00012 12 4.00012C7.58172 4.00012 4 7.58184 4 12.0001C4 16.4184 7.58172 20.0001 12 20.0001ZM12 10.5859L14.8284 7.75748L16.2426 9.17169L13.4142 12.0001L16.2426 14.8285L14.8284 16.2427L12 13.4143L9.17157 16.2427L7.75736 14.8285L10.5858 12.0001L7.75736 9.17169L9.17157 7.75748L12 10.5859Z" fill="currentColor" />
          :
          <path d="M10.8284 12.0008L15.7782 16.9505L14.364 18.3647L8 12.0008L14.364 5.63684L15.7782 7.05105L10.8284 12.0008Z" fill="currentColor" />
      }
    </svg>
  )
}
