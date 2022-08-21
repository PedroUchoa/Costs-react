import { Link } from 'react-router-dom'
import Style from './LinkButton.module.css'


function LinkButton({to, text}) {
  return (
    <Link className={Style.btn} to={to}>{text}</Link>
  )
}

export default LinkButton