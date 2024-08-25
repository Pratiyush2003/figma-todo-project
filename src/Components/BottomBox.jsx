import React from "react";
import { useSelector } from "react-redux";

const BottomBox = ({ colour, setColour }) => {

  const { todos } = useSelector((state) => state.app);

  const Inbox = todos.filter((p) => p.category == "Inbox");
  const Family = todos.filter((p) => p.category == "Family");
  const Shopping = todos.filter((p) => p.category == "Shopping");
  const Personal = todos.filter((p) => p.category == "Personal");
  const Work = todos.filter((p) => p.category == "Work");
  
  const colorsList = [
    { name: "gray", bg: "#EBEFF5", textColor: "text-gray-500" , topic : "Inbox", category : Inbox.length },
    { name: "green", bg: "#61DEA4", textColor: "text-white", topic : "Work", category : Work.length },
    { name: "red", bg: "#F45E6D", textColor: "text-white", topic : "Shopping", category : Shopping.length },
    { name: "yellow", bg: "#FFE761", textColor: "text-black", topic : "Family", category : Family.length },
    { name: "purple", bg: "#B678FF", textColor: "text-white",topic : "Personal", category : Personal.length }
  ];



  
  
  return (
    <>
      <ul className="flex flex-col">
        <div className="flex h-16 w-full">
          <div className="w-1/5 text-center flex items-center justify-center"></div>
          <div
            className={`w-4/5 text-left flex flex-col rounded-lg pt-4 box-border `}
          >
            <div className={`text-[18px] font-bold text-gray-400`}>Lists</div>
          </div>
        </div>
        {colorsList.map((colorObj, index) => (
          <li
            key={index}
            onClick={() => setColour([{ ...colour[0], [colorObj.name]: true }])}
            className="cursor-pointer"
          >
            <div className="w-full h-17 flex item-center mt-2">
              <div className="w-1/5 text-center flex items-center justify-center"></div>
              <div
                className={`w-4/5 text-left flex flex-col rounded-lg p-3 box-border bg-[${colorObj.bg}]`}
              >
                <div className={`text-[18px] font-bold ${colorObj.textColor}`}>
                  {colorObj.topic.charAt(0).toUpperCase() +
                    colorObj.topic.slice(1)}
                </div>
                <div className={`text-[18px] ${colorObj.textColor}`}>
                   {`${colorObj.category} task` }
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BottomBox;
