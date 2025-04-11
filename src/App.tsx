import './App.css'
import { Route, Routes, BrowserRouter, Router } from 'react-router-dom'
import { Home } from './Home/home'
import Dashboard from './DashBoard/Dashboard'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
      <Route path='/DashBoard' element={<Dashboard/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
