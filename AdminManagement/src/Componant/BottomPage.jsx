import React from 'react'
import png1 from '../Png/png1.png'
import png2 from '../Png/png2.png'



function BottomPage() {
  return (
    <>
       <div className=' bg-zinc-100 w-full h-[120vh] py-16 px-4 '>
         <div className=' max-w-[1240px] border-t border-zinc-300 mx-auto'>
            <h1 className='pt-3 font-semibold uppercase text-xl '>What Can I Do As A Team ?</h1>
             
          
          
            <div className=' mt-5 md:gap-4 sm:gap-2 justify-between  md:flex sm:flex-row flex-col  '>
               <div className=' rounded-md md:h-[35vh] md:w-[35vw] sm:h-[35vh] sm:w-[90vw]  h-[30vh] w[90vw] flex bg-white sm:mb-2 mb-10'>
                <img className=' mx-1 my-4 h-[20vh] w-[13vw]  ' src={png1} alt="" srcset="" />

                 <div className='flex-col mt-5 ml-2'>
                 <h1 className='md:text-xl text-md md:font-bold sm:font-bold font-semibold mb-5'>Round Robin Scheduling</h1>
                   <p className=''>Automatically assign meetings based on what makes the most sense for your team's goals - whether by availability, priority or equity.</p>
                 </div>
               </div>


                 <div className=' rounded-md md:h-[35vh] md:w-[35vw] sm:h-[35vh] s:w-[90vw] h-[30vh] w[90vw] flex bg-white'>
                <img className=' mx-1 my-4 h-[20vh] w-[13vw]  ' src={png2} alt="" srcset="" />

                 <div className='flex-col mt-5 ml-2'>
                 <h1 className='md:text-xl text-md md:font-bold sm:font-bold font-semibold mb-5'>Access Powerful Management Tools</h1>
                   <p className=''>Get new and existing users up to speed and engaged with event type templates to make sure everyone's set up for efficient scheduling, all managed through one centralized billing solution.</p>
                 </div>
               </div>
               
               <button className=' md:mt-0 mt-5 rounded-md p-2 h-12  bg-zinc-700 text-white flex '>
                <span> Get Started</span>
                <span className='absolute mt-[-20px] ml-[-14px] rounded-xl bg-red-600  h-6 w-5 items-center '>3</span>
               </button>
               
              
            </div>
          </div>
        </div>


       
    </>
    
  )
}

export default BottomPage