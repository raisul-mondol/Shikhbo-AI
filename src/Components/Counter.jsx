import React, { useEffect } from 'react'
import { animate, motion, useMotionValue, useTransform } from 'motion/react'

function Counter({from=0,to,duration=2,className=""}) {

    const count=useMotionValue(from);
    const rounded=useTransform(count,(value)=>Math.round(value));

    useEffect(()=>
    {
       const controls=animate(count,to,
        {
            duration,
            ease:"easeOut",
        }
       );

       return ()=> controls.stop();
    },[count,to,duration]);

  return (
    <motion.span 
    
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    viewport={{once:true}}
    
    className={className}>
   
   {rounded}


    </motion.span>
  )
}

export default Counter