import React from "react";
import { FaBtc } from "react-icons/fa";
import usaFlag from "../images/flags/usa.png";
import great_britain from "../images/flags/great-britain.png";
import { useState } from "react";

const Navbar = () => {
  const logo = { 1: <FaBtc />, 2: <div className="font-bold">Chipacks</div> };
  const languages = [
    { image: usaFlag, country: "EN" },
    { image: great_britain, country: "BR" },
  ];
  const [flagImage, setFlagImage] = useState(languages[0].image);

  const handleLanguageChange = (lang) => {
    setFlagImage(lang);
  };
  return (
    <div className="w-full px-4 py-1 flex flex-row justify-between items-center">
      <div className="flex  justify-between items-center">
        <div className=" py-4 flex items-center md:text-3xl text-xl text-[#7070f1] hover:text-[#6464e5] ">
          {logo[1]}
          {logo[2]}
        </div>
        <div className=" py-2 md:mx-16 mx-2 relative">
          <select
            style={{
              backgroundImage: `url(${flagImage}) `,
              backgroundSize: "16px 16px",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "4px",
            }}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className={`border border-gray-200 rounded-sm outline-none text-xs py-1 pr-8 pl-6 bg-auto font-bold`}
          >
            {languages.map((item, i) => (
              <option key={i} value={item.image}>
                {item.country}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex  justify-between items-center">
        <div className=" flex justify-center items-center">
          <div className="py-3 px-3 md:px-4 md:py-4 rounded-full bg-green-600 mx-2 md:mx-4"></div>
          <div className="py-3 px-3 md:px-4 md:py-4  rounded-full bg-red-600 mx-2 md:mx-4"></div>
        </div>
        <div className="h-4 border border-gray-200 mx-16" />
        <div className="w-40 py-4 border border-green-500 mr-2"></div>
      </div>
    </div>
  );
};

export default Navbar;
