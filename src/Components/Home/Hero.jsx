import React from 'react'
import { Lottie } from "lottie-react"
import programing from '../../assets/programing.json'
import programing4 from '../../assets/programing4.json'
import ButtonB from '../ButtonB'



function Hero() {
  return (
    <div className="bg-[url('/herobg.jpg')] min-h-[calc(100vh-80px)]  w-full bg-cover bg-no-repeat
     relative flex flex-col md:flex-row items-center gap-5 ">

    <div className='border  md:w-1/2 w-full border-amber-300 flex flex-col items-center md:items-start
     pt-4  md:self-start md:mt-16 md:px-4 md:ml-5 lg:px-6 lg:ml-10 '>
      
      <div className='flex items-center  h-8  w-fit 
       border border-emerald-700 rounded-md pr-2'>
        <Lottie 
         src={programing4}
         autoplay 
         loop
         className='h-18 w-18 -ml-6'
        
        />
         <div className='font-hero text-white text-xl -ml-5'>AI-Powered Learning </div>

      </div>
      <p className='pt-4 text-4xl text-center md:text-left md:text-5xl lg:text-6xl
       text-white font-semibold md:font-bold'>Next-Gen <span className='bg-linear-to-r from-emerald-300 to-emerald-600
        bg-clip-text text-transparent 
        '>Tech </span > Learning With 
        <span className='text-emerald-400 text-shadow-2xs text-shadow-white'> AI</span></p>

        <p className='pt-10 md:pt-15 lg:pt-17 text-center md:text-left leading-7 px-3 md:px-0 text-white 
         text-base lg:text-lg  font-hero1'>Learn programming from the fundamentals to advanced AI-powered development. Build real-world projects and become ready for the future of tech.</p>
         <ButtonB>get Started</ButtonB>
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

