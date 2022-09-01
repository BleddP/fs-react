import { useState } from "react"

const TaskFilter = ({buttonText, applyFilter}) => {

    const [input, setInput] = useState('')

    const handleInputChange = (e) => {
        setInput(e.target.value)
    }

    const filterTheList = () => {
        applyFilter(input)
    }

    return (
        <div>
        <input type="text" onChange={handleInputChange} />
        <button className="primary" onClick={filterTheList}>{ buttonText }</button>
      </div>
    )
}

export default TaskFilter