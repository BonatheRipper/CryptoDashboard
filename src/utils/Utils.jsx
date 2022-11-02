import { BsArrowDownShort, BsArrowUpShort, BsCheck } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

import { MdClear } from "react-icons/md";
export function paginatePageToDisplay(
  items,
  indexOfFirstTable,
  indexOfLastTable
) {
  return items.slice(indexOfFirstTable, indexOfLastTable);
}
export function paginateNumbersLength(items, itemsPerTable) {
  let arr = [];
  for (let i = 1; i <= Math.ceil(items.length / itemsPerTable); i++) {
    arr.push(i);
  }
  return arr;
}
export function paginatePager(setCurrentTable, pageNumber) {
  setCurrentTable(pageNumber);
}
export function genCardNum() {
  let sixTeenDigits = [];
  for (let i = 0; i < 4; i++) {
    sixTeenDigits.push(Math.floor(Math.random() * 9999 + 1));
  }
  return sixTeenDigits;
}
export function genExpirreDate() {
  return `0${Math.floor(Math.random() * 8 + 1)}/${Math.floor(
    Math.random() * 8 + 1
  )}${Math.floor(Math.random() * 8 + 1)}`;
}
export function typeOfStatus(status) {
  if (status.toLowerCase() === "pending") {
    return <BiMinus className="mr-2" />;
  } else if (status.toLowerCase() === "completed") {
    return <BsCheck className="mr-2" />;
  } else {
    return <MdClear className="mr-2" />;
  }
}
export function typeOfStatusColor(status) {
  if (status.toLowerCase() === "pending") {
    return "yellow";
  } else if (status.toLowerCase() === "completed") {
    return "green";
  } else {
    return "red";
  }
}
export function typeOfName(status) {
  if (
    status.toLowerCase() === "pending" ||
    status.toLowerCase() === "completed"
  ) {
    return ["bg-[#c4c9f1] text-gray-600", <BsArrowDownShort />];
  } else {
    return ["bg-red-500 text-gray-300", <BsArrowUpShort />];
  }
}
export function generateCvC() {
  return `${Math.floor(Math.random() * 9)}${Math.floor(
    Math.random() * 9
  )}${Math.floor(Math.random() * 9)}`;
}
export function createNewCard(setCreatingCard, setCards, cardSkin) {
  setCreatingCard(true);
  function start() {
    setCards((prev) => [
      ...prev,
      {
        name: "Micheal Orjis",
        cardNumber: genCardNum(),
        skin: cardSkin[Math.floor(Math.random() * cardSkin.length)],
        date: genExpirreDate(),
        cvc: generateCvC(),
        balance: `+$${Math.floor(Math.random() * 500 + 1)}`,
      },
    ]);
    return setCreatingCard(false);
  }
  setTimeout(start, 5000);
}

export const cardDefault = [
  {
    name: "Micheal Orjis",
    cardNumber: genCardNum(),
    skin: "cardSkin1",
    date: genExpirreDate(),
    cvc: generateCvC(),

    balance: `+$${Math.floor(Math.random() * 500 + 1)}`,
  },
];
