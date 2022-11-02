import React, { PureComponent } from "react";
import { BsCurrencyPound, BsCurrencyEuro } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { useState } from "react";

import {
  paginatePageToDisplay,
  paginateNumbersLength,
  paginatePager,
  typeOfName,
  typeOfStatusColor,
  typeOfStatus,
  createNewCard,
  cardDefault,
} from "../utils/Utils";
import { data, cardSkin, transactionData, currency } from "../seed/Data";
import { PamentItem } from "../components/PaymentItem";
import { SmoothLineGraph } from "../Graphs/SmoothLineGraph";
import RecentTransaction from "../Tables/RecentTransaction";
import Exchange from "../components/Exchange";
import CardBox from "../components/CardBox";
import GreetingsBox from "../components/GreetingsBox";

const Dashboard = () => {
  const [cards, setCards] = useState(cardDefault);

  return (
    <>
      <div className="text-black  h-full mt-8 py-8 md:pb-12 md:pt-24   px-2 w-full flex md:flex-row flex-col justify-center  relative">
        <div className="w-full md:w-5/12  md:mx-4 md:my-0 my-2  ">
          {<GreetingsBox />}
          {<SmoothLineGraph data={data} />}
        </div>
        <div className="w-full rounded-xl   shadow md:w-3/12  bg-white text-white md:mx-4 md:my-0 my-2 px-6   py-3 flex justify-start    flex-col">
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
        </div>
        {
          <CardBox
            cards={cards}
            createNewCard={createNewCard}
            setCards={setCards}
            cardSkin={cardSkin}
          />
        }
      </div>

      <div className="text-black  py-8 md:py-8 md:px-12  px-2 w-full flex md:flex-row flex-col justify-between items-start relative">
        {
          <RecentTransaction
            transactionData={transactionData}
            paginatePageToDisplay={paginatePageToDisplay}
            paginateNumbersLength={paginateNumbersLength}
            paginatePager={paginatePager}
            typeOfName={typeOfName}
            typeOfStatusColor={typeOfStatusColor}
            typeOfStatus={typeOfStatus}
          />
        }

        {<Exchange currency={currency} />}
      </div>
      <>
        <div className="text-yellow-800 bg-yellow-100 hidden"></div>
        <div className="text-green-800 bg-green-100 hidden"></div>
        <div className="text-red-800 bg-red-100 hidden"></div>
      </>
    </>
  );
};

export default Dashboard;
