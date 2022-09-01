import { useContext } from 'react'
import tasklistContext from '../../store/tasklist/tasklistContext'
import toasterContext from '../../store/toaster/toasterContext'

const TaskItem = ({ task }) => {
    const { remove } = useContext(tasklistContext)
    const toaster = useContext(toasterContext)

    const removeItem = () => {
        remove(task.id)
        toaster.show('Item has been removed', 10000)
    }

    return (
        <li style={{ display: 'flex', alignItems: 'center' }}>
            <h4>{task.title}</h4>
            <div
                onClick={removeItem}
                style={{
                    cursor: 'pointer',
                    padding: 6,
                    background: 'red',
                    marginLeft: 6,
                    borderRadius: 5
                }}
            >
                <span>X</span>
            </div>
        </li>
    )
}

export default TaskItem
