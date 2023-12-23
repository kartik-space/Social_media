import { Route, Routes } from 'react-router-dom'
import './App.css'
import AuthPage from './pages/Authpage/AuthPage'
import HomePage from './pages/Homepage/HomePage'

function App() {
  return (
    <>
     <Routes>
      <Route  path = "/" element={<HomePage />} />
      <Route  path = "/auth" element={<AuthPage />} />

     </Routes>
    </>
  )
}

export default App
