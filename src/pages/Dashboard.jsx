import React from "react";
import { BsCalendarCheckFill } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div className="text-black mt-16 py-8 md:py-24 md:px-12  px-2 w-full flex md:flex-row flex-col justify-center items-center">
      <div className="w-full md:w-5/12 border border-red-500 md:mx-4 md:my-0 my-2 h-40">
        <div className="flex text-white bg-gradient-to-r from-[#667ce4] to-[#744ca5] rounded-3xl h-28 border  px-6 md:px-8 flex-col  justify-center items-start">
          <div className="flex justify-start items-center font-thin text-sm md:text-base">
            <BsCalendarCheckFill className="mr-2" />
            <span>Sunday 30th October 2022</span>
          </div>
          <h6 className=" md:text-2xl text-xl font-medium">
            Good evening, Andrew
          </h6>
        </div>
      </div>
      <div className="w-full md:w-3/12 bg-red-500 md:mx-4 md:my-0 my-2  h-40"></div>
      <div className="w-full md:w-3/12 bg-blue-500 md:mx-4 md:my-0 my-2  h-40"></div>
    </div>
  );
};

export default Dashboard;
