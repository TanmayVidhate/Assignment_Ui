import React from 'react'

function Cards({img,number,heading,msg}) {
    return (
        <>
            <div className='w-[300px] h-[350px] bg-[#F7F7FB] border-2 rounded-md border-red-700 p-5'>
                {/* image & number */}
                <div className='flex justify-between h-2/6 border-2 border-red-600'>
                    <div className=''>
                        <p>img</p>
                    </div>
                    <div className=''>
                        <p>{number}</p>
                    </div>
                </div>

                {/* heading */}
                <div className='text-lg font-bold mt-5 border border-red-300'>
                    <p>{heading}</p>
                </div>

                {/* info */}
                <div className='w-2/3 mt-8'>
                    <p className='text-justify'>
                        {msg}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Cards