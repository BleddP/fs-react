import { useReducer } from 'react'
import { ADD_TASK, REMOVE_TASK } from './types'

import TasklistContext from './tasklistContext'
import TasklistReducer from './tasklistReducer'

import tasks from '../../data/tasks'

const TasklistState = ({ children }) => {
    const initialState = {
        tasks: tasks,
        showAddTaskButton: false
    }

    const [state, dispatch] = useReducer(TasklistReducer, initialState)

    return (
        <TasklistContext.Provider
            value={{
                tasks: state.tasks,
                showAddTaskButton: state.showAddTaskButton
            }}
        >
            {children}
        </TasklistContext.Provider>
    )
}

export default TasklistState
