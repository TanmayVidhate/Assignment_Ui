import React from 'react'

function Cards({img,number,heading,msg}) {
    return (
        <>
            <div className='w-[300px] h-[350px] bg-[#F7F7FB] border-2 rounded-md border-red-700 p-5 sm:w-[250px]  '>
                {/* image & number */}
                <div className='flex justify-between h-2/6 border-2 border-red-600 p-2 sm:h-1/4'>
                    <div className='bg-[#FFFFFF] flex basis-1/4 items-center justify-center rounded-lg border border-red-700'>
                        <img src={img} alt='card_img' className='w-1/2'/>
                    </div>
                    <div className='text-[#0E1F51] flex  basis-1/3 justify-end'>
                       <img src={number} alt='card_img' className='w-1/2 h-2/5    '/>
                    </div>
                </div>

                {/* heading */}
                <div className='text-lg font-bold mt-5 border border-red-300 sm:text-base'>
                    <p>{heading}</p>
                </div>

                {/* info */}
                <div className='w-2/3 mt-8 sm:mt-6'>
                    <p className='text-justify'>
                        {msg}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Cards