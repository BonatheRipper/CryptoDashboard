import React, { PureComponent } from "react";
import {
  BsCalendarCheckFill,
  BsCurrencyPound,
  BsCurrencyEuro,
  BsPlus,
  BsSim,
  BsArrowDownShort,
  BsArrowUpShort,
  BsCheck,
} from "react-icons/bs";
import { BiWorld, BiMinus } from "react-icons/bi";
import { FaSignal } from "react-icons/fa";
import { useState } from "react";
import { MdClear } from "react-icons/md";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const data = [
  {
    name: "3",
    uv: 100,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "4",
    uv: 500,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "5",
    uv: 100,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "6",
    uv: 300,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "7",
    uv: 100,
    pv: 4300,
    amt: 2100,
  },
];
const transactionStatus = ["Completed", "Pending", "Cancelled"];
const transactionMeridian = ["am", "pm"];
const transactionData = [
  {
    name: "Bona Andrews",
    amount: `$${Math.floor(Math.random() * 900 + 1)}`,
    time: `0${Math.floor(Math.random() * 8 + 1)}:${Math.floor(
      Math.random() * 98 + 1
    )}${
      transactionMeridian[
        Math.floor(Math.random() * transactionMeridian.length)
      ]
    }`,
    status:
      transactionStatus[Math.floor(Math.random() * transactionStatus.length)],
  },
  {
    name: "Bona Andrews",
    amount: `$${Math.floor(Math.random() * 900 + 1)}`,
    time: `0${Math.floor(Math.random() * 8 + 1)}:${Math.floor(
      Math.random() * 98 + 1
    )}${
      transactionMeridian[
        Math.floor(Math.random() * transactionMeridian.length)
      ]
    }`,
    status:
      transactionStatus[Math.floor(Math.random() * transactionStatus.length)],
  },
  {
    name: "Bona Andrews",
    amount: `$${Math.floor(Math.random() * 900 + 1)}`,
    time: `0${Math.floor(Math.random() * 8 + 1)}:${Math.floor(
      Math.random() * 98 + 1
    )}${
      transactionMeridian[
        Math.floor(Math.random() * transactionMeridian.length)
      ]
    }`,
    status:
      transactionStatus[Math.floor(Math.random() * transactionStatus.length)],
  },
  {
    name: "Bona Andrews",
    amount: `$${Math.floor(Math.random() * 900 + 1)}`,
    time: `0${Math.floor(Math.random() * 8 + 1)}:${Math.floor(
      Math.random() * 98 + 1
    )}${
      transactionMeridian[
        Math.floor(Math.random() * transactionMeridian.length)
      ]
    }`,
    status:
      transactionStatus[Math.floor(Math.random() * transactionStatus.length)],
  },
  {
    name: "Bona Andrews",
    amount: `$${Math.floor(Math.random() * 900 + 1)}`,
    time: `0${Math.floor(Math.random() * 8 + 1)}:${Math.floor(
      Math.random() * 98 + 1
    )}${
      transactionMeridian[
        Math.floor(Math.random() * transactionMeridian.length)
      ]
    }`,
    status:
      transactionStatus[Math.floor(Math.random() * transactionStatus.length)],
  },
  {
    name: "Bona Andrews",
    amount: `$${Math.floor(Math.random() * 900 + 1)}`,
    time: `0${Math.floor(Math.random() * 8 + 1)}:${Math.floor(
      Math.random() * 98 + 1
    )}${
      transactionMeridian[
        Math.floor(Math.random() * transactionMeridian.length)
      ]
    }`,
    status:
      transactionStatus[Math.floor(Math.random() * transactionStatus.length)],
  },
  {
    name: "Bona Andrews",
    amount: `$${Math.floor(Math.random() * 900 + 1)}`,
    time: `0${Math.floor(Math.random() * 8 + 1)}:${Math.floor(
      Math.random() * 98 + 1
    )}${
      transactionMeridian[
        Math.floor(Math.random() * transactionMeridian.length)
      ]
    }`,
    status:
      transactionStatus[Math.floor(Math.random() * transactionStatus.length)],
  },
  {
    name: "Bona Andrews",
    amount: `$${Math.floor(Math.random() * 900 + 1)}`,
    time: `0${Math.floor(Math.random() * 8 + 1)}:${Math.floor(
      Math.random() * 98 + 1
    )}${
      transactionMeridian[
        Math.floor(Math.random() * transactionMeridian.length)
      ]
    }`,
    status:
      transactionStatus[Math.floor(Math.random() * transactionStatus.length)],
  },
];
const PamentItem = ({ bg, icon, header, body }) => {
  return (
    <div
      className={`px-6 my-3 border w-full ${bg} hover:mr-2 h-24 rounded-xl flex justify-start items-center flex-row py-8`}
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
      balance: `+$${Math.floor(Math.random() * 500 + 1)}`,
    },
    {
      name: "Micheal Orji",
      cardNumber: genCardNum(),
      skin: "cardSkin1",
      date: genExpirreDate(),
      balance: `+$${Math.floor(Math.random() * 500 + 1)}`,
    },
    {
      name: "Micheal Orji",
      cardNumber: genCardNum(),
      skin: "cardSkin1",
      date: genExpirreDate(),
      balance: `+$${Math.floor(Math.random() * 500 + 1)}`,
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
  function typeOfStatus(status) {
    if (status.toLowerCase() === "pending") {
      return <BiMinus className="mr-2" />;
    } else if (status.toLowerCase() === "completed") {
      return <BsCheck className="mr-2" />;
    } else {
      return <MdClear className="mr-2" />;
    }
  }
  function typeOfStatusColor(status) {
    if (status.toLowerCase() === "pending") {
      return "yellow";
    } else if (status.toLowerCase() === "completed") {
      return "green";
    } else {
      return "red";
    }
  }
  function typeOfName(status) {
    if (
      status.toLowerCase() === "pending" ||
      status.toLowerCase() === "completed"
    ) {
      return ["bg-[#c4c9f1] text-gray-600", <BsArrowDownShort />];
    } else {
      return ["bg-red-500 text-gray-300", <BsArrowUpShort />];
    }
  }
  return (
    <>
      {" "}
      <div className="text-black mt-8 py-8 md:pb-12 md:pt-24 md:px-12   px-2 w-full flex md:flex-row flex-col justify-center items-start relative">
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

          <div className="h-96 py-12 w-full shadow rounded-lg border border-gray-50  bg-white mt-8">
            <h6
              style={{ fontWeight: "300" }}
              className=" text-gray-800 text-sm md:text-lg  mb-4 w-full mx-5"
            >
              Smooth Line Chart
            </h6>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  opacity={10}
                />
                <XAxis
                  tick={{ fontSize: 10 }}
                  dataKey="name"
                  padding={{ left: 20, right: 20 }}
                />
                <YAxis
                  tick={{ fontSize: 10 }}
                  padding={{ left: 30, right: 30, top: 30 }}
                />
                {/* <Tooltip /> */}
                <Area
                  type="monotone"
                  dataKey="uv"
                  strokeWidth={2}
                  strokeLinecap
                  stroke="#4c7ffe"
                  fill="#fff"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="w-full rounded-xl items-stretch h-full shadow md:w-3/12  bg-white text-white md:mx-4 md:my-0 my-2 px-6   py-3 flex justify-start    flex-col">
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
              <div className="flex w-full justify-between items-center">
                <h4 style={{ fontWeight: "220" }}>{currentCard.name}</h4>
                <h4 style={{ fontWeight: "500" }} className="text-xs">
                  {currentCard.balance}
                </h4>
              </div>
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
      <div className="text-black  py-8 md:py-8 md:px-12  px-2 w-full flex md:flex-row flex-col justify-start items-center relative">
        <div className="w-full md:w-8/12  border bg-white rounded-xl shadow flex flex-col justify-start px-4 py-2">
          <div className="flex flex-row justify-between w-full items-center my-4">
            <h6 className="font-bold md:text-base text-xs">
              Recent Transactions
            </h6>
            <select className="border  py-1 px-1 rounded-lg">
              <option>Today</option>
              <option>This week</option>
              <option>Last Week</option>
              <option>This Month</option>
              <option>This Year</option>
              <option>Last Month</option>

              <option>All Time</option>
            </select>
          </div>
          <table className="w-full my-4 flex flex-col justify-between items-center border-b">
            <tr className="flex my-2 flex-row justify-between items-start w-full">
              <th className="md:text-base text-xs   px-1 w-3/12 flex justify-center items-center">
                Name
              </th>
              <th className="md:text-base text-xs   px-1 w-3/12 flex justify-center items-center">
                Amount
              </th>
              <th className="md:text-base text-xs  px-1 w-3/12 flex justify-center items-center">
                Time
              </th>
              <th className="md:text-base text-xs  px-1 w-3/12 flex justify-center items-center">
                Status
              </th>
            </tr>
            {transactionData.map((item, i) => (
              <tr
                key={i}
                className="flex transform scale-100 hover:scale-110 md:hover:scale-95 flex-row justify-between items-center w-full border-t"
              >
                <td className="whitespace-nowrap	py-2 overflow-x-scroll md:text-base text-xxs    px-1 w-3/12 flex justify- items-center">
                  <span
                    className={`px-1 py-1 flex items-center justify-center ${
                      typeOfName(item.status)[0]
                    } rounded-full mx-2`}
                  >
                    {typeOfName(item.status)[1]}
                  </span>{" "}
                  <span> {item.name}</span>
                </td>
                <td className="whitespace-nowrap	py-2 overflow-x-scroll md:text-base text-xxs    px-1 w-3/12 flex justify-center items-center">
                  {item.amount}
                </td>
                <td className="whitespace-nowrap	py-2 overflow-x-scroll md:text-base text-xxs    px-1 w-3/12 flex justify-center items-center">
                  {item.time}
                </td>
                <td
                  className={`whitespace-nowrap	py-2 overflow-x-scroll md:text-base text-xxs    px-1 w-3/12 flex justify-center items-center`}
                >
                  <div
                    className={`flex justify-betwee w-full md:w-8/12 items-center bg-${typeOfStatusColor(
                      item.status
                    )}-100 text-${typeOfStatusColor(
                      item.status
                    )}-800 px-2 py-1 rounded-sm`}
                  >
                    {typeOfStatus(item.status)}
                    <span> {item.status}</span>
                  </div>
                </td>
              </tr>
            ))}
          </table>
          <div className="flex w-full justify-end items-end mt-1 mb-4 ">
            <button className="px-6 py-1  rounded-lg border border-[#9782b7] text-[#9782b7] hover:bg-black hover:text-white text-sm md:text-base">
              See all
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
