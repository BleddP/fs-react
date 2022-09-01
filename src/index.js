import React from 'react'
import ReactDOM from 'react-dom/client'

// Store
import TasklistState from './store/tasklist/TasklistState'

// styles
import './styles/global.scss'

// App
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <TasklistState>
            <App />
        </TasklistState>
    </React.StrictMode>
)
