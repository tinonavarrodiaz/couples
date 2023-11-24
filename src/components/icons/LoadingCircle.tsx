
type Props = {
  nameClass: string|null
}
function LoadingCircle({nameClass}:Props) {
  return (
    <svg viewBox="25 25 50 50" className={`load-circle ${nameClass}`}>
      <circle cx="50" cy="50" r="20"></circle>
    </svg>
  )
}

export default LoadingCircle
