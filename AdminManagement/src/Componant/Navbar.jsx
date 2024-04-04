import React , {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { SiGamedeveloper } from "react-icons/si";
import { FaChevronDown } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


function Navbar() {
    const [nav, setnav] = useState(false);
    const handleNav=()=>{
        setnav(!nav)
    }
  return (
    <>
    

    <div className=' flex justify-between item-center h-11 max-w-[1240px] mx-auto px-4  text-grey-700 '>
        <h1 className='w-full text-4xl font-bold m-4  text-green-500'>
        <SiGamedeveloper />
        </h1>
        <ul className=' hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Availbility</li>
            <li className='p-4'>Intigration</li>
            <li className='p-4 '>Help </li>
            <li className='p-4 text-3xl'><CgProfile /></li>
            <li className='p-4 flex'>Account </li>
        </ul>


        <div onClick={handleNav} className='block sm:hidden md:hidden pt-4'>
            {!nav ? <AiOutlineClose size={20}/>: <AiOutlineMenu size={20}/>}
        </div>


        <div className={!nav ? ' md:hidden rounded-md fixed left-0 top-0 w-[60%] border-r border-zinc-100 h-full bg-zinc-200  ease-in-out duration-500' : 'fixed left-[-100%]' }>
        <h1 className='w-full text-5xl font-bold m-4 text-green-500'>
        <SiGamedeveloper />
        </h1>


         <ul className='pt-24  uppercase'>
            <li className='p-4 border-b border-zinc-400'>Home</li>
            <li className='p-4 border-b border-zinc-400'>Availbility</li>
            <li className='p-4 border-b border-zinc-400'>Intigration</li>
            <li className='p-4 border-b border-zinc-400'>Help</li>
          
            <li className='p-4 border-b border-zinc-400'>Account</li>
        </ul>
        </div>

    </div>
   
    </>
  )
}

export default Navbar