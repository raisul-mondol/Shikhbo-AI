import React from 'react'
import Hero from '../Components/Home/Hero'
import Why from '../Components/Home/Why'
import FCourses from '../Components/Home/FCourses'



function Home() {
  return (
    <div>

      
        <Hero />
      

      <div className="relative z-10  min-h-screen w-full bg-linear-to-b from-emerald-800 via-[#005f52] to-[#001c1a]">
        
        <Why/>
        <FCourses />
       
        
      </div>
      
      

    </div>
  )
}

export default Home