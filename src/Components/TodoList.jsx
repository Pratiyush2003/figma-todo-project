import React, { useEffect, useState } from "react";
import addicon from '../csv and images/addicon.svg'

const TodoList = ({ todos }) => {
  
    const General = todos.filter((p) => p.category == "General")
    
  return (
    <>
      <div className="fixed bottom-6 right-6 bg-white rounded-full">
        <img src={addicon} className="h-12" />
      </div>
      <div>
        <ul className="flex flex-col mt-5 ">
          {General &&
            General.map((p) => (
              <li className="w-full h-16 flex item-center mt-4" key={p.id}>
                <div className="w-1/5 text-center flex items-center justify-center">
                  <input
                    type="checkbox"
                    className="appearance-none rounded-full w-8 h-8 border-2 border-gray-500 checked:bg-blue-500 checked:border-blue-500  self-center "
                  />
                </div>
                <div className="w-3/5   text-left flex items-center justify-center border-b-2 boder-gray-500">
                  <p className="text-[18px] font-bold  mr-6">
                    {p.todo}
                  </p>
                </div>
                <div className="w-1/5   flex items-center justify-end border-b-2 boder-gray-500 ">
                  <button className="rounded-full bg-green-500 h-4 w-4 mr-8 md:mx-12"></button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default TodoList
