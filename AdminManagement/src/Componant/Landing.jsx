import React from 'react'

function Landing() {
  return (
    <>
 
    <div className=' justify-between item-center mt-2 h-11 w-full  pb-4 mx-auto px-4   text-grey-700'>
        <div className='flex justify-between  md:mx-[10vw] '>
        <h1 className='font-semibold text-xl'> Admin Mangement</h1>
        <button className='rounded-2xl p-1 items-center text-blue-600 border border-blue-500'>
            + New User 
        </button>
        </div>


        <div className=' md:mx-[10vw]'>
            <ul className='flex gap-5 mt-4 text-grey-700'>
                <li >All People</li>
                <li>Groups</li>
                <li>Management</li>
                <li className='rounded-md px-2 text-center bg-blue-500 text-sm text-white'>Beta</li>
             </ul>
        </div>
     </div>
        


   
    </>
  )
}

export default Landing