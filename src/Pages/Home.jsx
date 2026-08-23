import React from 'react'
import Hero from '../Components/Home/Hero'
import { motion } from "motion/react";

function Home() {
  return (
    <>
        <div >
         <Hero/>
         <motion.div
           initial={{ y: 60, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{
    once: true,
    amount: 0.2,
  }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}

         className='bg-amber-500 h-96 w-96 mx-auto mt-10'>

         </motion.div>
          
        </div>
        
        
    </>
  )
}

export default Home