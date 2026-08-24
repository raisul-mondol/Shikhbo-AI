import React from 'react'
import { motion } from "framer-motion";
import {PopParent,PopChild } from "../../Motion/Revel";

function Why() {

  const DivColor = `rounded-lg border border-white/10 bg-white/5 backdrop-blur-md sm:w-3/4 sm:mx-auto
  md:w-full md:mx-0 shadow-md shadow-black/30 p-3 `
const para1=` mt-1 sm:mt-2 text-lg   break-words hyphens-auto font-bold bg-linear-to-r from-emerald-100 via-white to-emerald-300 bg-clip-text text-transparent`
 const para2=`mt-2 sm:mt-3 lg:mt-4  text-base sm:text-md md:text-lg  text-emerald-100/80`

return (
    <div>

      <section className="w-full px-4 py-12">

        <div
         
         className="max-w-8xl mx-auto ">

          <h2 className="text-xl  sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-linear-to-r from-emerald-100 via-white
           to-emerald-300 bg-clip-text text-transparent text-center">
            Why Choose Shikhbo AI?
          </h2>

          <p className="mt-3 text-center text-base sm:text-lg md:text-xl lg:text-2xl text-emerald-100/80">
            Learn smarter. Build real projects. Become a better developer.
          </p>

          <motion.div 
           variants={PopParent}
         initial="hidden"
          whileInView="show"
          viewport={{ once: false,amount:0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-4">

            
            <motion.div 
            variants={PopChild}
            className={DivColor}>
              <div className="w-9 h-9 border border-white/20 bg-white/5 rounded-full flex items-center justify-center overflow-hidden">
          <img src="/Ai.png" className="w-9 h-9 object-contain" alt="AI"/>
           </div>
            <p className={`${para1}`}>Learn with AI Tools</p>
            <p className={`${para2}`}>Learn how to use ChatGPT and modern AI tools to code smarter, debug faster, and understand complex concepts.</p>
            </motion.div>

           
            <motion.div 
            variants={PopChild}
            className={DivColor}>
               <div className="w-9 h-9 border border-white/20 bg-white/5 rounded-full flex items-center justify-center overflow-hidden">
          <img src="/project.png" className="w-9 h-9 object-contain" alt="AI"/>
           </div>
           <p className={`${para1}`}>Build Real-World Projects</p>
           <p className={`${para2}`}>Learn by building practical projects that improve your coding skills and strengthen your portfolio.</p>
            </motion.div>

            <motion.div 
            variants={PopChild}
            className={DivColor}>
               <div className="w-9 h-9 border border-white/20 bg-white/5 rounded-full flex items-center justify-center overflow-hidden">
          <img src="/brain.png" className="w-9 h-9 object-contain" alt="AI"/>
           </div>
           <p className={`${para1}`}>Master Problem Solving</p>
           <p className={`${para2}`}>Develop strong programming logic and learn how to approach, analyze, and solve real coding problems</p>
            </motion.div>

          
            <motion.div
            variants={PopChild}
            className={DivColor}>
               <div className="w-9 h-9 border border-white/20 bg-white/5 rounded-full flex items-center justify-center overflow-hidden">
          <img src="/rocket.png" className="w-9 h-9 object-contain" alt="AI"/>
           </div>
           <p className={`${para1}`}>Become a Better Developer</p>
           <p className={`${para2}`}>Go beyond basic coding-learn modern development practices, tools, and workflows to become a confident developer.</p>
            </motion.div>

          </motion.div>

        </div>

      </section>

    </div>
  )
}

export default Why