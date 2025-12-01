import React from "react";

function Thankyou({ setOpenFrm,setIsSubmitted }) {
  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg text-center">
      
      {/* Heart Icon */}
      <div className="text-4xl mb-3">❤️</div>

      {/* Heading */}
      <p className="text-xl font-bold">Thank you for connect with us.</p>

      {/* Subtext */}
      <p className="text-gray-600 mt-1">
        Our team will contacting with you soon
      </p>

      {/* Button */}
      <button
        onClick={() => {setOpenFrm(false);setIsSubmitted(false)}}
        className="w-full mt-6 bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transition"
      >
        Done
      </button>
    </div>
  );
}

export default Thankyou;
