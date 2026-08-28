import React, { use } from 'react'
import useCoursesHook from '../../Hooks/useCoursesHook'
import CoursesCard from '../CoursesCard';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';

function FCourses() {

  const params=useMemo(()=>{
    return{
    featured:true}
  },[])
 
  const {courses,loading,error}=useCoursesHook(params);

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
      
      <div id="courses" className='  border m-2 py-6 px-4 border-emerald-600 rounded-md'>

         <h2 className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
  Featured{" "}
  <span className="text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.35)]">
    Courses
  </span>
    </h2>
    <p className=" text-center mt-3 text-base sm:text-lg md:text-xl lg:text-2xl leading-6 text-emerald-100/70 ">
    Explore our most popular courses and build the skills you need to grow,
    create, and become job-ready.
  </p>

        <div className='max-w-8xl grid grid-cols-1 items-stretch md:grid-cols-2 lg:grid-cols-3 mt-4 md:mt-5 lg:mt-6 mx-auto gap-6'>
               {courses.map((course)=>
              (
                <CoursesCard
                  
                  key={course.id}
                  course={course}
                
                />

              ))}
        </div>
         <Link to="/courses"
          className="group w-fit mx-auto mt-4 lg:mt-5 flex items-center gap-2 rounded-full border border-emerald-400/40 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-emerald-400 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-500/25">
                View More Courses
             <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
               </span>
             </Link>
             

      </div>
      
      </>
  )
}

export default FCourses