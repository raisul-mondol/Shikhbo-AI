import React from 'react'
import { Lottie } from "lottie-react"
import programing from '../../assets/programing.json'


function Hero() {
  return (
    <div className="bg-[url('59278.jpg')] min-h-[calc(100vh-80px)]  w-full bg-cover bg-no-repeat
     relative flex flex-col md:flex-row items-center gap-5 ">

    <div className='border  md:w-1/2 w-full border-amber-300 self-start mt-5'>
      l
      <p>hello</p>
    </div>

    <div className=' md:h-96 md:w-1/2 h-90 w-full  flex justify-center pt-4  '>
      <div className='bg-white/7 backdrop-blur-2xl border border-emerald-700/20 shadow-lg shadow-black/20
         lg:h-85 md:h-75 h-60 lg:w-[75%] md:w-[78%] w-[80%] relative '>

          <div className='absolute lg:-top-9 md:-top-6 -top-7 left-1/2 -translate-x-1/2 '>
            <Lottie 
            src={programing}
            autoplay
            loop
            className='lg:h-100 lg:w-110  md:h-82 md:w-82 h-75 w-80 opacity-90 '
            
            
            />

          </div>

          <div className='bg-emerald-700 rounded-md absolute -right-4 -top-7'>
            fill hobe
          </div>

          <div className=' bg-emerald-700/20 backdrop-blur-md rounded-2xl border border-emerald-400 
          flex items-center gap-2 top-2 -left-8 absolute'>

            <div>
              image
            </div>
            <div>
              <p>hobe</p>
              <p>filjjjjjjjl</p>
            </div>

          </div>

          <div className=' bg-emerald-700/20 backdrop-blur-md rounded-2xl border border-emerald-400 
          flex items-center gap-2 bottom-4 -right-6 absolute'>
            <p>fill hobe</p>

          </div>


      </div>

    </div>

    

 
      



      



      </div>
  )
}

export default Hero

