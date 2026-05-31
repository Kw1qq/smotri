import iconImg from '@/assets/images/icon.png'
import { Link as DefaultLink } from '@tanstack/react-router'

const Icon = () => {
  return (
    <DefaultLink to="/">
      <img src={iconImg} alt="СМОТРИ!" width={200} height={50} />
    </DefaultLink>
  )
}

export default Icon