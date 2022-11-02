import React from "react";
import { useState } from "react";
import { ImCancelCircle } from "react-icons/im";
import { toast } from "react-toastify";

const Sidebar = ({ sidemenu, setSidemenu }) => {
  const [currentItem, setCurrentItem] = useState("dashboard");
  const menuItems = ["Dashboard", "Activites", "Settings"];
  const handleMenuBtnClick = (item) => {
    setCurrentItem(item);
    if (item.toLowerCase() !== "dashboard") {
      toast.error("Oops! button currently in developement");
    }
  };
  return (
    <div
      className={`w-6/12 fixed h-full bottom-0 z-50 bg-black ${
        sidemenu ? " top-0" : " -top-full"
      } flex md:hidden flex-col justify-start items-center`}
    >
      <div className="h-10 w-10 rounded-full my-4 flex justify-center items-center  bg-[#464698] hover:bg-white ">
        <ImCancelCircle
          onClick={() => setSidemenu(!sidemenu)}
          className="text-2xl text-gray-300 hover:text-red-500   transform scale-100 hover:scale-150"
        />
      </div>
      <ul className="my-2 px-2  flex flex-col menu-items text-white w-full">
        {menuItems.map((item, i) => (
          <li
            onClick={() => handleMenuBtnClick(item)}
            key={i}
            className={`w-full my-2 py-2 border border-[#464698] ${
              item.toLowerCase() === currentItem.toLowerCase()
                ? "bg-[#464698]"
                : ""
            }  hover:bg-[#464698] flex justify-start px-4 items-center rounded-2xl`}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
