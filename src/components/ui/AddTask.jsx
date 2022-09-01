import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


const AddTask = ({setTask}) => {
    const [name, setName] = useState('')
    const [completed, setCompleted] = useState(false)
    const [date, setDate] = useState(null)

    const add = (e) => {
        e.preventDefault()

        if (!name) return window.alert('No name!')
        if (!date) return window.alert('CHoose a date')

      const task = {
        id: uuidv4(),
        title: name,
        completed,
        date
      }

      setTask(task)

    }

    return (
        <form onSubmit={add} style={{display: 'flex'}}>
            <input type='text' placeholder='Task name' onChange={(e) => setName(e.target.value)} />
            <input type='checkbox' onChange={(e) => setCompleted(e.currentTarget.checked)} />
            <input type='date' onChange={(e) => setDate(e.target.value)} />
            <button type='submit' className="secondary">Submit</button>
        </form>
    )
}

export default AddTask