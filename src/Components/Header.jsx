import React, { useState } from "react";
import header from "../csv and images/header.svg";
import addicon from "../csv and images/addicon.svg";
import Modal from "./Modal";

const Header = ({category}) => {
  const [toggle, setToggle] = useState(false);

const handleClose = () => {
    setToggle(false);
};

  return (
    <>
      <div className="h-10 overflow-hidden mb-2">
        <img src={header} className="w-full h-full object-cover" />
      </div>


      <div className="flex items-center justify-between h-16 mt-2">
        <div className=" w-[50px] h-[50px] mx-8 md:ml-10">
          <h2 className="md:text-[41px] text-[35px] font-bold text-[#252A31]">
            Today
          </h2>
        </div>
        <div className=" w-[50px] h-[50px] mx-8 mt-4 md:mt-6">
          <img
            src={addicon}
            alt=""
            className="h-10 cursor-pointer"
            onClick={() => setToggle(true)}
          />
        </div>
      </div>

      {toggle && (
        <div className="fixed inset-0  flex items-center justify-center">
          <div className="bg-black bg-opacity-50 w-full h-full absolute"></div>
          <Modal onClose={handleClose} category = {category} />
        </div>
      )}
    </>
  );
};

export default Header;
