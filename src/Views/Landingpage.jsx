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

                <div className='w-5/6 mt-10 flex gap-2 m-auto  border-2 border-red-600'>
                    <div className='w-2/3 p-7 rounded-3xl border-2 border-red-600'>
                        <div className='w-5/6 border-2 border-red-800'>
                            <p className='text-5xl'>Organize.</p>
                            <p className='text-5xl'>Achieve.</p>
                            <p className='text-5xl'>Relax.</p>

                            <p className='mt-10 text-xl'>Turn clutter into clarity, chaos into control, and dreams into done.bold visions into market success</p>

                            <div className='w-full mt-14  flex items-center justify-start gap-5 border-4 border-red-700'>
                                <button className='border-2 border-red-600 rounded-3xl p-2 w-1/3'>Get Started Today</button>
                                <button className='border-2 border-red-600 rounded-3xl p-2 w-1/3'>Discover Features</button>
                            </div>
                        </div>

                    </div>

                    <div className='border-2 border-red-600'>
                        <p>Your Task.</p>
                        <p>Your Tools.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Landingpage