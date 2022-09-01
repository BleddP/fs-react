import React from 'react'
import ReactDOM from 'react-dom/client'

// Store
import TasklistState from './store/tasklist/TasklistState'
import ToasterState from './store/toaster/ToasterState'

// styles
import './styles/global.scss'

// App
import App from './App'
import Toaster from './components/ui/Toaster'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <TasklistState>
            <ToasterState>
                <App />
                <Toaster />
            </ToasterState>
        </TasklistState>
    </React.StrictMode>
)
