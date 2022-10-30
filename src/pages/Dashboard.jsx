import React from "react";
import {
  BsCalendarCheckFill,
  BsCurrencyPound,
  BsCurrencyEuro,
  BsPlus,
  BsSim,
} from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { FaSignal } from "react-icons/fa";
import { useState } from "react";

const PamentItem = ({ bg, icon, header, body }) => {
  return (
    <div
      className={`px-6 my-3 border w-full ${bg} hover:mr-2 h-20 rounded-xl flex justify-start items-center flex-row py-2`}
    >
      <div className="flex bg-[#d2eef4] text-[#4e8d9b] justify-center items-center rounded-full  px-2 py-2 border">
        {icon}
      </div>
      <div className="mx-4 flex justify-start  flex-col">
        <h6 className="my-1 font-medium">{header}</h6>
        <p style={{ fontWeight: "200" }} className="font-thin text-xs">
          {body}
        </p>
      </div>
    </div>
  );
};
const Dashboard = () => {
  const cards = [
    {
      name: "Micheal Orji",
      cardNumber: genCardNum(),
      skin: "cardSkin1",
      date: genExpirreDate(),
    },
  ];
  const [currentCard, setCurrentCard] = useState(cards[0]);

  function genCardNum() {
    let sixTeenDigits = [];
    for (let i = 0; i < 4; i++) {
      sixTeenDigits.push(Math.floor(Math.random() * 9999 + 1));
    }
    return sixTeenDigits;
  }
  function genExpirreDate() {
    return `0${Math.floor(Math.random() * 8 + 1)}/${Math.floor(
      Math.random() * 8 + 1
    )}${Math.floor(Math.random() * 8 + 1)}`;
  }
  return (
    <div className="text-black mt-16 py-8 md:py-24 md:px-12  px-2 w-full flex md:flex-row flex-col justify-center items-start">
      <div className="w-full md:w-5/12  md:mx-4 md:my-0 my-2 ">
        <div className="flex text-white transform  bg-gradient-to-r from-[#667ce4] to-[#744ca5] rounded-xl h-28 border  px-6 md:px-8 flex-col  justify-center items-start">
          <div className="flex justify-start items-center font-thin text-sm md:text-base">
            <BsCalendarCheckFill className="mr-2" />
            <span>Sunday 30th October 2022</span>
          </div>
          <h6 className=" md:text-2xl text-xl font-medium">
            Good evening, Andrew
          </h6>
        </div>

        <div className="h-72 w-full shadow rounded-lg border border-gray-50 py-5 bg-white mt-8">
          <h6
            style={{ fontWeight: "300" }}
            className=" text-gray-800 text-sm md:text-lg  mb-4 w-full mx-5"
          >
            Smooth Line Chart
          </h6>
        </div>
      </div>
      <div className="w-full rounded-xl   shadow md:w-3/12  bg-white text-white md:mx-4 md:my-0 my-2 px-6   py-3 flex justify-start  items-center  flex-col">
        <h1 className="font-medium text-black text-lg md:text-xl  mt-4 w-full  ">
          Make Payment
        </h1>
        <PamentItem
          icon={<BsCurrencyPound />}
          bg="bg1"
          header="Pay in Pounds"
          body="Make payments in pounds from anywhere in the world"
        />
        <PamentItem
          icon={<BsCurrencyEuro />}
          bg="bg2"
          header="Send Euro easily"
          body="Send payments in euros with comfort"
        />
        <PamentItem
          icon={<BiWorld />}
          bg="bg3"
          header="International Payment"
          body="Make payments in any currency"
        />
      </div>{" "}
      <div className="w-full rounded-xl   shadow md:w-3/12  bg-white text-white md:mx-4 md:my-0 my-2 px-6   py-8 flex justify-start  items-center  flex-col">
        <h1 className="font-medium text-black text-lg md:text-xl  mt-4 w-full  ">
          Cards
        </h1>
        <p
          style={{ fontWeight: "250" }}
          className=" text-black text-xs md:text-xs  mt-1 w-full  "
        >
          Tap on carrd to pull out records
        </p>
        <div
          className={`w-full  border ${currentCard.skin}  my-5 rounded-xl py-4 px-6 flex flex-col justify-between items-center`}
        >
          <div className="flex  justify-between items-center flex-row w-full">
            <BsSim className="transform -rotate-90 text-2xl md:3xl opacity-70" />{" "}
            <FaSignal className="transform  text-2xl md:3xl opacity-70" />
          </div>
          <div className="flex w-full flex-col mt-8">
            <h4 style={{ fontWeight: "220" }}>{currentCard.name}</h4>
            <div className="flex w-full justify-start mt-2  items-center">
              {currentCard.cardNumber.map((num, i) => (
                <span key={i} className="mr-2">
                  {num}
                </span>
              ))}
            </div>
            <div className="border border-gray-800 my-4" />
            <div
              style={{ fontWeight: "250" }}
              className="flex justify-between items-center "
            >
              <span className="text-sm font-medium">{currentCard.name}</span>
              <span>{currentCard.date}</span>
            </div>
          </div>
        </div>
        <div className="flex w-full text-black  justify-start items-center flex-row mt-2 mb-3 px-2">
          <p className="text-xs font-bold">Cards:</p>
          {[1, 2, 3, 4].map((card, i) => (
            <div
              key={i}
              className=" text-xs mx-2 w-5 h-5 rounded-full border border-black flex justify-center items-center "
            >
              {card}
            </div>
          ))}
        </div>
        <div className="flex flex-row justify-start px-1 w-full hover:animate-pulse my-2">
          <div className="flex flex-row justify-start border px-1 py-1 rounded-xl shadow">
            <div className="px-1 py-1 rounded-full bg-[#c6c6fa] text-[#424290]">
              <BsPlus className="text-xs" />
            </div>
            <button className="font-bold text-xs text-black mx-3">
              Create card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
