interface PropsType {
  size?: number
  onClick?: () => void
  className?: string
}

export const Pen = ({ size = 24, onClick, className = '' }: PropsType) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      onClick={onClick}
      className={`${onClick ? 'cursor-pointer ' : ''}${className}`}
    >
      <path
        d="M10.4853 6.38417L9.54247 5.44137L3.33333 11.6505V12.5933H4.27614L10.4853 6.38417ZM11.4281 5.44137L12.3709 4.49856L11.4281 3.55575L10.4853 4.49856L11.4281 5.44137ZM4.82843 13.9267H2V11.0982L10.9567 2.14153C11.2171 1.88119 11.6391 1.88119 11.8995 2.14153L13.7851 4.02715C14.0455 4.2875 14.0455 4.70961 13.7851 4.96996L4.82843 13.9267Z"
        fill="currentColor"
      />
    </svg>
  )
}
