import './App.scss'
import Home from './Pages/Home'
import Layout from './Components/Layout/Layout'
import DashboardContextProvider from './Context/DashboardContext'

function App() {
    return (
        <DashboardContextProvider>
            <Layout>
                <Home />
            </Layout>
        </DashboardContextProvider>
    )
}

export default App
