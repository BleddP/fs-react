import { SHOW_TOASTER, HIDE_TOASTER } from './types'

const ToasterReducer = (state, action) => {
    switch (action.type) {
        case SHOW_TOASTER:
            return {
                open: true,
                content: action.payload
            }

        case HIDE_TOASTER:
            return {
                open: false
            }
    }
}

export default ToasterReducer
