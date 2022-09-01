// Layout
import Header from './components/layout/Header'
import Container from './components/layout/Container'

// Other components
import TaskList from './components/ui/TaskList'
import Weather from './components/layout/Weather'

const App = () => {
    return (
        <Container>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <h1>React App</h1>
                <Weather />
            </div>
            <Header title='Ik ben de React header' />
            <TaskList />
        </Container>
    )
}

export default App
