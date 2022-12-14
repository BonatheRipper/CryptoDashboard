import React from "react";
import { FaBtc, FaUserAlt, FaUserEdit } from "react-icons/fa";
import { AiFillBell } from "react-icons/ai";
import { TickerTape } from "react-ts-tradingview-widgets";
import { TbActivityHeartbeat } from "react-icons/tb";
import {
  MdEmail,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import { BsDot } from "react-icons/bs";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import usaFlag from "../images/flags/usa.png";
import avata from "../images/avatar/avatar.jpg";

import great_britain from "../images/flags/great-britain.png";
import { useState } from "react";
import { toast } from "react-toastify";

const Navbar = ({ setSidemenu, sidemenu }) => {
  const logo = { 1: <FaBtc />, 2: <div className="font-bold">Chipacks</div> };
  const languages = [
    { image: usaFlag, country: "EN" },
    { image: great_britain, country: "BR" },
  ];
  const [flagImage, setFlagImage] = useState(languages[0].image);
  const [profile, setProfile] = useState(false);

  const handleLanguageChange = (lang) => {
    setFlagImage(lang);
  };
  return (
    <div className="w-full  border z-40 fixed top-0 shadow  flex flex-col  bg-white">
      <div className="w-full px-4 flex flex-row justify-between items-center ">
        <div className="flex  justify-start  md:justify-between items-center">
          <HiOutlineMenuAlt2
            onClick={() => setSidemenu(!sidemenu)}
            className="text-xl mr-2 text-[#464698] hover:text-[#7070f1]  md:hidden transform scale-100 hover:scale-150"
          />
          <div className=" py-4 flex items-center md:text-3xl text-lg text-[#7070f1] hover:text-[#6464e5] ">
            {logo[1]}
            {logo[2]}
          </div>
          <div className=" py-2 md:mx-16 mx-2 relative ">
            <select
              style={{
                backgroundImage: `url(${flagImage}) `,
                backgroundSize: "16px 16px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "4px",
              }}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className={`border  select-wrapper  border-gray-200 rounded-sm outline-none text-xs py-1 md:pr-8 md:pl-6 pr-4 pl-6 bg-auto font-medium`}
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
            <div
              onClick={() => toast.error("Ooops! Still in works")}
              className="py-2 px-2 md:py-3 md:px-3 transform scale-100 hover:scale-110 md:text-xl rounded-full bg-[#c9cafa] hover:bg-[#b0b1e7] text-[#7574f5] mx-1 md:mx-4 flex justify-center items-center"
            >
              <MdEmail />
            </div>
            <div
              onClick={() => toast.error("Ooops! Still in works")}
              className="py-2 px-2 md:py-3 md:px-3 transform scale-100 hover:scale-110    md:text-xl rounded-full bg-[#c9cafa] hover:bg-[#b0b1e7] relative text-[#7574f5] mx-1 md:mx-4 flex justify-center items-center"
            >
              <BsDot className="absolute text-2xl md:text-3xl z-40 top-0  ml-2  text-red-600" />
              <AiFillBell />
            </div>
          </div>
          <div className="h-5 border border-gray-200  mx-2 md:mx-4 md:inline " />
          <div
            onClick={() => setProfile(!profile)}
            className=" py-4   flex flex-row justify-center items-center "
          >
            <div className="relative w-8 md:w-10 transform scale-100 hover:scale-110 ">
              <BsDot className="absolute text-3xl md:text-3xl z-40   -bottom-3 left-3 md:left-5  text-green-400" />
              <img
                src={avata}
                alt="userImage"
                className="rounded-full  w-full  md:w-10 md:h-10"
              />
            </div>
            <div className="mx-2 md:flex flex-col justify-start items-start hidden ">
              <span className="text-xs font-medium">Bona9ja A</span>
              <small
                style={{ fontSize: "8px", fontWeight: "200" }}
                className="font-thin"
              >
                Developer
              </small>
            </div>
            {profile ? (
              <MdKeyboardArrowUp className="text-gray-400 hover:text-gray-700 transform scale-100 hover:scale-110 " />
            ) : (
              <MdKeyboardArrowDown className="text-gray-400 hover:text-gray-700 transform scale-100 hover:scale-110 " />
            )}{" "}
          </div>
        </div>
        <div
          className={`absolute md:w-2/12 w-7/12  border bg-white -bottom-28 ${
            profile ? "right-0" : "-right-full"
          } flex flex-col justify-start items-center`}
        >
          <ul className="w-full py-2 px-2 text-sm ">
            <a
              href="/"
              className="flex  items-center my-2 text-black hover:text-[#7070f1] "
            >
              <FaUserAlt />
              <span className="mx-2 ">Profile</span>
            </a>
            <a
              href="/"
              className="flex  items-center my-2 text-black hover:text-[#7070f1] "
            >
              <FaUserEdit />

              <span className="mx-2 ">Edit Profile</span>
            </a>
            <a
              href="/"
              className="flex  items-center my-2 text-black hover:text-[#7070f1] "
            >
              <TbActivityHeartbeat />
              <span className="mx-2 ">Account activities</span>
            </a>
          </ul>
        </div>
      </div>
      <div className="hidden md:inline w-full">
        {" "}
        <TickerTape colorTheme="light" className=""></TickerTape>
      </div>
    </div>
  );
};

export default Navbar;
