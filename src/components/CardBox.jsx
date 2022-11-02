import React from "react";
import { useState } from "react";
import {
  BsPlus,
  BsSim,
  BsCreditCard2Back,
  BsCreditCard2FrontFill,
} from "react-icons/bs";
import { FaSignal } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
import { FaBeer } from "react-icons/fa";

const CardBox = ({ cards, createNewCard, setCards, cardSkin }) => {
  const [currentCard, setCurrentCard] = useState(cards[0]);
  const [flipCard, setFlipCard] = useState(false);

  const [creatingCard, setCreatingCard] = useState(false);
  return (
    <>
      {" "}
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
        <div className="w-full flex relative h-full flex-col">
          <div
            className={`w-full trransform ${
              !flipCard ? "scale-100 opacity-100" : "scale-0 opacity-0 absolute"
            }  border ${
              currentCard.skin
            }  my-5 rounded-xl py-4 md:h-56 h-52 px-6 flex flex-col justify-between items-center`}
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

          <div
            className={`w-full trransform ${
              flipCard ? "scale-100 opacity-100" : "scale-0  absolute opacity-0"
            }  border ${
              currentCard.skin
            }  my-5 rounded-xl  py-2 md:h-56 h-52  px-1 flex flex-col justify-between items-center`}
          >
            <div className="w-full flex flex-col">
              {" "}
              <p
                style={{ fontSize: "8px" }}
                className="px-4 w-full text-center text-xs"
              >
                For customer service please call +23408164412295
              </p>
              <div className="w-full h-8 bg-white my-2 flex justify-center items-center py-4">
                <h6 className="text-black w-full flex justify-end px-4 italic text-sm">
                  {currentCard.cvc}
                </h6>
              </div>
            </div>
            <div className="w-full flex flex-col">
              {" "}
              <p
                style={{ fontSize: "8px" }}
                className="px-4  text-left text-xs"
              >
                Buy using this card the holder agrees to all the terms under
                which it was issued{" "}
              </p>
              <p style={{ fontSize: "8px" }} className="px-4 text-left text-xs">
                This card is issued by and remails the properly of Izeogu andrew
                Plc.
                <br />
                If found please return to any Izeogu's bank branch or Digital
                Sales | Card soluution , New centalized Processing Centre,
                Elegushi, Lekki Lagos Nigeria.
              </p>
            </div>
          </div>
        </div>

        <div
          className={`flex  w-full text-black  justify-between items-center flex-row mt-2 mb-3 px-2`}
        >
          <div className="flex relative  w-8/12 overflow-x-scroll">
            <p className="text-xs font-bold">Cards:</p>
            <div className="flex">
              {cards.map((card, i) => (
                <div
                  onClick={() => setCurrentCard(cards[i])}
                  key={i}
                  className={`${
                    currentCard.cardNumber === card.cardNumber
                      ? `${card.skin} text-white `
                      : "border-black text-black"
                  } text-xs mx-2 w-5 h-5 rounded-full border flex justify-center items-center `}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
          <div
            onClick={() => setFlipCard(!flipCard)}
            className="w-4/12  flex justify-end px-2"
          >
            <button
              className={`bg-black flex justify-center items-center hover:bg-gray-800 px-2 w-full text-xs text-white py-1 rounded-full`}
            >
              {flipCard ? (
                <span className="flex justify-evenly items-center px-1 w-full">
                  <BsCreditCard2FrontFill />
                  <small>Front</small>
                </span>
              ) : (
                <span className="flex justify-evenly items-center px-1 w-full">
                  <BsCreditCard2Back />
                  <small>Back</small>
                </span>
              )}
            </button>
          </div>
        </div>
        <div className="flex flex-row justify-start px-1 w-full hover:animate-pulse my-2">
          <div
            onClick={() => createNewCard(setCreatingCard, setCards, cardSkin)}
            className="flex flex-row justify-start border px-1 py-1 rounded-xl shadow"
          >
            <div className="px-1 py-1 rounded-full bg-[#c6c6fa] text-[#424290] flex">
              <>
                {!creatingCard ? (
                  <BsPlus className="text-xs" />
                ) : (
                  <ClipLoader
                    color={"#232356"}
                    loading={true}
                    size={10}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                )}
              </>
            </div>
            <button className="font-bold text-xs text-black mx-3">
              Create card
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBox;
