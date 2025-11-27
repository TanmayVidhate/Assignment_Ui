import React from 'react'

function Landingpage() {
    return (
        <>
            <div className='h-screen border-8 border-red-800'>
                <div className=' w-4/5 m-auto border-6 border-red-800 min-h-min text-center mt-5'>
                    <p className='w-2/5 m-auto border-4 border-red-700 text-4xl font-bold text-[#170F49]'>Simplify Your Life with Our Todo App</p>
                </div>

                <div className='w-1/2 text-center m-auto mt-8 border-4 border-red-700'>
                    <p>Stay organized and boost your productivity with our intuitive todo website.</p>
                    <p>Experience a modern approach to task management that fits your lifestyle.</p>
                </div>

                <div className='w-1/3 mt-5 m-auto flex items-center justify-around border-4 border-red-700'>
                    <button className='border-2 border-red-600 rounded-3xl p-2 w-1/3'>Get started</button>
                    <button className='border-2 border-red-600 rounded-3xl p-2 w-1/3'>Learn More</button>
                </div>
            </div>
        </>
    )
}

export default Landingpage