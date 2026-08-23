import React from 'react'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaRegUser } from "react-icons/fa";
import { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";

function Navbar() {
  const [Isopen,SetIsopen]=useState(false);

  const NavLinks=[
    {name:"Home", path:"/"},
    {name:"Courses", path:"/courses"},
    {name:"Instructors", path:"/instructors"},
    {name:"About", path:"/about"},
    {name:"Contact",path:"/contact"},



  ]
  return (
    <>
  
      <nav className=" bg-emerald-900/90 backdrop-blur-lg fixed top-0 left-0 w-full z-50 h-15 px-4
        flex justify-between items-center
       border-b border-white/10 shadow-2xl ">

        <div className='flex items-center mt-2 -ml-4 ' >
          <NavLink to="/" onClick={()=>SetIsopen(false)}>
          <img src="navlogo.png" className="h-40 w-auto object-contain "/>
          </NavLink>
        </div>
        {/* desktop meu */}
        <div className='hidden md:flex md:gap-9 lg:gap-12'>
          {NavLinks.map((Link)=>
          
          {
            return (
           <NavLink key={Link.path} to={Link.path} className={({isActive})=>
           
           ` font-medium   ${isActive?"text-green-400  text-xl ":"text-white text-lg hover:underline hover:underline-offset-8 hover:decoration-2 hover:decoration-white  "}`
           
           
           }>
            
            {Link.name}
           </NavLink>
            )

          }
          
          
          )}
        </div>
         
     
        <NavLink
  to="/login"
  className=" hidden md:ml-2 md:flex items-center gap-2 px-5 py-1 rounded-2xl bg-linear-to-r from-emerald-600  via-green-500  to-emerald-500 
    backdrop-blur-2xl border border-white/20 text-white text-lg font-medium shadow-lg shadow-emerald-500/20
    hover:from-emerald-500 hover:via-green-400 hover:to-teal-400 hover:border-white/30 hover:shadow-emerald-400/40
    transition-all duration-300 hover:scale-105"
>
  <FaRegUser size={18} md:size={20} /> <span>Login</span>
</NavLink> 

  {/* mobile menu */}

  <button onClick={()=>SetIsopen(!Isopen)} className='md:hidden'>
    {Isopen?(<ImCross size={22} color='red'/>):(<GiHamburgerMenu size={30} color='white'/>)}
    </button>
   <AnimatePresence>
    {Isopen && (
      <motion.div
       initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        mass: 0.8,
      }}
       className=' md:hidden bg-emerald-950 absolute flex flex-col top-15 left-0   w-full
         pb-1'>
          {NavLinks.map((Link)=>
          
          {
            return (
           <NavLink key={Link.path} to={Link.path} onClick={()=>SetIsopen(false)}   className={({isActive})=>
           
           ` font-medium px-4 py-2 transition-all duration-100 w-full
            ${isActive?" text-green-400 text-lg":"text-white text-md hover:bg-emerald-800/30 "}`}>
            
           
            
            {Link.name}
           </NavLink>
            )}

          
          
          
          )}
           
                  <NavLink to="/login" onClick={()=>SetIsopen(false)}
          className="  px-3 py-1  mt-4 text-center rounded-2xl bg-linear-to-r from-emerald-600  via-green-500  to-emerald-500 
           backdrop-blur-2xl border border-white/20 text-white text-lg font-medium shadow-lg shadow-emerald-500/20
         hover:from-emerald-500 hover:via-green-400 hover:to-teal-400 hover:border-white/30 hover:shadow-emerald-400/40
        transition-all duration-300 hover:scale-101"
>
  Login
</NavLink>

          
        </motion.div>  
        
         

        



    )
    
    
    }
    </AnimatePresence>

  


      </nav>
      
      </>
  )
}

export default Navbar