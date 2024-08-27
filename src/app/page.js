import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen overflow-y-auto">
      {/* Left Section */}
      <div className="relative flex items-center justify-center w-full md:w-1/2 h-auto md:h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/innovodetails.png')",
          }}
        />
      </div>

      {/* Right Section with Full Background */}
      <div className="relative flex items-center justify-center w-full md:w-1/2 h-auto md:h-screen">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/rightside.png')",
          }}
        />

        {/* Apply Now Button */}
        <button className="relative z-10 border rounded-full border-white bg-black text-white px-10 md:px-20 py-2 md:py-4">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default Page;
