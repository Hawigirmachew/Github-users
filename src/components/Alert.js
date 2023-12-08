import { useContext } from "react"
import AlertContext from "../context/alert/AlertContext"
import {FaExclamationCircle} from 'react-icons/fa'

function Alert() {
    const {alert} = useContext(AlertContext)
  return alert !== null && (
    <div className="flex gap-1 mb-3 items-center">
        {alert.type === 'error' && <FaExclamationCircle style = {{color:'red'}}/> }
      <p>{alert.msg}</p>
    </div>
  )
}

export default Alert
