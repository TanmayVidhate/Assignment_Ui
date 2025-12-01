import React from 'react'
import img from '../assets/navbar_logo/nav_logo.png'

function Navbar() {
    return (
        <>
            <div className='w-full flex   h-1/2 '>
                <div className='w-1/2  pl-10'>
                    <img src={img} alt='logo' className='w-[150px] ' />
                </div>

                <div className='flex w-3/4 items-center justify-start '>
                    <div className=' w-2/4 flex justify-center items-center  gap-5'>
                        <p className='text-[#0E1F51] font-semibold'>About Us</p>
                        <p className='text-[#0E1F51] font-semibold'>Features</p>
                        <p className='text-[#0E1F51] font-semibold'>More Option</p>
                        <p className='text-[#0E1F51] font-semibold'>Contact</p>
                    </div>

                    <div className='flex items-center w-2/5 gap-4 mx-4 '>
                        <button className='rounded-lg border p-2 w-1/3 border-[#FF3E54] text-[#FF3E54]'>LogIn</button>
                        <button className='rounded-lg border p-2 w-1/3 bg-[#FF3E54] text-white'>Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar