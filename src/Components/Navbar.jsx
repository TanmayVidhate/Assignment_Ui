import React from 'react'
import img from '../assets/navbar_logo/nav_logo.png'

function Navbar() {
    return (
        <>
            <div className='w-full flex   h-1/2'>
                <div className='w-2/3 border border-red-500 pl-16'>
                    <img src={img} alt='logo' className='w-[150px] ' />
                </div>

                <div className='flex w-4/5 items-center justify-center border-2 border-yellow-800'>
                    <div className=' w-2/4 flex justify-center items-center border border-red-800 gap-5'>
                        <p>About Us</p>
                        <p>Features</p>
                        <p>More Option</p>
                        <p>Contact</p>
                    </div>

                    <div className='flex items-center w-2/5 gap-4 mx-4 border border-red-800'>
                        <button className='rounded-lg border p-2 w-1/3'>LogIn</button>
                        <button className='rounded-lg border p-2 w-1/3'>Sign Up</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar