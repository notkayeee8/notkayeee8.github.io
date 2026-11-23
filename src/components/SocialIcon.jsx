import { iconPaths } from '../data/icons'

export default function SocialIcon({ name }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="white" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d={iconPaths[name]} />
    </svg>
  )
}
