import { BrowserRouter,Routes,Route } from 'react-router-dom'
import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Projects' element={<Projects/>}/>
    <Route path='/Dashboard' element={<Dashboard/>}/>
    <Route path='/Sign-in' element={<SignIn/>}/>
    <Route path='/Sign-up' element={<SignUp/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}
