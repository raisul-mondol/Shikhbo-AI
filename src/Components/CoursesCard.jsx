import React from 'react'

function CoursesCard({course}) {
  return (
    <div>
        
        <div className='rounded-lg border border-white/15 bg-white/10 backdrop-blur-md sm:w-3/4 sm:mx-auto
  md:w-full md:mx-0 shadow-md shadow-black/30 p-3 '>
            
          <img src={course.image} alt='courseiamge'
           className='w-full h-44 shrink-0 object-cover rounded-t-lg'
          />

        </div>
        
        
        
        
        </div>
  )
}

export default CoursesCard