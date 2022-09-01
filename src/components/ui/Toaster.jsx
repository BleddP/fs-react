import { useContext } from 'react'
import toasterContext from '../../store/toaster/toasterContext'

import './toaster.scss'

const Toaster = () => {
    const toaster = useContext(toasterContext)
    console.log(toaster)

    return (
        <div className={`toaster ${toaster.open ? ' active' : ''}`}>
            <span>{toaster.content}</span>
        </div>
    )
}

export default Toaster
