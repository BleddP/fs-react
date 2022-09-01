import { useState, useEffect, useRef } from 'react'

// Components
import TaskItem from './TaskItem'
import TaskFilter from './TaskFilter'
import AddTask from './AddTask'

import tasks from '../../data/tasks'

const TaskList = () => {
    
    // Initial State
    const [list, setList] = useState(tasks)
    const [color, setColor] = useState('green')

    // Methods
    const applyFilter = (inputValue) => {
        const filtered = tasks.filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase()))
        setList(filtered)
        const ref = headingRef.current
        ref.style.color = 'red'
        ref.scrollIntoView({behavior: 'smooth'})
    }    

    const setTask = (task) => {
        const taskNames = list.map(item => item.title)
        if (taskNames.includes(task.title)) return window.alert('Task already exists!')
        setList([...list, task])
    }

    const removeTask = (id) => {
        const filtered = list.filter(task => task.id !== id)
        setList(filtered)
    }

    // Reactive
    useEffect(() => {
        console.log('List has changed...')
        console.log(list)
    }, [list])

    const headingRef = useRef(null)
    
    return (
        <div>
            <h2 ref={headingRef} style={{color: color}}>Tasks</h2>
            <TaskFilter 
                buttonText={'Filter me'} 
                applyFilter={applyFilter} 
            />
            <ul style={{listStyleType: 'none'}}>
            {list.map((task) => {
                return <TaskItem key={task.id} task={task} removeTask={removeTask} />
            })}
            </ul>
            <AddTask setTask={setTask} />
        </div>
    )
}

export default TaskList