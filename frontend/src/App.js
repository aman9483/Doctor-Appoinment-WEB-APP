import React from 'react'
import Register from './pages/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './pages/Login'
import HomePage from './pages/HomePage'
import MainPage from './components/MainPage'
import DoctorPage from './components/DoctorPage/doctorpage'
import LabPage from './components/labsPage/labPage'






const App = () => {
  return (

    <BrowserRouter>
    <Routes>
  <Route path="/register" element={<Register />} />
  <Route path="/login" element={<Login />} />
  <Route path="/" element={<HomePage/>} />
  <Route path="/mainPage" element={<MainPage/>} />
  <Route path="/doctors" element={<  DoctorPage/>} />
  <Route path="/labs" element={< LabPage/>} />

 
  
</Routes>
</BrowserRouter>
  )
}

export default App
