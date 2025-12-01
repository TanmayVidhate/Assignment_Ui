import React, { useState } from "react";

//components import
import Cards from "../Components/Cards";
import Form from "../Components/Form";
import Thankyou from '../Components/Thankyou'

//lucid icons import
import { ChevronLeft, ChevronRight } from "lucide-react";

//image import
import google from "../assets/images/google.png";
import facebook from "../assets/images/facebook.png";
import youtube from "../assets/images/youtube.png";
import pin from "../assets/images/pin.png";
import twi from "../assets/images/twi.png";
import person from "../assets/images/testimonies_img.jpg";

//card img import
import card1 from "../assets/images/card_1_img.png";
import card2 from "../assets/images/card_2_img.png";
import card3 from "../assets/images/card_3_img.png";
import card4 from "../assets/images/card_4_img.png";

import num_1 from "../assets/images/num_1.png";
import num_2 from "../assets/images/num_2.png";
import num_3 from "../assets/images/num_3.png";
import num_4 from "../assets/images/num_4.png";

//import mobile img
import mobile_hand from "../assets/images/mobile_hold.jpg";

function Landingpage() {
  const [openfrm, setOpenFrm] = useState(false);

  const [frmData, setFrmData] = useState({
    fname: " ",
    lname: " ",
    gender: " ",
    language: [],
    email: " ",
  });

  const [records, setRecords] = useState([]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOpenForm = () => {
    setOpenFrm(true);
  };

  return (
    <>
      <div className={openfrm ? "blur-sm pointer-events-none" : ""}>
        <div className="min-h-min   bg-[#F7F7FB]">
          {/* heading */}
          <div className=" m-auto   min-h-min text-center mt-5 sm:w-3/4 md:w-1/2 xl:w-2/5 ">
            <p className="m-auto    font-bold text-[#170F49] sm:text-lg md:text-3xl lg:text-4xl xl:text-5xl ">
              Simplify Your Life with Our Todo App
            </p>
          </div>

          {/* message */}
          <div className=" text-xs  text-center text-[#6F6C90] m-auto mt-8   sm:w-5/6 sm:text-sm md:text-base  lg:text-lg xl:text-xl ">
            <p className="">
              Stay organized and boost your productivity with our intuitive todo
              website.
            </p>
            <p>
              Experience a modern approach to task management that fits your
              lifestyle.
            </p>
          </div>

          {/* button */}
          <div className="w-full flex-col p-2 mt-5 m-auto flex items-center justify-around   sm:w-2/3 lg:w-1/3  lg:flex-row">
            <button
              className=" bg-[#FF3E54] text-white rounded-3xl p-2 py-3 m-1 w-1/2"
              onClick={() => handleOpenForm()}
            >
              Get started
            </button>
            <button className="border border-[#FF3E54] text-[#FF3E54]  rounded-3xl p-2 py-3 w-1/2">
              Learn More
            </button>
          </div>

          {/* main divs two */}
          <div className="w-5/6 mt-10 flex flex-col gap-2 m-auto   sm:flex-col lg:flex-row">
            {/* first div */}
            <div className="basis-2/3 p-7 rounded-3xl  bg-[#FF3E54]">
              <div className="w-5/6  ">
                <p className="text-6xl font-semibold text-[#FFFFFF80]">
                  Organize.
                </p>
                <p className="text-6xl font-semibold text-[#FFFFFFCC]">
                  Achieve.
                </p>
                <p className="text-6xl font-semibold text-[#FFFFFFCC]">
                  Relax.
                </p>

                <p className="mt-5 text-lg text-[#FFFFFF] sm:text-lg sm:mt-5">
                  Turn clutter into clarity, chaos into control, and dreams into
                  done.bold visions into market success
                </p>

                <div className=" w-full mt-7  flex flex-col items-center justify-start gap-2 p-2 sm:items-start   sm:mt-10 lg:flex lg:flex-row ">
                  <button className="bg-[#FFFFFF] font-semibold text-sm rounded-3xl p-2 py-3 w-full sm:w-1/2 xl:w-2/5">
                    Get Started Today
                  </button>
                  <button className=" text-[#FFFFFF] bg-[#fd455b] border-2 py-3 text-sm rounded-3xl p-2 w-full sm:w-1/2 xl:w-2/5">
                    Discover Features
                  </button>
                </div>
              </div>
            </div>

            {/* second div */}
            <div className="basis-[50vw] border-2 rounded-3xl bg-[url(/person_img_man.png)] bg-cover bg-center  sm:basis-80 ">
              <p className="text-3xl mx-5 mt-5 text-[#FFFFFF80] font-semibold">
                Your Task.
              </p>
              <p className="text-3xl mx-5 text-[#FFFFFF] font-semibold">
                Your Tools.
              </p>
            </div>
          </div>

          {/* Google Text/image */}
          <div className="flex basis-full p-5 items-center justify-center gap-5   sm:gap-20 xl:gap-32 ">
            <img
              src={google}
              className="w-[40px] sm:w-[50px] md:w-[70px] xl:w-[100px]"
              alt="google"
            />
            <img
              src={facebook}
              className="w-[40px] sm:w-[50px] md:w-[70px] xl:w-[100px] "
              alt="facebook"
            />
            <img
              src={youtube}
              className="w-[40px] sm:w-[50px] md:w-[70px] xl:w-[100px]"
              alt="youtube"
            />
            <img
              src={pin}
              className="w-[40px] sm:w-[50px] md:w-[70px] xl:w-[100px]"
              alt="pin"
            />
            <img
              src={twi}
              className="w-[40px] sm:w-[50px]  md:w-[70px] xl:w-[100px]"
              alt="twi"
            />
          </div>
        </div>

        {/* Second div */}
        <div className="min-h-min  ">
          {/* heading */}
          <div className="w-4/6 m-auto mt-3 text-center font-semibold text-2xl  sm:w-4/5 lg:w-3/6 xl:w-2/4 xl:text-4xl ">
            <p>
              Transform Your Productivity with Our Innovative To-Do List
              Features
            </p>
          </div>

          {/* Cards */}
          <div className="mt-10 w-full flex flex-wrap justify-center gap-8   sm:flex-wrap xl:gap-10  ">
            <Cards
              img={card1}
              number={num_1}
              heading="User-Friendly Interface"
              msg="Our platform offers seamless task management to boost your efficiency."
            />
            <Cards
              img={card2}
              number={num_2}
              heading="Collaborate & Share Effortlessly"
              msg="Invite team members to work together and achieve your goals faster."
            />
            <Cards
              img={card3}
              number={num_3}
              heading="Effortless Collaboration"
              msg="Invite team members to work together and achieve your goals faster."
            />
            <Cards
              img={card4}
              number={num_4}
              heading="Seamless Access"
              msg="Stay connected and manage your tasks on the go with ease."
            />
          </div>
        </div>

        {/* Third div */}
        <div className="min-h-min  ">
          {/* heading */}
          <div className="w-[86%] m-auto  font-semibold text-3xl mt-3 ">
            <p className="text-[#0E1F51] font-bold ">Customer Testimonials</p>
          </div>

          {/* message */}
          <div className="w-[86%] m-auto  mt-8  ">
            <p>This tool has transformed my productivity and organization!.</p>
          </div>

          {/* customer testimonials */}
          <div className="w-[86%]  m-auto mt-14  flex justify-between ">
            {/* first feedbback */}
            <div className=" basis-1/2 p-3 border-8 border-[#FF3E54]   ">
              {/* person msg */}
              <div className=" w-3/4 h-2/3   bg-white  mb-28  relative -right-96 top-10 sm:-right-20 sm:top-5  sm:w-full lg:-right-52 xl:w-2/3  xl:-right-80">
                <p className=" h-1/2 mt-20 w-4/5 font-semibold text-2xl sm:text-xl sm:w-full  ">
                  Using this website has made my tasks so much easier! I can't
                  imagine my day without it."
                </p>
              </div>

              {/* Person Name and Post */}
              <div className="w-1/2 relative -right-96 -top-64  sm:-right-20 sm:-top-42  sm:w-full lg:-right-52 xl:-right-80 xl:-top-64 ">
                <p className="font-bold text-xl sm:text-base sm:pt-1">
                  Sherri Cronin
                </p>
                <p className="text-lg sm:text-sm  ">
                  Project Manager, TechCorp
                </p>
              </div>

              {/* buttons */}
              <div className=" relative -right-96 -top-24 bg-white sm:w-full  sm:-right-20 sm:-top-64 lg:-right-48 xl:-right-80 xl:w-1/2 ">
                <button className="border rounded-full p-2 m-2  ">
                  <ChevronLeft />
                </button>
                <button className="bg-[#FF3E54] text-white rounded-full p-2 m-2 ">
                  <ChevronRight />
                </button>
              </div>
            </div>

            {/* photo div */}
            <div className="basis-1/4 flex  items-center  border-red-500 ">
              <img
                src={person}
                className="h-1/2 border-t-8 border-r-8 border-b-8 p-1 border-[#FF3E54] "
                alt="customer image"
              />
            </div>
          </div>
        </div>

        {/* fourth div */}
        <div className="min-h-min  ">
          <div className="w-[86%]  m-auto flex justify-between   sm:gap-2">
            {/* first div mobile */}
            <div className="w-1/2 border ">
              <img
                src={mobile_hand}
                alt="mobile_hand_img"
                className="w-full sm:h-[252px]"
              />
            </div>

            {/* second div  */}
            <div className=" w-1/2  ">
              {/* heading */}
              <div className="w-4/6 mt-8 sm:w-full ">
                <p className="text-4xl font-bold sm:text-2xl">
                  Start Organizing Your Life Today
                </p>
              </div>

              {/* msg */}
              <div className="w-full mt-8 sm:mt-3">
                <p className=" text-xl sm:text-base">
                  Join us now and transform your productivity with our intuitive
                  to-do list platform!
                </p>
              </div>

              {/* buttons */}
              <div className="w-1/2 mt-8 sm:w-full sm:mt-6 ">
                <button className="bg-[#FF3E54] text-white p-3  ">
                  Sign Up
                </button>
                <button className="bg-[#fff] border border-red-500 text-black p-3 ml-3  ">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* table view */}
        {records.length != 0 ? (
          <div className="min-h-min  ">
            <div className="w-[86%]  m-auto">
              <table className="border-collapse border border-gray-500 w-full text-center">
                <thead>
                  <tr>
                    <th className="border border-gray-500 p-2">First Name</th>
                    <th className="border border-gray-500 p-2">Last Name</th>
                    <th className="border border-gray-500 p-2">Gender</th>
                    <th className="border border-gray-500 p-2">Language</th>
                    <th className="border border-gray-500 p-2">Email</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((item, index) => (
                    <tr key={index}>
                      <td className="border border-gray-500 p-2">
                        {item.fname}
                      </td>
                      <td className="border border-gray-500 p-2">
                        {item.lname}
                      </td>
                      <td className="border border-gray-500 p-2">
                        {item.gender}
                      </td>
                      <td className="border border-gray-500 p-2">
                        {item.language.join(", ")}
                      </td>
                      <td className="border border-gray-500 p-2">
                        {item.email}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : null}
      </div>

      {openfrm ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-999">
          <Form
            isSubmitted={isSubmitted}
            setIsSubmitted={setIsSubmitted}
            setRecords={setRecords}
            records={records}
            frmData={frmData}
            setFrmData={setFrmData}
            openfrm={openfrm}
            setOpenFrm={setOpenFrm}
          />
        </div>
      ) : null}
      {
        console.log("ssd=",isSubmitted)
      }

      {isSubmitted && (
        
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <Thankyou setOpenFrm={setOpenFrm} setIsSubmitted={setIsSubmitted}  />
        </div>
      )}
    </>
  );
}

export default Landingpage;
