import React from "react";
import { BsCalendarCheckFill } from "react-icons/bs";
const GreetingsBox = () => {
  return (
    <div className="flex text-white transform  bg-gradient-to-r from-[#667ce4] to-[#744ca5] rounded-xl h-28 border  px-6 md:px-8 flex-col  justify-center items-start">
      <div className="flex justify-start items-center font-thin text-sm md:text-base">
        <BsCalendarCheckFill className="mr-2" />
        <span>Sunday 30th October 2022</span>
      </div>
      <h6 className=" md:text-2xl text-xl font-medium">Good evening, Andrew</h6>
    </div>
  );
};

export default GreetingsBox;
