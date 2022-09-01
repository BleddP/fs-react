import { useReducer } from 'react'
import { ADD_TASK, REMOVE_TASK } from './types'

import TasklistContext from './tasklistContext'
import TasklistReducer from './tasklistReducer'

import tasks from '../../data/tasks'

const TasklistState = ({ children }) => {
    // State
    const initialState = {
        tasks: tasks,
        showAddTaskButton: false
    }
    const [state, dispatch] = useReducer(TasklistReducer, initialState)

    // Methods
    const addTask = (task) => {
        dispatch({
            type: ADD_TASK,
            payload: task
        })
    }

    const remove = (id) => {
        const filtered = state.tasks.filter((task) => task.id !== id)
        dispatch({
            type: REMOVE_TASK,
            payload: filtered
        })
    }

    return (
        <TasklistContext.Provider
            value={{
                tasks: state.tasks,
                showAddTaskButton: state.showAddTaskButton,
                addTask,
                remove
            }}
        >
            {children}
        </TasklistContext.Provider>
    )
}

export default TasklistState
