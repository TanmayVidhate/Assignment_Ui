import React from 'react'


import img from '../assets/navbar_logo/nav_logo.png'

//import footer logo
import facebook from '../assets/footer_logo/Facebook.png'
import instagram from '../assets/footer_logo/Instagram.png'
import linkedIn from '../assets/footer_logo/LinkedIn.png'
import x from '../assets/footer_logo/X.png'
import youtube from '../assets/footer_logo/Youtube.png'

function Footer() {
    return (
        <>
            <div className='min-h-min  mb-5'>
                <div className='w-[86%]  m-auto flex flex-col  items-center mb-5 sm:flex-col md:flex-col lg:flex-row'>

                    {/* first div */}
                    <div className='w-full sm:w-full'>
                        {/* logo div */}
                        <div className='w-1/2  pl-10'>
                            <img src={img} alt='logo' className='w-[150px]  sm:h-[50px] md:h-[80px]' />
                        </div>

                        {/* msg */}
                        <div className='w-full  mt-5'>
                            <p className='text-sm sm:text-sm md:text-sm'>Subscribe to our newsletter for the latest features and updates delivered to you.</p>
                        </div>

                        {/* input type & button */}
                        <div className='w-full  mt-5 p-2'>
                            <input type='text' className='w-1/2 border border-black p-2 sm:text-sm' placeholder='Your email here' />
                            <button className='bg-[#FF3E54] text-white w-1/6 ml-2 p-2 rounded-md sm:w-1/3 '>Join</button>
                            <p className='text-sm mt-2 sm:text-sm md:text-sm'>By subscribing, you consent to our Privacy Policy and agree to receive updates.</p>
                        </div>
                    </div>

                    {/* second div */}
                    <div className='w-full flex  sm:gap-2 md:mt-2 sm:justify-between sm:w-full lg:-mt-32 xl:-mt-20'>

                        {/* first column links */}
                        <div className=' text-sm w-1/2 '>
                            <p className='font-semibold  mb-5  sm:text-sm  '>Useful Links</p>
                            <ul className=''>
                                <li>Home Page</li>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Blog Posts</li>
                                <li>FAQs</li>
                            </ul>
                        </div>

                        {/* second column links */}
                        <div className='text-sm w-1/2'>
                            <p className='font-semibold mb-5 sm:text-sm'>Resources</p>
                            <ul>
                                <li>Help Center</li>
                                <li>User Guide</li>
                                <li>Community Forum</li>
                                <li>Feedback</li>
                                <li>Support</li>
                            </ul>
                        </div>

                        {/* third column links */}
                        <div className=' text w-1/2'>
                            <p className='font-semibold mb-5 sm:text-sm'>Connect With Us</p>
                            <ul className='text-sm'>
                                <div className='flex gap-2'>
                                    <img src={facebook} alt="facebook" />
                                    <li>Facebook</li>
                                </div>
                                <div className='flex gap-2'>
                                    <img src={instagram} alt="instagram" />
                                    <li>Instagram</li>
                                </div>

                                <div className='flex gap-2'>
                                    <img src={x} alt="x" />
                                    <li>X</li>
                                </div>
                                <div className='flex gap-2'>
                                    <img src={linkedIn} alt="linkedIn" />
                                    <li>LinkedIn</li>
                                </div>
                                <div className='flex gap-2 '>
                                    <img src={youtube} alt="YouTube" />
                                    <li>YouTube</li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='w-[86%] m-auto flex justify-between border-black border-t-2 sm:flex-col lg:flex-row'>
                    <div className='mt-8'>
                        <p className='sm:text-sm md:text-base'>© 2024 Osumare. All rights reserved.</p>
                    </div>

                    <div className='flex mt-8 mb-8 gap-5 '>
                        <p className='sm:text-sm md:text-base'>Privacy Policy</p>
                        <p className='sm:text-sm md:text-base'>Terms of Service</p>
                        <p className='sm:text-sm md:text-base'>Cookie Settings</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer