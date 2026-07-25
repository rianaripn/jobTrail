import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthPage from './pages/AuthPage'
import Dashboard from './pages/Dashboard'
import Applications from './pages/Applications'


function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<AuthPage/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/apps' element={<Applications/>}/>

        </Routes>
    </BrowserRouter>
  )
}

export default App