import { useContext } from 'react'

// Store
import tasklistContext from '../../store/tasklist/tasklistContext'

// Components
import TaskItem from './TaskItem'
import TaskFilter from './TaskFilter'
import AddTask from './AddTask'

const TaskList = () => {
    const { tasks } = useContext(tasklistContext)

    return (
        <div>
            <h2>Tasks</h2>
            <TaskFilter buttonText={'Filter me'} />
            <ul style={{ listStyleType: 'none' }}>
                {tasks.map((task) => {
                    return <TaskItem key={task.id} task={task} />
                })}
            </ul>
            <AddTask />
        </div>
    )
}

export default TaskList
