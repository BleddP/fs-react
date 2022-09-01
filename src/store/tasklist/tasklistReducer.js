import { ADD_TASK, REMOVE_TASK } from './types'

const TasklistReducer = (state, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state
            }

        case REMOVE_TASK:
            return {
                ...state
            }
    }
}

export default TasklistReducer
