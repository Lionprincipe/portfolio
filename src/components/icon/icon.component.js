
import { useIcon } from '../../hooks/use-icon'

import './icon.styles.scss'

export const Icon = ({ name, ...otherProps }) => {
  const Icon = useIcon(name)
  return <div>{Icon && <Icon className='icon_svg' {...otherProps} />}</div>
}

export default Icon
