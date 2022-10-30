import React from "react";
import {
  BsCalendarCheckFill,
  BsCurrencyPound,
  BsCurrencyEuro,
} from "react-icons/bs";
import { BiWorld } from "react-icons/bi";

const PamentItem = ({ bg, icon, header, body }) => {
  return (
    <div
      className={`px-6 my-3 border w-full bg-[${bg}] transform scale-100 hover:scale-105 h-20 rounded-xl flex justify-start items-center flex-row py-2`}
    >
      <div className="flex bg-[#d2eef4] text-[#4e8d9b] justify-center items-center rounded-full  px-2 py-2 border">
        {icon}
      </div>
      <div className="mx-4 flex justify-start  flex-col">
        <h6 className="my-1 font-medium">{header}</h6>
        <p style={{ fontWeight: "200" }} className="font-thin text-xs">
          {body}{" "}
        </p>
      </div>
    </div>
  );
};
const Dashboard = () => {
  return (
    <div className="text-black mt-16 py-8 md:py-24 md:px-12  px-2 w-full flex md:flex-row flex-col justify-center items-start">
      <div className="w-full md:w-5/12 border border-red-500 md:mx-4 md:my-0 my-2 h-40">
        <div className="flex text-white bg-gradient-to-r from-[#667ce4] to-[#744ca5] rounded-xl h-28 border  px-6 md:px-8 flex-col  justify-center items-start">
          <div className="flex justify-start items-center font-thin text-sm md:text-base">
            <BsCalendarCheckFill className="mr-2" />
            <span>Sunday 30th October 2022</span>
          </div>
          <h6 className=" md:text-2xl text-xl font-medium">
            Good evening, Andrew
          </h6>
        </div>
      </div>
      <div className="w-full rounded-xl   shadow md:w-3/12  bg-white text-white md:mx-4 md:my-0 my-2 px-6   py-3 flex justify-start  items-center  flex-col">
        <h1 className="font-medium text-black text-lg md:text-xl  mt-4 w-full  ">
          Make Payment
        </h1>
        <PamentItem
          icon={<BsCurrencyPound />}
          bg="#49b1ce"
          header="Pay in Pounds"
          body="Make payments in pounds from anywhere in the world"
        />
        <PamentItem
          icon={<BsCurrencyEuro />}
          bg="#2886df"
          header="Send Euro easily"
          body="Send payments in euros with comfort"
        />
        <PamentItem
          icon={<BiWorld />}
          bg="#6f62e7"
          header="International Payment"
          body="Make payments in any currency"
        />
      </div>{" "}
      <div className="w-full rounded-xl   shadow md:w-3/12  bg-white text-white md:mx-4 md:my-0 my-2 px-6   py-3 flex justify-start  items-center  flex-col">
        <h1 className="font-medium text-black text-lg md:text-xl  mt-4 w-full  ">
          Cards
        </h1>
        <p
          style={{ fontWeight: "250" }}
          className=" text-black text-xs md:text-xs  mt-1 w-full  "
        >
          Tap on carrd to pull out records
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
