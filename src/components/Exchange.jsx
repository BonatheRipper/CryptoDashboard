import React from "react";
import { useState } from "react";

const Exchange = ({ currency }) => {
  const [currencyType, setCurrencyType] = useState(currency[0].rate);
  const [amountToBuy, setAmountToBuy] = useState("");
  const [buySell, setBuySell] = useState(true);
  return (
    <>
      {" "}
      <div className="w-full md:w-3/12  md:mx-4 my-4 md:my-0 border bg-white rounded-xl shadow flex flex-col justify-start px-4 py-2">
        <h1 className="font-medium text-black text-lg md:text-xl  mt-4 w-full  ">
          Exchange
        </h1>
        <div className="flex my-4 flex-row justify-end items-center w-full relative">
          <div
            onClick={() => setBuySell(true)}
            className={`absolute w-6/12 left-2 ${
              buySell ? "bg-[#5e5ef1] text-white" : "bg-white"
            } hover:bg-[#5e5ef1] hover:text-white w-full rounded-tl-xl rounded-br-xl  flex justify-center items-center border  py-3 `}
          >
            Buy
          </div>
          <div
            onClick={() => setBuySell(false)}
            className={` right-0  ${
              !buySell ? "bg-[#5e5ef1] text-white" : "bg-white"
            } hover:bg-[#5e5ef1] hover:text-white w-6/12 rounded-br-xl  border py-3 flex justify-center items-center `}
          >
            Sell
          </div>
        </div>
        <div className="w-full flex flex-col my-2 ">
          <h6 className="my-2 text-gray-600 text-sm md:text-base">
            Amount to buy
          </h6>
          <input
            placeholder="Enter amount"
            onChange={(e) => setAmountToBuy(e.target.value)}
            value={amountToBuy}
            type="number"
            className="w-full px-4 py-3 border border-gray-300 outline-none rounded-lg"
          />
        </div>
        <div className="w-full flex flex-col my-2 ">
          <h6 className="my-2 text-gray-600 text-sm md:text-base">
            Buy currency
          </h6>
          <select
            onChange={(e) => setCurrencyType(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 outline-none rounded-lg"
          >
            {currency.map((item, i) => (
              <option key={i} value={item.rate}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full flex flex-col my-2 ">
          <h6 className="my-2 text-gray-800 md:text-base flex items-center text-xs">
            <span className="text-xs">Rate to ₦ </span>{" "}
            <span className="mx-2 text-xs">=</span>
            <span className="text-xs text-[#5e5ef1]">{`${currencyType}.00`}</span>
          </h6>
          <input
            placeholder="0000"
            value={`${currencyType * amountToBuy}.00`}
            disabled
            className="w-full px-4 py-3 border border-gray-300 outline-none rounded-lg text-black"
          />
        </div>
        <div className="w-full flex flex-col my-6 ">
          <button className="py-3 w-full bg-[#5e5ef1] hover:bg-[#242482] text-white rounded-lg">
            Exchange now
          </button>
        </div>
      </div>
    </>
  );
};

export default Exchange;
