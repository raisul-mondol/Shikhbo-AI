import React from 'react'
import CoursesCard from '../CoursesCard';
import useCoursesHook from '../../Hooks/useCoursesHook';

function Mcourses() {


     const {courses,loading,error}=useCoursesHook();

     const categories=[...new Set(courses.map((course)=>course.category))]


    if(loading)
  {
    return <p>{loading}</p>
  }
  if(error)
  {
    return <p>{error}</p>
  }

  return (
    <>
        
         <div 
        className="min-h-screen bg-[linear-gradient(135deg,#042f2e_0%,#064e3b_35%,#115e59_65%,#0f766e_100%)] px-4 py-12">
            
            <div>
                <select className='px-6 py-2'>
                    <option value="">All Categories</option>
                    {
                        categories.map((category)=>(
                        
                          <option key={category} value={category}>{category}</option>
                        )
                    )

                    }

                </select>
            </div>

             <div className='max-w-8xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4 md:mt-5 lg:mt-6 mx-auto gap-6'>
               {courses.map((course)=>
              (
                <CoursesCard
                  
                  key={course.id}
                  course={course}
                
                />

              ))}
        </div>


         </div>
         
        
        
        
        
        
        
        </>
  )
}

export default Mcourses