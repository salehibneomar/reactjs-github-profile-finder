import React, { useContext } from 'react'
import AlertContext from '../../Context/Alert/AlertContext'

function Alert() {
  const {alert} = useContext(AlertContext)

  return alert!==undefined ? (<div className={`w-10/12 alert alert-${alert.type} mx-auto mb-6 rounded-lg`}>
        <div>
            <span>{alert.msg}</span>
        </div>
        </div>) : ''

}

export default Alert
