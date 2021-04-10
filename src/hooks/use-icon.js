
import { ReactComponent as FrontEnd } from '../assets/icons/frontend.svg'
import { ReactComponent as Github } from '../assets/icons/github.svg'
import { ReactComponent as BackEnd } from '../assets/icons/backend.svg'

export const useIcon = (iconName) => {
  switch (iconName) {
    case 'front-end': {
      return FrontEnd
    }
    case 'github': {
      return Github
    }
    case 'backend': {
      return BackEnd
    }


    default:
      return null
  }
}