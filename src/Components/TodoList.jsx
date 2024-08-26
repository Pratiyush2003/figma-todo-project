import { useState } from "react";

const TodoList = ({ todos }) => {
  
    const General = todos.filter((p) => p.category == "General")
    const [toggle , setToggle] = useState(false);
    
  return (
    <>
      <div>
        <ul className="flex flex-col mt-5 ">
          {General &&
            General.map((p) => (
              <li className="w-full h-16 flex item-center mt-4" key={p.id}>
                <div className="w-1/5 text-center flex items-center justify-center">
                  <input
                  value={toggle}
                    onClick={() => setToggle(!toggle)}
                    type="checkbox"
                    className="appearance-none rounded-full w-8 h-8 border-2 border-gray-500 checked:bg-blue-500 checked:border-blue-500  self-center "
                  />
                </div>
                <div className="w-3/5   text-left flex items-center border-b-2 boder-gray-500">
                  <p className={`text-[18px] font-bold `}>
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
