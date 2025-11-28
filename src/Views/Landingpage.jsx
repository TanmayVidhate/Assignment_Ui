import React from 'react'

//components import
import Cards from '../Components/Cards'

//lucid icons import
import { ChevronLeft, ChevronRight } from 'lucide-react';

//image import
import google from '../assets/images/google.png'
import facebook from '../assets/images/facebook.png'
import youtube from '../assets/images/youtube.png'
import pin from '../assets/images/pin.png'
import twi from '../assets/images/twi.png'
import person from '../assets/images/testimonies_img.jpg'

//card img import
import card1 from '../assets/images/card_1_img.png'
import card2 from '../assets/images/card_2_img.png'
import card3 from '../assets/images/card_3_img.png'
import card4 from '../assets/images/card_4_img.png'

import num_1 from '../assets/images/num_1.png'
import num_2 from '../assets/images/num_2.png'
import num_3 from '../assets/images/num_3.png'
import num_4 from '../assets/images/num_4.png'


function Landingpage() {
    return (
        <>
            <div className='min-h-min border-8 border-red-800 bg-[#F7F7FB]'>
                {/* heading */}
                <div className=' w-4/5 m-auto border-6 border-red-800 min-h-min text-center mt-5'>
                    <p className='w-2/5 m-auto border-4 border-red-700 text-4xl font-bold text-[#170F49]'>Simplify Your Life with Our Todo App</p>
                </div>

                {/* message */}
                <div className='w-1/2 text-center text-[#6F6C90] m-auto mt-8 border-4 border-red-700'>
                    <p>Stay organized and boost your productivity with our intuitive todo website.</p>
                    <p>Experience a modern approach to task management that fits your lifestyle.</p>
                </div>

                {/* button */}
                <div className='w-1/3 mt-5 m-auto flex items-center justify-around border-4 border-red-700'>
                    <button className=' bg-[#FF3E54] text-white rounded-3xl p-2 py-3 w-1/3'>Get started</button>
                    <button className='border border-[#FF3E54] text-[#FF3E54]  rounded-3xl p-2 py-3 w-1/3'>Learn More</button>
                </div>

                {/* main divs two */}
                <div className='w-5/6 mt-10 flex gap-2 m-auto  border border-red-600'>

                    {/* first div */}
                    <div className='basis-2/3 p-7 rounded-3xl border bg-[#FF3E54]'>
                        <div className='w-5/6 border-2 border-red-800'>
                            <p className='text-5xl text-[#FFFFFF80]'>Organize.</p>
                            <p className='text-5xl text-[#FFFFFFCC]'>Achieve.</p>
                            <p className='text-5xl text-[#FFFFFFCC]'>Relax.</p>

                            <p className='mt-10 text-xl text-[#FFFFFF]'>Turn clutter into clarity, chaos into control, and dreams into done.bold visions into market success</p>

                            <div className=' w-full mt-14  flex items-center justify-start gap-5 border-4 border-red-700'>
                                <button className='bg-[#FFFFFF] font-semibold rounded-3xl p-2 py-3 w-1/3'>Get Started Today</button>
                                <button className=' text-[#FFFFFF] bg-[#fd455b] border-2 py-3 border-red-600 rounded-3xl p-2 w-1/3'>Discover Features</button>
                            </div>
                        </div>

                    </div>

                    {/* second div */}
                    <div className='basis-1/4 border-2 border-red-600 rounded-3xl bg-[url(/person_img_man.png)] bg-cover bg-center'>
                        <p className='text-3xl mx-5 mt-5 text-[#FFFFFF80] font-semibold'>Your Task.</p>
                        <p className='text-3xl mx-5 text-[#FFFFFF] font-semibold'>Your Tools.</p>
                        
                    </div>
                </div>

                {/* Google Text/image */}
                <div className='flex basis-full p-5 items-center justify-center gap-32 border-2 border-red-600'>
                    <img src={google} className='w-[100px] ' alt='google' />
                    <img src={facebook} className='w-[100px] ' alt='facebook' />
                    <img src={youtube} className='w-[100px] ' alt='youtube' />
                    <img src={pin} className='w-[100px] ' alt='pin' />
                    <img src={twi} className='w-[100px] ' alt='twi' />
                </div>
            </div>

            {/* Second div */}
            <div className='min-h-min border-8 border-red-800'>
                {/* heading */}
                <div className='w-2/5 m-auto text-center font-semibold text-3xl border-2 border-red-700'>
                    <p>Transform Your Productivity with Our Innovative To-Do List Features</p>
                </div>

                {/* Cards */}
                <div className='mt-10 w-full flex justify-center gap-8 border-2 border-red-700'>
                    <Cards img={card1} number={num_1} heading="User-Friendly Interface" msg="Our platform offers seamless task management to boost your efficiency." />
                    <Cards img={card2} number={num_2} heading="Collaborate & Share Effortlessly" msg="Invite team members to work together and achieve your goals faster." />
                    <Cards img={card3} number={num_3} heading="Effortless Collaboration" msg="Invite team members to work together and achieve your goals faster." />
                    <Cards img={card4} number={num_4} heading="Seamless Access" msg="Stay connected and manage your tasks on the go with ease." />

                </div>
            </div>

            {/* Third div */}
            <div className='min-h-min border-8 border-red-800'>
                {/* heading */}
                <div className='w-[86%] m-auto  font-semibold text-3xl border-2 border-red-700'>
                    <p className='text-[#0E1F51] font-bold'>Customer Testimonials</p>
                </div>

                {/* message */}
                <div className='w-[86%] m-auto  mt-8 border-4 border-red-700'>
                    <p>This tool has transformed my productivity and organization!.</p>
                </div>

                {/* customer testimonials */}
                <div className='w-[86%]  m-auto mt-14  flex justify-between '>

                    {/* first feedbback */}
                    <div className=' basis-1/2 p-3 border-8 border-[#FF3E54]   '>
                        {/* person msg */}
                        <div className=' w-3/4 h-2/3   bg-white  mb-28  relative -right-96 top-10  '>
                            <p className=' h-1/2 mt-20 w-4/5 font-semibold text-2xl '>Using this website has made my tasks so much easier! I can't imagine my day without it."</p>
                        </div>

                        {/* Person Name and Post */}
                        <div className='w-1/2 relative -right-96 -top-64'>
                            <p className='font-bold text-xl'>Sherri Cronin</p>
                            <p className='text-lg'>Project Manager, TechCorp</p>
                        </div>

                        {/* buttons */}
                        <div className='w-1/2 relative -right-96 -top-60 bg-white   '>
                            <button className='border border-red-600 rounded-full p-2 m-2 '><ChevronLeft /></button>
                            <button className='bg-[#FF3E54] text-white rounded-full p-2 m-2 '><ChevronRight /></button>
                        </div>
                    </div>

                    {/* photo div */}
                    <div className='basis-1/4 flex  items-center '>
                        <img src={person} className='h-1/2 border-t-8 border-r-8 border-b-8 p-1 border-[#FF3E54] ' alt='customer image' />
                    </div>
                </div>

                {/* last div */}
                <div className='mt-10 border border-red-700'>

                </div>
            </div>
        </>
    )
}

export default Landingpage