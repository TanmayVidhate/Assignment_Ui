import React from 'react'

function Cards() {
    return (
        <>
            <div className='w-[350px] h-[350px] bg-[#F7F7FB] border-2 rounded-md border-red-700 p-5'>
                {/* image & number */}
                <div className='flex justify-between h-2/6 border-2 border-red-600'>
                    <div className=''>
                        <p>img</p>
                    </div>
                    <div className=''>
                        <p>number</p>
                    </div>
                </div>

                {/* heading */}
                <div className='text-xl font-bold mt-5'>
                    <p>User-Friendly Interface</p>
                </div>

                {/* info */}
                <div className='w-2/3 mt-8'>
                    <p className='text-justify'>
                        Our platform offers seamless task management to boost your efficiency.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Cards