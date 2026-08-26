import React, { useEffect, useState } from 'react'
import { getCourses } from '../Components/Services/Coursesapi'

function useCoursesHook(params) {

    const [courses,setCourses]=useState([])
    const [loading,setLoading]=useState(true)
    const [error,setError]=useState(null)


     const fetchcourses = async()=>
        {
            try {
             setLoading(true);
             setError(null);

             const data=await getCourses(params);

             setCourses(data);


            }catch(error)
            {
                setError(error.response?.data?.message || "Failed to load Courses")
            } finally
            {
                setLoading(false);
            }

        }

    useEffect(()=>
    {
       fetchcourses();

    },[params])



  return {
    courses,
    loading,
    error
  }
    
        
        
        
        
        
        
        
  
}

export default useCoursesHook