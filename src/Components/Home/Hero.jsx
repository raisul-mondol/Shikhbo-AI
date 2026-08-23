import React from 'react'
import { Lottie } from "lottie-react"
import programing from '../../assets/programing.json'
import programing4 from '../../assets/programing4.json'
import ButtonB from '../ButtonB'
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FaStar,FaStarHalfAlt } from "react-icons/fa";
import Counter from '../Counter';
import { FaChalkboardTeacher } from "react-icons/fa";



function Hero() {
  const picClassname = ` w-9 h-9 md:w-12 md:h-12 border-2 border-white object-cover transition-all hover:-translate-y-1 hover:border-green-500
  hover:shadow-md hover:shadow-green-400/40 rounded-full hover:scale-200 hover:z-60 hover:rounded-md
  hover:border-none  `;

  return (
      
    <div className="bg-[url('/herobg.jpg')] min-h-130 w-full bg-cover bg-no-repeat
     relative flex flex-col md:flex-row items-center gap-4 md:gap-3 ">

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
      <p className='pt-4 text-4xl text-center md:text-left sm:text-5xl 
       text-white font-semibold md:font-bold'>Next-Gen <span className='bg-linear-to-r from-emerald-300 to-emerald-600
        bg-clip-text text-transparent 
        '>Tech </span >Learning With 
        <span className='text-emerald-400 text-shadow-2xs text-shadow-white'> AI</span></p>

        <p className='pt-10 md:pt-15  text-center md:text-left leading-7 px-3 md:px-0 text-cyan-50
         text-base lg:text-xl sm:text-lg '>Learn programming from the fundamentals to advanced AI-powered development. Build real-world projects and become ready for the future of tech.</p>
        
        
         <div className=' mt-5 md:mt-7 lg:mt-8 w-full flex justify-center md:justify-start'>


          <div className='flex flex-col md:flex-row gap-3 md:gap-4 w-[60%]  md:w-auto '>
          <ButtonB className='w-full md:w-auto'>
          <span className="flex  gap-2 md:gap-3 items-center justify-center whitespace-nowrap">
              Get Started
                <ArrowRight
                     size={18}
                 className="transition-transform duration-300 group-hover:translate-x-1" />
   </span></ButtonB>


        <ButtonB className='w-full md:w-auto'
                onClick={() =>
            window.open("https://wa.me/8801710070606", "_blank")}>
                                         

          <span className="flex items-center justify-center gap-2 md:gap-3 whitespace-nowrap">
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

            <span className="ml-1 text-white text-xl">
              <Counter from={0} to={4.9} decimals={1}>4.9</Counter>/5<span className='text-yellow-400 font-semibold'> Rating</span> </span>
                       </div>

                   <div 
                     
                      className=" bg-emerald-700/20 backdrop-blur-md rounded-2xl border border-emerald-400  w-fit mt-7 
                      px-8 sm:px-16 md:px-4 mb-1 relative pt-3  ">
                      
           
                        <div className="flex  items-center pt-3 -ml-2 md:ml-0 ">
          
                          <img src="intern2.jpg" className= {`${picClassname} z-10 hover:-rotate-6`}/>
                          
                          <img src="intern3.jpg" className= {`${picClassname} z-20 -ml-2 hover:-rotate-5 `}/>
          
          
                            <img src="intern4.jpg" className= {`${picClassname} z-30 -ml-2 `}/>
          
                            <img src="intern5.jpg" className= {`${picClassname} z-10 -ml-2 hover:rotate-5 `}/>
          
                            <img src="intern7.jpg" className= {`${picClassname} z-50 -ml-2 hover:rotate-6`}/>
          
          
          
                          <span className="ml-1 md:ml-3 self-end  text-shadow-black font-semibold text-shadow-md text-sm md:text-xl 
                           lg:text-2xl
                            text-white whitespace-nowrap"> Trusted By</span>
          
          
                        </div>
                       <div className="text-xl md:text-2xl text-white pt-2">
                        <Counter     
                          from={0}
                          to={3000}
                          duration={4}
                          className="text-2xl font-bold bg-linear-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
              
                        
                        />
                          <span className="text-green-400  font-bold">+</span>
                         <span className="ml-2 text-lg whitespace-nowrap md:text-2xl text-white">
                           Active Students
                           </span>
          
          
          
                        </div>
            
                      
                     
                    </div>


    </div>

    <div className=' md:h-96 md:w-[48%] lg:w-1/2 h-75 w-full  flex justify-center pt-6  '>
      <div className='bg-white/7 backdrop-blur-2xl border border-emerald-700/20 shadow-lg shadow-black/20
         lg:h-85 md:h-75 h-60 lg:w-[75%] md:w-[85%] w-[80%] sm:w-[65%] relative '>

          <div className='absolute lg:-top-9 md:-top-6 -top-7 left-1/2 -translate-x-1/2 '>
            <Lottie 
            src={programing}
            autoplay
            loop
            className='lg:h-100 lg:w-110  md:h-82 md:w-82 h-75 w-75 opacity-90 '
            
            
            />

          </div>

          <div className='bg-emerald-700 rounded-md absolute -right-4 -top-7 md:-top-8 font-semibold text-white px-2 sm:px-3 md:px-4 lg:px-5 sm:text-md md:text-lg'>
            Practical Learning
          </div>

          <div className=' bg-emerald-700/20 backdrop-blur-md rounded-2xl border border-emerald-400 
          flex items-center gap-1 sm:gap-2 top-2 -left-8  md:-left-10 lg:-left-14 absolute px-1 py-2 sm:py-3 md:py-2'>

            <div>
              <FaChalkboardTeacher  className='text-cyan-500 h-5 w-5 md:h-6 md:w-6 mt-1' />
            </div>
            <div>
              <p className='text-white text-sm sm:text-md md:text-lg  font-semibold'>Expert Instructors</p>
            </div>

          </div>

          <div className=' bg-emerald-700/20 backdrop-blur-md rounded-2xl border border-emerald-400 
            bottom-4 -right-4 sm:-right-8 md:-right-3 lg:-right-10 absolute text-white px-1 md:px-2 py-1 md:py-2
             sm:py-2 text-sm md:text-lg font-semibold'>
            <p>Job-Ready Skills</p>

          </div>


      </div>

    </div>

    
     

 
      



      



      </div>
  )
}

export default Hero

