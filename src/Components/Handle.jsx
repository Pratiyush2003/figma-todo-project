import React, { useState } from "react";
import Topicon from "../csv and images/Topicon.svg";
import Edit from "../csv and images/Edit.svg";
import BlackEdit from "../csv and images/BlackEdit.svg";
import Modal from "./Modal";


const Handle = ({ colour, setColour, category, setcategory, Inbox, Family, Shopping, Personal, Work }) => {
  const [toggle, setToggle] = useState(false);

  const handleClose = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {toggle && (
        <div className="fixed inset-0  flex items-center justify-center">
          <div className="bg-black bg-opacity-50 w-full h-full absolute"></div>
          <Modal onClose={handleClose} category={category} />
        </div>
      )}
      <div
        className={`bg-[#61DEA4] fixed duration-300 bottom-0 ${colour[0].green ? "h-[90%]" : "h-[0%]"
          }  w-full md:w-full lg:w-3/5 xl:w-2/5 z-10`}
        style={{ borderRadius: "15px 15px 0px 0px" }}
        onClick={() => setcategory("Work")}
      >
        <div className="flex w-full items-center justify-center mt-4 flex-col">
          <div
            onClick={() => setColour([{ ...colour[0], green: false }])}
            className="p-2 cursor-pointer"
          >
            <img src={Topicon} alt="" />
          </div>
          <div className="flex w-full items-center justify-between h-16 mt-2">
            <div className=" w-[50px] h-[50px] mx-8 md:ml-10">
              <h2 className="md:text-[32px] text-[24px] font-bold text-white">
                Today
              </h2>
            </div>
            <div
              className=" w-[50px] h-[50px] mx-8 mt-4 md:mt-6"
              onClick={handleClose}
            >
              <img src={Edit} alt="" className="h-8 cursor-pointer" />
            </div>
          </div>
          <ul className="flex flex-col w-full ">
            {Work.map((p) => (           
              <li className="w-full h-16 flex item-center justify-between mt-4" key={p.id}>
                <div className="w-[30%] text-center flex items-center justify-center ">
                  <input
                    type="checkbox"
                    className="appearance-none rounded-full w-8 h-8 border-2 border-white checked:bg-blue-500 checked:border-blue-500  self-center "
                  />
                </div>
                <div className="w-[70%]  text-left flex items-center border-b-[1px] border-white">
                  <p className="text-[18px] font-bold  mr-6 text-white">
                    {p.todo}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={`bg-[#FFE761] fixed duration-300 bottom-0 ${colour[0].yellow ? "h-[90%]" : "h-[0%]"
          }  w-full md:w-2/5 z-10`}
        style={{ borderRadius: "15px 15px 0px 0px" }}
        onClick={() => setcategory("Family")}
      >
        <div className="flex w-full items-center justify-center mt-4 flex-col">
          <div
            onClick={() => setColour([{ ...colour[0], yellow: false }])}
            className="p-2 cursor-pointer"
          >
            <img src={Topicon} alt="" />
          </div>
          <div className="flex w-full items-center justify-between h-16 mt-2">
            <div className=" w-[50px] h-[50px] mx-8 md:ml-10">
              <h2 className="md:text-[32px] text-[24px] font-bold text-black">
                Today
              </h2>
            </div>
            <div
              className=" w-[50px] h-[50px] mx-8 mt-4 md:mt-6 "
              onClick={handleClose}
            >
              <img src={BlackEdit} alt="" className="h-8 cursor-pointer" />
            </div>
          </div>
          <ul className="flex flex-col w-full ">
            {Family.map((p) =>(
              <li className="w-full h-16 flex item-center justify-between mt-4" key={p.id}>
                <div className="w-[30%] text-center flex items-center justify-center ">
                  <input
                    type="checkbox"
                    className="appearance-none rounded-full w-8 h-8 border-2 border-black checked:bg-blue-500 checked:border-blue-500  self-center "
                  />
                </div>
                <div className="w-[70%]  text-left flex items-center border-b-[1px] border-black">
                  <p className="text-[18px] font-bold  mr-6 text-black">
                    {p.todo}
                  </p>
                </div>
              </li>)
            )}

          </ul>
        </div>
      </div>

      <div
        className={`bg-[#EBEFF5] fixed duration-300 bottom-0 ${colour[0].gray ? "h-[90%]" : "h-[0%]"
          }  w-full md:w-2/5 z-10`}
        style={{ borderRadius: "15px 15px 0px 0px" }}
        onClick={() => setcategory("Inbox")}
      >
        <div className="flex w-full items-center justify-center mt-4 flex-col">
          <div
            onClick={() => setColour([{ ...colour[0], gray: false }])}
            className="p-2 cursor-pointer"
          >
            <img src={Topicon} alt="" />
          </div>
          <div className="flex w-full items-center justify-between h-16 mt-2">
            <div className=" w-[50px] h-[50px] mx-8 md:ml-10">
              <h2 className="md:text-[32px] text-[24px] font-bold text-black">
                Today
              </h2>
            </div>
            <div
              className=" w-[50px] h-[50px] mx-8 mt-4 md:mt-6"
              onClick={handleClose}
            >
              <img src={BlackEdit} alt="" className="h-8 cursor-pointer" />
            </div>
          </div>
          <ul className="flex flex-col w-full ">
            {Inbox.map((p) =>
              <li className="w-full h-16 flex item-center justify-between mt-4" key={p.id}>
                <div className="w-[30%] text-center flex items-center justify-center ">
                  <input
                    type="checkbox"
                    className="appearance-none rounded-full w-8 h-8 border-2 border-black checked:bg-blue-500 checked:border-blue-500  self-center "
                  />
                </div>
                <div className="w-[70%]  text-left flex items-center border-b-[1px] border-black">
                  <p className="text-[18px] font-bold  mr-6 text-black">
                    {p.todo}
                  </p>
                </div>
              </li>)}

          </ul>
        </div>
      </div>

      <div
        className={`bg-[#F45E6D] fixed duration-300 bottom-0 ${colour[0].red ? "h-[90%]" : "h-[0%]"
          }  w-full md:w-2/5 z-10`}
        style={{ borderRadius: "15px 15px 0px 0px" }}
        onClick={() => setcategory("Shopping")}
      >
        <div className="flex w-full items-center justify-center mt-4 flex-col">
          <div
            onClick={() => setColour([{ ...colour[0], red: false }])}
            className="p-2 cursor-pointer"
          >
            <img src={Topicon} alt="" />
          </div>
          <div className="flex w-full items-center justify-between h-16 mt-2">
            <div className=" w-[50px] h-[50px] mx-8 md:ml-10">
              <h2 className="md:text-[32px] text-[24px] font-bold text-white">
                Today
              </h2>
            </div>
            <div
              className=" w-[50px] h-[50px] mx-8 mt-4 md:mt-6"
              onClick={handleClose}
            >
              <img src={Edit} alt="" className="h-8 cursor-pointer" />
            </div>
          </div>
          <ul className="flex flex-col w-full ">
            {Shopping.map((p) =>
              <li className="w-full h-16 flex item-center justify-between mt-4" key={p.id}>
                <div className="w-[30%] text-center flex items-center justify-center ">
                  <input
                    type="checkbox"
                    className="appearance-none rounded-full w-8 h-8 border-2 border-white checked:bg-blue-500 checked:border-blue-500  self-center "
                  />
                </div>
                <div className="w-[70%]  text-left flex items-center border-b-[1px] border-white">
                  <p className="text-[18px] font-bold  mr-6 text-white">
                    {p.todo}
                  </p>
                </div>
              </li>)}

          </ul>
        </div>
      </div>

      <div
        className={`bg-[#B678FF] fixed duration-300 bottom-0 ${colour[0].purple ? "h-[90%]" : "h-[0%]"
          }  w-full md:w-2/5 z-10`}
        style={{ borderRadius: "15px 15px 0px 0px" }}
        onClick={() => setcategory("Personal")}
      >
        <div className="flex w-full items-center justify-center mt-4 flex-col">
          <div
            onClick={() => setColour([{ ...colour[0], purple: false }])}
            className="p-2 cursor-pointer"
          >
            <img src={Topicon} alt="" />
          </div>
          <div className="flex w-full items-center justify-between h-16 mt-2">
            <div className=" w-[50px] h-[50px] mx-8 md:ml-10">
              <h2 className="md:text-[32px] text-[24px] font-bold text-white">
                Today
              </h2>
            </div>
            <div
              className=" w-[50px] h-[50px] mx-8 mt-4 md:mt-6"
              onClick={handleClose}
            >
              <img
                src={Edit}
                alt=""
                className="h-8 cursor-pointer"
              // onClick={() => setToggle(true)}
              />
            </div>
          </div>
          <ul className="flex flex-col w-full ">
            {Personal.map((p) => 
            <li className="w-full h-16 flex item-center justify-between mt-4" key={p.id}>
              <div className="w-[30%] text-center flex items-center justify-center ">
                <input
                  type="checkbox"
                  className="appearance-none rounded-full w-8 h-8 border-2 border-white checked:bg-blue-500 checked:border-blue-500  self-center "
                />
              </div>
              <div className="w-[70%]  text-left flex items-center border-b-[1px] border-white">
                <p className="text-[18px] font-bold  mr-6 text-white">
                  {p.todo}
                </p>
              </div>
            </li>)}

          </ul>
        </div>
      </div>
    </>
  );
};

export default Handle;
