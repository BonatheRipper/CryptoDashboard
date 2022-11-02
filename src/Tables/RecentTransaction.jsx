import React from "react";
import { useState } from "react";

const RecentTransaction = ({
  paginatePageToDisplay,
  paginateNumbersLength,
  paginatePager,
  typeOfName,
  typeOfStatusColor,
  typeOfStatus,
  transactionData,
}) => {
  const [currentTable, setCurrentTable] = useState(1);
  const [ordersPerTable, setOrdersPerTable] = useState(8);
  const indexOfLastTable = currentTable * ordersPerTable;
  const indexOfFirstTable = indexOfLastTable - ordersPerTable;
  const [trans, setTrans] = useState(transactionData);

  return (
    <>
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
          {paginatePageToDisplay(
            trans,
            indexOfFirstTable,
            indexOfLastTable
          ).map((item, i) => (
            <tr
              key={i}
              className="flex transform scale-100 hover:scale-110 md:hover:scale-95 flex-row justify-between items-center w-full border"
            >
              <td className="whitespace-nowrap	py-2 overflow-x-scroll md:text-base text-xxs    px-1 w-3/12 flex justify- items-center">
                <span
                  className={`px-1 py-1 flex items-center justify-center ${
                    typeOfName(item.status)[0]
                  } rounded-full mx-2`}
                >
                  {typeOfName(item.status)[1]}
                </span>
                <span> {item.name}</span>
              </td>
              <td className="whitespace-nowrap	py-2 overflow-x-scroll md:text-base text-xxs     px-1 w-3/12 flex justify-center items-center">
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
        <div className="flex w-full justify-start items-center mt-1 mb-4 ">
          {paginateNumbersLength(trans, ordersPerTable).map((item, i) => (
            <button
              key={i}
              onClick={() => paginatePager(setCurrentTable, item)}
              className={`flex justify-center items-center md:w-8 md:h-8  w-6 h-6 mx-2 rounded-full border border-[#9782b7]  hover:bg-[#9782b7] ${
                item === currentTable
                  ? "bg-[#9782b7] text-gray-100"
                  : "text-[#9782b7]"
              } hover:text-white text-sm md:text-base`}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex w-full justify-end items-end mt-1 mb-4 ">
          <button
            onClick={() =>
              setOrdersPerTable(
                ordersPerTable < trans.length ? trans.length : 8
              )
            }
            className="px-6 py-1  rounded-lg border border-[#9782b7] text-[#9782b7] hover:bg-[#9782b7] hover:text-white text-sm md:text-base"
          >
            {ordersPerTable < trans.length ? "Sell all" : "See less"}
          </button>
        </div>
      </div>
    </>
  );
};

export default RecentTransaction;
