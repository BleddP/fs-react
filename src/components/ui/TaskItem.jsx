const TaskItem = ({task, removeTask}) => {

    return (
        <li style={{display: 'flex', alignItems: 'center'}}>
            <h4>{task.title}</h4>
            <div onClick={() => removeTask(task.id)} style={{cursor: 'pointer', padding: 6, background: 'red', marginLeft: 6, borderRadius: 5}}>
                <span>X</span>
            </div>
        </li>
    )
}

export default TaskItem