import { ADD_TASK, REMOVE_TASK } from './types'

const TasklistReducer = (state, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }

        case REMOVE_TASK:
            return {
                ...state,
                tasks: action.payload
            }
    }
}

export default TasklistReducer
