import React from 'react'
import { Routes, Route } from "react-router-dom"
import MainLayouts from '../Layouts/MainLayouts'
import Home from '../Pages/Home'
import Courses from '../Pages/Courses'
import Instructors from  '../Pages/Instructors'
import Login from '../Pages/Login'
import Contact from '../Pages/Contact'
import About from '../Pages/About'
import CourseDetails from '../Components/Mcourses/CourseDetails'
import PaymentProces from '../Components/Payment/PaymentProces'


function AppRoutes() {
  return (
    <div>
        
        <Routes>
            
        <Route element={<MainLayouts/>}>
        <Route path="/"  element={<Home/>}   />

        <Route path="/courses" element={<Courses/>}/>
        <Route path="/instructors" element={<Instructors/>}/>
        <Route path="/about" element={<About/>} />
        <Route path='/contact' element={<Contact/>}   />
        <Route path="/login"  element={<Login/>}    />
        <Route   path='/courses/:id' element={<CourseDetails/>} />
        <Route  path="/Payment/:id" element={<PaymentProces/>}     />



        </Route>



        </Routes>
        
        
        
        </div>
  )
}

export default AppRoutes