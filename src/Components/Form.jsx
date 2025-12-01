import React, { useState } from "react";

import { X } from 'lucide-react';

function Form({records,setRecords,frmData,setFrmData,openfrm,setOpenFrm,isSubmitted,setIsSubmitted}) {

  const handleCheckbox = (e) => {
    const value = e.target.value;

    // If already selected → remove it
    if (frmData.language.includes(value)) {
      setFrmData({
        ...frmData,
        language: frmData.language.filter((lang) => lang !== value),
      });
    } else {
      
      setFrmData({
        ...frmData,
        language: [...frmData.language, value],
      });
    }
  };

  const handleSubmition = (e) =>{
    e.preventDefault();
    setRecords([...records, frmData])

    setFrmData({
      fname: " ",
      lname: " ",
      gender: " ",
      language: [],
      email: " ",
    })

    setIsSubmitted(true)
  }

  return (
  <div className="relative w-full max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">

    {/* Close Button */}
    <button
      onClick={() => setOpenFrm(!openfrm)}
      className="absolute top-3 right-3"
    >
      <X className="w-5 h-5 text-gray-600 hover:text-black" />
    </button>

    {/* Heading */}
    <p className="text-2xl font-bold">Get Started Today!</p>
    <p className="text-gray-600 mb-4">
      Fill in your details and take control of your tasks.
    </p>

    {/* FORM START */}
    <form onSubmit={handleSubmition} className="flex flex-col gap-4">
      
      {/* FIRST + LAST NAME (flex row) */}
      <div className="flex flex-col sm:flex-row gap-4">
        
        {/* First Name */}
        <div className="flex flex-col flex-1">
          <label className="font-medium">First Name</label>
          <input
            type="text"
            name="fname"
            value={frmData.fname}
            onChange={(e) =>
              setFrmData({ ...frmData, fname: e.target.value })
            }
            placeholder="Enter your first name"
            className="border rounded-md p-2 bg-pink-50 focus:outline-none"
            required
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col flex-1">
          <label className="font-medium">Last Name</label>
          <input
            type="text"
            value={frmData.lname}
            onChange={(e) =>
              setFrmData({ ...frmData, lname: e.target.value })
            }
            placeholder="Enter your last name"
            className="border rounded-md p-2 bg-pink-50 focus:outline-none"
            required
          />
        </div>
      </div>

      {/* GENDER */}
      <div className="flex flex-col">
        <label className="font-medium">Gender</label>

        <div className="flex gap-6 mt-1">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="male"
              name="gender"
              checked={frmData.gender === "male"}
              onChange={(e) =>
                setFrmData({ ...frmData, gender: e.target.value })
              }
            />
            Male
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              value="female"
              name="gender"
              checked={frmData.gender === "female"}
              onChange={(e) =>
                setFrmData({ ...frmData, gender: e.target.value })
              }
            />
            Female
          </label>
        </div>
      </div>

      {/* LANGUAGE */}
      <div className="flex flex-col">
        <label className="font-medium">Language</label>

        <div className="flex flex-col gap-2 mt-1">
          {["english", "hindi", "marathi"].map((lang) => (
            <label key={lang} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={lang}
                checked={frmData.language.includes(lang)}
                onChange={handleCheckbox}
              />
              {lang.charAt(0).toUpperCase() + lang.slice(1)}
            </label>
          ))}
        </div>
      </div>

      {/* EMAIL */}
      <div className="flex flex-col">
        <label className="font-medium">Email Address</label>
        <input
          type="email"
          name="email"
          value={frmData.email}
          onChange={(e) =>
            setFrmData({ ...frmData, email: e.target.value })
          }
          placeholder="Enter your email address"
          className="border rounded-md p-2 bg-pink-50 focus:outline-none"
        />
      </div>

      {/* SUBMIT BUTTON */}
      <button
        type="submit"
        className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition"
      >
        Done
      </button>

    </form>
  </div>
);

}

export default Form;
