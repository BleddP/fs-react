import { useReducer } from 'react'
import { SHOW_TOASTER, HIDE_TOASTER } from './types'

import ToasterContext from './toasterContext'
import ToasterReducer from './toasterReducer'

import initialState from './initialstate'

const ToasterState = ({ children }) => {
    // State
    const [state, dispatch] = useReducer(ToasterReducer, initialState)

    // Methods
    const show = (content, timeout = 3000) => {
        dispatch({
            type: SHOW_TOASTER,
            payload: content
        })

        setTimeout(() => {
            hide()
        }, timeout)
    }

    const hide = () => {
        dispatch({
            type: HIDE_TOASTER
        })
    }

    return (
        <ToasterContext.Provider
            value={{
                open: state.open,
                content: state.content,
                show,
                hide
            }}
        >
            {children}
        </ToasterContext.Provider>
    )
}

export default ToasterState
