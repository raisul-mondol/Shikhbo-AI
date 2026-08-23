import React from 'react'
import { Lottie } from "lottie-react"
import programing from '../../assets/programing.json'
import programing4 from '../../assets/programing4.json'
import ButtonB from '../ButtonB'
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FaStar,FaStarHalfAlt } from "react-icons/fa";
import Counter from '../Counter';



function Hero() {
  const picClassname = ` w-12 h-12 border-2 border-white object-cover transition-all hover:-translate-y-1 hover:border-green-500
  hover:shadow-md hover:shadow-green-400/40 rounded-full hover:scale-200 `;

  return (
      
    <div className="bg-[url('/herobg.jpg')] min-h-130 w-full bg-cover bg-no-repeat
     relative flex flex-col md:flex-row items-center gap-4 md:gap-5 ">

    <div className=' md:w-[52%] lg:w-1/2 w-full flex flex-col items-center md:items-start
     pt-4  md:self-start md:mt-16 md:px-4 md:ml-5 lg:px-6 lg:ml-10 '>
      
      <div className='flex items-center  h-8  w-fit 
       border border-emerald-500 rounded-2xl pr-2'>
        <Lottie 
         src={programing4}
         autoplay 
         loop
         className='h-18 w-18 -ml-6'
        
        />
         <div className=' text-white text-lg md:text-xl -ml-5'>AI-Powered Learning </div>

      </div>
      <p className='pt-4 text-4xl text-center md:text-left md:text-5xl lg:text-6xl
       text-white font-semibold md:font-bold'>Next-Gen <span className='bg-linear-to-r from-emerald-300 to-emerald-600
        bg-clip-text text-transparent 
        '>Tech </span >Learning With 
        <span className='text-emerald-400 text-shadow-2xs text-shadow-white'> AI</span></p>

        <p className='pt-10 md:pt-15  text-center md:text-left leading-7 px-3 md:px-0 text-cyan-50
         text-base lg:text-lg  '>Learn programming from the fundamentals to advanced AI-powered development. Build real-world projects and become ready for the future of tech.</p>
        
        
         <div className=' mt-5 md:mt-7 w-full flex justify-center md:justify-start'>


          <div className='flex flex-col md:flex-row gap-3 w-[60%] md:w-auto '>
          <ButtonB className='w-full md:w-auto'>
          <span className="flex  gap-2 items-center justify-center whitespace-nowrap">
              Get Started
                <ArrowRight
                     size={18}
                 className="transition-transform duration-300 group-hover:translate-x-1" />
   </span></ButtonB>


        <ButtonB className='w-full md:w-auto'
                onClick={() =>
            window.open("https://wa.me/8801710070606", "_blank")}>
                                         

          <span className="flex items-center justify-center gap-2 whitespace-nowrap">
                              Get Expert Support
                             <FaWhatsapp size={20} />
          </span>
          </ButtonB>
          </div>
          

         </div>
          <div className="flex items-center gap-1 mt-6">
                   {[1, 2, 3, 4].map((star) => (
    <FaStar key={star} className="text-yellow-400" size={20} />
                  ))}
                  <FaStarHalfAlt className="text-yellow-400" size={20} />

            <span className="ml-1 text-white text-xl">4.9/5<span className='text-yellow-400 font-semibold'> Rating</span> </span>
                       </div>

                   <div 
                     
                      className="  bg-black/30 rounded-xl w-fit mt-7 backdrop-blur-lg px-5 sm:px-8 lg:px-10 shadow-lg shadow-green-400/20 relative pt-3 ">
                      
           
                        <div className="flex  items-center pt-3 ">
          
                          <img src="intern2.jpg" className= {`${picClassname} z-10 hover:z-50`}/>
                          
                          <img src="intern3.jpg" className= {`${picClassname} z-20 -ml-2 hover:z-40`}/>
          
          
                            <img src="intern4.jpg" className= {`${picClassname} z-30 -ml-2 hover:z-40`}/>
          
                            <img src="intern5.jpg" className= {`${picClassname} z-10 -ml-2 hover:z-10`}/>
          
                            <img src="intern7.jpg" className= {`${picClassname} z-50 -ml-2 hover:z-20`}/>
          
          
          
                          <span className="ml-3 self-end mb-1 text-shadow-black font-semibold text-shadow-md text-xl text-white"> Trusted By</span>
          
          
                        </div>
                       <div className="text-xl text-white pt-2">
                        <Counter     
                          from={0}
                          to={3000}
                          duration={4}
                          className="text-3xl font-bold bg-linear-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
              
                        
                        />
                          <span className="text-green-400 text-2xl font-bold">+</span>
                         <span className="ml-1 text-sm text-white/70">
                           Active Students
                           </span>
          
          
          
                        </div>
            
                      
                     
                    </div>


    </div>

    <div className=' md:h-96 md:w-[48%] lg:w-1/2 h-90 w-full  flex justify-center pt-4  '>
      <div className='bg-white/7 backdrop-blur-2xl border border-emerald-700/20 shadow-lg shadow-black/20
         lg:h-85 md:h-78 h-60 lg:w-[75%] md:w-[80%] w-[80%] relative '>

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

