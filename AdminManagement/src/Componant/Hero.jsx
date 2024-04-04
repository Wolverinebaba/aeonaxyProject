import React from 'react'

function Hero() {
  return (
    <>
    <div className='mt-[6vh] border-t shadow-inner border-zinc-200 w-full h-[60vh] bg-zinc-100 flex flex-col' >
        <div className='text-center mx-auto mt-[96px]' >
            <h1 className='text-black font-bold p-2 uppercase md:text-2xl sm:text-xl text-lg md:py-6 '>Start building your organization</h1>
            <div className=' flex justify-center items-center mx-5'>
                <p className='md:text-xl sm:text-lg text-md '>Invite users to unlock unique team scheduling features starting as low as $12 per user/mo.</p>
            </div>

            <button className=' rounded-xl bg-blue-600 text-white p-2 my-6 mx-auto  '>Invite Users</button>

        </div>
       


        

    </div>
    
    
    
    
    </>
   
  )
}

export default Hero